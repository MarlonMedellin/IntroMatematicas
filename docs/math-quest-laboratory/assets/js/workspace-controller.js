/**
 * Math Quest Laboratory - Controlador del Área de Trabajo
 * Componente específico del laboratorio para gestión de la interfaz interactiva
 * 
 * Desarrollado por: Profe Marlon Arcila
 * Institución: Colegio Mayor de Antioquia
 * Versión: 1.0.0
 * 
 * Funcionalidad:
 * 🆕 Componente completamente nuevo (no existe en Space Shooter)
 * 🎨 Sigue patrones de diseño del ecosistema
 * ⚡ Optimizado para interacción paso a paso
 */

// =====================================================
// CLASE PRINCIPAL - CONTROLADOR DEL ÁREA DE TRABAJO
// =====================================================

/**
 * Controlador del área de trabajo del laboratorio
 * Gestiona la interfaz interactiva para resolución paso a paso
 */
class WorkspaceController {
    /**
     * Constructor del controlador
     * @param {HTMLElement} container - Contenedor principal del área de trabajo
     */
    constructor(container) {
        console.log('🧮 Inicializando WorkspaceController...');
        
        this.container = container;
        this.currentProblem = null;
        this.stepInputs = [];
        this.callbacks = {};
        this.currentFocusStep = 0;
        this.isInitialized = false;
        
        // Estado del área de trabajo
        this.state = {
            completedSteps: new Set(),
            errorSteps: new Set(),
            currentStep: 0,
            finalAnswerProvided: false
        };
        
        // Elementos del workspace
        this.elements = {
            workspaceArea: null,
            solutionSteps: null,
            finalAnswer: null,
            controlButtons: null,
            progressIndicators: null
        };
        
        console.log('✅ WorkspaceController inicializado');
    }

    // =====================================================
    // CONFIGURACIÓN DEL ÁREA DE TRABAJO
    // =====================================================

    /**
     * Configurar área de trabajo para un problema específico
     * @param {Object} problem - Problema a configurar
     * @param {Object} callbacks - Callbacks para eventos
     */
    setupWorkspace(problem, callbacks = {}) {
        console.log(`🛠️ Configurando workspace para: ${problem.title}`);
        
        try {
            this.currentProblem = problem;
            this.callbacks = callbacks;
            this.resetState();
            
            // Generar HTML del experimento
            const workspaceHTML = this.generateWorkspaceHTML(problem);
            this.container.innerHTML = workspaceHTML;
            
            // Cachear elementos generados
            this.cacheWorkspaceElements();
            
            // Configurar inputs y eventos
            this.setupInputs();
            this.setupEventListeners();
            this.setupProgressIndicators();
            
            // Enfocar primer paso
            this.focusStep(0);
            
            this.isInitialized = true;
            console.log('✅ Workspace configurado correctamente');
            
        } catch (error) {
            console.error('❌ Error configurando workspace:', error);
            throw new Error('Fallo en configuración del workspace: ' + error.message);
        }
    }

    /**
     * Generar HTML completo del área de trabajo
     * @param {Object} problem - Problema actual
     * @returns {string} HTML del workspace
     */
    generateWorkspaceHTML(problem) {
        const contextHTML = this.generateContextHTML(problem.context);
        const stepsHTML = this.generateStepsHTML(problem.solution.steps);
        const finalAnswerHTML = this.generateFinalAnswerHTML();
        const controlsHTML = this.generateControlsHTML();
        const progressHTML = this.generateProgressHTML(problem.solution.steps.length);
        
        return `
            <div class="experiment-container">
                <!-- Header del experimento -->
                <div class="experiment-header">
                    <h3>
                        <i class="fas fa-flask"></i>
                        ${problem.title}
                    </h3>
                </div>
                
                <!-- Contexto del problema -->
                ${contextHTML}
                
                <!-- Área de trabajo principal -->
                <div class="workspace-area">
                    <h4>
                        <i class="fas fa-calculator"></i>
                        Área de Trabajo
                    </h4>
                    
                    <!-- Pasos de solución -->
                    <div class="solution-steps" id="solution-steps">
                        ${stepsHTML}
                    </div>
                    
                    <!-- Respuesta final -->
                    ${finalAnswerHTML}
                </div>
                
                <!-- Controles del laboratorio -->
                ${controlsHTML}
                
                <!-- Progreso visual -->
                ${progressHTML}
                
                <!-- Área de feedback -->
                <div id="step-feedback-area" class="step-feedback-area">
                    <!-- Feedback dinámico aquí -->
                </div>
            </div>
        `;
    }

