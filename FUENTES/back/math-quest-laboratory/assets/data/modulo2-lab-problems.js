/**
 * Math Quest Laboratory - Módulo 2: Números Primos, MCM y MCD
 * Datos de configuración y problemas para experimentos de laboratorio
 * Basado en problemas del Space Shooter adaptados para resolución paso a paso
 * 
 * Desarrollado por: Profe Marlon Arcila
 * Institución: Colegio Mayor de Antioquia
 * Versión: 1.0.0
 */

// =====================================================
// CONFIGURACIÓN DEL MÓDULO 2 - NÚMEROS PRIMOS, MCM Y MCD
// =====================================================

const Modulo2LabConfig = {
    moduleInfo: {
        id: "modulo2_primos_lab",
        title: "🔬 Math Quest Laboratory - Números Primos, MCM y MCD",
        subtitle: "Experimenta con factorización y optimización matemática",
        instruction: "Resuelve experimentos de optimización espacial paso a paso",
        totalExperiments: 10,
        estimatedTime: "4-6 minutos por experimento",
        difficulty: "★★★"
    },
    
    // Configuración de la mecánica del juego
    gameplay: {
        allowHints: true,
        maxHintsPerProblem: 3,
        showStepByStep: true,
        enableCalculator: false,  // Forzar cálculo mental para aprendizaje
        timeRecommendation: "Sin límite de tiempo - enfócate en los procesos",
        allowRetry: true,
        showProgress: true
    },
    
    // Sistema de puntuación adaptado del Space Shooter
    scoring: {
        correctStep: 60,          // Más puntos por la complejidad
        correctProblem: 250,      // Bonus por completar problema completo
        bonusIndependence: 120,   // Bonus por resolver sin pistas
        hintPenalty: -30,         // Penalización por usar pistas
        errorPenalty: -15,        // Penalización por errores
        perfectProblem: 350       // Bonus por resolver perfecto sin errores
    },
    
    // Configuración pedagógica
    pedagogical: {
        feedbackLevel: "detailed",          // Feedback más detallado
        errorPatterns: true,                // Detectar patrones de error
        adaptiveHints: true,                // Pistas adaptativas según el error
        contextualFeedback: true,           // Feedback contextualizado por carrera
        celebrateProgress: true,            // Celebrar pequeños logros
        emphasizeProcess: true              // Enfatizar proceso sobre resultado
    },
    
    // Configuración visual (reutiliza del Space Shooter)
    visual: {
        primaryColor: "#00AEAC",
        successColor: "#00ff88", 
        errorColor: "#ff4444",
        warningColor: "#E9901E",
        particleCount: 10,
        animationSpeed: "normal"
    },
    
    // Configuración para diferentes carreras del Colegio Mayor
    careerContexts: {
        gastronomia: {
            theme: "optimización de entregas y distribución de ingredientes",
            icon: "fas fa-utensils",
            examples: "planificación de menús cíclicos, distribución de personal"
        },
        turismo: {
            theme: "programación de promociones y organización de grupos",
            icon: "fas fa-plane", 
            examples: "grupos de turistas, descuentos óptimos"
        },
        arquitectura: {
            theme: "cálculo de medidas exactas y distribución de materiales",
            icon: "fas fa-drafting-compass",
            examples: "optimización de recursos, cronogramas de trabajo"
        },
        biotecnologia: {
            theme: "sincronización de experimentos y distribución de muestras",
            icon: "fas fa-microscope",
            examples: "programación de análisis, optimización de procesos"
        },
        comunicacion: {
            theme: "programación de contenidos y análisis de audiencias",
            icon: "fas fa-broadcast-tower",
            examples: "ciclos de publicación, segmentación de audiencia"
        }
    }
};

// =====================================================
// BANCO DE PROBLEMAS - MÓDULO 2
// =====================================================

