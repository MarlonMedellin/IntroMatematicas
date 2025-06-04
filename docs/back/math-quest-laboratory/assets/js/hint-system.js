/**
 * Math Quest Laboratory - Sistema de Pistas Pedagógicas
 * Sistema inteligente de ayuda adaptativa para el aprendizaje matemático
 * 
 * Desarrollado por: Profe Marlon Arcila
 * Institución: Colegio Mayor de Antioquia
 * Versión: 1.0.0
 * 
 * Funcionalidad:
 * 🆕 Componente completamente nuevo (específico del laboratorio)
 * 🧠 Pistas adaptatitvas según el error del estudiante
 * 📚 Enfoque pedagógico constructivista
 * 🎯 Guía progresiva sin dar respuestas directas
 */

// =====================================================
// CLASE PRINCIPAL - SISTEMA DE HINTS
// =====================================================

/**
 * Sistema de pistas pedagógicas adaptativas
 * Proporciona ayuda contextual e inteligente sin comprometer el aprendizaje
 */
class HintSystem {
    /**
     * Constructor del sistema de hints
     * @param {Object} pedagogicalConfig - Configuración pedagógica
     */
    constructor(pedagogicalConfig = {}) {
        console.log('💡 Inicializando HintSystem...');
        
        // Configuración pedagógica
        this.config = {
            maxHints: pedagogicalConfig.maxHints || 3,
            adaptiveHints: pedagogicalConfig.adaptiveHints || true,
            contextualFeedback: pedagogicalConfig.contextualFeedback || true,
            errorPatterns: pedagogicalConfig.errorPatterns || true,
            feedbackLevel: pedagogicalConfig.feedbackLevel || 'constructive'
        };
        
        // Estado del sistema
        this.state = {
            hintsUsed: 0,
            currentProblemHints: [],
            errorHistory: [],
            adaptiveLevel: 1, // Nivel de ayuda adaptativo
            studentProfile: this.createStudentProfile()
        };
        
        // Biblioteca de pistas por tema
        this.hintLibrary = this.initializeHintLibrary();
        
        // Patrones de error comunes
        this.errorPatterns = this.initializeErrorPatterns();
        
        console.log('✅ HintSystem inicializado');
    }

    // =====================================================
    // INICIALIZACIÓN Y CONFIGURACIÓN
    // =====================================================

    /**
     * Crear perfil del estudiante para personalización
     * @returns {Object} Perfil inicial del estudiante
     */
    createStudentProfile() {
        return {
            preferredHintType: 'conceptual', // conceptual, visual, procedural
            errorTendencies: [], // Patrones de error identificados
            learningSpeed: 'normal', // slow, normal, fast
            confidenceLevel: 'medium', // low, medium, high
            lastSuccessfulStrategy: null
        };
    }