    /**
     * Generar HTML del contexto del problema
     * @param {Object} context - Contexto del problema
     * @returns {string} HTML del contexto
     */
    generateContextHTML(context) {
        return `
            <div class="problem-context">
                <p><strong>🚀 Situación del Experimento:</strong></p>
                <p>${context.narrative}</p>
                ${context.career_context ? `
                    <div class="career-context">
                        <p><i class="fas fa-briefcase"></i> <strong>Aplicación Profesional:</strong></p>
                        <p>${this.getRandomCareerContext(context.career_context)}</p>
                    </div>
                ` : ''}
                <p class="problem-question">
                    <strong>❓ ${context.question}</strong>
                </p>
            </div>
        `;
    }

    /**
     * Generar HTML de los pasos de solución
     * @param {Array} steps - Pasos de la solución
     * @returns {string} HTML de los pasos
     */
    generateStepsHTML(steps) {
        return steps.map((step, index) => `
            <div class="solution-step" data-step="${index}" id="step-container-${index}">
                <span class="step-label">Paso ${step.id}:</span>
                <span class="step-description">${step.description}</span>
                <div class="step-calculation">
                    <span class="step-operation">${step.operation} =</span>
                    <input type="text" 
                           id="step-input-${index}" 
                           class="step-input" 
                           placeholder="?"
                           data-step-index="${index}"
                           data-expected="${step.result}"
                           autocomplete="off"
                           spellcheck="false">
                </div>
                <div class="step-status" id="step-status-${index}">
                    <i class="fas fa-circle step-pending"></i>
                </div>
            </div>
        `).join('');
    }

    /**
     * Generar HTML de la respuesta final
     * @returns {string} HTML de respuesta final
     */
    generateFinalAnswerHTML() {
        return `
            <div class="final-answer">
                <label for="final-answer-input">
                    <i class="fas fa-bullseye"></i>
                    Respuesta final:
                </label>
                <input type="text" 
                       id="final-answer-input" 
                       class="step-input final" 
                       placeholder="Resultado final"
                       autocomplete="off"
                       spellcheck="false">
                <div class="final-status" id="final-status">
                    <i class="fas fa-circle step-pending"></i>
                </div>
            </div>
        `;
    }

    /**
     * Generar HTML de controles
     * @returns {string} HTML de controles
     */
    generateControlsHTML() {
        return `
            <div class="lab-controls">
                <button id="hint-btn" class="hint-button available" title="Solicitar pista (Escape)">
                    <i class="fas fa-lightbulb"></i>
                    Pista <span id="hint-counter">(1/3)</span>
                </button>
                <button id="verify-btn" class="verify-button" title="Verificar paso actual (Ctrl+Enter)">
                    <i class="fas fa-check"></i>
                    Verificar Paso
                </button>
                <button id="next-btn" class="next-button" style="display: none;" title="Siguiente experimento">
                    <i class="fas fa-arrow-right"></i>
                    Siguiente
                </button>
                <button id="reset-problem-btn" class="reset-button" title="Reiniciar problema actual">
                    <i class="fas fa-undo"></i>
                    Reiniciar Problema
                </button>
            </div>
        `;
    }

    /**
     * Generar HTML de indicadores de progreso
     * @param {number} totalSteps - Total de pasos
     * @returns {string} HTML de progreso
     */
    generateProgressHTML(totalSteps) {
        const indicators = Array.from({length: totalSteps}, (_, index) => `
            <div class="step-indicator" data-step="${index}" id="indicator-${index}">
                ${index + 1}
            </div>
        `).join('');
        
        return `
            <div class="step-progress">
                ${indicators}
                <div class="step-indicator final-indicator" id="final-indicator">
                    <i class="fas fa-flag-checkered"></i>
                </div>
            </div>
        `;
    }

    // =====================================================
    // GESTIÓN DE INPUTS Y EVENTOS
    // =====================================================

    /**
     * Configurar todos los inputs del workspace
     */
    setupInputs() {
        console.log('🎛️ Configurando inputs...');
        
        this.stepInputs = [];
        
        // Configurar inputs de pasos
        this.currentProblem.solution.steps.forEach((step, index) => {
            const input = document.getElementById(`step-input-${index}`);
            if (input) {
                this.stepInputs.push(input);
                this.setupInputBehavior(input, index);
            }
        });
        
        // Configurar input de respuesta final
        const finalInput = document.getElementById('final-answer-input');
        if (finalInput) {
            this.setupFinalInputBehavior(finalInput);
        }
        
        console.log(`✅ ${this.stepInputs.length} inputs configurados`);
    }

