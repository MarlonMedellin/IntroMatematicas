/**
 * Math Quest Laboratory - Validador de Pasos
 * Sistema inteligente de validación de respuestas matemáticas paso a paso
 * 
 * Desarrollado por: Profe Marlon Arcila
 * Institución: Colegio Mayor de Antioquia
 * Versión: 1.0.0
 * 
 * Funcionalidad:
 * 🆕 Componente completamente nuevo (específico del laboratorio)
 * 🧠 Validación inteligente con múltiples estrategias
 * 🔍 Detección de patrones de error para feedback pedagógico
 * 📐 Soporte para múltiples formatos de respuesta
 */

// =====================================================
// CLASE PRINCIPAL - VALIDADOR DE PASOS
// =====================================================

/**
 * Validador inteligente de pasos matemáticos
 * Valida respuestas con múltiples estrategias y detecta patrones de error
 */
class StepValidator {
    /**
     * Constructor del validador
     * @param {Object} config - Configuración del validador
     */
    constructor(config = {}) {
        console.log('✅ Inicializando StepValidator...');
        
        // Configuración del validador
        this.config = {
            toleranceLevel: config.toleranceLevel || 'standard', // strict, standard, lenient
            enableAlternativeMethods: config.enableAlternativeMethods !== false,
            enableErrorDetection: config.enableErrorDetection !== false,
            enableFuzzyMatching: config.enableFuzzyMatching !== false,
            decimalPrecision: config.decimalPrecision || 3,
            enableLogging: config.enableLogging !== false
        };
        
        // Estrategias de validación disponibles
        this.validationStrategies = {
            'exact_match': this.exactMatch.bind(this),
            'mathematical_equivalent': this.mathematicalEquivalent.bind(this),
            'normalized_comparison': this.normalizedComparison.bind(this),
            'alternative_methods': this.alternativeMethodsCheck.bind(this),
            'fuzzy_match': this.fuzzyMatch.bind(this),
            'pattern_recognition': this.patternRecognition.bind(this)
        };
        
        // Patrones de error para detección
        this.errorPatterns = this.initializeErrorPatterns();
        
        // Normalizadores de entrada
        this.normalizers = this.initializeNormalizers();
        
        // Estadísticas de validación
        this.stats = {
            totalValidations: 0,
            successfulValidations: 0,
            errorPatternsDetected: {},
            strategiesUsed: {}
        };
        
        console.log('✅ StepValidator inicializado correctamente');
    }

    // =====================================================
    // INICIALIZACIÓN Y CONFIGURACIÓN
    // =====================================================

    /**
     * Inicializar patrones de error comunes
     * @returns {Object} Patrones de error organizados
     */
    initializeErrorPatterns() {
        return {
            // Errores con signos
            sign_error: {
                detect: (userInput, expected, step) => {
                    const userNum = this.extractNumber(userInput);
                    const expectedNum = this.extractNumber(expected);
                    return userNum === -expectedNum; // Signo opuesto
                },
                type: 'sign_error',
                description: 'Error de signo - resultado con signo opuesto',
                feedback: 'Revisá el manejo de los signos positivos y negativos'
            },
            
            // Errores off-by-one
            off_by_one: {
                detect: (userInput, expected, step) => {
                    const userNum = this.extractNumber(userInput);
                    const expectedNum = this.extractNumber(expected);
                    return Math.abs(userNum - expectedNum) === 1;
                },
                type: 'off_by_one',
                description: 'Error de ±1 en el resultado',
                feedback: 'Verificá los cálculos paso a paso, hay un pequeño error'
            },
            
            // Error de valor absoluto
            absolute_value_error: {
                detect: (userInput, expected, step) => {
                    const userNum = this.extractNumber(userInput);
                    const expectedNum = this.extractNumber(expected);
                    return Math.abs(userNum) === Math.abs(expectedNum) && userNum !== expectedNum;
                },
                type: 'absolute_value_error',
                description: 'Magnitud correcta pero signo incorrecto',
                feedback: 'El número está bien, pero revisá el signo'
            },
            
            // Error de operación
            operation_error: {
                detect: (userInput, expected, step) => {
                    if (!step.operation) return false;
                    const operation = step.operation.toLowerCase();
                    const userNum = this.extractNumber(userInput);
                    
                    // Verificar si usó la operación contraria
                    if (operation.includes('+') && operation.includes('(-')) {
                        // Debería restar pero quizás sumó
                        const parts = operation.match(/(\d+)\s*\+\s*\(\s*-(\d+)\s*\)/);
                        if (parts) {
                            const wrongResult = parseInt(parts[1]) + parseInt(parts[2]);
                            return userNum === wrongResult;
                        }
                    }
                    return false;
                },
                type: 'operation_error',
                description: 'Operación incorrecta aplicada',
                feedback: 'Verificá qué operación debés aplicar: ¿suma o resta?'
            },
            
            // Error de orden de operaciones
            order_error: {
                detect: (userInput, expected, step) => {
                    // Implementación básica para detectar problemas de orden
                    const userNum = this.extractNumber(userInput);
                    const expectedNum = this.extractNumber(expected);
                    const difference = Math.abs(userNum - expectedNum);
                    
                    // Si la diferencia es un múltiplo de 10, podría ser error de orden
                    return difference > 0 && difference % 10 === 0;
                },
                type: 'order_error',
                description: 'Posible error en el orden de operaciones',
                feedback: 'Resolvé las operaciones en el orden correcto'
            },
            
            // Error de transcripción
            transcription_error: {
                detect: (userInput, expected, step) => {
                    const userNum = this.extractNumber(userInput);
                    const expectedNum = this.extractNumber(expected);
                    
                    // Verificar si intercambió dígitos (ej: 65 por 56)
                    const userStr = Math.abs(userNum).toString();
                    const expectedStr = Math.abs(expectedNum).toString();
                    
                    if (userStr.length === expectedStr.length && userStr.length === 2) {
                        return userStr === expectedStr.split('').reverse().join('');
                    }
                    return false;
                },
                type: 'transcription_error',
                description: 'Error de transcripción de números',
                feedback: 'Verificá que escribiste el número correctamente'
            }
        };
    }

