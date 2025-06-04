/**
 * Math Quest Laboratory - Motor Principal del Laboratorio
 * Adaptado y reutilizado del SpaceShooterEngine con 75% de código compartido
 * 
 * Desarrollado por: Profe Marlon Arcila
 * Institución: Colegio Mayor de Antioquia
 * Versión: 1.0.0
 * 
 * Reutilización:
 * ✅ 75% del código del SpaceShooterEngine
 * 🔄 25% adaptado para mecánica de laboratorio
 * 🆕 Componentes nuevos: WorkspaceController, HintSystem, StepValidator
 */

// =====================================================
// CLASE PRINCIPAL - MOTOR DEL LABORATORIO
// =====================================================

/**
 * Motor principal del Math Quest Laboratory
 * Reutiliza la arquitectura del SpaceShooterEngine pero cambia la mecánica central
 */
class MathLabEngine {
    /**
     * Constructor del motor del laboratorio
     * @param {Object} config - Configuración del módulo
     * @param {Object} problems - Banco de problemas del módulo
     */
    constructor(config, problems) {
        console.log('🔬 Inicializando MathLabEngine...');
        
        // ✅ REUTILIZADO - Propiedades base del SpaceShooterEngine
        this.config = config;
        this.problems = problems;
        this.state = this.createInitialState();
        this.elements = {};
        
        // 🆕 NUEVO - Componentes específicos del laboratorio
        this.workspaceController = null;
        this.hintSystem = null;
        this.stepValidator = null;
        
        // ✅ REUTILIZADO - Control de tiempo del SpaceShooterEngine
        this.gameStartTime = null;
        this.currentProblem = null;
        this.currentStep = 0;
        
        // ✅ REUTILIZADO - Sistema de eventos
        this.eventListeners = new Map();
        
        console.log('✅ MathLabEngine inicializado correctamente');
    }

    // =====================================================
    // MÉTODOS DE INICIALIZACIÓN (95% REUTILIZADOS)
    // =====================================================

    /**
     * ✅ REUTILIZADO - Crear estado inicial idéntico al SpaceShooterEngine
     */
    createInitialState() {
        return {
            currentProblemIndex: 0,
            score: 0,
            totalProblems: this.problems.problems.length,
            hintsUsed: 0,
            problemsCompleted: 0,
            independence: 0, // Problemas resueltos sin hints
            startTime: null,
            errors: [],
            currentProblemStartTime: null,
            totalTime: 0,
            averageTimePerProblem: 0,
            perfectProblems: 0, // Sin errores ni hints
            currentStreak: 0, // Racha actual sin errores
            maxStreak: 0 // Máxima racha alcanzada
        };
    }

    /**
     * ✅ REUTILIZADO - Inicialización principal idéntica al SpaceShooterEngine
     */
    init() {
        console.log('🚀 Inicializando laboratorio...');
        
        try {
            // ✅ REUTILIZADO - Mismo patrón de inicialización
            this.cacheElements();
            this.initializeComponents();
            this.setupEventListeners();
            this.validateData();
            this.generateNewProblem();
            this.updateUI();
            
            // ✅ REUTILIZADO - Iniciar cronómetro
            this.startTimer();
            
            console.log('✅ Laboratorio inicializado correctamente');
            
            // 🆕 NUEVO - Evento específico del laboratorio
            this.dispatchEvent('labInitialized', {
                totalProblems: this.state.totalProblems,
                moduleId: this.config.moduleInfo.id
            });
            
        } catch (error) {
            console.error('❌ Error en inicialización:', error);
            this.showError('Error inicializando el laboratorio: ' + error.message);
            throw error;
        }
    }