    /**
     * Configurar comportamiento de un input de paso
     * @param {HTMLElement} input - Input element
     * @param {number} stepIndex - Índice del paso
     */
    setupInputBehavior(input, stepIndex) {
        // Validación en tiempo real (al perder foco)
        input.addEventListener('blur', () => {
            if (input.value.trim()) {
                this.validateStepInput(stepIndex, input.value.trim());
            }
        });
        
        // Validación con Enter
        input.addEventListener('keypress', (event) => {
            if (event.key === 'Enter') {
                event.preventDefault();
                if (input.value.trim()) {
                    this.validateStepInput(stepIndex, input.value.trim());
                }
            }
        });
        
        // Navegación con Tab optimizada
        input.addEventListener('keydown', (event) => {
            if (event.key === 'Tab') {
                // Permitir navegación normal
            } else if (event.key === 'Escape') {
                event.preventDefault();
                this.requestHint();
            }
        });
        
        // Feedback visual durante la escritura
        input.addEventListener('input', () => {
            this.clearStepStatus(stepIndex);
        });
    }

    /**
     * Configurar comportamiento del input final
     * @param {HTMLElement} input - Input de respuesta final
     */
    setupFinalInputBehavior(input) {
        input.addEventListener('blur', () => {
            if (input.value.trim()) {
                this.validateFinalAnswer(input.value.trim());
            }
        });
        
        input.addEventListener('keypress', (event) => {
            if (event.key === 'Enter') {
                event.preventDefault();
                if (input.value.trim()) {
                    this.validateFinalAnswer(input.value.trim());
                }
            }
        });
    }

    /**
     * Configurar event listeners principales
     */
    setupEventListeners() {
        // Botón de pista
        const hintBtn = document.getElementById('hint-btn');
        if (hintBtn) {
            hintBtn.addEventListener('click', () => this.requestHint());
        }
        
        // Botón de verificar
        const verifyBtn = document.getElementById('verify-btn');
        if (verifyBtn) {
            verifyBtn.addEventListener('click', () => this.verifyCurrentStep());
        }
        
        // Botón de siguiente
        const nextBtn = document.getElementById('next-btn');
        if (nextBtn) {
            nextBtn.addEventListener('click', () => this.nextProblem());
        }
        
        // Botón de reiniciar problema
        const resetBtn = document.getElementById('reset-problem-btn');
        if (resetBtn) {
            resetBtn.addEventListener('click', () => this.resetCurrentProblem());
        }
    }

    // =====================================================
    // VALIDACIÓN Y FEEDBACK
    // =====================================================

    /**
     * Validar input de paso específico
     * @param {number} stepIndex - Índice del paso
     * @param {string} userInput - Entrada del usuario
     * @returns {boolean} Si es correcto
     */
    validateStepInput(stepIndex, userInput) {
        console.log(`🔍 Validando paso ${stepIndex + 1}: "${userInput}"`);
        
        if (this.callbacks.onStepInput) {
            const isCorrect = this.callbacks.onStepInput(stepIndex, userInput);
            
            if (isCorrect) {
                this.markStepCompleted(stepIndex);
                this.focusNextAvailableStep();
            } else {
                this.markStepError(stepIndex);
            }
            
            return isCorrect;
        }
        
        return false;
    }

    /**
     * Validar respuesta final
     * @param {string} finalAnswer - Respuesta final del usuario
     * @returns {boolean} Si es correcta
     */
    validateFinalAnswer(finalAnswer) {
        console.log(`🎯 Validando respuesta final: "${finalAnswer}"`);
        
        const expectedAnswer = this.currentProblem.solution.final_answer;
        const isCorrect = this.normalizeAnswer(finalAnswer) === this.normalizeAnswer(expectedAnswer);
        
        if (isCorrect) {
            this.markFinalAnswerCorrect();
            if (this.callbacks.onFinalAnswer) {
                this.callbacks.onFinalAnswer(finalAnswer);
            }
        } else {
            this.markFinalAnswerError();
        }
        
        return isCorrect;
    }