    /**
     * Inicializar normalizadores de entrada
     * @returns {Object} Funciones normalizadoras
     */
    initializeNormalizers() {
        return {
            // Normalizador básico
            basic: (input) => {
                if (!input) return '';
                return input.toString()
                           .trim()
                           .replace(/\s+/g, '')
                           .toLowerCase();
            },
            
            // Normalizador numérico
            numeric: (input) => {
                if (!input) return '';
                return input.toString()
                           .trim()
                           .replace(/\s+/g, '')
                           .replace(/,/g, '.')
                           .replace(/\+/g, '')
                           .replace(/[^\d\-\.]/g, '');
            },
            
            // Normalizador matemático
            mathematical: (input) => {
                if (!input) return '';
                return input.toString()
                           .trim()
                           .replace(/\s+/g, '')
                           .replace(/,/g, '.')
                           .replace(/\+/g, '')
                           .replace(/[\(\)]/g, '')
                           .toLowerCase();
            },
            
            // Normalizador flexible
            flexible: (input) => {
                if (!input) return '';
                return input.toString()
                           .trim()
                           .replace(/\s+/g, '')
                           .replace(/,/g, '.')
                           .replace(/cero/gi, '0')
                           .replace(/uno/gi, '1')
                           .replace(/dos/gi, '2')
                           .replace(/tres/gi, '3')
                           .replace(/cuatro/gi, '4')
                           .replace(/cinco/gi, '5')
                           .replace(/seis/gi, '6')
                           .replace(/siete/gi, '7')
                           .replace(/ocho/gi, '8')
                           .replace(/nueve/gi, '9')
                           .toLowerCase();
            }
        };
    }

    // =====================================================
    // MÉTODO PRINCIPAL DE VALIDACIÓN
    // =====================================================

    /**
     * Validar respuesta del estudiante con múltiples estrategias
     * @param {string} userInput - Respuesta del estudiante
     * @param {Object} expectedStep - Paso esperado con solución
     * @returns {boolean} Si la respuesta es correcta
     */
    validate(userInput, expectedStep) {
        console.log(`🔍 Validando: "${userInput}" vs esperado: "${expectedStep.result}"`);
        
        this.stats.totalValidations++;
        
        try {
            // Validación rápida para entradas vacías
            if (!userInput || userInput.trim() === '') {
                this.logValidation(false, 'empty_input', userInput, expectedStep.result);
                return false;
            }
            
            // Aplicar estrategias de validación en orden de prioridad
            const strategies = this.getValidationOrder();
            
            for (const strategyName of strategies) {
                const strategy = this.validationStrategies[strategyName];
                
                if (strategy) {
                    const result = strategy(userInput, expectedStep);
                    
                    if (result) {
                        this.stats.successfulValidations++;
                        this.stats.strategiesUsed[strategyName] = 
                            (this.stats.strategiesUsed[strategyName] || 0) + 1;
                        
                        this.logValidation(true, strategyName, userInput, expectedStep.result);
                        return true;
                    }
                }
            }
            
            // Si ninguna estrategia funcionó, la respuesta es incorrecta
            this.logValidation(false, 'no_strategy_matched', userInput, expectedStep.result);
            return false;
            
        } catch (error) {
            console.error('❌ Error en validación:', error);
            this.logValidation(false, 'validation_error', userInput, expectedStep.result);
            return false;
        }
    }

