// ============================================
// MÓDULO 1: SISTEMA DE LOS NÚMEROS ENTEROS
// ============================================

const Modulo1Config = {
    gameInfo: {
        title: "🔢 Space Shooter - Números Enteros",
        subtitle: "¡Domina las operaciones con números positivos y negativos!",
        instruction: "Dispara a las respuestas correctas para defender la galaxia matemática"
    },
    
    gameplay: {
        enemySpeed: 0.6,              // Más lento para matemáticas
        bulletSpeed: 4,
        spaceshipSpeed: 1.5,
        spawnInterval: 4000,          // 4 segundos entre enemigos
        correctEnemyChance: 0.4,      // 40% de respuestas correctas
        maxEnemiesOnScreen: 3,
        levelUpRequirement: 5,        // 5 respuestas correctas para subir nivel
        particleCount: 8
    },
    
    scoring: {
        correctAnswer: 100,
        levelBonus: 50,
        comboMultiplier: 1.3,
        accuracyBonus: 25
    },
    
    difficulty: {
        speedIncrease: 0.1,
        spawnDecrease: 200,
        maxLevel: 5
    },
    
    visual: {
        explosionDuration: 600,
        feedbackDuration: 1800,
        particleDuration: 1000,
        glowIntensity: 0.8
    }
};

const Modulo1Questions = {
    subject: "Números Enteros",
    description: "Operaciones básicas con números positivos, negativos y valor absoluto",
    
    questions: [
        {
            question: "-8 + 5",
            answer: "-3",
            type: "suma",
            difficulty: 1,
            topic: "Suma con negativos",
            timeLimit: 10000
        },
        {
            question: "15 - (-7)",
            answer: "22",
            type: "resta",
            difficulty: 1,
            topic: "Resta de negativos",
            timeLimit: 10000
        },
        {
            question: "(-3) + (-9)",
            answer: "-12",
            type: "suma",
            difficulty: 1,
            topic: "Suma de negativos",
            timeLimit: 8000
        },
        {
            question: "20 - 35",
            answer: "-15",
            type: "resta",
            difficulty: 1,
            topic: "Resta básica",
            timeLimit: 8000
        },
        {
            question: "|-12|",
            answer: "12",
            type: "valor_absoluto",
            difficulty: 1,
            topic: "Valor absoluto",
            timeLimit: 5000
        },
        {
            question: "(-4) + 4",
            answer: "0",
            type: "suma",
            difficulty: 1,
            topic: "Suma con opuestos",
            timeLimit: 5000
        },
        {
            question: "-6 - 8",
            answer: "-14",
            type: "resta",
            difficulty: 1,
            topic: "Resta con negativos",
            timeLimit: 8000
        },
        {
            question: "25 + (-10)",
            answer: "15",
            type: "suma",
            difficulty: 1,
            topic: "Suma mixta",
            timeLimit: 8000
        },
        {
            question: "|−7| + |3|",
            answer: "10",
            type: "valor_absoluto",
            difficulty: 2,
            topic: "Suma de valores absolutos",
            timeLimit: 10000
        },
        {
            question: "(-15) + 20",
            answer: "5",
            type: "suma",
            difficulty: 1,
            topic: "Suma mixta",
            timeLimit: 8000
        }
    ],
    
    // Generador de respuestas incorrectas plausibles
    generateWrongAnswers: function(correctAnswer, questionType) {
        const correct = parseInt(correctAnswer);
        const wrongAnswers = [];
        
        // Generar variaciones comunes de error
        wrongAnswers.push(
            (-correct).toString(),           // Signo opuesto
            (correct + 1).toString(),        // Sumar 1
            (correct - 1).toString(),        // Restar 1
            (Math.abs(correct)).toString(),  // Valor absoluto
            (correct + 5).toString(),        // Sumar 5
            (correct - 5).toString()         // Restar 5
        );
        
        // Para valor absoluto, agregar variaciones específicas
        if (questionType === 'valor_absoluto') {
            wrongAnswers.push(
                (-Math.abs(correct)).toString(),
                (Math.abs(correct) + 1).toString(),
                (Math.abs(correct) - 1).toString()
            );
        }
        
        // Filtrar respuestas únicas y diferentes de la correcta
        return [...new Set(wrongAnswers)]
            .filter(ans => ans !== correctAnswer)
            .slice(0, 5);
    },
    
    // Reflexión educativa del módulo
    reflection: {
        title: "Reflexión y Feedback del Módulo 1",
        content: `El dominio rápido de operaciones con números enteros es fundamental en todos los programas académicos de una universidad. En **Gastronomía**, calcular rápidamente temperaturas de cocción, tiempos de preparación y ajustes de recetas te hace más eficiente en la cocina profesional. En **Turismo**, manejar variaciones de precios, ocupación hotelera y cambios de itinerario requiere agilidad mental con números positivos y negativos. En **Arquitectura y Construcción**, interpretar cotas, niveles y dimensiones sin dudar te permite tomar decisiones precisas sobre el terreno. En **Ciencias de la Salud**, calcular dosificaciones, cambios de signos vitales y resultados de laboratorio con velocidad puede ser crítico para la atención al paciente.`,
        feedback: `La velocidad en estas operaciones no es solo una habilidad matemática, sino una competencia profesional que demuestra dominio de tu campo. Cuando puedes hacer estos cálculos automáticamente, tu mente se libera para concentrarse en la creatividad, la innovación y la resolución de problemas complejos. Los empleadores valoran profesionales que no se detienen en cálculos básicos, sino que fluyen naturalmente hacia el análisis y la toma de decisiones estratégicas.`
    }
};

// Exportar para uso en los módulos de juego
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { Modulo1Config, Modulo1Questions };
}