    /**
     * Verificar paso actual enfocado
     */
    verifyCurrentStep() {
        const currentInput = this.stepInputs[this.currentFocusStep];
        if (currentInput && currentInput.value.trim()) {
            this.validateStepInput(this.currentFocusStep, currentInput.value.trim());
        } else {
            // Si no hay paso actual, verificar respuesta final
            const finalInput = document.getElementById('final-answer-input');
            if (finalInput && finalInput.value.trim()) {
                this.validateFinalAnswer(finalInput.value.trim());
            }
        }
    }

    // =====================================================
    // GESTIÓN VISUAL DE PASOS
    // =====================================================

    /**
     * Marcar paso como completado
     * @param {number} stepIndex - Índice del paso
     */
    markStepCompleted(stepIndex) {
        console.log(`✅ Marcando paso ${stepIndex + 1} como completado`);
        
        const stepContainer = document.getElementById(`step-container-${stepIndex}`);
        const stepStatus = document.getElementById(`step-status-${stepIndex}`);
        const stepInput = document.getElementById(`step-input-${stepIndex}`);
        const indicator = document.getElementById(`indicator-${stepIndex}`);
        
        if (stepContainer) {
            stepContainer.classList.remove('error');
            stepContainer.classList.add('completed');
        }
        
        if (stepStatus) {
            stepStatus.innerHTML = '<i class="fas fa-check-circle step-completed"></i>';
        }
        
        if (stepInput) {
            stepInput.classList.remove('error');
            stepInput.classList.add('completed');
            stepInput.disabled = true; // Prevenir modificaciones
        }
        
        if (indicator) {
            indicator.classList.add('completed');
        }
        
        this.state.completedSteps.add(stepIndex);
        this.state.errorSteps.delete(stepIndex);
        
        // Actualizar estado del paso actual
        this.state.currentStep = Math.max(this.state.currentStep, stepIndex + 1);
    }

    /**
     * Marcar paso con error
     * @param {number} stepIndex - Índice del paso
     */
    markStepError(stepIndex) {
        console.log(`❌ Marcando paso ${stepIndex + 1} con error`);
        
        const stepContainer = document.getElementById(`step-container-${stepIndex}`);
        const stepStatus = document.getElementById(`step-status-${stepIndex}`);
        const stepInput = document.getElementById(`step-input-${stepIndex}`);
        const indicator = document.getElementById(`indicator-${stepIndex}`);
        
        if (stepContainer) {
            stepContainer.classList.add('error');
            stepContainer.classList.remove('completed');
        }
        
        if (stepStatus) {
            stepStatus.innerHTML = '<i class="fas fa-times-circle step-error"></i>';
        }
        
        if (stepInput) {
            stepInput.classList.add('error');
            stepInput.classList.remove('completed');
            
            // Efecto shake
            stepInput.style.animation = 'shake 0.5s ease-in-out';
            setTimeout(() => {
                stepInput.style.animation = '';
            }, 500);
        }
        
        if (indicator) {
            indicator.classList.add('error');
        }
        
        this.state.errorSteps.add(stepIndex);
        
        // Limpiar input después de un momento para permitir reintento
        setTimeout(() => {
            if (stepInput) {
                stepInput.value = '';
                stepInput.focus();
            }
        }, 1500);
    }

    /**
     * Limpiar estado visual de un paso
     * @param {number} stepIndex - Índice del paso
     */
    clearStepStatus(stepIndex) {
        const stepContainer = document.getElementById(`step-container-${stepIndex}`);
        const stepStatus = document.getElementById(`step-status-${stepIndex}`);
        const stepInput = document.getElementById(`step-input-${stepIndex}`);
        const indicator = document.getElementById(`indicator-${stepIndex}`);
        
        if (stepContainer) {
            stepContainer.classList.remove('error', 'completed');
        }
        
        if (stepStatus) {
            stepStatus.innerHTML = '<i class="fas fa-circle step-pending"></i>';
        }
        
        if (stepInput) {
            stepInput.classList.remove('error', 'completed');
        }
        
        if (indicator) {
            indicator.classList.remove('error', 'completed');
        }
    }

    /**
     * Marcar respuesta final como correcta
     */
    markFinalAnswerCorrect() {
        const finalInput = document.getElementById('final-answer-input');
        const finalStatus = document.getElementById('final-status');
        const finalIndicator = document.getElementById('final-indicator');
        
        if (finalInput) {
            finalInput.classList.add('completed');
            finalInput.disabled = true;
        }
        
        if (finalStatus) {
            finalStatus.innerHTML = '<i class="fas fa-check-circle step-completed"></i>';
        }
        
        if (finalIndicator) {
            finalIndicator.classList.add('completed');
        }
        
        this.state.finalAnswerProvided = true;
        
        // Mostrar botón de siguiente
        const nextBtn = document.getElementById('next-btn');
        if (nextBtn) {
            nextBtn.style.display = 'flex';
        }
    }