    /**
     * Identificar patrón de error en respuesta incorrecta
     * @param {string} userInput - Respuesta del estudiante
     * @param {Object} expectedStep - Paso esperado
     * @returns {string} Tipo de error identificado
     */
    identifyErrorPattern(userInput, expectedStep) {
        console.log(`🔍 Identificando patrón de error para: "${userInput}"`);
        
        // Aplicar detectores de patrones de error
        for (const [patternName, pattern] of Object.entries(this.errorPatterns)) {
            try {
                if (pattern.detect(userInput, expectedStep.result, expectedStep)) {
                    this.stats.errorPatternsDetected[patternName] = 
                        (this.stats.errorPatternsDetected[patternName] || 0) + 1;
                    
                    console.log(`📊 Patrón de error detectado: ${patternName}`);
                    return patternName;
                }
            } catch (error) {
                console.warn(`⚠️ Error en detector ${patternName}:`, error);
            }
        }
        
        // Si no se detecta patrón específico, clasificar como error general
        return this.classifyGeneralError(userInput, expectedStep);
    }

    // =====================================================
    // ESTRATEGIAS DE VALIDACIÓN
    // =====================================================

    /**
     * Validación por coincidencia exacta
     * @param {string} userInput - Entrada del usuario
     * @param {Object} expectedStep - Paso esperado
     * @returns {boolean} Si coincide exactamente
     */
    exactMatch(userInput, expectedStep) {
        const normalizedUser = this.normalizers.basic(userInput);
        const normalizedExpected = this.normalizers.basic(expectedStep.result);
        
        return normalizedUser === normalizedExpected;
    }

    /**
     * Validación por equivalencia matemática
     * @param {string} userInput - Entrada del usuario
     * @param {Object} expectedStep - Paso esperado
     * @returns {boolean} Si son matemáticamente equivalentes
     */
    mathematicalEquivalent(userInput, expectedStep) {
        try {
            const userNum = this.parseNumber(userInput);
            const expectedNum = this.parseNumber(expectedStep.result);
            
            if (isNaN(userNum) || isNaN(expectedNum)) {
                return false;
            }
            
            // Comparación con tolerancia para decimales
            const tolerance = Math.pow(10, -this.config.decimalPrecision);
            return Math.abs(userNum - expectedNum) < tolerance;
            
        } catch (error) {
            console.warn('⚠️ Error en equivalencia matemática:', error);
            return false;
        }
    }

    /**
     * Validación por comparación normalizada
     * @param {string} userInput - Entrada del usuario
     * @param {Object} expectedStep - Paso esperado
     * @returns {boolean} Si coinciden después de normalización
     */
    normalizedComparison(userInput, expectedStep) {
        const normalizedUser = this.normalizers.mathematical(userInput);
        const normalizedExpected = this.normalizers.mathematical(expectedStep.result);
        
        return normalizedUser === normalizedExpected;
    }

    /**
     * Validación por métodos alternativos
     * @param {string} userInput - Entrada del usuario
     * @param {Object} expectedStep - Paso esperado
     * @returns {boolean} Si coincide con algún método alternativo
     */
    alternativeMethodsCheck(userInput, expectedStep) {
        if (!this.config.enableAlternativeMethods) {
            return false;
        }
        
        // Verificar métodos alternativos si están disponibles
        if (expectedStep.alternative_methods && Array.isArray(expectedStep.alternative_methods)) {
            for (const altMethod of expectedStep.alternative_methods) {
                try {
                    if (this.normalizers.mathematical(userInput) === 
                        this.normalizers.mathematical(altMethod)) {
                        return true;
                    }
                    
                    // También verificar equivalencia numérica
                    const userNum = this.parseNumber(userInput);
                    const altNum = this.parseNumber(altMethod);
                    
                    if (!isNaN(userNum) && !isNaN(altNum) && userNum === altNum) {
                        return true;
                    }
                } catch (error) {
                    console.warn('⚠️ Error verificando método alternativo:', error);
                }
            }
        }
        
        return false;
    }