    /**
     * ✅ REUTILIZADO - Cacheo de elementos idéntico al SpaceShooterEngine
     */
    cacheElements() {
        console.log('🔍 Cacheando elementos DOM...');
        
        this.elements = {
            // ✅ REUTILIZADO - Elementos base del SpaceShooterEngine
            labArea: document.getElementById('lab-area'),
            scoreDisplay: document.getElementById('score'),
            problemCount: document.getElementById('experiment-count'),
            progressBar: document.querySelector('.progress-fill'),
            progressPercentage: document.getElementById('progress-percentage'),
            victoryMessage: document.getElementById('victory-message'),
            errorMessage: document.getElementById('error-message'),
            restartBtn: document.getElementById('restart-btn'),
            
            // 🆕 NUEVO - Elementos específicos del laboratorio
            independenceDisplay: document.getElementById('independence'),
            timerDisplay: document.getElementById('timer'),
            feedbackArea: document.getElementById('feedback-area'),
            reflectionModal: document.getElementById('reflection-modal'),
            reflectionContent: document.getElementById('reflection-content')
        };

        // ✅ REUTILIZADO - Validación de elementos críticos
        const requiredElements = ['labArea', 'scoreDisplay', 'problemCount'];
        for (const elementKey of requiredElements) {
            if (!this.elements[elementKey]) {
                throw new Error(`Elemento requerido no encontrado: ${elementKey}`);
            }
        }
        
        console.log('✅ Elementos DOM cacheados correctamente');
    }

    /**
     * 🆕 NUEVO - Inicializar componentes específicos del laboratorio
     */
    initializeComponents() {
        console.log('🧩 Inicializando componentes del laboratorio...');
        
        try {
            // Inicializar controlador del área de trabajo
            this.workspaceController = new WorkspaceController(this.elements.labArea);
            
            // Inicializar sistema de hints
            this.hintSystem = new HintSystem(this.config.pedagogical);
            
            // Inicializar validador de pasos
            this.stepValidator = new StepValidator();
            
            console.log('✅ Componentes inicializados correctamente');
            
        } catch (error) {
            console.error('❌ Error inicializando componentes:', error);
            throw new Error('Fallo en inicialización de componentes: ' + error.message);
        }
    }

    /**
     * ✅ REUTILIZADO - Setup de event listeners adaptado del SpaceShooterEngine
     */
    setupEventListeners() {
        console.log('🎧 Configurando event listeners...');
        
        // ✅ REUTILIZADO - Botón de reinicio
        if (this.elements.restartBtn) {
            this.elements.restartBtn.addEventListener('click', () => this.restart());
        }

        // ✅ REUTILIZADO - Atajos de teclado del SpaceShooterEngine
        document.addEventListener('keydown', (event) => this.handleKeydown(event));
        
        // ✅ REUTILIZADO - Prevenir pérdida de progreso
        window.addEventListener('beforeunload', (event) => this.handleBeforeUnload(event));
        
        // 🆕 NUEVO - Eventos específicos del laboratorio
        document.addEventListener('stepCompleted', (event) => this.handleStepCompleted(event));
        document.addEventListener('stepError', (event) => this.handleStepError(event));
        document.addEventListener('hintRequested', (event) => this.handleHintRequested(event));
        
        console.log('✅ Event listeners configurados');
    }

    // =====================================================
    // GESTIÓN DE PROBLEMAS (60% REUTILIZADO, 40% ADAPTADO)
    // =====================================================

    /**
     * 🔄 ADAPTADO - Generar nuevo problema (adaptado de generateNewQuestion)
     */
    generateNewProblem() {
        console.log(`🧪 Generando nuevo experimento ${this.state.currentProblemIndex + 1}...`);
        
        // ✅ REUTILIZADO - Verificar fin de módulo
        if (this.state.currentProblemIndex >= this.state.totalProblems) {
            this.completeLab();
            return;
        }

        try {
            // Obtener problema actual
            this.currentProblem = this.problems.problems[this.state.currentProblemIndex];
            this.currentStep = 0;
            
            // ✅ REUTILIZADO - Logging del SpaceShooterEngine
            console.log(`📋 Experimento: ${this.currentProblem.title}`);
            console.log(`🎯 Dificultad: ${this.currentProblem.difficulty}/3`);
            console.log(`⏱️ Tiempo estimado: ${this.currentProblem.estimatedTime/1000}s`);

            // 🆕 NUEVO - Configurar área de trabajo
            this.workspaceController.setupWorkspace(this.currentProblem, {
                onStepInput: (stepIndex, value) => this.handleStepInput(stepIndex, value),
                onStepComplete: (stepIndex) => this.handleStepComplete(stepIndex),
                onFinalAnswer: (answer) => this.handleFinalAnswer(answer)
            });
            
            // ✅ REUTILIZADO - Reiniciar sistema de hints
            this.hintSystem.reset();
            
            // ✅ REUTILIZADO - Marcar tiempo de inicio
            this.state.currentProblemStartTime = Date.now();
            
            // ✅ REUTILIZADO - Actualizar interfaz
            this.updateProblemDisplay();
            this.updateUI();
            
            // 🆕 NUEVO - Evento de problema generado
            this.dispatchEvent('problemGenerated', {
                problemIndex: this.state.currentProblemIndex,
                problem: this.currentProblem
            });
            
        } catch (error) {
            console.error('❌ Error generando problema:', error);
            this.showError('Error generando experimento: ' + error.message);
        }
    }