    /**
     * Marcar respuesta final con error
     */
    markFinalAnswerError() {
        const finalInput = document.getElementById('final-answer-input');
        const finalStatus = document.getElementById('final-status');
        
        if (finalInput) {
            finalInput.classList.add('error');
            finalInput.style.animation = 'shake 0.5s ease-in-out';
            setTimeout(() => {
                finalInput.style.animation = '';
                finalInput.value = '';
                finalInput.focus();
            }, 1500);
        }
        
        if (finalStatus) {
            finalStatus.innerHTML = '<i class="fas fa-times-circle step-error"></i>';
        }
    }

    // =====================================================
    // NAVEGACIÓN Y ENFOQUE
    // =====================================================

    /**
     * Enfocar un paso específico
     * @param {number} stepIndex - Índice del paso a enfocar
     */
    focusStep(stepIndex) {
        console.log(`🎯 Enfocando paso ${stepIndex + 1}`);
        
        // Actualizar indicador de paso actual
        this.currentFocusStep = stepIndex;
        
        // Limpiar enfoque anterior
        this.stepInputs.forEach((input, index) => {
            input.classList.remove('focused');
            const indicator = document.getElementById(`indicator-${index}`);
            if (indicator) {
                indicator.classList.remove('active');
            }
        });
        
        // Enfocar nuevo paso
        if (this.stepInputs[stepIndex]) {
            this.stepInputs[stepIndex].classList.add('focused');
            this.stepInputs[stepIndex].focus();
            
            const indicator = document.getElementById(`indicator-${stepIndex}`);
            if (indicator) {
                indicator.classList.add('active');
            }
        }
    }

    /**
     * Enfocar siguiente paso disponible
     */
    focusNextAvailableStep() {
        for (let i = this.currentFocusStep + 1; i < this.stepInputs.length; i++) {
            if (!this.state.completedSteps.has(i)) {
                this.focusStep(i);
                return;
            }
        }
        
        // Si no hay más pasos, enfocar respuesta final
        const finalInput = document.getElementById('final-answer-input');
        if (finalInput && !this.state.finalAnswerProvided) {
            finalInput.focus();
        }
    }

    /**
     * Enfocar siguiente paso (usado por el motor principal)
     * @param {number} stepIndex - Índice del paso
     */
    focusNextStep(stepIndex) {
        if (stepIndex < this.stepInputs.length) {
            this.focusStep(stepIndex);
        } else {
            // Enfocar respuesta final
            const finalInput = document.getElementById('final-answer-input');
            if (finalInput) {
                finalInput.focus();
            }
        }
    }

    // =====================================================
    // GESTIÓN DE HINTS
    // =====================================================

    /**
     * Insertar hint en el área de trabajo
     * @param {string} hintHTML - HTML del hint
     */
    insertHint(hintHTML) {
        const feedbackArea = document.getElementById('step-feedback-area');
        if (feedbackArea) {
            feedbackArea.innerHTML = hintHTML;
        }
    }

    /**
     * Solicitar pista
     */
    requestHint() {
        if (this.callbacks.onHintRequested) {
            this.callbacks.onHintRequested();
        }
    }

    // =====================================================
    // UTILIDADES Y HELPERS
    // =====================================================

    /**
     * Normalizar respuesta para comparación
     * @param {string} answer - Respuesta a normalizar
     * @returns {string} Respuesta normalizada
     */
    normalizeAnswer(answer) {
        if (!answer) return '';
        
        return answer.toString()
                     .trim()
                     .replace(/\s+/g, '')
                     .replace(/,/g, '.')
                     .replace(/\+/g, '')
                     .toLowerCase();
    }

    /**
     * Obtener contexto de carrera aleatorio
     * @param {Object} careerContexts - Contextos por carrera
     * @returns {string} Contexto seleccionado
     */
    getRandomCareerContext(careerContexts) {
        const careers = Object.keys(careerContexts);
        const randomCareer = careers[Math.floor(Math.random() * careers.length)];
        return careerContexts[randomCareer];
    }

    /**
     * Configurar indicadores de progreso
     */
    setupProgressIndicators() {
        const indicators = document.querySelectorAll('.step-indicator');
        indicators.forEach((indicator, index) => {
            indicator.addEventListener('click', () => {
                if (index < this.stepInputs.length) {
                    this.focusStep(index);
                }
            });
        });
    }