    /**
     * Inicializar biblioteca de pistas por tema matemático
     * @returns {Object} Biblioteca organizada de pistas
     */
    initializeHintLibrary() {
        return {
            // Suma y resta de enteros
            suma_enteros_negativos: {
                conceptual: [
                    "Recordá que sumar un número negativo es lo mismo que restar ese número",
                    "Los números negativos representan direcciones opuestas en la recta numérica",
                    "Pensá en los números negativos como 'deudas' que se restan de lo que tenés"
                ],
                procedural: [
                    "Para sumar un negativo: 100 + (-15) = 100 - 15",
                    "Cambiá el signo: + (-15) se convierte en - 15",
                    "Operá de izquierda a derecha, paso a paso"
                ],
                visual: [
                    "Imaginá una recta numérica: empezás en 100 y te movés 15 posiciones hacia la izquierda",
                    "Visualizá una balanza: agregar peso negativo es como quitar peso positivo",
                    "Pensá en un termómetro: la temperatura baja cuando agregás 'frío'"
                ]
            },
            
            // Valor absoluto
            valor_absoluto: {
                conceptual: [
                    "El valor absoluto |x| siempre es positivo - representa la distancia al cero",
                    "El valor absoluto elimina el signo, solo te queda la magnitud",
                    "Es como preguntarse: '¿qué tan lejos está este número del cero?'"
                ],
                procedural: [
                    "Para |-25|: eliminá el signo negativo, queda 25",
                    "El valor absoluto de cualquier número es su versión positiva",
                    "|-25| = 25, |25| = 25, ambos tienen la misma distancia al cero"
                ],
                visual: [
                    "Imaginá una recta numérica: -25 y 25 están a la misma distancia del 0",
                    "Es como medir con una regla: solo importa la distancia, no la dirección",
                    "Pensá en kilómetros: 25 km al norte o al sur, siguen siendo 25 km"
                ]
            },
            
            // Coordenadas y movimiento
            recta_numerica: {
                conceptual: [
                    "En una recta numérica: derecha es positivo (+), izquierda es negativo (-)",
                    "Moverse a la derecha suma, moverse a la izquierda resta",
                    "Tu posición actual + el movimiento = nueva posición"
                ],
                procedural: [
                    "Desde -5, moverse 8 a la derecha: -5 + 8 = 3",
                    "Luego desde 3, moverse 3 a la izquierda: 3 + (-3) = 0",
                    "Sumar el movimiento con su signo correspondiente"
                ],
                visual: [
                    "Dibujá una línea horizontal con números: ...-5,-4,-3,-2,-1,0,1,2,3...",
                    "Marcá tu posición inicial y contá los pasos del movimiento",
                    "Pensá en caminar por una calle numerada"
                ]
            },
            
            // Operaciones secuenciales
            operaciones_secuenciales: {
                conceptual: [
                    "Resolvé una operación a la vez, en el orden que aparecen",
                    "El resultado de cada paso se convierte en el punto de partida del siguiente",
                    "Mantené el orden: primero suma/resta de izquierda a derecha"
                ],
                procedural: [
                    "Paso 1: resolvé la primera operación",
                    "Paso 2: usá ese resultado para la siguiente operación",
                    "Paso 3: continuá hasta completar toda la secuencia"
                ],
                visual: [
                    "Imaginá una cadena de transformaciones, como una línea de producción",
                    "Cada operación es una estación que modifica el resultado anterior",
                    "Pensá en un GPS que recalcula la ruta en cada intersección"
                ]
            }
        };
    }

    /**
     * Inicializar patrones de error comunes y sus respuestas
     * @returns {Object} Patrones de error y feedback
     */
    initializeErrorPatterns() {
        return {
            sign_error: {
                pattern: /ignora.*negativo|olvida.*signo|suma.*positivo/i,
                feedback: "🔍 Prestá atención a los signos. Los números negativos son importantes en el cálculo.",
                remediation: "Recordá: +(-15) significa sumar un negativo, que es lo mismo que restar 15",
                hintType: "conceptual"
            },
            
            order_operations: {
                pattern: /orden.*incorrecto|secuencia.*errada/i,
                feedback: "⚡ Excelente inicio. Ahora resolvé paso a paso, de izquierda a derecha.",
                remediation: "Tomá cada operación por separado y usá el resultado para la siguiente",
                hintType: "procedural"
            },
            
            calculation_error: {
                pattern: /aritmética.*incorrecta|cálculo.*errado/i,
                feedback: "✅ Tu método está perfecto. Revisá solo las cuentas básicas.",
                remediation: "Verificá cada suma o resta individual: ¿100 - 15 = ?",
                hintType: "procedural"
            },
            
            conceptual_confusion: {
                pattern: /concepto.*confuso|no.*entiende/i,
                feedback: "🧠 Tomemos un momento para entender el concepto detrás del problema.",
                remediation: "Pensá en el significado real de la situación antes de calcular",
                hintType: "conceptual"
            },
            
            magnitude_error: {
                pattern: /magnitud.*incorrecta|tamaño.*errado/i,
                feedback: "📏 El procedimiento está bien, revisá los números que estás usando.",
                remediation: "Verificá que estés usando los números correctos del problema",
                hintType: "visual"
            }
        };
    }

    // =====================================================
    // GENERACIÓN DE HINTS INTELIGENTES
    // =====================================================