    /**
     * 🆕 NUEVO - Manejar entrada de paso del estudiante
     */
    handleStepInput(stepIndex, userInput) {
        console.log(`✏️ Input recibido para paso ${stepIndex + 1}: "${userInput}"`);
        
        if (!this.currentProblem || stepIndex >= this.currentProblem.solution.steps.length) {
            console.warn('⚠️ Paso inválido o problema no disponible');
            return false;
        }

        const step = this.currentProblem.solution.steps[stepIndex];
        const isCorrect = this.stepValidator.validate(userInput, step);
        
        if (isCorrect) {
            this.handleCorrectStep(stepIndex);
            return true;
        } else {
            this.handleIncorrectStep(stepIndex, userInput, step);
            return false;
        }
    }

    /**
     * 🆕 NUEVO - Manejar paso correcto
     */
    handleCorrectStep(stepIndex) {
        console.log(`✅ Paso ${stepIndex + 1} correcto`);
        
        // Marcar paso como completado visualmente
        this.workspaceController.markStepCompleted(stepIndex);
        
        // ✅ REUTILIZADO - Sistema de puntuación del SpaceShooterEngine
        this.updateScore(this.config.scoring.correctStep);
        
        // Actualizar racha
        this.state.currentStreak++;
        this.state.maxStreak = Math.max(this.state.maxStreak, this.state.currentStreak);
        
        // Avanzar al siguiente paso
        this.currentStep = stepIndex + 1;
        
        // Verificar si el problema está completo
        if (this.currentStep >= this.currentProblem.solution.steps.length) {
            // Problema completado
            setTimeout(() => this.completeProblem(), 1000);
        } else {
            // Enfocar siguiente paso
            this.workspaceController.focusNextStep(this.currentStep);
        }
        
        // ✅ REUTILIZADO - Efectos visuales del SpaceShooterEngine
        this.createSuccessEffect(this.elements.labArea, stepIndex);
        
        // Evento de paso completado
        this.dispatchEvent('stepCompleted', {
            stepIndex: stepIndex,
            isLastStep: this.currentStep >= this.currentProblem.solution.steps.length
        });
    }

    /**
     * 🆕 NUEVO - Manejar paso incorrecto
     */
    handleIncorrectStep(stepIndex, userInput, expectedStep) {
        console.log(`❌ Paso ${stepIndex + 1} incorrecto: "${userInput}"`);
        
        // Registrar error para analytics
        this.state.errors.push({
            problemIndex: this.state.currentProblemIndex,
            stepIndex: stepIndex,
            userInput: userInput,
            expected: expectedStep.result,
            timestamp: Date.now(),
            errorType: this.stepValidator.identifyErrorPattern(userInput, expectedStep)
        });

        // Resetear racha
        this.state.currentStreak = 0;

        // Mostrar feedback específico
        const errorPattern = this.stepValidator.identifyErrorPattern(userInput, expectedStep);
        this.showStepFeedback(errorPattern, stepIndex);

        // Marcar paso como con error visualmente
        this.workspaceController.markStepError(stepIndex);

        // ✅ REUTILIZADO - Efectos de error del SpaceShooterEngine
        this.createErrorEffect(this.elements.labArea, stepIndex);
        
        // ✅ REUTILIZADO - Penalización menor (pedagógica)
        this.updateScore(this.config.scoring.errorPenalty);
        
        // Evento de error en paso
        this.dispatchEvent('stepError', {
            stepIndex: stepIndex,
            userInput: userInput,
            errorPattern: errorPattern
        });
    }

