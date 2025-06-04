// ============================================
// MÓDULO 2: NÚMEROS PRIMOS, MCM Y MCD
// VERSIÓN CORREGIDA - Balance de gameplay ajustado
// ============================================

const Modulo2Config = {
    gameInfo: {
        title: "🔬 Space Shooter - Primos, MCM y MCD",
        subtitle: "¡Optimiza recursos matemáticos y factoriza en el espacio!",
        instruction: "Destruye enemigos con factorización y cálculos de MCM/MCD"
    },
    
    gameplay: {
        enemySpeed: 0.5,              // Más lento para pensar
        bulletSpeed: 4,
        spaceshipSpeed: 1.5,
        spawnInterval: 4000,          // Más tiempo para problemas complejos
        correctEnemyChance: 0.35,     // 35% de respuestas correctas
        maxEnemiesOnScreen: 3,
        levelUpRequirement: 5,
        particleCount: 8
    },
    
    scoring: {
        correctAnswer: 125,           // Más puntos por dificultad
        levelBonus: 60,
        comboMultiplier: 1.4,
        accuracyBonus: 30
    },
    
    difficulty: {
        speedIncrease: 0.08,
        spawnDecrease: 250,
        maxLevel: 5
    },
    
    visual: {
        explosionDuration: 700,
        feedbackDuration: 2000,
        particleDuration: 1200,
        glowIntensity: 0.9
    }
};

const Modulo2Questions = {
    subject: "Números Primos, MCM y MCD",
    description: "Factorización, divisibilidad y optimización matemática",
    
    questions: [
        {
            question: "¿Es 17 un número primo?",
            answer: "Sí",
            type: "primo",
            difficulty: 1,
            topic: "Identificación de primos",
            timeLimit: 5000
        },
        {
            question: "¿Cuál es el MCD de 12 y 8?",
            answer: "4",
            type: "mcd",
            difficulty: 1,
            topic: "Máximo común divisor",
            timeLimit: 10000
        },
        {
            question: "¿Es 15 divisible por 3?",
            answer: "Sí",
            type: "divisibilidad",
            difficulty: 1,
            topic: "Criterios de divisibilidad",
            timeLimit: 3000
        },
        {
            question: "¿Cuál es el primer número primo mayor que 10?",
            answer: "11",
            type: "primo",
            difficulty: 1,
            topic: "Secuencia de primos",
            timeLimit: 5000
        },
        {
            question: "¿Cuál es el MCM de 4 y 6?",
            answer: "12",
            type: "mcm",
            difficulty: 1,
            topic: "Mínimo común múltiplo",
            timeLimit: 10000
        },
        {
            question: "¿Es 21 un número primo?",
            answer: "No",
            type: "primo",
            difficulty: 1,
            topic: "Identificación de primos",
            timeLimit: 8000
        },
        {
            question: "¿Es 24 divisible por 8?",
            answer: "Sí",
            type: "divisibilidad",
            difficulty: 1,
            topic: "Criterios de divisibilidad",
            timeLimit: 5000
        },
        {
            question: "¿Cuántos factores primos tiene 6?",
            answer: "2",
            type: "factorizacion",
            difficulty: 1,
            topic: "Factorización prima",
            timeLimit: 8000
        },
        {
            question: "¿Cuál es el MCD de 15 y 10?",
            answer: "5",
            type: "mcd",
            difficulty: 1,
            topic: "Máximo común divisor",
            timeLimit: 10000
        },
        {
            question: "¿Es 2 el único número primo par?",
            answer: "Sí",
            type: "primo",
            difficulty: 1,
            topic: "Propiedades de primos",
            timeLimit: 5000
        }
    ],
    
    generateWrongAnswers: function(correctAnswer, questionType) {
        if (questionType === 'primo' || questionType === 'divisibilidad') {
            return [correctAnswer === 'Sí' ? 'No' : 'Sí'];
        }
        
        const correct = parseInt(correctAnswer);
        if (isNaN(correct)) return ['3', '5', '7', '9'];
        
        const wrongAnswers = [];
        
        if (questionType === 'mcd') {
            wrongAnswers.push(
                (correct * 2).toString(),
                (correct + 1).toString(),
                (correct - 1).toString(),
                '1',
                (correct + 2).toString()
            );
        } else if (questionType === 'mcm') {
            wrongAnswers.push(
                Math.floor(correct / 2).toString(),
                (correct + 6).toString(),
                (correct - 6).toString(),
                (correct * 2).toString(),
                (correct + 1).toString()
            );
        } else {
            wrongAnswers.push(
                (correct + 1).toString(),
                (correct - 1).toString(),
                (correct + 2).toString(),
                (correct - 2).toString(),
                (correct + 3).toString()
            );
        }
        
        return wrongAnswers.filter(ans => ans !== correctAnswer && parseInt(ans) > 0).slice(0, 4);
    },
    
    reflection: {
        title: "Reflexión y Feedback del Módulo 2",
        content: `La factorización y optimización matemática son herramientas de eficiencia profesional. En Biotecnología y Laboratorio Clínico, programar ciclos de análisis, sincronizar equipos con diferentes tiempos de procesamiento y optimizar recursos de reactivos requiere dominio de MCM y MCD. Un biotecnólogo que calcula rápidamente cuándo coinciden diferentes procedimientos ahorra tiempo y recursos críticos.
En Administración y Gestión Comercial, optimizar inventarios, planificar promociones cíclicas, distribuir recursos humanos y calcular descuentos eficientes usa directamente estos conceptos. Determinar el MCM para coordinar entregas de múltiples proveedores o el MCD para agrupar productos eficientemente son decisiones diarias que impactan rentabilidad.`,
        feedback: `El pensamiento optimizador te convierte en un solucionador estratégico de problemas. En mercados competitivos, la capacidad de maximizar recursos y minimizar desperdicios distingue a los profesionales exitosos. Esta habilidad matemática se traduce en liderazgo operativo y visión empresarial.`
    }
};