    /**
     * Generar hint contextual e inteligente
     * @param {number} currentStep - Paso actual del problema
     * @param {Object} problem - Problema completo
     * @param {Array} errorHistory - Historial de errores del estudiante
     * @returns {Object} Hint generado
     */
    generateHint(currentStep, problem, errorHistory = []) {
        console.log(`💡 Generando hint para paso ${currentStep + 1}...`);
        
        if (!this.canProvideHint()) {
            return this.createErrorHint('No hay más pistas disponibles para este problema');
        }

        // Analizar contexto del estudiante
        const context = this.analyzeStudentContext(currentStep, problem, errorHistory);
        
        // Seleccionar estrategia de hint
        const strategy = this.selectHintStrategy(context);
        
        // Generar hint específico
        const hint = this.createContextualHint(currentStep, problem, strategy, context);
        
        // Registrar hint en el historial
        this.state.currentProblemHints.push(hint);
        this.state.hintsUsed++;
        
        // Actualizar perfil del estudiante
        this.updateStudentProfile(context, strategy);
        
        console.log(`💡 Hint nivel ${hint.level} generado: ${hint.type}`);
        return hint;
    }

    /**
     * Analizar contexto del estudiante para personalizar hint
     * @param {number} currentStep - Paso actual
     * @param {Object} problem - Problema completo
     * @param {Array} errorHistory - Errores previos
     * @returns {Object} Contexto analizado
     */
    analyzeStudentContext(currentStep, problem, errorHistory) {
        const recentErrors = errorHistory.slice(-3); // Últimos 3 errores
        const step = problem.solution.steps[currentStep];
        
        return {
            currentStep: currentStep,
            stepType: this.classifyStepType(step),
            recentErrorPatterns: this.identifyErrorPatterns(recentErrors),
            difficultyLevel: problem.difficulty || 2,
            timeOnStep: this.estimateTimeOnStep(),
            studentStruggle: this.assessStruggleLevel(recentErrors),
            preferredLearningStyle: this.state.studentProfile.preferredHintType,
            hintLevel: this.determineHintLevel()
        };
    }

    /**
     * Clasificar tipo de paso matemático
     * @param {Object} step - Paso actual
     * @returns {string} Tipo de paso
     */
    classifyStepType(step) {
        const operation = step.operation.toLowerCase();
        
        if (operation.includes('+') && operation.includes('-')) {
            return 'mixed_operations';
        } else if (operation.includes('(-')) {
            return 'negative_addition';
        } else if (operation.includes('|')) {
            return 'absolute_value';
        } else if (operation.includes('+')) {
            return 'addition';
        } else if (operation.includes('-')) {
            return 'subtraction';
        } else {
            return 'other';
        }
    }

    /**
     * Seleccionar estrategia de hint basada en contexto
     * @param {Object} context - Contexto del estudiante
     * @returns {string} Estrategia seleccionada
     */
    selectHintStrategy(context) {
        // Si es el primer hint, usar enfoque conceptual
        if (context.hintLevel === 1) {
            return 'conceptual_orientation';
        }
        
        // Si hay patrones de error específicos, abordarlos
        if (context.recentErrorPatterns.length > 0) {
            return 'error_remediation';
        }
        
        // Si el estudiante lucha, dar más orientación
        if (context.studentStruggle === 'high') {
            return 'guided_procedure';
        }
        
        // Si es el tercer hint, ser más explícito
        if (context.hintLevel === 3) {
            return 'explicit_guidance';
        }
        
        // Por defecto, orientación procedimental
        return 'procedural_guidance';
    }

    /**
     * Crear hint contextual basado en estrategia
     * @param {number} currentStep - Paso actual
     * @param {Object} problem - Problema completo
     * @param {string} strategy - Estrategia seleccionada
     * @param {Object} context - Contexto del estudiante
     * @returns {Object} Hint creado
     */
    createContextualHint(currentStep, problem, strategy, context) {
        const step = problem.solution.steps[currentStep];
        const hintLevel = context.hintLevel;
        
        switch (strategy) {
            case 'conceptual_orientation':
                return this.createConceptualHint(step, context.stepType, hintLevel);
                
            case 'error_remediation':
                return this.createErrorRemediationHint(step, context.recentErrorPatterns, hintLevel);
                
            case 'guided_procedure':
                return this.createGuidedProcedureHint(step, hintLevel);
                
            case 'explicit_guidance':
                return this.createExplicitHint(step, hintLevel);
                
            case 'procedural_guidance':
            default:
                return this.createProceduralHint(step, hintLevel);
        }
    }

    // =====================================================
    // TIPOS ESPECÍFICOS DE HINTS
    // =====================================================

