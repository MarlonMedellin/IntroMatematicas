/**
 * Math Quest Laboratory - Módulo 1: Sistema de los Números Enteros
 * Datos de configuración y problemas para experimentos de laboratorio
 * Basado en problemas del Space Shooter adaptados para resolución paso a paso
 * 
 * Desarrollado por: Profe Marlon Arcila
 * Institución: Colegio Mayor de Antioquia
 * Versión: 1.0.0
 */

// =====================================================
// CONFIGURACIÓN DEL MÓDULO 1 - NÚMEROS ENTEROS
// =====================================================

const Modulo1LabConfig = {
    moduleInfo: {
        id: "modulo1_enteros_lab",
        title: "🔢 Math Quest Laboratory - Números Enteros",
        subtitle: "Experimenta con operaciones espaciales complejas",
        instruction: "Resuelve cada experimento paso a paso, sin prisa",
        totalExperiments: 10,
        estimatedTime: "3-5 minutos por experimento",
        difficulty: "★★☆"
    },
    
    // Configuración de la mecánica del juego
    gameplay: {
        allowHints: true,
        maxHintsPerProblem: 3,
        showStepByStep: true,
        enableCalculator: false,  // Forzar cálculo mental para aprendizaje
        timeRecommendation: "Sin límite de tiempo - enfócate en comprender",
        allowRetry: true,
        showProgress: true
    },
    
    // Sistema de puntuación adaptado del Space Shooter
    scoring: {
        correctStep: 50,          // Puntos por cada paso correcto
        correctProblem: 200,      // Bonus por completar problema completo
        bonusIndependence: 100,   // Bonus por resolver sin pistas
        hintPenalty: -25,         // Penalización por usar pistas
        errorPenalty: -10,        // Penalización menor por errores (aprendizaje)
        perfectProblem: 300       // Bonus por resolver perfecto sin errores
    },
    
    // Configuración pedagógica
    pedagogical: {
        feedbackLevel: "constructive",      // Tipo de feedback
        errorPatterns: true,                // Detectar patrones de error
        adaptiveHints: true,                // Pistas adaptativas según el error
        contextualFeedback: true,           // Feedback contextualizado por carrera
        celebrateProgress: true             // Celebrar pequeños logros
    },
    
    // Configuración visual (reutiliza del Space Shooter)
    visual: {
        primaryColor: "#00AEAC",
        successColor: "#00ff88", 
        errorColor: "#ff4444",
        warningColor: "#E9901E",
        particleCount: 8,
        animationSpeed: "normal"
    },
    
    // Configuración para diferentes carreras del Colegio Mayor
    careerContexts: {
        gastronomia: {
            theme: "temperaturas y tiempos de cocción",
            icon: "fas fa-utensils",
            examples: "control de temperaturas, ajuste de recetas"
        },
        turismo: {
            theme: "variaciones de precios y ocupación",
            icon: "fas fa-plane", 
            examples: "cambios de tarifas, gestión de reservas"
        },
        arquitectura: {
            theme: "niveles y cotas de construcción",
            icon: "fas fa-drafting-compass",
            examples: "cálculo de niveles, mediciones estructurales"
        },
        salud: {
            theme: "dosificaciones y signos vitales",
            icon: "fas fa-heartbeat",
            examples: "variaciones de dosis, cambios en vitales"
        },
        biotecnologia: {
            theme: "concentraciones y mediciones de laboratorio",
            icon: "fas fa-microscope",
            examples: "balances químicos, análisis cuantitativos"
        },
        comunicacion: {
            theme: "estadísticas de audiencia y engagement",
            icon: "fas fa-broadcast-tower",
            examples: "cambios en audiencia, métricas de campaña"
        }
    }
};

// =====================================================
// BANCO DE PROBLEMAS - MÓDULO 1
// =====================================================

