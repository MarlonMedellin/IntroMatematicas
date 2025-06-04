// ============================================
// MÓDULO 5: APLICACIONES Y SISTEMAS DE MEDIDA
// ============================================

const Modulo5Config = {
    gameInfo: {
        title: "📏 Space Shooter - Sistemas de Medida",
        subtitle: "¡Convierte unidades a la velocidad de la luz!",
        instruction: "Domina las conversiones métricas para navegar por el universo"
    },
    
    gameplay: {
        enemySpeed: 0.7,              // Ligeramente más rápido por simplicidad
        bulletSpeed: 4,
        spaceshipSpeed: 1.5,
        spawnInterval: 3500,          // Más rápido por ser conversiones directas
        correctEnemyChance: 0.45,     // Más respuestas correctas
        maxEnemiesOnScreen: 3,
        levelUpRequirement: 5,
        particleCount: 8
    },
    
    scoring: {
        correctAnswer: 90,            // Menos puntos por ser más fácil
        levelBonus: 45,
        comboMultiplier: 1.2,
        accuracyBonus: 20
    },
    
    difficulty: {
        speedIncrease: 0.12,
        spawnDecrease: 150,
        maxLevel: 5
    },
    
    visual: {
        explosionDuration: 550,
        feedbackDuration: 1500,
        particleDuration: 900,
        glowIntensity: 0.75
    }
};

const Modulo5Questions = {
    subject: "Aplicaciones y Sistemas de Medida",
    description: "Conversiones entre unidades del sistema métrico",
    
    questions: [
        {
            question: "¿Cuántos cm hay en 2 metros?",
            answer: "200",
            type: "longitud",
            difficulty: 1,
            topic: "Metros a centímetros",
            timeLimit: 5000
        },
        {
            question: "¿Cuántos gramos hay en 3 kg?",
            answer: "3000",
            type: "masa",
            difficulty: 1,
            topic: "Kilogramos a gramos",
            timeLimit: 5000
        },
        {
            question: "¿Cuántos mm hay en 5 cm?",
            answer: "50",
            type: "longitud",
            difficulty: 1,
            topic: "Centímetros a milímetros",
            timeLimit: 5000
        },
        {
            question: "¿Cuántos segundos hay en 2 minutos?",
            answer: "120",
            type: "tiempo",
            difficulty: 1,
            topic: "Minutos a segundos",
            timeLimit: 5000
        },
        {
            question: "¿Cuántos metros hay en 1 km?",
            answer: "1000",
            type: "longitud",
            difficulty: 1,
            topic: "Kilómetros a metros",
            timeLimit: 3000
        },
        {
            question: "¿Cuántos ml hay en 1 litro?",
            answer: "1000",
            type: "volumen",
            difficulty: 1,
            topic: "Litros a mililitros",
            timeLimit: 3000
        },
        {
            question: "¿Cuántos cm hay en 0.5 metros?",
            answer: "50",
            type: "longitud",
            difficulty: 1,
            topic: "Metros a centímetros (decimal)",
            timeLimit: 8000
        },
        {
            question: "¿Cuántos minutos hay en 1 hora?",
            answer: "60",
            type: "tiempo",
            difficulty: 1,
            topic: "Horas a minutos",
            timeLimit: 3000
        },
        {
            question: "¿Cuántos mg hay en 2 g?",
            answer: "2000",
            type: "masa",
            difficulty: 1,
            topic: "Gramos a miligramos",
            timeLimit: 8000
        },
        {
            question: "¿Cuántos cm² hay en 1 m²?",
            answer: "10000",
            type: "area",
            difficulty: 2,
            topic: "Metros cuadrados a centímetros cuadrados",
            timeLimit: 10000
        }
    ],
    
    generateWrongAnswers: function(correctAnswer, questionType) {
        const correct = parseInt(correctAnswer);
        const wrongAnswers = [];
        
        if (questionType === 'longitud' || questionType === 'masa' || questionType === 'volumen') {
            wrongAnswers.push(
                (correct / 10).toString(),
                (correct * 10).toString(),
                (correct / 100).toString(),
                (correct * 100).toString(),
                (correct + 100).toString()
            );
        } else if (questionType === 'tiempo') {
            wrongAnswers.push(
                (correct + 30).toString(),
                (correct - 30).toString(),
                (correct * 2).toString(),
                Math.floor(correct / 2).toString(),
                (correct + 10).toString()
            );
        } else if (questionType === 'area') {
            wrongAnswers.push(
                '1000',
                '100',
                '100000',
                '1000000',
                '500'
            );
        }
        
        return wrongAnswers.filter(ans => ans !== correctAnswer && parseInt(ans) > 0).slice(0, 4);
    },
    
    reflection: {
        title: "Reflexión y Feedback del Módulo 5",
        content: `La conversión fluida de unidades es fundamental para la comunicación técnica internacional. En Ciencias de la Salud, interpretar equipos médicos con especificaciones en diferentes unidades, seguir protocolos internacionales y comunicar resultados según estándares globales requiere dominio instantáneo de conversiones. Un error de unidades en dosificación puede ser crítico.
En Biotecnología y Laboratorio Clínico, trabajar con micropipetas (μL), preparar soluciones en diferentes concentraciones y calibrar equipos importados exige precisión en conversiones métricas. En Arquitectura y Construcción, interpretar planos internacionales, especificar materiales importados y coordinar con consultores extranjeros requiere fluidez entre sistemas métrico e imperial para mantener precisión técnica.`,
        feedback: `Esta competencia te prepara para mercados globalizados donde la versatilidad en sistemas de medida es una ventaja competitiva. Los empleadores valoran profesionales que pueden integrarse inmediatamente a equipos internacionales sin barreras técnicas de comunicación.`
    }
};