    /**
     * Crear hint conceptual (nivel 1)
     * @param {Object} step - Paso actual
     * @param {string} stepType - Tipo de paso
     * @param {number} level - Nivel del hint
     * @returns {Object} Hint conceptual
     */
    createConceptualHint(step, stepType, level) {
        const library = this.hintLibrary[stepType] || this.hintLibrary.operaciones_secuenciales;
        const concepts = library.conceptual || [];
        
        // Seleccionar concepto apropiado
        const conceptIndex = Math.min(level - 1, concepts.length - 1);
        const message = concepts[conceptIndex] || "Recordá el concepto básico de esta operación";
        
        return {
            level: level,
            type: "conceptual",
            strategy: "conceptual_orientation",
            message: message,
            icon: "fas fa-info-circle",
            pedagogicalFocus: "concept_building"
        };
    }

    /**
     * Crear hint de remediación de errores
     * @param {Object} step - Paso actual
     * @param {Array} errorPatterns - Patrones de error identificados
     * @param {number} level - Nivel del hint
     * @returns {Object} Hint de remediación
     */
    createErrorRemediationHint(step, errorPatterns, level) {
        if (errorPatterns.length === 0) {
            return this.createProceduralHint(step, level);
        }
        
        const primaryError = errorPatterns[0];
        const errorInfo = this.errorPatterns[primaryError] || this.errorPatterns.calculation_error;
        
        return {
            level: level,
            type: "remediation",
            strategy: "error_remediation",
            message: errorInfo.remediation,
            icon: "fas fa-tools",
            pedagogicalFocus: "error_correction"
        };
    }

    /**
     * Crear hint procedimental (nivel 2)
     * @param {Object} step - Paso actual
     * @param {number} level - Nivel del hint
     * @returns {Object} Hint procedimental
     */
    createProceduralHint(step, level) {
        const operation = step.operation;
        const description = step.description;
        
        let message;
        
        // Personalizar mensaje según la operación
        if (operation.includes('(-')) {
            message = `Para ${description}: ¿Cuánto es ${operation}? Recordá que sumar un negativo es restar.`;
        } else {
            message = `Para ${description}: ¿Cuánto es ${operation}?`;
        }
        
        return {
            level: level,
            type: "procedural",
            strategy: "procedural_guidance",
            message: message,
            icon: "fas fa-compass",
            pedagogicalFocus: "step_guidance"
        };
    }

    /**
     * Crear hint de procedimiento guiado
     * @param {Object} step - Paso actual
     * @param {number} level - Nivel del hint
     * @returns {Object} Hint guiado
     */
    createGuidedProcedureHint(step, level) {
        const operation = step.operation;
        const result = step.result;
        
        // Descomponer la operación para guiar paso a paso
        let guidance = this.decomposeOperation(operation);
        
        return {
            level: level,
            type: "guided",
            strategy: "guided_procedure",
            message: `Vamos paso a paso: ${guidance}`,
            icon: "fas fa-route",
            pedagogicalFocus: "guided_learning"
        };
    }

    /**
     * Crear hint explícito (nivel 3)
     * @param {Object} step - Paso actual
     * @param {number} level - Nivel del hint
     * @returns {Object} Hint explícito
     */
    createExplicitHint(step, level) {
        const operation = step.operation;
        const result = step.result;
        
        return {
            level: level,
            type: "explicit",
            strategy: "explicit_guidance",
            message: `${operation} = ${result}`,
            icon: "fas fa-equals",
            pedagogicalFocus: "explicit_solution"
        };
    }

    /**
     * Crear hint de error
     * @param {string} message - Mensaje de error
     * @returns {Object} Hint de error
     */
    createErrorHint(message) {
        return {
            level: 0,
            type: "error",
            strategy: "error_notification",
            message: message,
            icon: "fas fa-exclamation-triangle",
            pedagogicalFocus: "system_limitation"
        };
    }

    // =====================================================
    // ANÁLISIS Y ADAPTACIÓN
    // =====================================================

    /**
     * Identificar patrones de error en el historial
     * @param {Array} errors - Errores recientes
     * @returns {Array} Patrones identificados
     */
    identifyErrorPatterns(errors) {
        const patterns = [];
        
        errors.forEach(error => {
            if (error.errorType) {
                patterns.push(error.errorType);
            }
        });
        
        // Identificar patrones más frecuentes
        const patternCount = {};
        patterns.forEach(pattern => {
            patternCount[pattern] = (patternCount[pattern] || 0) + 1;
        });
        
        // Retornar patrones ordenados por frecuencia
        return Object.keys(patternCount).sort((a, b) => patternCount[b] - patternCount[a]);
    }