    /**
     * Validación fuzzy (aproximada)
     * @param {string} userInput - Entrada del usuario
     * @param {Object} expectedStep - Paso esperado
     * @returns {boolean} Si es aproximadamente correcta
     */
    fuzzyMatch(userInput, expectedStep) {
        if (!this.config.enableFuzzyMatching) {
            return false;
        }
        
        try {
            const userNum = this.parseNumber(userInput);
            const expectedNum = this.parseNumber(expectedStep.result);
            
            if (isNaN(userNum) || isNaN(expectedNum)) {
                return false;
            }
            
            // Permitir variación del 1-2% para respuestas muy cercanas
            const percentageDiff = Math.abs((userNum - expectedNum) / expectedNum);
            return percentageDiff < 0.02; // 2% de tolerancia
            
        } catch (error) {
            return false;
        }
    }

    /**
     * Validación por reconocimiento de patrones
     * @param {string} userInput - Entrada del usuario
     * @param {Object} expectedStep - Paso esperado
     * @returns {boolean} Si reconoce un patrón válido
     */
    patternRecognition(userInput, expectedStep) {
        const userNormalized = this.normalizers.flexible(userInput);
        const expectedNormalized = this.normalizers.flexible(expectedStep.result);
        
        // Reconocer patrones de escritura de números
        const patterns = [
            // Números con palabras
            /^(menos|negativo|-)?\s*(\d+)$/,
            // Fracciones simples
            /^(\d+)\/(\d+)$/,
            // Decimales con coma
            /^(\d+),(\d+)$/,
            // Notación con paréntesis para negativos
            /^\((\d+)\)$/
        ];
        
        for (const pattern of patterns) {
            const userMatch = userNormalized.match(pattern);
            const expectedMatch = expectedNormalized.match(pattern);
            
            if (userMatch && expectedMatch) {
                return this.comparePatternMatches(userMatch, expectedMatch);
            }
        }
        
        return false;
    }

    // =====================================================
    // MÉTODOS AUXILIARES
    // =====================================================

    /**
     * Obtener orden de estrategias de validación
     * @returns {Array} Orden de estrategias a aplicar
     */
    getValidationOrder() {
        const baseOrder = [
            'exact_match',
            'mathematical_equivalent',
            'normalized_comparison'
        ];
        
        if (this.config.enableAlternativeMethods) {
            baseOrder.push('alternative_methods');
        }
        
        if (this.config.enableFuzzyMatching) {
            baseOrder.push('fuzzy_match');
        }
        
        baseOrder.push('pattern_recognition');
        
        return baseOrder;
    }

    /**
     * Parsear número de string con múltiples formatos
     * @param {string} input - String a parsear
     * @returns {number} Número parseado
     */
    parseNumber(input) {
        if (typeof input === 'number') {
            return input;
        }
        
        if (!input || typeof input !== 'string') {
            return NaN;
        }
        
        // Normalizar entrada para parsing
        let normalized = input.trim()
                             .replace(/,/g, '.')
                             .replace(/\s+/g, '')
                             .replace(/^\++/, '') // Remover + al inicio
                             .replace(/[^\d\-\.]/g, ''); // Solo dígitos, - y .
        
        // Manejar casos especiales
        if (normalized === '' || normalized === '-') {
            return NaN;
        }
        
        // Convertir a número
        const parsed = parseFloat(normalized);
        return isNaN(parsed) ? NaN : parsed;
    }

    /**
     * Extraer número de una respuesta compleja
     * @param {string} input - Entrada a procesar
     * @returns {number} Número extraído
     */
    extractNumber(input) {
        if (typeof input === 'number') {
            return input;
        }
        
        // Buscar números en la cadena
        const numberMatch = input.toString().match(/-?\d+\.?\d*/);
        return numberMatch ? this.parseNumber(numberMatch[0]) : NaN;
    }

    /**
     * Clasificar error general cuando no se detecta patrón específico
     * @param {string} userInput - Entrada del usuario
     * @param {Object} expectedStep - Paso esperado
     * @returns {string} Tipo de error general
     */
    classifyGeneralError(userInput, expectedStep) {
        const userNum = this.parseNumber(userInput);
        const expectedNum = this.parseNumber(expectedStep.result);
        
        if (isNaN(userNum)) {
            return 'invalid_format';
        }
        
        if (isNaN(expectedNum)) {
            return 'expected_invalid';
        }
        
        const difference = Math.abs(userNum - expectedNum);
        
        if (difference > 100) {
            return 'large_magnitude_error';
        } else if (difference > 10) {
            return 'medium_magnitude_error';
        } else if (difference > 1) {
            return 'small_magnitude_error';
        } else {
            return 'minor_calculation_error';
        }
    }