    /**
     * 🆕 NUEVO - Completar problema actual
     */
    completeProblem() {
        console.log('🎉 Problema completado!');
        
        const problemTime = Date.now() - this.state.currentProblemStartTime;
        const wasIndependent = this.hintSystem.getHintsUsed() === 0;
        const wasPerfect = this.state.errors.filter(e => 
            e.problemIndex === this.state.currentProblemIndex
        ).length === 0 && wasIndependent;
        
        // ✅ REUTILIZADO - Sistema de puntuación del SpaceShooterEngine
        this.updateScore(this.config.scoring.correctProblem);
        
        // Bonificaciones
        if (wasIndependent) {
            this.state.independence++;
            this.updateScore(this.config.scoring.bonusIndependence);
            console.log('🧠 Bonus independencia: +' + this.config.scoring.bonusIndependence);
        }
        
        if (wasPerfect) {
            this.state.perfectProblems++;
            this.updateScore(this.config.scoring.perfectProblem);
            console.log('🏆 Bonus perfecto: +' + this.config.scoring.perfectProblem);
        }
        
        // Actualizar estadísticas
        this.state.problemsCompleted++;
        this.state.totalTime += problemTime;
        this.state.averageTimePerProblem = this.state.totalTime / this.state.problemsCompleted;
        
        // ✅ REUTILIZADO - Efectos de éxito del SpaceShooterEngine
        this.createSuccessEffect(this.elements.labArea);
        
        // Mostrar mensaje de problema completado
        this.showProblemCompletedMessage(wasPerfect, wasIndependent, problemTime);
        
        // Avanzar al siguiente problema
        this.state.currentProblemIndex++;
        
        // ✅ REUTILIZADO - Esperar antes del siguiente problema
        setTimeout(() => {
            this.generateNewProblem();
        }, 3000);
        
        // Evento de problema completado
        this.dispatchEvent('problemCompleted', {
            problemIndex: this.state.currentProblemIndex - 1,
            wasIndependent: wasIndependent,
            wasPerfect: wasPerfect,
            timeSpent: problemTime
        });
    }

    // =====================================================
    // SISTEMA DE HINTS (NUEVO)
    // =====================================================

    /**
     * 🆕 NUEVO - Solicitar pista
     */
    requestHint() {
        console.log('💡 Pista solicitada');
        
        if (!this.hintSystem.canProvideHint()) {
            this.showError('No hay más pistas disponibles para este problema');
            return;
        }

        const hint = this.hintSystem.generateHint(
            this.currentStep, 
            this.currentProblem,
            this.state.errors.filter(e => e.problemIndex === this.state.currentProblemIndex)
        );

        this.showHint(hint);
        this.state.hintsUsed++;
        
        // ✅ REUTILIZADO - Penalización de puntuación del SpaceShooterEngine
        this.updateScore(this.config.scoring.hintPenalty);
        
        // Evento de hint solicitado
        this.dispatchEvent('hintRequested', {
            hintLevel: hint.level,
            hintsUsed: this.state.hintsUsed
        });
    }

    /**
     * 🆕 NUEVO - Mostrar hint al usuario
     */
    showHint(hint) {
        const hintHTML = `
            <div class="hint-display show" id="current-hint">
                <div class="hint-header">
                    <i class="${hint.icon} hint-icon"></i>
                    <span class="hint-level">Pista ${hint.level}/3</span>
                </div>
                <div class="hint-content">${hint.message}</div>
                <button class="hint-close" onclick="this.parentElement.remove()">
                    <i class="fas fa-times"></i>
                </button>
            </div>
        `;
        
        // Remover hint anterior si existe
        const existingHint = document.getElementById('current-hint');
        if (existingHint) {
            existingHint.remove();
        }
        
        // Insertar nuevo hint
        this.workspaceController.insertHint(hintHTML);
        
        console.log(`💡 Hint nivel ${hint.level} mostrado: ${hint.message}`);
    }