    /**
     * Evaluar nivel de dificultad del estudiante
     * @param {Array} recentErrors - Errores recientes
     * @returns {string} Nivel de dificultad
     */
    assessStruggleLevel(recentErrors) {
        if (recentErrors.length >= 3) {
            return 'high';
        } else if (recentErrors.length >= 2) {
            return 'medium';
        } else {
            return 'low';
        }
    }

    /**
     * Determinar nivel apropiado de hint
     * @returns {number} Nivel del hint (1-3)
     */
    determineHintLevel() {
        const usedInProblem = this.state.currentProblemHints.length;
        return Math.min(usedInProblem + 1, 3);
    }

    /**
     * Estimar tiempo que el estudiante lleva en este paso
     * @returns {number} Tiempo estimado en segundos
     */
    estimateTimeOnStep() {
        // Por ahora, implementación básica
        // En una versión más avanzada, podría medir tiempo real
        return 30; // 30 segundos por defecto
    }

    /**
     * Descomponer operación matemática para guía paso a paso
     * @param {string} operation - Operación a descomponer
     * @returns {string} Guía descompuesta
     */
    decomposeOperation(operation) {
        // Analizar la operación y proporcionar guía
        if (operation.includes('(-')) {
            const parts = operation.split('+');
            if (parts.length === 2) {
                const base = parts[0].trim();
                const negative = parts[1].trim();
                return `${base} más ${negative} es lo mismo que ${base} ${negative.replace('(-', '- ').replace(')', '')}`;
            }
        }
        
        return `Calculá ${operation} paso a paso`;
    }

    /**
     * Actualizar perfil del estudiante basado en la interacción
     * @param {Object} context - Contexto de la interacción
     * @param {string} strategy - Estrategia utilizada
     */
    updateStudentProfile(context, strategy) {
        // Actualizar preferencias de tipo de hint
        if (context.hintLevel === 1) {
            // Primer hint, registrar estrategia inicial
            this.state.studentProfile.lastSuccessfulStrategy = strategy;
        }
        
        // Registrar tendencias de error
        if (context.recentErrorPatterns.length > 0) {
            context.recentErrorPatterns.forEach(pattern => {
                if (!this.state.studentProfile.errorTendencies.includes(pattern)) {
                    this.state.studentProfile.errorTendencies.push(pattern);
                }
            });
        }
        
        // Ajustar nivel de confianza basado en la necesidad de hints
        if (this.state.hintsUsed === 0) {
            this.state.studentProfile.confidenceLevel = 'high';
        } else if (this.state.hintsUsed <= 1) {
            this.state.studentProfile.confidenceLevel = 'medium';
        } else {
            this.state.studentProfile.confidenceLevel = 'low';
        }
    }

    // =====================================================
    // GESTIÓN DE ESTADO
    // =====================================================

    /**
     * Verificar si se pueden proporcionar más hints
     * @returns {boolean} Si se pueden proporcionar hints
     */
    canProvideHint() {
        return this.state.hintsUsed < this.config.maxHints;
    }

    /**
     * Obtener número de hints usados
     * @returns {number} Hints usados
     */
    getHintsUsed() {
        return this.state.hintsUsed;
    }

    /**
     * Obtener hints restantes
     * @returns {number} Hints restantes
     */
    getRemainingHints() {
        return Math.max(0, this.config.maxHints - this.state.hintsUsed);
    }

    /**
     * Obtener estadísticas del sistema de hints
     * @returns {Object} Estadísticas
     */
    getHintStats() {
        return {
            hintsUsed: this.state.hintsUsed,
            maxHints: this.config.maxHints,
            hintsRemaining: this.getRemainingHints(),
            currentProblemHints: this.state.currentProblemHints.length,
            adaptiveLevel: this.state.adaptiveLevel,
            studentProfile: { ...this.state.studentProfile }
        };
    }