const Modulo2LabProblems = {
    subject: "Números Primos, MCM y MCD",
    description: "Experimentos de laboratorio espacial con factorización, optimización y patrones matemáticos",
    
    moduleInfo: {
        totalProblems: 10,
        averageTime: "4-6 minutos",
        difficulty: "★★★",
        focusAreas: ["factorización", "numeros_primos", "mcm", "mcd", "divisibilidad", "optimización"]
    },
    
    // =====================================================
    // PROBLEMAS DEL LABORATORIO (Adaptados de Space Shooter)
    // =====================================================
    
    problems: [
        // Problema 1: Ondas de enemigos (MCM)
        {
            id: "lab_primos_001",
            title: "Experimento: Sincronización de Ondas Espaciales",
            
            context: {
                narrative: "Los enemigos aparecen en ondas cada 6, 8 y 12 segundos. Necesitas calcular cada cuántos segundos aparecerán todos los tipos de enemigos juntos para coordinar tu estrategia defensiva.",
                question: "¿Cada cuántos segundos coincidirán todas las ondas de enemigos?",
                visual_hint: "enemy_wave_synchronization",
                career_context: {
                    gastronomia: "Como chef, sincronizas entregas de ingredientes que llegan en ciclos diferentes",
                    turismo: "Como agente, coordinas promociones que se renuevan en períodos distintos",
                    biotecnologia: "En laboratorio, sincronizas equipos que tienen ciclos de análisis diferentes"
                }
            },
            
            solution: {
                steps: [
                    { 
                        id: 1, 
                        description: "Identificar los períodos de cada onda", 
                        operation: "6, 8, 12", 
                        result: "Períodos identificados",
                        explanation: "Cada tipo de enemigo tiene su propio ciclo de aparición"
                    },
                    { 
                        id: 2, 
                        description: "Encontrar factores primos de 6", 
                        operation: "6 = 2 × 3", 
                        result: "2 × 3",
                        explanation: "Descomponemos 6 en sus factores primos"
                    },
                    { 
                        id: 3, 
                        description: "Encontrar factores primos de 8", 
                        operation: "8 = 2³", 
                        result: "2³",
                        explanation: "Descomponemos 8 como potencia de 2"
                    },
                    { 
                        id: 4, 
                        description: "Encontrar factores primos de 12", 
                        operation: "12 = 2² × 3", 
                        result: "2² × 3",
                        explanation: "Descomponemos 12 en sus factores primos"
                    },
                    { 
                        id: 5, 
                        description: "Calcular MCM con mayores exponentes", 
                        operation: "MCM = 2³ × 3", 
                        result: "24",
                        explanation: "Tomamos la mayor potencia de cada factor primo"
                    }
                ],
                final_answer: "24",
                alternative_methods: [
                    "Múltiplos de 6: 6, 12, 18, 24...",
                    "Múltiplos de 8: 8, 16, 24...",
                    "Múltiplos de 12: 12, 24...",
                    "Primer común: 24"
                ],
                common_errors: ["12", "48", "144", "6"]
            },
            
            hints: [
                {
                    level: 1,
                    type: "conceptual",
                    message: "El MCM (Mínimo Común Múltiplo) es el menor número que es múltiplo de todos los números dados",
                    icon: "fas fa-info-circle"
                },
                {
                    level: 2, 
                    type: "guidance",
                    message: "Descompón cada número en factores primos: 6 = 2×3, 8 = 2³, 12 = 2²×3",
                    icon: "fas fa-sitemap"
                },
                {
                    level: 3,
                    type: "explicit", 
                    message: "MCM = 2³ × 3 = 8 × 3 = 24 segundos",
                    icon: "fas fa-calculator"
                }
            ],
            
            difficulty: 3,
            topic: "mcm_factorización", 
            estimatedTime: 300000,  // 5 minutos
            tags: ["mcm", "factorización", "sincronización"]
        },

        // Problema 2: Distribución de misiles (MCD)
        {
            id: "lab_primos_002", 
            title: "Experimento: Distribución Óptima de Arsenal",
            
            context: {
                narrative: "Tienes 18 misiles rojos y 24 misiles azules. Quieres distribuirlos en grupos iguales para diferentes naves, usando el mayor número de misiles posible por grupo sin que sobre ninguno.",
                question: "¿Cuál es el máximo número de misiles que puede tener cada grupo?",
                visual_hint: "missile_distribution",
                career_context: {
                    gastronomia: "Distribuyes ingredientes en porciones iguales sin desperdicios",
                    turismo: "Organizas grupos de turistas del mismo tamaño de manera óptima"
                }
            },
            
            solution: {
                steps: [
                    { 
                        id: 1, 
                        description: "Identificar las cantidades a distribuir", 
                        operation: "18 y 24", 
                        result: "Cantidades identificadas",
                        explanation: "Tenemos 18 misiles rojos y 24 azules para distribuir"
                    },
                    { 
                        id: 2, 
                        description: "Factorizar 18 en números primos", 
                        operation: "18 = 2 × 3²", 
                        result: "2 × 3²",
                        explanation: "18 = 2 × 9 = 2 × 3²"
                    },
                    { 
                        id: 3, 
                        description: "Factorizar 24 en números primos", 
                        operation: "24 = 2³ × 3", 
                        result: "2³ × 3",
                        explanation: "24 = 8 × 3 = 2³ × 3"
                    },
                    { 
                        id: 4, 
                        description: "Calcular MCD con menores exponentes", 
                        operation: "MCD = 2¹ × 3¹", 
                        result: "6",
                        explanation: "Tomamos la menor potencia de cada factor común"
                    }
                ],
                final_answer: "6",
                alternative_methods: [
                    "Divisores de 18: 1, 2, 3, 6, 9, 18",
                    "Divisores de 24: 1, 2, 3, 4, 6, 8, 12, 24",
                    "Mayor divisor común: 6"
                ],
                common_errors: ["12", "72", "3", "2"]
            },
            
            hints: [
                {
                    level: 1,
                    type: "conceptual", 
                    message: "El MCD es el mayor número que divide exactamente a todos los números dados",
                    icon: "fas fa-divide"
                },
                {
                    level: 2,
                    type: "guidance",
                    message: "Factoriza ambos números: 18 = 2×3² y 24 = 2³×3",
                    icon: "fas fa-sitemap"
                },
                {
                    level: 3,
                    type: "explicit",
                    message: "MCD = 2¹ × 3¹ = 2 × 3 = 6 misiles por grupo",
                    icon: "fas fa-equals"
                }
            ],
            
            difficulty: 3,
            topic: "mcd_factorización",
            estimatedTime: 300000,
            tags: ["mcd", "factorización", "distribución"]
        },

        // Problema 3: Identificación de números primos
        {
            id: "lab_primos_003",
            title: "Experimento: Análisis de Códigos Seguros",
            
            context: {
                narrative: "Un power-up especial aparece cada 7 segundos con un código de seguridad. Para desbloquearlo, necesitas verificar si 7 es un número primo analizando sus divisores.",
                question: "¿Es 7 un número primo? Demuestra tu respuesta analizando sus divisores.",
                visual_hint: "prime_code_analysis",
                career_context: {
                    comunicacion: "En criptografía, los números primos son fundamentales para la seguridad",
                    biotecnologia: "Los códigos de identificación de muestras usan números primos"
                }
            },
            
            solution: {
                steps: [
                    { 
                        id: 1, 
                        description: "Definir número primo", 
                        operation: "Número > 1 con exactamente 2 divisores", 
                        result: "Definición establecida",
                        explanation: "Un primo solo se divide por 1 y por sí mismo"
                    },
                    { 
                        id: 2, 
                        description: "Verificar si 7 > 1", 
                        operation: "7 > 1", 
                        result: "Sí",
                        explanation: "7 cumple la primera condición"
                    },
                    { 
                        id: 3, 
                        description: "Buscar divisores de 7", 
                        operation: "¿7 ÷ 1?, ¿7 ÷ 2?, ¿7 ÷ 3?, ...", 
                        result: "Solo 1 y 7",
                        explanation: "Probamos divisores desde 1 hasta √7 ≈ 2.6"
                    },
                    { 
                        id: 4, 
                        description: "Contar divisores exactos", 
                        operation: "Divisores: 1, 7", 
                        result: "2 divisores",
                        explanation: "Solo 1 y 7 dividen exactamente a 7"
                    }
                ],
                final_answer: "Sí, 7 es primo",
                alternative_methods: [
                    "Verificar: 7 ÷ 2 = 3.5 (no exacto)",
                    "Verificar: 7 ÷ 3 = 2.33... (no exacto)", 
                    "Solo 1 y 7 dividen exactamente"
                ],
                common_errors: ["No es primo", "3 divisores", "Es compuesto"]
            },
            
            hints: [
                {
                    level: 1,
                    type: "conceptual",
                    message: "Un número primo tiene exactamente dos divisores: 1 y él mismo",
                    icon: "fas fa-key"
                },
                {
                    level: 2,
                    type: "guidance", 
                    message: "Prueba dividir 7 entre 2, 3, 4, 5, 6. ¿Alguna división es exacta?",
                    icon: "fas fa-search"
                },
                {
                    level: 3,
                    type: "explicit",
                    message: "7 ÷ 2 = 3.5, 7 ÷ 3 = 2.33..., etc. Solo 1 y 7 dan división exacta",
                    icon: "fas fa-check"
                }
            ],
            
            difficulty: 2,
            topic: "números_primos",
            estimatedTime: 240000,
            tags: ["primos", "divisores", "definición"]
        },

        // Problema 4: Divisibilidad espacial
        {
            id: "lab_primos_004", 
            title: "Experimento: Formación de Asteroides",
            
            context: {
                narrative: "Los asteroides vienen en formaciones rectangulares de 15 unidades cada una. Necesitas verificar si se pueden reorganizar en grupos de 5 asteroides sin que sobre ninguno.",
                question: "¿Es 15 divisible por 5? Demuestra el proceso de división.",
                visual_hint: "asteroid_formation",
                career_context: {
                    arquitectura: "Verificas si las medidas de materiales son compatibles con tu diseño",
                    gastronomia: "Calculas si las porciones se pueden dividir exactamente entre comensales"
                }
            },
            
            solution: {
                steps: [
                    { 
                        id: 1, 
                        description: "Identificar dividendo y divisor", 
                        operation: "15 ÷ 5", 
                        result: "División planteada",
                        explanation: "Queremos dividir 15 asteroides en grupos de 5"
                    },
                    { 
                        id: 2, 
                        description: "Realizar la división", 
                        operation: "15 ÷ 5 = 3", 
                        result: "3",
                        explanation: "15 entre 5 es igual a 3"
                    },
                    { 
                        id: 3, 
                        description: "Verificar con multiplicación", 
                        operation: "5 × 3 = 15", 
                        result: "15",
                        explanation: "La multiplicación confirma el resultado"
                    },
                    { 
                        id: 4, 
                        description: "Determinar el residuo", 
                        operation: "15 - (5 × 3)", 
                        result: "0",
                        explanation: "No hay residuo, la división es exacta"
                    }
                ],
                final_answer: "Sí, 15 es divisible por 5",
                alternative_methods: [
                    "Criterio de divisibilidad: 15 termina en 5",
                    "Contar: 5, 10, 15 (3 grupos de 5)",
                    "15 = 5 + 5 + 5"
                ],
                common_errors: ["No es divisible", "Residuo 1", "2.5"]
            },
            
            hints: [
                {
                    level: 1,
                    type: "conceptual",
                    message: "Un número es divisible por otro si la división es exacta (residuo = 0)",
                    icon: "fas fa-percentage"
                },
                {
                    level: 2,
                    type: "guidance",
                    message: "Calcula 15 ÷ 5. ¿El resultado es un número entero?",
                    icon: "fas fa-calculator"
                },
                {
                    level: 3,
                    type: "explicit",
                    message: "15 ÷ 5 = 3 exacto. Como no hay residuo, 15 SÍ es divisible por 5",
                    icon: "fas fa-check-circle"
                }
            ],
            
            difficulty: 1,
            topic: "divisibilidad",
            estimatedTime: 180000,
            tags: ["divisibilidad", "división_exacta", "verificación"]
        },

        // Problema 5: Sistema de recarga sincronizado (MCM)
        {
            id: "lab_primos_005",
            title: "Experimento: Sincronización de Sistemas",
            
            context: {
                narrative: "Tu láser se recarga cada 4 segundos y tu escudo se recarga cada 10 segundos. Necesitas calcular cada cuántos segundos ambos sistemas se recargarán simultáneamente para planificar tu estrategia.",
                question: "¿Cada cuántos segundos coinciden las recargas del láser y el escudo?",
                visual_hint: "system_synchronization",
                career_context: {
                    biotecnologia: "Sincronizas equipos de laboratorio que tienen ciclos de calibración diferentes",
                    gastronomia: "Coordinas hornos y equipos que tienen tiempos de ciclo distintos"
                }
            },
            
            solution: {
                steps: [
                    { 
                        id: 1, 
                        description: "Identificar los períodos de recarga", 
                        operation: "Láser: 4s, Escudo: 10s", 
                        result: "4 y 10",
                        explanation: "Cada sistema tiene su propio ciclo de recarga"
                    },
                    { 
                        id: 2, 
                        description: "Factorizar 4", 
                        operation: "4 = 2²", 
                        result: "2²",
                        explanation: "4 es una potencia de 2"
                    },
                    { 
                        id: 3, 
                        description: "Factorizar 10", 
                        operation: "10 = 2 × 5", 
                        result: "2 × 5",
                        explanation: "10 tiene factores 2 y 5"
                    },
                    { 
                        id: 4, 
                        description: "Calcular MCM", 
                        operation: "MCM = 2² × 5", 
                        result: "20",
                        explanation: "Tomamos la mayor potencia de cada factor primo"
                    }
                ],
                final_answer: "20",
                alternative_methods: [
                    "Múltiplos de 4: 4, 8, 12, 16, 20...",
                    "Múltiplos de 10: 10, 20...",
                    "Primer común: 20"
                ],
                common_errors: ["40", "14", "2", "50"]
            },
            
            hints: [
                {
                    level: 1,
                    type: "conceptual",
                    message: "Buscamos el momento en que ambos ciclos coinciden por primera vez",
                    icon: "fas fa-sync"
                },
                {
                    level: 2,
                    type: "guidance",
                    message: "Factoriza: 4 = 2² y 10 = 2×5. Luego calcula el MCM",
                    icon: "fas fa-sitemap"
                },
                {
                    level: 3,
                    type: "explicit",
                    message: "MCM(4,10) = 2² × 5 = 4 × 5 = 20 segundos",
                    icon: "fas fa-clock"
                }
            ],
            
            difficulty: 2,
            topic: "mcm_aplicación",
            estimatedTime: 240000,
            tags: ["mcm", "sincronización", "ciclos"]
        },

        // Problema 6: Distribución de naves y drones (MCD)
        {
            id: "lab_primos_006",
            title: "Experimento: Organización de Flota Espacial",
            
            context: {
                narrative: "Hay 36 naves espaciales y 48 drones de apoyo que deben organizarse en escuadrones iguales. Cada escuadrón debe tener el mismo número de naves y el mismo número de drones, usando la mayor cantidad posible.",
                question: "¿Cuál es el máximo número de unidades que puede tener cada tipo en cada escuadrón?",
                visual_hint: "fleet_organization",
                career_context: {
                    turismo: "Organizas grupos de turistas de diferentes tipos de manera equitativa",
                    gastronomia: "Distribuyes ingredientes de distintos tipos en porciones iguales"
                }
            },
            
            solution: {
                steps: [
                    { 
                        id: 1, 
                        description: "Identificar las cantidades", 
                        operation: "36 naves, 48 drones", 
                        result: "36 y 48",
                        explanation: "Necesitamos encontrar el MCD de 36 y 48"
                    },
                    { 
                        id: 2, 
                        description: "Factorizar 36", 
                        operation: "36 = 2² × 3²", 
                        result: "2² × 3²",
                        explanation: "36 = 4 × 9 = 2² × 3²"
                    },
                    { 
                        id: 3, 
                        description: "Factorizar 48", 
                        operation: "48 = 2⁴ × 3", 
                        result: "2⁴ × 3",
                        explanation: "48 = 16 × 3 = 2⁴ × 3"
                    },
                    { 
                        id: 4, 
                        description: "Calcular MCD", 
                        operation: "MCD = 2² × 3¹", 
                        result: "12",
                        explanation: "Tomamos la menor potencia de cada factor común"
                    },
                    { 
                        id: 5, 
                        description: "Calcular distribución", 
                        operation: "36÷12=3 naves, 48÷12=4 drones", 
                        result: "3 naves, 4 drones por escuadrón",
                        explanation: "Cada escuadrón tendrá 3 naves y 4 drones"
                    }
                ],
                final_answer: "12 unidades por escuadrón (3 naves + 4 drones)",
                alternative_methods: [
                    "Buscar divisores comunes de 36 y 48",
                    "El mayor divisor común es 12"
                ],
                common_errors: ["24", "6", "144", "18"]
            },
            
            hints: [
                {
                    level: 1,
                    type: "conceptual",
                    message: "Necesitas el MCD para encontrar la mayor distribución posible",
                    icon: "fas fa-users"
                },
                {
                    level: 2,
                    type: "guidance",
                    message: "Factoriza 36 = 2²×3² y 48 = 2⁴×3, luego encuentra el MCD",
                    icon: "fas fa-sitemap"
                },
                {
                    level: 3,
                    type: "explicit",
                    message: "MCD(36,48) = 2²×3 = 12. Cada escuadrón: 3 naves y 4 drones",
                    icon: "fas fa-calculator"
                }
            ],
            
            difficulty: 3,
            topic: "mcd_complejo",
            estimatedTime: 360000,
            tags: ["mcd", "distribución", "organización"]
        },

        // Problema 7: Análisis de números primos
        {
            id: "lab_primos_007", 
            title: "Experimento: Códigos de Seguridad Avanzados",
            
            context: {
                narrative: "Un jefe final tiene 23 puntos de vida, codificados como medida de seguridad. Para determinar la estrategia de ataque, necesitas verificar si 23 es un número primo.",
                question: "¿Es 23 un número primo? Analiza sistemáticamente sus posibles divisores.",
                visual_hint: "prime_security_check",
                career_context: {
                    comunicacion: "Los sistemas de encriptación verifican la naturaleza prima de los números",
                    biotecnologia: "Los códigos de muestras biológicas usan propiedades de números primos"
                }
            },
            
            solution: {
                steps: [
                    { 
                        id: 1, 
                        description: "Establecer rango de verificación", 
                        operation: "Verificar hasta √23 ≈ 4.8", 
                        result: "Probar hasta 4",
                        explanation: "Solo necesitamos verificar divisores hasta la raíz cuadrada"
                    },
                    { 
                        id: 2, 
                        description: "Probar divisibilidad por 2", 
                        operation: "23 ÷ 2 = 11.5", 
                        result: "No es exacto",
                        explanation: "23 es impar, no es divisible por 2"
                    },
                    { 
                        id: 3, 
                        description: "Probar divisibilidad por 3", 
                        operation: "23 ÷ 3 = 7.67...", 
                        result: "No es exacto",
                        explanation: "23 no es múltiplo de 3"
                    },
                    { 
                        id: 4, 
                        description: "Probar divisibilidad por 4", 
                        operation: "23 ÷ 4 = 5.75", 
                        result: "No es exacto",
                        explanation: "23 no es múltiplo de 4"
                    },
                    { 
                        id: 5, 
                        description: "Conclusión", 
                        operation: "Solo divisores: 1 y 23", 
                        result: "23 es primo",
                        explanation: "Al tener exactamente 2 divisores, 23 es primo"
                    }
                ],
                final_answer: "Sí, 23 es primo",
                alternative_methods: [
                    "Verificar criterios de divisibilidad",
                    "Comprobar que no es múltiplo de ningún primo menor"
                ],
                common_errors: ["No es primo", "Divisible por 7", "Es compuesto"]
            },
            
            hints: [
                {
                    level: 1,
                    type: "conceptual",
                    message: "Para verificar si un número es primo, prueba dividirlo por todos los números hasta su raíz cuadrada",
                    icon: "fas fa-search"
                },
                {
                    level: 2,
                    type: "guidance",
                    message: "√23 ≈ 4.8, así que prueba dividir 23 entre 2, 3 y 4",
                    icon: "fas fa-calculator"
                },
                {
                    level: 3,
                    type: "explicit",
                    message: "23÷2=11.5, 23÷3=7.67, 23÷4=5.75. Ninguna es exacta, así que 23 es primo",
                    icon: "fas fa-check"
                }
            ],
            
            difficulty: 2,
            topic: "verificación_primos",
            estimatedTime: 240000,
            tags: ["primos", "verificación", "análisis"]
        },

        // Problema 8: Conteo de números primos
        {
            id: "lab_primos_008",
            title: "Experimento: Análisis de Frecuencia Espacial",
            
            context: {
                narrative: "En el rango de frecuencias entre 10 y 20, necesitas identificar cuáles corresponden a números primos para configurar los escáneres de la nave correctamente.",
                question: "¿Cuántos números primos hay entre 10 y 20? Lista cada uno y verifica su condición.",
                visual_hint: "prime_frequency_analysis",
                career_context: {
                    comunicacion: "Identificas frecuencias primarias para evitar interferencias en transmisiones",
                    biotecnologia: "Seleccionas secuencias específicas para análisis genético"
                }
            },
            
            solution: {
                steps: [
                    { 
                        id: 1, 
                        description: "Listar números del rango", 
                        operation: "11, 12, 13, 14, 15, 16, 17, 18, 19", 
                        result: "Números identificados",
                        explanation: "Números entre 10 y 20 (excluyendo extremos)"
                    },
                    { 
                        id: 2, 
                        description: "Verificar 11", 
                        operation: "11 ÷ 2, 11 ÷ 3", 
                        result: "Solo 1 y 11 dividen",
                        explanation: "11 es primo"
                    },
                    { 
                        id: 3, 
                        description: "Verificar 13", 
                        operation: "13 ÷ 2, 13 ÷ 3", 
                        result: "Solo 1 y 13 dividen",
                        explanation: "13 es primo"
                    },
                    { 
                        id: 4, 
                        description: "Verificar 17", 
                        operation: "17 ÷ 2, 17 ÷ 3, 17 ÷ 4", 
                        result: "Solo 1 y 17 dividen",
                        explanation: "17 es primo"
                    },
                    { 
                        id: 5, 
                        description: "Verificar 19", 
                        operation: "19 ÷ 2, 19 ÷ 3, 19 ÷ 4", 
                        result: "Solo 1 y 19 dividen",
                        explanation: "19 es primo"
                    },
                    { 
                        id: 6, 
                        description: "Contar primos encontrados", 
                        operation: "11, 13, 17, 19", 
                        result: "4",
                        explanation: "Hay 4 números primos entre 10 y 20"
                    }
                ],
                final_answer: "4",
                alternative_methods: [
                    "Descartar pares: 12, 14, 16, 18",
                    "Descartar múltiplos de 3: 15",
                    "Verificar restantes: 11, 13, 17, 19"
                ],
                common_errors: ["5", "3", "6", "Solo contar algunos"]
            },
            
            hints: [
                {
                    level: 1,
                    type: "conceptual",
                    message: "Revisa cada número entre 10 y 20 para ver si solo tiene divisores 1 y él mismo",
                    icon: "fas fa-list"
                },
                {
                    level: 2,
                    type: "guidance",
                    message: "Descarta números pares (excepto 2) y verifica: 11, 13, 15, 17, 19",
                    icon: "fas fa-filter"
                },
                {
                    level: 3,
                    type: "explicit",
                    message: "Los primos son: 11, 13, 17, 19. Total: 4 números primos",
                    icon: "fas fa-list-ol"
                }
            ],
            
            difficulty: 3,
            topic: "identificación_primos",
            estimatedTime: 300000,
            tags: ["primos", "conteo", "análisis"]
        },

        // Problema 9: MCM de tres números
        {
            id: "lab_primos_009",
            title: "Experimento: Sincronización Triple de Power-ups",
            
            context: {
                narrative: "Los power-ups rojos aparecen cada 15 segundos, los azules cada 25 segundos, y los dorados cada 35 segundos. Necesitas calcular cuándo aparecerán los tres tipos simultáneamente.",
                question: "¿Cada cuántos segundos aparecen juntos los power-ups rojo, azul y dorado?",
                visual_hint: "triple_powerup_sync",
                career_context: {
                    gastronomia: "Sincronizas tres hornos con diferentes tiempos de cocción",
                    turismo: "Coordinas tres tipos de promociones con periodicidad diferente"
                }
            },
            
            solution: {
                steps: [
                    { 
                        id: 1, 
                        description: "Identificar los períodos", 
                        operation: "15, 25, 35", 
                        result: "Períodos identificados",
                        explanation: "Cada power-up tiene su propio ciclo"
                    },
                    { 
                        id: 2, 
                        description: "Factorizar 15", 
                        operation: "15 = 3 × 5", 
                        result: "3 × 5",
                        explanation: "15 = 3 × 5"
                    },
                    { 
                        id: 3, 
                        description: "Factorizar 25", 
                        operation: "25 = 5²", 
                        result: "5²",
                        explanation: "25 = 5 × 5 = 5²"
                    },
                    { 
                        id: 4, 
                        description: "Factorizar 35", 
                        operation: "35 = 5 × 7", 
                        result: "5 × 7",
                        explanation: "35 = 5 × 7"
                    },
                    { 
                        id: 5, 
                        description: "Calcular MCM", 
                        operation: "MCM = 3 × 5² × 7", 
                        result: "105",
                        explanation: "Tomamos la mayor potencia de cada factor primo"
                    }
                ],
                final_answer: "105",
                alternative_methods: [
                    "MCM(15,25) = 75, luego MCM(75,35) = 105",
                    "Múltiplos comunes: 105, 210, 315..."
                ],
                common_errors: ["75", "525", "15", "175"]
            },
            
            hints: [
                {
                    level: 1,
                    type: "conceptual",
                    message: "Para tres números, factoriza cada uno y toma la mayor potencia de cada primo",
                    icon: "fas fa-sitemap"
                },
                {
                    level: 2,
                    type: "guidance",
                    message: "15=3×5, 25=5², 35=5×7. ¿Cuál es la mayor potencia de cada primo?",
                    icon: "fas fa-calculator"
                },
                {
                    level: 3,
                    type: "explicit",
                    message: "MCM = 3¹ × 5² × 7¹ = 3 × 25 × 7 = 105 segundos",
                    icon: "fas fa-clock"
                }
            ],
            
            difficulty: 3,
            topic: "mcm_múltiple",
            estimatedTime: 360000,
            tags: ["mcm", "factorización", "múltiples_números"]
        },

        // Problema 10: Factorización para desbloqueo
        {
            id: "lab_primos_010",
            title: "Experimento: Decodificación de Arsenal Secreto",
            
            context: {
                narrative: "Para desbloquear un arma especial, necesitas factorizar el código de seguridad 21 en sus componentes primos. El sistema requiere la descomposición completa en factores primos.",
                question: "¿Cuáles son los factores primos de 21? Muestra el proceso completo de factorización.",
                visual_hint: "prime_factorization_unlock",
                career_context: {
                    comunicacion: "Descompones algoritmos de encriptación en sus elementos básicos",
                    biotecnologia: "Analizas secuencias complejas en sus componentes fundamentales"
                }
            },
            
            solution: {
                steps: [
                    { 
                        id: 1, 
                        description: "Verificar si 21 es par", 
                        operation: "21 ÷ 2", 
                        result: "No es exacto (impar)",
                        explanation: "21 no es divisible por 2"
                    },
                    { 
                        id: 2, 
                        description: "Probar divisibilidad por 3", 
                        operation: "21 ÷ 3 = 7", 
                        result: "7",
                        explanation: "21 = 3 × 7"
                    },
                    { 
                        id: 3, 
                        description: "Verificar si 7 es primo", 
                        operation: "7 ÷ 2, 7 ÷ 3", 
                        result: "No hay divisores exactos",
                        explanation: "7 solo se divide por 1 y 7"
                    },
                    { 
                        id: 4, 
                        description: "Escribir factorización completa", 
                        operation: "21 = 3 × 7", 
                        result: "3 × 7",
                        explanation: "3 y 7 son ambos números primos"
                    }
                ],
                final_answer: "3 × 7",
                alternative_methods: [
                    "Árbol de factorización: 21 → 3 × 7",
                    "División sucesiva: 21÷3=7, 7 es primo"
                ],
                common_errors: ["21 × 1", "3 × 7 × 1", "Solo 7", "Solo 3"]
            },
            
            hints: [
                {
                    level: 1,
                    type: "conceptual",
                    message: "La factorización prima descompone un número en multiplicación de números primos",
                    icon: "fas fa-puzzle-piece"
                },
                {
                    level: 2,
                    type: "guidance",
                    message: "21 no es par. Prueba si es divisible por 3: 2+1=3, que es múltiplo de 3",
                    icon: "fas fa-divide"
                },
                {
                    level: 3,
                    type: "explicit",
                    message: "21 ÷ 3 = 7. Como 7 es primo, la factorización es 21 = 3 × 7",
                    icon: "fas fa-key"
                }
            ],
            
            difficulty: 2,
            topic: "factorización_prima",
            estimatedTime: 240000,
            tags: ["factorización", "primos", "descomposición"]
        }
    ],
    
    // =====================================================
    // SISTEMA DE REFLEXIONES (Reutilizado del Space Shooter)
    // =====================================================
    
    reflection: {
        title: "Reflexión: Números Primos, MCM y MCD en la Optimización Profesional",
        content: `
            El dominio de números primos, MCM y MCD que acabas de demostrar es una herramienta de optimización esencial en todos los programas del Colegio Mayor de Antioquia.
            
            En **Gestión Gastronómica**, optimizar entregas de ingredientes, planificar menús cíclicos y distribuir personal eficientemente requiere estos conceptos matemáticos fundamentales.
            
            En **Gestión Comercial y Turística**, programar promociones, organizar grupos de turistas y calcular descuentos óptimos usa directamente MCM y MCD para maximizar la eficiencia operativa.
            
            En **Construcción y Arquitectura**, calcular medidas exactas, distribuir materiales sin desperdicios y planificar cronogramas de trabajo depende de estas operaciones para optimizar recursos.
            
            En **Biotecnología y Laboratorio**, sincronizar experimentos, distribuir muestras y programar análisis requiere dominar estos patrones matemáticos para coordinar procesos complejos.
            
            En **Comunicación Social**, programar contenidos, analizar ciclos de audiencia y optimizar campañas publicitarias utiliza estos conceptos para timing perfecto.
            
            En **Administración y Gestión**, planificar recursos, optimizar inventarios y sincronizar procesos empresariales requiere este pensamiento matemático estructurado.
        `,
        feedback: `
            Tu capacidad para resolver problemas de optimización y factorización no es solo una habilidad matemática, sino una competencia estratégica que demuestra pensamiento sistémico.
            
            Cuando puedes descomponer problemas complejos en sus elementos fundamentales y encontrar patrones de optimización, tu mente se prepara para identificar eficiencias, reducir desperdicios y maximizar recursos en cualquier contexto profesional.
            
            Los empleadores valoran profesionales que pueden optimizar procesos, encontrar el mínimo común múltiplo entre diferentes departamentos, y distribuir recursos de manera equitativa y eficiente.
            
            ¡Has demostrado que puedes pensar como un verdadero optimizador matemático del espacio! 🔬⚡
        `,
        achievements: {
            optimization_master: "🏆 Maestro Optimizador - Resolución perfecta de problemas de eficiencia",
            pattern_finder: "🔍 Detector de Patrones - Identificaste factorizaciones complejas", 
            efficiency_expert: "⚡ Experto en Eficiencia - Excelente manejo de MCM y MCD",
            prime_analyzer: "🔢 Analizador Primo - Dominio completo de números primos",
            systematic_thinker: "🧠 Pensador Sistémico - Enfoque metodológico en factorización"
        }
    }
};

// =====================================================
// EXPORTACIÓN DEL MÓDULO
// =====================================================

// Para uso en navegador (script tag)
if (typeof window !== 'undefined') {
    window.Modulo2LabConfig = Modulo2LabConfig;
    window.Modulo2LabProblems = Modulo2LabProblems;
}

// Para uso en Node.js (desarrollo/testing)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        Modulo2LabConfig,
        Modulo2LabProblems
    };
}