const Modulo1LabProblems = {
    subject: "Sistema de los Números Enteros",
    description: "Experimentos de laboratorio espacial con operaciones de números enteros complejas",
    
    moduleInfo: {
        totalProblems: 10,
        averageTime: "3-5 minutos",
        difficulty: "★★☆",
        focusAreas: ["suma_enteros", "resta_enteros", "operaciones_combinadas", "valor_absoluto"]
    },
    
    // =====================================================
    // PROBLEMAS DEL LABORATORIO (Adaptados de Space Shooter)
    // =====================================================
    
    problems: [
        // Problema 1: Puntos de vida de la nave
        {
            id: "lab_enteros_001",
            title: "Experimento: Ataque a la Nave Espacial",
            
            context: {
                narrative: "Tu nave espacial tiene 100 puntos de vida. Recibes 3 ataques consecutivos que causan -15, -8 y -12 puntos de daño respectivamente.",
                question: "¿Cuánta vida te queda después de todos los ataques?",
                visual_hint: "spaceship_health_system",
                career_context: {
                    gastronomia: "Como chef, manejas temperaturas que suben y bajan durante la cocción",
                    turismo: "Como agente turístico, calculas variaciones de precio en paquetes",
                    arquitectura: "Como arquitecto, trabajas con niveles que suben y bajan del nivel base"
                }
            },
            
            solution: {
                steps: [
                    { 
                        id: 1, 
                        description: "Vida inicial de la nave", 
                        operation: "100", 
                        result: "100",
                        explanation: "Comenzamos con 100 puntos de vida"
                    },
                    { 
                        id: 2, 
                        description: "Primer ataque (-15 puntos)", 
                        operation: "100 + (-15)", 
                        result: "85",
                        explanation: "Sumar un número negativo es como restar"
                    },
                    { 
                        id: 3, 
                        description: "Segundo ataque (-8 puntos)", 
                        operation: "85 + (-8)", 
                        result: "77",
                        explanation: "Continuamos restando del resultado anterior"
                    },
                    { 
                        id: 4, 
                        description: "Tercer ataque (-12 puntos)", 
                        operation: "77 + (-12)", 
                        result: "65",
                        explanation: "Calculamos el daño final acumulado"
                    }
                ],
                final_answer: "65",
                alternative_methods: [
                    "100 - 15 - 8 - 12",
                    "100 + (-15 + -8 + -12)",
                    "100 + (-35)",
                    "100 - (15 + 8 + 12)"
                ],
                common_errors: ["75", "55", "-35", "35"]
            },
            
            hints: [
                {
                    level: 1,
                    type: "conceptual",
                    message: "Recuerda: sumar un número negativo es lo mismo que restar ese número",
                    icon: "fas fa-info-circle"
                },
                {
                    level: 2, 
                    type: "guidance",
                    message: "Paso 2: ¿Cuánto es 100 + (-15)? Piensa en 100 - 15",
                    icon: "fas fa-compass"
                },
                {
                    level: 3,
                    type: "explicit", 
                    message: "100 + (-15) = 100 - 15 = 85. Ahora continúa con 85 + (-8)",
                    icon: "fas fa-equals"
                }
            ],
            
            difficulty: 2,
            topic: "suma_enteros_negativos", 
            estimatedTime: 180000,  // 3 minutos
            tags: ["suma", "negativos", "operaciones_secuenciales"]
        },

        // Problema 2: Coordenadas espaciales
        {
            id: "lab_enteros_002", 
            title: "Experimento: Navegación Espacial",
            
            context: {
                narrative: "Estás en la coordenada X = -5 en el espacio. Te mueves 8 posiciones a la derecha, luego 3 posiciones a la izquierda.",
                question: "¿En qué coordenada X te encuentras ahora?",
                visual_hint: "coordinate_system",
                career_context: {
                    arquitectura: "En arquitectura trabajas con coordenadas y niveles constantemente",
                    turismo: "Los sistemas de reservas manejan cambios de ubicación y disponibilidad"
                }
            },
            
            solution: {
                steps: [
                    { 
                        id: 1, 
                        description: "Posición inicial", 
                        operation: "-5", 
                        result: "-5",
                        explanation: "Comenzamos en la coordenada X = -5"
                    },
                    { 
                        id: 2, 
                        description: "Movimiento a la derecha (+8)", 
                        operation: "-5 + 8", 
                        result: "3",
                        explanation: "Moverse a la derecha suma posiciones"
                    },
                    { 
                        id: 3, 
                        description: "Movimiento a la izquierda (-3)", 
                        operation: "3 + (-3)", 
                        result: "0",
                        explanation: "Moverse a la izquierda resta posiciones"
                    }
                ],
                final_answer: "0",
                alternative_methods: [
                    "-5 + 8 - 3",
                    "-5 + (8 - 3)",
                    "-5 + 5"
                ],
                common_errors: ["6", "-6", "16", "-16"]
            },
            
            hints: [
                {
                    level: 1,
                    type: "conceptual", 
                    message: "En una recta numérica: derecha = positivo, izquierda = negativo",
                    icon: "fas fa-arrows-alt-h"
                },
                {
                    level: 2,
                    type: "guidance",
                    message: "Paso 2: Desde -5, muévete 8 a la derecha. ¿Dónde llegas?",
                    icon: "fas fa-arrow-right"
                },
                {
                    level: 3,
                    type: "explicit",
                    message: "-5 + 8 = 3. Ahora desde 3, muévete 3 a la izquierda: 3 + (-3)",
                    icon: "fas fa-calculator"
                }
            ],
            
            difficulty: 2,
            topic: "recta_numerica",
            estimatedTime: 180000,
            tags: ["coordenadas", "movimiento", "suma_resta"]
        },

        // Problema 3: Puntuación del juego
        {
            id: "lab_enteros_003",
            title: "Experimento: Sistema de Puntuación",
            
            context: {
                narrative: "Tu puntuación actual es 450 puntos. Destruyes un enemigo y ganas +25 puntos, pero luego chocas con un asteroide y pierdes -40 puntos.",
                question: "¿Cuál es tu nueva puntuación total?",
                visual_hint: "scoring_system",
                career_context: {
                    gastronomia: "En gastronomía manejas ganancias y pérdidas en inventarios",
                    comunicacion: "En marketing analizas aumentos y disminuciones de engagement"
                }
            },
            
            solution: {
                steps: [
                    { 
                        id: 1, 
                        description: "Puntuación inicial", 
                        operation: "450", 
                        result: "450",
                        explanation: "Tu puntuación base antes de los eventos"
                    },
                    { 
                        id: 2, 
                        description: "Ganancia por enemigo (+25)", 
                        operation: "450 + 25", 
                        result: "475",
                        explanation: "Sumar puntos ganados"
                    },
                    { 
                        id: 3, 
                        description: "Pérdida por asteroide (-40)", 
                        operation: "475 + (-40)", 
                        result: "435",
                        explanation: "Restar puntos perdidos"
                    }
                ],
                final_answer: "435",
                alternative_methods: [
                    "450 + 25 - 40",
                    "450 + (25 - 40)",
                    "450 - 15"
                ],
                common_errors: ["515", "465", "410", "490"]
            },
            
            hints: [
                {
                    level: 1,
                    type: "conceptual",
                    message: "Ganar puntos = sumar (+), perder puntos = restar (-)",
                    icon: "fas fa-plus-minus"
                },
                {
                    level: 2,
                    type: "guidance", 
                    message: "Primero suma la ganancia: 450 + 25. ¿Cuánto te da?",
                    icon: "fas fa-arrow-up"
                },
                {
                    level: 3,
                    type: "explicit",
                    message: "450 + 25 = 475. Luego resta la pérdida: 475 - 40 = 435",
                    icon: "fas fa-arrow-down"
                }
            ],
            
            difficulty: 1,
            topic: "suma_resta_enteros",
            estimatedTime: 150000,
            tags: ["puntuacion", "ganancias", "perdidas"]
        },

        // Problema 4: Niveles verticales
        {
            id: "lab_enteros_004", 
            title: "Experimento: Navegación Vertical",
            
            context: {
                narrative: "Tu nave está en el nivel Y = 12. Desciendes 20 niveles hacia abajo, luego subes 5 niveles hacia arriba.",
                question: "¿En qué nivel Y te encuentras finalmente?", 
                visual_hint: "vertical_movement",
                career_context: {
                    arquitectura: "En construcción trabajas con niveles de pisos y sótanos",
                    biotecnologia: "En laboratorio manejas niveles de concentración que suben y bajan"
                }
            },
            
            solution: {
                steps: [
                    { 
                        id: 1, 
                        description: "Nivel inicial", 
                        operation: "12", 
                        result: "12",
                        explanation: "Posición inicial en Y = 12"
                    },
                    { 
                        id: 2, 
                        description: "Descenso de 20 niveles", 
                        operation: "12 + (-20)", 
                        result: "-8",
                        explanation: "Descender es moverse en dirección negativa"
                    },
                    { 
                        id: 3, 
                        description: "Ascenso de 5 niveles", 
                        operation: "-8 + 5", 
                        result: "-3",
                        explanation: "Ascender es moverse en dirección positiva"
                    }
                ],
                final_answer: "-3",
                alternative_methods: [
                    "12 - 20 + 5",
                    "12 + (-20 + 5)",
                    "12 - 15"
                ],
                common_errors: ["37", "7", "3", "-17"]
            },
            
            hints: [
                {
                    level: 1,
                    type: "conceptual",
                    message: "Subir = positivo (+), bajar = negativo (-)",
                    icon: "fas fa-arrows-alt-v"
                },
                {
                    level: 2,
                    type: "guidance",
                    message: "Desde el nivel 12, baja 20. ¿A qué nivel llegas?",
                    icon: "fas fa-arrow-down"
                },
                {
                    level: 3,
                    type: "explicit",
                    message: "12 - 20 = -8. Luego desde -8, sube 5: -8 + 5 = -3",
                    icon: "fas fa-arrow-up"
                }
            ],
            
            difficulty: 2,
            topic: "coordenadas_verticales",
            estimatedTime: 180000,
            tags: ["niveles", "ascenso", "descenso"]
        },

        // Problema 5: Energía de la nave
        {
            id: "lab_enteros_005",
            title: "Experimento: Sistema de Energía",
            
            context: {
                narrative: "Tienes 75 unidades de energía. Usas un láser que consume -30 unidades, luego recargas +15 unidades, y finalmente usas misiles que consumen -25 unidades.",
                question: "¿Cuántas unidades de energía tienes al final?",
                visual_hint: "energy_management",
                career_context: {
                    biotecnologia: "En laboratorio gestionas reactivos que se consumen y se reponen",
                    gastronomia: "En cocina controlas ingredientes que se usan y se reabastecen"
                }
            },
            
            solution: {
                steps: [
                    { 
                        id: 1, 
                        description: "Energía inicial", 
                        operation: "75", 
                        result: "75",
                        explanation: "Comenzamos con 75 unidades de energía"
                    },
                    { 
                        id: 2, 
                        description: "Consumo del láser (-30)", 
                        operation: "75 + (-30)", 
                        result: "45",
                        explanation: "El láser consume energía"
                    },
                    { 
                        id: 3, 
                        description: "Recarga de energía (+15)", 
                        operation: "45 + 15", 
                        result: "60",
                        explanation: "Recuperamos algo de energía"
                    },
                    { 
                        id: 4, 
                        description: "Consumo de misiles (-25)", 
                        operation: "60 + (-25)", 
                        result: "35",
                        explanation: "Los misiles consumen energía adicional"
                    }
                ],
                final_answer: "35",
                alternative_methods: [
                    "75 - 30 + 15 - 25",
                    "75 + (-30 + 15 - 25)",
                    "75 - 40"
                ],
                common_errors: ["145", "65", "85", "25"]
            },
            
            hints: [
                {
                    level: 1,
                    type: "conceptual",
                    message: "Consumir energía = restar (-), recargar = sumar (+)",
                    icon: "fas fa-battery-half"
                },
                {
                    level: 2,
                    type: "guidance",
                    message: "Paso 2: Después del láser, ¿cuánta energía te queda? 75 - 30",
                    icon: "fas fa-bolt"
                },
                {
                    level: 3,
                    type: "explicit",
                    message: "75 - 30 = 45, luego 45 + 15 = 60, finalmente 60 - 25 = 35",
                    icon: "fas fa-calculator"
                }
            ],
            
            difficulty: 2,
            topic: "operaciones_secuenciales",
            estimatedTime: 240000,
            tags: ["energia", "consumo", "recarga"]
        },

        // Problema 6: Valor absoluto del escudo
        {
            id: "lab_enteros_006",
            title: "Experimento: Resistencia del Escudo",
            
            context: {
                narrative: "Tu escudo absorbe daños. Recibe ataques de -8, -5 y -12 puntos. Si el escudo puede resistir |−25| puntos de daño total, ¿el escudo sobrevive?",
                question: "Calcula el daño total recibido y compáralo con la resistencia del escudo",
                visual_hint: "shield_system",
                career_context: {
                    arquitectura: "En estructuras calculas resistencias y cargas máximas",
                    salud: "En medicina evalúas tolerancias y límites de dosificación"
                }
            },
            
            solution: {
                steps: [
                    { 
                        id: 1, 
                        description: "Resistencia del escudo", 
                        operation: "|−25|", 
                        result: "25",
                        explanation: "El valor absoluto de -25 es 25"
                    },
                    { 
                        id: 2, 
                        description: "Primer ataque", 
                        operation: "-8", 
                        result: "-8",
                        explanation: "Registramos el primer daño"
                    },
                    { 
                        id: 3, 
                        description: "Daño acumulado (ataques 1 y 2)", 
                        operation: "-8 + (-5)", 
                        result: "-13",
                        explanation: "Sumamos el segundo ataque"
                    },
                    { 
                        id: 4, 
                        description: "Daño total (todos los ataques)", 
                        operation: "-13 + (-12)", 
                        result: "-25",
                        explanation: "Daño total recibido"
                    },
                    { 
                        id: 5, 
                        description: "Comparación", 
                        operation: "|-25| = 25", 
                        result: "¡Sobrevive exacto!",
                        explanation: "El daño total iguala exactamente la resistencia"
                    }
                ],
                final_answer: "¡Sobrevive exacto!",
                alternative_methods: [
                    "8 + 5 + 12 = 25",
                    "|-8 + -5 + -12| = |-25| = 25"
                ],
                common_errors: ["-25", "15", "35", "No sobrevive"]
            },
            
            hints: [
                {
                    level: 1,
                    type: "conceptual",
                    message: "El valor absoluto |x| es siempre positivo, representa la distancia al cero",
                    icon: "fas fa-ruler"
                },
                {
                    level: 2,
                    type: "guidance",
                    message: "Primero calcula |−25|, luego suma todos los ataques: -8 + (-5) + (-12)",
                    icon: "fas fa-shield-alt"
                },
                {
                    level: 3,
                    type: "explicit",
                    message: "|−25| = 25. Daño total: -8 + (-5) + (-12) = -25. |−25| = 25 = resistencia",
                    icon: "fas fa-equals"
                }
            ],
            
            difficulty: 3,
            topic: "valor_absoluto",
            estimatedTime: 300000,
            tags: ["valor_absoluto", "comparacion", "resistencia"]
        },

        // Problema 7: Zona espacial
        {
            id: "lab_enteros_007", 
            title: "Experimento: Exploración de Sectores",
            
            context: {
                narrative: "Estás en la zona espacial -15. Avanzas 10 sectores, luego retrocedes 8 sectores, y finalmente avanzas 20 sectores más.",
                question: "¿En qué zona espacial te encuentras al final de tu exploración?",
                visual_hint: "space_sectors",
                career_context: {
                    turismo: "En turismo planificas rutas con avances y retrocesos en itinerarios",
                    comunicacion: "En campañas medias el alcance que aumenta y disminuye"
                }
            },
            
            solution: {
                steps: [
                    { 
                        id: 1, 
                        description: "Zona inicial", 
                        operation: "-15", 
                        result: "-15",
                        explanation: "Comenzamos en la zona -15"
                    },
                    { 
                        id: 2, 
                        description: "Primer avance (+10 sectores)", 
                        operation: "-15 + 10", 
                        result: "-5",
                        explanation: "Avanzar suma sectores"
                    },
                    { 
                        id: 3, 
                        description: "Retroceso (-8 sectores)", 
                        operation: "-5 + (-8)", 
                        result: "-13",
                        explanation: "Retroceder resta sectores"
                    },
                    { 
                        id: 4, 
                        description: "Segundo avance (+20 sectores)", 
                        operation: "-13 + 20", 
                        result: "7",
                        explanation: "Avance final hacia zona positiva"
                    }
                ],
                final_answer: "7",
                alternative_methods: [
                    "-15 + 10 - 8 + 20",
                    "-15 + (10 - 8 + 20)",
                    "-15 + 22"
                ],
                common_errors: ["17", "-3", "23", "-17"]
            },
            
            hints: [
                {
                    level: 1,
                    type: "conceptual",
                    message: "Avanzar = positivo (+), retroceder = negativo (-)",
                    icon: "fas fa-route"
                },
                {
                    level: 2,
                    type: "guidance",
                    message: "Desde -15, avanza 10: -15 + 10. ¿A dónde llegas?",
                    icon: "fas fa-arrow-right"
                },
                {
                    level: 3,
                    type: "explicit",
                    message: "-15 + 10 = -5, luego -5 - 8 = -13, finalmente -13 + 20 = 7",
                    icon: "fas fa-map-marked-alt"
                }
            ],
            
            difficulty: 2,
            topic: "movimiento_sectores",
            estimatedTime: 240000,
            tags: ["exploracion", "avance", "retroceso"]
        },

        // Problema 8: Multiplicador de puntos
        {
            id: "lab_enteros_008",
            title: "Experimento: Sistema de Multiplicadores",
            
            context: {
                narrative: "Tu multiplicador de puntos cambia dinámicamente: empieza en +3, luego baja -2, después sube +4, y finalmente baja -1.",
                question: "¿Cuál es el valor del multiplicador al final de todos los cambios?",
                visual_hint: "multiplier_system",
                career_context: {
                    gastronomia: "En costos manejas factores que suben y bajan los precios",
                    comunicacion: "En marketing los factores de engagement fluctúan constantemente"
                }
            },
            
            solution: {
                steps: [
                    { 
                        id: 1, 
                        description: "Multiplicador inicial", 
                        operation: "3", 
                        result: "3",
                        explanation: "El multiplicador comienza en +3"
                    },
                    { 
                        id: 2, 
                        description: "Primera variación (-2)", 
                        operation: "3 + (-2)", 
                        result: "1",
                        explanation: "El multiplicador disminuye en 2"
                    },
                    { 
                        id: 3, 
                        description: "Segunda variación (+4)", 
                        operation: "1 + 4", 
                        result: "5",
                        explanation: "El multiplicador aumenta en 4"
                    },
                    { 
                        id: 4, 
                        description: "Variación final (-1)", 
                        operation: "5 + (-1)", 
                        result: "4",
                        explanation: "Última disminución del multiplicador"
                    }
                ],
                final_answer: "4",
                alternative_methods: [
                    "3 - 2 + 4 - 1",
                    "3 + (-2 + 4 - 1)",
                    "3 + 1"
                ],
                common_errors: ["10", "2", "6", "0"]
            },
            
            hints: [
                {
                    level: 1,
                    type: "conceptual",
                    message: "Los cambios pueden ser positivos (subir) o negativos (bajar)",
                    icon: "fas fa-chart-line"
                },
                {
                    level: 2,
                    type: "guidance",
                    message: "Desde 3, aplica el primer cambio: 3 + (-2). ¿Cuánto da?",
                    icon: "fas fa-plus-minus"
                },
                {
                    level: 3,
                    type: "explicit",
                    message: "3 - 2 = 1, luego 1 + 4 = 5, finalmente 5 - 1 = 4",
                    icon: "fas fa-calculator"
                }
            ],
            
            difficulty: 2,
            topic: "cambios_secuenciales", 
            estimatedTime: 180000,
            tags: ["multiplicador", "variaciones", "secuencia"]
        },

        // Problema 9: Temperatura del motor
        {
            id: "lab_enteros_009",
            title: "Experimento: Control de Temperatura",
            
            context: {
                narrative: "La temperatura del motor espacial es 85°C. Se enfría -20°C, luego se calienta +12°C, y finalmente se enfría -5°C más.",
                question: "¿Cuál es la temperatura final del motor después de todos los cambios?",
                visual_hint: "temperature_control",
                career_context: {
                    gastronomia: "En cocina profesional controlas temperaturas que varían constantemente",
                    biotecnologia: "En laboratorio monitoras temperaturas críticas de procesos"
                }
            },
            
            solution: {
                steps: [
                    { 
                        id: 1, 
                        description: "Temperatura inicial", 
                        operation: "85", 
                        result: "85",
                        explanation: "El motor comienza a 85°C"
                    },
                    { 
                        id: 2, 
                        description: "Primer enfriamiento (-20°C)", 
                        operation: "85 + (-20)", 
                        result: "65",
                        explanation: "La temperatura baja 20 grados"
                    },
                    { 
                        id: 3, 
                        description: "Calentamiento (+12°C)", 
                        operation: "65 + 12", 
                        result: "77",
                        explanation: "La temperatura sube 12 grados"
                    },
                    { 
                        id: 4, 
                        description: "Enfriamiento final (-5°C)", 
                        operation: "77 + (-5)", 
                        result: "72",
                        explanation: "Último ajuste de temperatura"
                    }
                ],
                final_answer: "72",
                alternative_methods: [
                    "85 - 20 + 12 - 5",
                    "85 + (-20 + 12 - 5)",
                    "85 - 13"
                ],
                common_errors: ["122", "92", "67", "82"]
            },
            
            hints: [
                {
                    level: 1,
                    type: "conceptual",
                    message: "Enfriarse = temperatura baja (-), calentarse = temperatura sube (+)",
                    icon: "fas fa-thermometer-half"
                },
                {
                    level: 2,
                    type: "guidance",
                    message: "Desde 85°C, se enfría 20°C: 85 - 20. ¿Cuál es la nueva temperatura?",
                    icon: "fas fa-snowflake"
                },
                {
                    level: 3,
                    type: "explicit",
                    message: "85 - 20 = 65, luego 65 + 12 = 77, finalmente 77 - 5 = 72",
                    icon: "fas fa-fire"
                }
            ],
            
            difficulty: 2,
            topic: "temperatura_variaciones",
            estimatedTime: 180000,
            tags: ["temperatura", "calentamiento", "enfriamiento"]
        },

        // Problema 10: Monedas espaciales
        {
            id: "lab_enteros_010",
            title: "Experimento: Economía Espacial",
            
            context: {
                narrative: "Tienes 200 monedas espaciales. Compras mejoras por -65 monedas, encuentras un tesoro que te da +40 monedas, y luego pagas una reparación de -30 monedas.",
                question: "¿Cuántas monedas espaciales tienes al final de todas las transacciones?",
                visual_hint: "space_economy",
                career_context: {
                    turismo: "En agencias manejas presupuestos que tienen ingresos y gastos variables",
                    gastronomia: "En restaurantes controlas costos e ingresos que fluctúan diariamente"
                }
            },
            
            solution: {
                steps: [
                    { 
                        id: 1, 
                        description: "Monedas iniciales", 
                        operation: "200", 
                        result: "200",
                        explanation: "Comenzamos con 200 monedas espaciales"
                    },
                    { 
                        id: 2, 
                        description: "Compra de mejoras (-65)", 
                        operation: "200 + (-65)", 
                        result: "135",
                        explanation: "Gastamos 65 monedas en mejoras"
                    },
                    { 
                        id: 3, 
                        description: "Tesoro encontrado (+40)", 
                        operation: "135 + 40", 
                        result: "175",
                        explanation: "Ganamos 40 monedas del tesoro"
                    },
                    { 
                        id: 4, 
                        description: "Pago de reparación (-30)", 
                        operation: "175 + (-30)", 
                        result: "145",
                        explanation: "Gastamos 30 monedas en reparaciones"
                    }
                ],
                final_answer: "145",
                alternative_methods: [
                    "200 - 65 + 40 - 30",
                    "200 + (-65 + 40 - 30)",
                    "200 - 55"
                ],
                common_errors: ["335", "255", "165", "115"]
            },
            
            hints: [
                {
                    level: 1,
                    type: "conceptual",
                    message: "Gastar monedas = restar (-), ganar monedas = sumar (+)",
                    icon: "fas fa-coins"
                },
                {
                    level: 2,
                    type: "guidance",
                    message: "Después de comprar mejoras: 200 - 65. ¿Cuántas monedas te quedan?",
                    icon: "fas fa-shopping-cart"
                },
                {
                    level: 3,
                    type: "explicit",
                    message: "200 - 65 = 135, luego 135 + 40 = 175, finalmente 175 - 30 = 145",
                    icon: "fas fa-treasure-chest"
                }
            ],
            
            difficulty: 2,
            topic: "transacciones_monetarias",
            estimatedTime: 240000,
            tags: ["monedas", "compras", "ganancias", "gastos"]
        }
    ],
    
    // =====================================================
    // SISTEMA DE REFLEXIONES (Reutilizado del Space Shooter)
    // =====================================================
    
    reflection: {
        title: "Reflexión: Números Enteros en el Mundo Profesional",
        content: `
            El dominio de operaciones con números enteros que acabas de demostrar es fundamental en todos los programas académicos del Colegio Mayor de Antioquia. 
            
            En **Gastronomía**, calcular temperaturas de cocción, tiempos de preparación y ajustes de recetas te hace más eficiente en la cocina profesional. 
            
            En **Turismo**, manejar variaciones de precios, ocupación hotelera y cambios de itinerario requiere agilidad mental con números positivos y negativos. 
            
            En **Arquitectura y Construcción**, interpretar cotas, niveles y dimensiones sin dudar te permite tomar decisiones precisas sobre el terreno. 
            
            En **Ciencias de la Salud**, calcular dosificaciones, cambios de signos vitales y resultados de laboratorio con precisión puede ser crítico para la atención al paciente.
            
            En **Biotecnología**, balances químicos y variaciones de concentraciones requieren dominio completo de estas operaciones.
            
            En **Comunicación Social**, analizar variaciones de audiencia y métricas de engagement usa constantemente estos conceptos.
        `,
        feedback: `
            Tu capacidad para resolver problemas complejos paso a paso no es solo una habilidad matemática, sino una competencia profesional que demuestra dominio analítico. 
            
            Cuando puedes descomponer problemas complejos en pasos manejables, tu mente se libera para concentrarse en la creatividad, la innovación y la resolución de problemas estratégicos. 
            
            Los empleadores valoran profesionales que no se detienen en cálculos complejos, sino que fluyen naturalmente hacia el análisis profundo y la toma de decisiones fundamentadas.
            
            ¡Has demostrado que puedes pensar como un verdadero científico espacial de las matemáticas! 🚀
        `,
        achievements: {
            perfect_score: "🏆 Científico Espacial - Resolución perfecta sin errores",
            no_hints: "🧠 Pensador Independiente - Resolviste problemas sin pistas", 
            speed_master: "⚡ Analista Rápido - Excelente tiempo de resolución",
            persistent: "💪 Perseverante - Completaste todos los experimentos",
            careful: "🎯 Meticuloso - Pocos errores en los cálculos"
        }
    }
};

// =====================================================
// EXPORTACIÓN DEL MÓDULO
// =====================================================

// Para uso en navegador (script tag)
if (typeof window !== 'undefined') {
    window.Modulo1LabConfig = Modulo1LabConfig;
    window.Modulo1LabProblems = Modulo1LabProblems;
}

// Para uso en Node.js (desarrollo/testing)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        Modulo1LabConfig,
        Modulo1LabProblems
    };
}