    /**
     * Resetear sistema para nuevo problema
     */
    reset() {
        console.log('🔄 Reseteando HintSystem...');
        
        this.state.hintsUsed = 0;
        this.state.currentProblemHints = [];
        this.state.errorHistory = [];
        
        // Mantener perfil del estudiante para adaptación continua
        // NO resetear this.state.studentProfile
        
        console.log('✅ HintSystem reseteado para nuevo problema');
    }

    /**
     * Reset completo del sistema (incluyendo perfil del estudiante)
     */
    fullReset() {
        console.log('🔄 Reset completo del HintSystem...');
        
        this.state = {
            hintsUsed: 0,
            currentProblemHints: [],
            errorHistory: [],
            adaptiveLevel: 1,
            studentProfile: this.createStudentProfile()
        };
        
        console.log('✅ HintSystem completamente reseteado');
    }

    // =====================================================
    // MÉTODOS DE DEBUG Y TESTING
    // =====================================================

    /**
     * Obtener información de debug del sistema
     * @returns {Object} Información de debug
     */
    getDebugInfo() {
        return {
            config: { ...this.config },
            state: { ...this.state },
            hintLibraryKeys: Object.keys(this.hintLibrary),
            errorPatternKeys: Object.keys(this.errorPatterns),
            isReady: this.canProvideHint()
        };
    }

    /**
     * Simular generación de hint para testing
     * @param {string} stepType - Tipo de paso a simular
     * @param {number} hintLevel - Nivel del hint
     * @returns {Object} Hint simulado
     */
    simulateHint(stepType, hintLevel = 1) {
        const mockStep = {
            operation: "100 + (-15)",
            result: "85",
            description: "Operación de prueba"
        };
        
        const mockContext = {
            currentStep: 0,
            stepType: stepType,
            recentErrorPatterns: [],
            hintLevel: hintLevel,
            studentStruggle: 'low'
        };
        
        const strategy = this.selectHintStrategy(mockContext);
        return this.createContextualHint(0, { solution: { steps: [mockStep] } }, strategy, mockContext);
    }
}

// =====================================================
// FUNCIONES UTILITARIAS GLOBALES
// =====================================================

/**
 * Función helper para crear hints personalizados
 * @param {string} message - Mensaje del hint
 * @param {string} icon - Icono a usar
 * @param {number} level - Nivel del hint
 * @returns {Object} Hint personalizado
 */
function createCustomHint(message, icon = "fas fa-lightbulb", level = 1) {
    return {
        level: level,
        type: "custom",
        strategy: "custom_hint",
        message: message,
        icon: icon,
        pedagogicalFocus: "custom_guidance"
    };
}

// =====================================================
// EXPORTACIÓN Y COMPATIBILIDAD
// =====================================================

// Para uso en navegador (script tag)
if (typeof window !== 'undefined') {
    window.HintSystem = HintSystem;
    window.createCustomHint = createCustomHint;
}

// Para uso en Node.js (desarrollo/testing)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        HintSystem,
        createCustomHint
    };
}

console.log('💡 HintSystem cargado correctamente');

/**
 * RESUMEN DEL SISTEMA DE HINTS:
 * 
 * 🧠 INTELIGENCIA PEDAGÓGICA:
 * - Hints adaptativos según el error del estudiante
 * - Perfil del estudiante que evoluciona
 * - Estrategias diferenciadas por tipo de aprendizaje
 * - Biblioteca organizada por temas matemáticos
 * 
 * 🎯 ENFOQUE CONSTRUCTIVISTA:
 * - Nivel 1: Orientación conceptual
 * - Nivel 2: Guía procedimental
 * - Nivel 3: Ayuda explícita (último recurso)
 * - No da respuestas directas hasta el final
 * 
 * 📚 BIBLIOTECA DE CONOCIMIENTO:
 * - Hints por tema matemático específico
 * - Patrones de error comunes identificados
 * - Estrategias de remediación personalizadas
 * - Feedback constructivo siempre
 * 
 * ⚡ CARACTERÍSTICAS AVANZADAS:
 * - Análisis de contexto del estudiante
 * - Adaptación en tiempo real
 * - Sistema de perfilado de aprendizaje
 * - Debug y testing integrados
 * 
 * 🎨 INTEGRACIÓN CON ECOSISTEMA:
 * - Consistente con patrones del Space Shooter
 * - Logging y debugging similar
 * - Gestión de estado estructurada
 * - Exportación compatible
 */