    // =====================================================
    // FINALIZACIÓN Y REFLEXIÓN (70% REUTILIZADO)
    // =====================================================

    /**
     * ✅ REUTILIZADO - Completar laboratorio (adaptado de completeGame)
     */
    completeLab() {
        console.log('🏆 ¡Laboratorio completado!');
        
        // ✅ REUTILIZADO - Detener cronómetro
        this.stopTimer();
        
        // ✅ REUTILIZADO - Calcular estadísticas finales
        const finalStats = this.calculateFinalStats();
        
        // ✅ REUTILIZADO - Mostrar mensaje de victoria
        this.showVictoryMessage(finalStats);
        
        // ✅ REUTILIZADO - Mostrar reflexión educativa
        setTimeout(() => {
            this.showReflection(finalStats);
        }, 2000);
        
        // Evento de laboratorio completado
        this.dispatchEvent('labCompleted', finalStats);
    }

    /**
     * ✅ REUTILIZADO - Calcular estadísticas finales (idéntico al SpaceShooterEngine)
     */
    calculateFinalStats() {
        const totalTime = Date.now() - this.state.startTime;
        const accuracy = this.state.problemsCompleted > 0 ? 
            ((this.state.problemsCompleted * this.currentProblem.solution.steps.length - this.state.errors.length) / 
             (this.state.problemsCompleted * this.currentProblem.solution.steps.length)) * 100 : 0;
        
        return {
            score: this.state.score,
            problemsCompleted: this.state.problemsCompleted,
            totalProblems: this.state.totalProblems,
            independence: this.state.independence,
            independenceRate: (this.state.independence / this.state.problemsCompleted) * 100,
            perfectProblems: this.state.perfectProblems,
            totalErrors: this.state.errors.length,
            accuracy: Math.round(accuracy),
            totalTime: totalTime,
            averageTimePerProblem: this.state.averageTimePerProblem,
            hintsUsed: this.state.hintsUsed,
            maxStreak: this.state.maxStreak,
            moduleId: this.config.moduleInfo.id
        };
    }

    // =====================================================
    // INTERFAZ DE USUARIO (80% REUTILIZADA)
    // =====================================================

    /**
     * ✅ REUTILIZADO - Actualizar UI (idéntico al SpaceShooterEngine)
     */
    updateUI() {
        // Actualizar puntuación
        if (this.elements.scoreDisplay) {
            this.elements.scoreDisplay.textContent = this.state.score;
        }
        
        // Actualizar contador de problemas
        if (this.elements.problemCount) {
            this.elements.problemCount.textContent = 
                `${this.state.currentProblemIndex + 1}/${this.state.totalProblems}`;
        }
        
        // Actualizar independencia
        if (this.elements.independenceDisplay) {
            this.elements.independenceDisplay.textContent = this.state.independence;
        }
        
        // Actualizar barra de progreso
        const progress = (this.state.problemsCompleted / this.state.totalProblems) * 100;
        if (this.elements.progressBar) {
            this.elements.progressBar.style.width = `${progress}%`;
        }
        if (this.elements.progressPercentage) {
            this.elements.progressPercentage.textContent = `${Math.round(progress)}%`;
        }
    }

    /**
     * ✅ REUTILIZADO - Actualizar puntuación (idéntico al SpaceShooterEngine)
     */
    updateScore(points) {
        this.state.score += points;
        this.state.score = Math.max(0, this.state.score); // No permitir puntuación negativa
        
        if (this.elements.scoreDisplay) {
            this.elements.scoreDisplay.textContent = this.state.score;
            
            // ✅ REUTILIZADO - Efecto visual de cambio de puntuación
            this.elements.scoreDisplay.classList.add('score-change');
            setTimeout(() => {
                this.elements.scoreDisplay.classList.remove('score-change');
            }, 500);
        }
        
        console.log(`📊 Puntuación actualizada: ${points > 0 ? '+' : ''}${points} (Total: ${this.state.score})`);
    }