    /**
     * Cachear elementos del workspace generados
     */
    cacheWorkspaceElements() {
        this.elements = {
            workspaceArea: document.querySelector('.workspace-area'),
            solutionSteps: document.getElementById('solution-steps'),
            finalAnswer: document.getElementById('final-answer-input'),
            controlButtons: document.querySelector('.lab-controls'),
            progressIndicators: document.querySelector('.step-progress')
        };
    }

    /**
     * Resetear estado del controlador
     */
    resetState() {
        this.state = {
            completedSteps: new Set(),
            errorSteps: new Set(),
            currentStep: 0,
            finalAnswerProvided: false
        };
        this.currentFocusStep = 0;
    }

    /**
     * Reiniciar problema actual
     */
    resetCurrentProblem() {
        console.log('🔄 Reiniciando problema actual...');
        
        if (confirm('¿Estás seguro de que quieres reiniciar este problema? Se perderá el progreso actual.')) {
            // Limpiar todos los inputs
            this.stepInputs.forEach((input, index) => {
                input.value = '';
                input.disabled = false;
                input.classList.remove('completed', 'error');
                this.clearStepStatus(index);
            });
            
            // Limpiar respuesta final
            const finalInput = document.getElementById('final-answer-input');
            if (finalInput) {
                finalInput.value = '';
                finalInput.disabled = false;
                finalInput.classList.remove('completed', 'error');
            }
            
            // Resetear estado
            this.resetState();
            
            // Enfocar primer paso
            this.focusStep(0);
            
            // Ocultar botón de siguiente
            const nextBtn = document.getElementById('next-btn');
            if (nextBtn) {
                nextBtn.style.display = 'none';
            }
        }
    }

    /**
     * Avanzar al siguiente problema
     */
    nextProblem() {
        if (this.callbacks.onNextProblem) {
            this.callbacks.onNextProblem();
        }
    }

    /**
     * Reset completo del controlador
     */
    reset() {
        console.log('🔄 Reseteando WorkspaceController...');
        
        this.currentProblem = null;
        this.stepInputs = [];
        this.callbacks = {};
        this.resetState();
        this.isInitialized = false;
        
        if (this.container) {
            this.container.innerHTML = '';
        }
        
        console.log('✅ WorkspaceController reseteado');
    }

    // =====================================================
    // MÉTODOS DE INFORMACIÓN
    // =====================================================

    /**
     * Obtener estadísticas del workspace actual
     * @returns {Object} Estadísticas
     */
    getWorkspaceStats() {
        return {
            totalSteps: this.currentProblem ? this.currentProblem.solution.steps.length : 0,
            completedSteps: this.state.completedSteps.size,
            errorSteps: this.state.errorSteps.size,
            currentStep: this.state.currentStep,
            finalAnswerProvided: this.state.finalAnswerProvided,
            isCompleted: this.state.finalAnswerProvided && 
                        this.state.completedSteps.size === (this.currentProblem?.solution.steps.length || 0)
        };
    }

    /**
     * Verificar si el workspace está listo
     * @returns {boolean} Si está listo
     */
    isReady() {
        return this.isInitialized && this.currentProblem !== null;
    }
}

// =====================================================
// EXPORTACIÓN Y COMPATIBILIDAD
// =====================================================

// Para uso en navegador (script tag)
if (typeof window !== 'undefined') {
    window.WorkspaceController = WorkspaceController;
}

// Para uso en Node.js (desarrollo/testing)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = WorkspaceController;
}

console.log('🧮 WorkspaceController cargado correctamente');

/**
 * RESUMEN DEL COMPONENTE:
 * 
 * 🆕 COMPLETAMENTE NUEVO:
 * - Gestión de área de trabajo interactiva
 * - Validación paso a paso en tiempo real
 * - Navegación inteligente entre pasos
 * - Feedback visual inmediato
 * - Integración con sistema de hints
 * 
 * 🎨 SIGUIENDO PATRONES DEL ECOSISTEMA:
 * - Estructura de clases similar al SpaceShooterEngine
 * - Manejo de eventos consistente
 * - Logging y debugging similares
 * - Gestión de errores estructurada
 * - Comentarios y documentación del mismo estilo
 * 
 * ⚡ OPTIMIZACIONES:
 * - Cacheo de elementos DOM
 * - Event delegation eficiente
 * - Validación incremental
 * - Navegación por teclado completa
 * - Responsive y accesible
 */