    /**
     * Comparar coincidencias de patrones regex
     * @param {Array} userMatch - Coincidencia del usuario
     * @param {Array} expectedMatch - Coincidencia esperada
     * @returns {boolean} Si las coincidencias son equivalentes
     */
    comparePatternMatches(userMatch, expectedMatch) {
        if (!userMatch || !expectedMatch) {
            return false;
        }
        
        // Comparar grupos capturados del regex
        for (let i = 1; i < Math.min(userMatch.length, expectedMatch.length); i++) {
            if (userMatch[i] !== expectedMatch[i]) {
                return false;
            }
        }
        
        return true;
    }

    /**
     * Obtener información del patrón de error
     * @param {string} errorType - Tipo de error
     * @returns {Object} Información del error
     */
    getErrorInfo(errorType) {
        const pattern = this.errorPatterns[errorType];
        
        if (pattern) {
            return {
                type: pattern.type,
                description: pattern.description,
                feedback: pattern.feedback
            };
        }
        
        // Información por defecto para errores no catalogados
        return {
            type: errorType,
            description: 'Error en el cálculo matemático',
            feedback: 'Revisá tu cálculo paso a paso'
        };
    }

    // =====================================================
    // LOGGING Y ESTADÍSTICAS
    // =====================================================

    /**
     * Registrar resultado de validación
     * @param {boolean} success - Si fue exitosa
     * @param {string} strategy - Estrategia utilizada
     * @param {string} userInput - Entrada del usuario
     * @param {string} expected - Respuesta esperada
     */
    logValidation(success, strategy, userInput, expected) {
        if (!this.config.enableLogging) {
            return;
        }
        
        const logMessage = success ? 
            `✅ Validación exitosa: "${userInput}" = "${expected}" (${strategy})` :
            `❌ Validación fallida: "${userInput}" ≠ "${expected}" (${strategy})`;
        
        console.log(logMessage);
    }

    /**
     * Obtener estadísticas de validación
     * @returns {Object} Estadísticas completas
     */
    getValidationStats() {
        const successRate = this.stats.totalValidations > 0 ? 
            (this.stats.successfulValidations / this.stats.totalValidations) * 100 : 0;
        
        return {
            totalValidations: this.stats.totalValidations,
            successfulValidations: this.stats.successfulValidations,
            successRate: Math.round(successRate * 100) / 100,
            errorPatternsDetected: { ...this.stats.errorPatternsDetected },
            strategiesUsed: { ...this.stats.strategiesUsed },
            mostCommonErrors: this.getMostCommonErrors(),
            mostUsedStrategy: this.getMostUsedStrategy()
        };
    }

    /**
     * Obtener errores más comunes
     * @returns {Array} Lista de errores ordenada por frecuencia
     */
    getMostCommonErrors() {
        const errors = Object.entries(this.stats.errorPatternsDetected);
        return errors.sort((a, b) => b[1] - a[1])
                     .slice(0, 5)
                     .map(([error, count]) => ({ error, count }));
    }

    /**
     * Obtener estrategia más utilizada
     * @returns {string} Estrategia más frecuente
     */
    getMostUsedStrategy() {
        const strategies = Object.entries(this.stats.strategiesUsed);
        if (strategies.length === 0) return 'none';
        
        return strategies.sort((a, b) => b[1] - a[1])[0][0];
    }

    // =====================================================
    // GESTIÓN DE CONFIGURACIÓN
    // =====================================================

    /**
     * Actualizar configuración del validador
     * @param {Object} newConfig - Nueva configuración
     */
    updateConfig(newConfig) {
        console.log('⚙️ Actualizando configuración del validador...');
        
        this.config = { ...this.config, ...newConfig };
        
        console.log('✅ Configuración actualizada:', this.config);
    }

    /**
     * Resetear estadísticas
     */
    resetStats() {
        console.log('🔄 Reseteando estadísticas del validador...');
        
        this.stats = {
            totalValidations: 0,
            successfulValidations: 0,
            errorPatternsDetected: {},
            strategiesUsed: {}
        };
        
        console.log('✅ Estadísticas reseteadas');
    }