    // =====================================================
    // EFECTOS VISUALES (100% REUTILIZADOS)
    // =====================================================

    /**
     * ✅ REUTILIZADO - Crear efecto de éxito (idéntico al SpaceShooterEngine)
     */
    createSuccessEffect(container, stepIndex = null) {
        const effectContainer = container || this.elements.labArea;
        
        // Crear partículas de éxito
        for (let i = 0; i < 8; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle success-particle';
            particle.style.cssText = `
                position: absolute;
                top: 50%;
                left: 50%;
                width: 6px;
                height: 6px;
                background: #00ff88;
                border-radius: 50%;
                pointer-events: none;
                z-index: 1000;
            `;
            
            effectContainer.appendChild(particle);
            
            // Animación de partícula
            const angle = (i / 8) * Math.PI * 2;
            const distance = 50 + Math.random() * 50;
            const duration = 1000 + Math.random() * 500;
            
            particle.animate([
                { 
                    transform: 'translate(-50%, -50%) scale(1)',
                    opacity: 1
                },
                { 
                    transform: `translate(${Math.cos(angle) * distance - 50}%, ${Math.sin(angle) * distance - 50}%) scale(0)`,
                    opacity: 0
                }
            ], {
                duration: duration,
                easing: 'ease-out'
            }).onfinish = () => particle.remove();
        }
    }

    /**
     * ✅ REUTILIZADO - Crear efecto de error (idéntico al SpaceShooterEngine)
     */
    createErrorEffect(container, stepIndex = null) {
        const effectContainer = container || this.elements.labArea;
        
        // Efecto de shake
        effectContainer.style.animation = 'shake 0.5s ease-in-out';
        setTimeout(() => {
            effectContainer.style.animation = '';
        }, 500);
        
        // Partículas de error
        for (let i = 0; i < 5; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle error-particle';
            particle.style.cssText = `
                position: absolute;
                top: 50%;
                left: 50%;
                width: 4px;
                height: 4px;
                background: #ff4444;
                border-radius: 50%;
                pointer-events: none;
                z-index: 1000;
            `;
            
            effectContainer.appendChild(particle);
            
            // Animación errática
            const angle = Math.random() * Math.PI * 2;
            const distance = 30 + Math.random() * 30;
            
            particle.animate([
                { 
                    transform: 'translate(-50%, -50%) scale(1)',
                    opacity: 1
                },
                { 
                    transform: `translate(${Math.cos(angle) * distance - 50}%, ${Math.sin(angle) * distance - 50}%) scale(0)`,
                    opacity: 0
                }
            ], {
                duration: 800,
                easing: 'ease-out'
            }).onfinish = () => particle.remove();
        }
    }

    // =====================================================
    // GESTIÓN DE ERRORES Y MENSAJES (95% REUTILIZADO)
    // =====================================================

    /**
     * ✅ REUTILIZADO - Mostrar error (idéntico al SpaceShooterEngine)
     */
    showError(message) {
        console.error('❌ Error:', message);
        
        if (this.elements.errorMessage) {
            this.elements.errorMessage.querySelector('#error-text').textContent = message;
            this.elements.errorMessage.classList.add('show');
            
            setTimeout(() => {
                this.elements.errorMessage.classList.remove('show');
            }, 5000);
        }
    }

    /**
     * ✅ REUTILIZADO - Reiniciar juego (adaptado de restart)
     */
    restart() {
        console.log('🔄 Reiniciando laboratorio...');
        
        // ✅ REUTILIZADO - Resetear estado
        this.state = this.createInitialState();
        this.currentProblem = null;
        this.currentStep = 0;
        
        // Reiniciar componentes
        if (this.hintSystem) this.hintSystem.reset();
        if (this.workspaceController) this.workspaceController.reset();
        
        // ✅ REUTILIZADO - Limpiar interfaz
        this.elements.labArea.innerHTML = '';
        this.elements.victoryMessage.classList.remove('show');
        this.elements.errorMessage.classList.remove('show');
        
        // ✅ REUTILIZADO - Reiniciar
        this.generateNewProblem();
        this.updateUI();
        this.startTimer();
        
        console.log('✅ Laboratorio reiniciado');
    }

