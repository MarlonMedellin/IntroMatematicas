// ============================================
// MÓDULO 1: SISTEMA DE LOS NÚMEROS ENTEROS
// VERSIÓN CORREGIDA - Balance de gameplay ajustado
// ============================================

const Modulo1Config = {
    gameInfo: {
        title: "🔢 Space Shooter - Números Enteros",
        subtitle: "¡Domina las operaciones con números positivos y negativos!",
        instruction: "Dispara a las respuestas correctas para defender la galaxia matemática"
    },
    
    gameplay: {
        enemySpeed: 0.6,              // Velocidad moderada
        bulletSpeed: 4,
        spaceshipSpeed: 1.5,
        spawnInterval: 3500,          // Balance entre frecuencia y tiempo de reacción
        correctEnemyChance: 0.4,      // 40% de respuestas correctas
        maxEnemiesOnScreen: 3,
        levelUpRequirement: 5,
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
        content: `El manejo ágil de números enteros es crítico en situaciones profesionales reales. En Gastronomía y Culinaria, calcular diferencias de temperatura en procesos de cocción (de -18°C a 180°C), ajustar inventarios con mermas y ganancias, y gestionar costos con variaciones diarias requiere fluidez mental absoluta. Un chef que duda en cálculos básicos pierde velocidad operativa en cocinas de alto volumen.
En Ciencias de la Salud, interpretar variaciones de signos vitales, calcular dosis con incrementos y decrementos, y analizar resultados de laboratorio con valores positivos y negativos demanda precisión instantánea. En Arquitectura y Construcción, trabajar con cotas de nivel, calcular diferencias de altura y manejar cargas estructurales (compresión negativa, tensión positiva) son operaciones que deben ser automáticas para mantener eficiencia en obra.`,
        feedback: `Esta velocidad matemática te distingue como profesional preparado para la toma de decisiones rápidas. Los empleadores reconocen que quien domina operaciones básicas sin vacilar puede concentrarse en innovación y resolución de problemas complejos, características que definen el liderazgo en cualquier campo.`
    }
};

// Exportar para uso en los módulos de juego
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { Modulo1Config, Modulo1Questions };
}