    /**
     * Obtener información de debug
     * @returns {Object} Información completa del sistema
     */
    getDebugInfo() {
        return {
            config: { ...this.config },
            stats: { ...this.stats },
            availableStrategies: Object.keys(this.validationStrategies),
            errorPatterns: Object.keys(this.errorPatterns),
            normalizers: Object.keys(this.normalizers),
            validationOrder: this.getValidationOrder()
        };
    }

    // =====================================================
    // MÉTODOS DE TESTING
    // =====================================================

    /**
     * Probar validación con casos de prueba
     * @param {Array} testCases - Casos de prueba
     * @returns {Object} Resultados de las pruebas
     */
    runTests(testCases) {
        console.log('🧪 Ejecutando pruebas del validador...');
        
        const results = {
            passed: 0,
            failed: 0,
            details: []
        };
        
        for (const testCase of testCases) {
            const result = this.validate(testCase.input, testCase.expected);
            const passed = result === testCase.shouldPass;
            
            if (passed) {
                results.passed++;
            } else {
                results.failed++;
            }
            
            results.details.push({
                input: testCase.input,
                expected: testCase.expected.result,
                shouldPass: testCase.shouldPass,
                actualResult: result,
                passed: passed
            });
        }
        
        console.log(`✅ Pruebas completadas: ${results.passed} pasaron, ${results.failed} fallaron`);
        return results;
    }
}

// =====================================================
// FUNCIONES UTILITARIAS GLOBALES
// =====================================================

/**
 * Crear casos de prueba básicos para el validador
 * @returns {Array} Casos de prueba estándar
 */
function createBasicTestCases() {
    return [
        // Casos que deben pasar
        {
            input: "85",
            expected: { result: "85" },
            shouldPass: true
        },
        {
            input: "-3",
            expected: { result: "-3" },
            shouldPass: true
        },
        {
            input: "0",
            expected: { result: "0" },
            shouldPass: true
        },
        {
            input: "+85",
            expected: { result: "85" },
            shouldPass: true
        },
        {
            input: "85.0",
            expected: { result: "85" },
            shouldPass: true
        },
        
        // Casos que NO deben pasar
        {
            input: "86",
            expected: { result: "85" },
            shouldPass: false
        },
        {
            input: "-85",
            expected: { result: "85" },
            shouldPass: false
        },
        {
            input: "abc",
            expected: { result: "85" },
            shouldPass: false
        }
    ];
}

/**
 * Validar respuesta simple (función helper)
 * @param {string} userInput - Entrada del usuario
 * @param {string} expectedAnswer - Respuesta esperada
 * @returns {boolean} Si es correcta
 */
function quickValidate(userInput, expectedAnswer) {
    const validator = new StepValidator();
    return validator.validate(userInput, { result: expectedAnswer });
}

// =====================================================
// EXPORTACIÓN Y COMPATIBILIDAD
// =====================================================

// Para uso en navegador (script tag)
if (typeof window !== 'undefined') {
    window.StepValidator = StepValidator;
    window.createBasicTestCases = createBasicTestCases;
    window.quickValidate = quickValidate;
}

// Para uso en Node.js (desarrollo/testing)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        StepValidator,
        createBasicTestCases,
        quickValidate
    };
}

console.log('✅ StepValidator cargado correctamente');

/**
 * RESUMEN DEL VALIDADOR DE PASOS:
 * 
 * 🧠 VALIDACIÓN INTELIGENTE:
 * - 6 estrategias de validación diferentes
 * - Validación exacta, matemática, normalizada y fuzzy
 * - Soporte para métodos alternativos de resolución
 * - Reconocimiento de patrones de escritura
 * 
 * 🔍 DETECCIÓN DE ERRORES:
 * - 6 patrones de error comunes identificados
 * - Feedback específico para cada tipo de error
 * - Análisis de tendencias de error
 * - Clasificación automática de errores
 * 
 * 📐 FLEXIBILIDAD:
 * - Múltiples formatos de entrada aceptados
 * - Normalización inteligente de respuestas
 * - Tolerancia configurable para decimales
 * - Soporte para respuestas en español
 * 
 * 📊 ANÁLISIS Y DEBUGGING:
 * - Estadísticas completas de validación
 * - Sistema de logging detallado
 * - Casos de prueba integrados
 * - Información de debug completa
 * 
 * 🎯 PEDAGÓGICO:
 * - Feedback constructivo para errores
 * - Detección de patrones de confusión
 * - Adaptable según el nivel del estudiante
 * - Enfoque en el aprendizaje, no solo la corrección
 */