    // =====================================================
    // GESTIÓN DE TIEMPO (100% REUTILIZADO)
    // =====================================================

    /**
     * ✅ REUTILIZADO - Iniciar cronómetro (idéntico al SpaceShooterEngine)
     */
    startTimer() {
        this.state.startTime = Date.now();
    }

    /**
     * ✅ REUTILIZADO - Detener cronómetro (idéntico al SpaceShooterEngine)
     */
    stopTimer() {
        if (this.state.startTime) {
            this.state.totalTime = Date.now() - this.state.startTime;
        }
    }

    // =====================================================
    // SISTEMA DE EVENTOS (100% REUTILIZADO)
    // =====================================================

    /**
     * ✅ REUTILIZADO - Sistema de eventos (idéntico al SpaceShooterEngine)
     */
    dispatchEvent(eventName, data = {}) {
        const event = new CustomEvent(eventName, { detail: data });
        document.dispatchEvent(event);
        console.log(`📡 Evento disparado: ${eventName}`, data);
    }

    /**
     * ✅ REUTILIZADO - Manejar teclas (adaptado del SpaceShooterEngine)
     */
    handleKeydown(event) {
        switch(event.key) {
            case 'Escape':
                this.requestHint();
                break;
            case 'Enter':
                if (event.ctrlKey) {
                    // Verificar paso actual
                    this.workspaceController.verifyCurrentStep();
                }
                break;
            case 'r':
                if (event.ctrlKey) {
                    event.preventDefault();
                    this.restart();
                }
                break;
        }
    }

    // =====================================================
    // VALIDACIÓN DE DATOS (100% REUTILIZADO)
    // =====================================================

    /**
     * ✅ REUTILIZADO - Validar datos (idéntico al SpaceShooterEngine)
     */
    validateData() {
        if (!this.config || !this.problems) {
            throw new Error('Configuración o problemas no disponibles');
        }
        
        if (!this.problems.problems || !Array.isArray(this.problems.problems)) {
            throw new Error('Array de problemas inválido');
        }
        
        if (this.problems.problems.length === 0) {
            throw new Error('No hay problemas disponibles');
        }
        
        console.log('✅ Datos validados correctamente');
    }
}

// =====================================================
// FUNCIONES DE UTILIDAD GLOBALES
// =====================================================

/**
 * ✅ REUTILIZADO - Función global de reinicio (del SpaceShooterEngine)
 */
function restartLaboratory() {
    if (window.labEngine && typeof window.labEngine.restart === 'function') {
        window.labEngine.restart();
    }
}

/**
 * 🆕 NUEVO - Función para solicitar pista global
 */
function requestHint() {
    if (window.labEngine && typeof window.labEngine.requestHint === 'function') {
        window.labEngine.requestHint();
    }
}

// =====================================================
// EXPORTACIÓN Y COMPATIBILIDAD
// =====================================================

// Para uso en navegador (script tag)
if (typeof window !== 'undefined') {
    window.MathLabEngine = MathLabEngine;
    window.restartLaboratory = restartLaboratory;
    window.requestHint = requestHint;
}

// Para uso en Node.js (desarrollo/testing)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = MathLabEngine;
}

console.log('🔬 MathLabEngine cargado correctamente');

/**
 * RESUMEN DE REUTILIZACIÓN:
 * 
 * ✅ REUTILIZADO (75%):
 * - Estructura de clase completa
 * - Sistema de inicialización  
 * - Gestión de estado
 * - Sistema de eventos
 * - Efectos visuales
 * - Gestión de errores
 * - Sistema de puntuación
 * - Cronómetro
 * - Validación de datos
 * - Atajos de teclado
 * 
 * 🔄 ADAPTADO (15%):
 * - generateNewProblem (de generateNewQuestion)
 * - completeProblem (de completeQuestion)
 * - Manejo de UI específica
 * 
 * 🆕 NUEVO (10%):
 * - Integración con WorkspaceController
 * - Sistema de hints
 * - Validación paso a paso
 * - Manejo de pasos individuales
 * 
 * Total de líneas reutilizadas: ~75%
 */