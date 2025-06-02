// ============================================
// MÓDULO 6: POTENCIACIÓN Y RADICACIÓN
// ============================================

const Modulo6Config = {
    gameInfo: {
        title: "⚡ Space Shooter - Potenciación y Radicación",
        subtitle: "¡Eleva tu poder matemático al cuadrado y más allá!",
        instruction: "Calcula potencias y raíces para dominar el crecimiento exponencial"
    },
    
    gameplay: {
        enemySpeed: 0.6,
        bulletSpeed: 4,
        spaceshipSpeed: 1.5,
        spawnInterval: 3800,
        correctEnemyChance: 0.4,
        maxEnemiesOnScreen: 3,
        levelUpRequirement: 5,
        particleCount: 10              // Más partículas para el módulo final
    },
    
    scoring: {
        correctAnswer: 130,            // Más puntos por ser el módulo final
        levelBonus: 65,
        comboMultiplier: 1.4,
        accuracyBonus: 35
    },
    
    difficulty: {
        speedIncrease: 0.1,
        spawnDecrease: 180,
        maxLevel: 5
    },
    
    visual: {
        explosionDuration: 700,
        feedbackDuration: 1800,
        particleDuration: 1200,
        glowIntensity: 0.9
    }
};

const Modulo6Questions = {
    subject: "Potenciación y Radicación",
    description: "Exponentes, raíces cuadradas y crecimiento exponencial",
    
    questions: [
        {
            question: "2³",
            answer: "8",
            type: "potencia",
            difficulty: 1,
            topic: "Potencias básicas",
            timeLimit: 5000
        },
        {
            question: "√16",
            answer: "4",
            type: "raiz",
            difficulty: 1,
            topic: "Raíces cuadradas",
            timeLimit: 5000
        },
        {
            question: "5²",
            answer: "25",
            type: "potencia",
            difficulty: 1,
            topic: "Cuadrados perfectos",
            timeLimit: 3000
        },
        {
            question: "√9",
            answer: "3",
            type: "raiz",
            difficulty: 1,
            topic: "Raíces cuadradas básicas",
            timeLimit: 3000
        },
        {
            question: "3²",
            answer: "9",
            type: "potencia",
            difficulty: 1,
            topic: "Cuadrados perfectos",
            timeLimit: 3000
        },
        {
            question: "√25",
            answer: "5",
            type: "raiz",
            difficulty: 1,
            topic: "Raíces cuadradas básicas",
            timeLimit: 3000
        },
        {
            question: "4²",
            answer: "16",
            type: "potencia",
            difficulty: 1,
            topic: "Cuadrados perfectos",
            timeLimit: 3000
        },
        {
            question: "√36",
            answer: "6",
            type: "raiz",
            difficulty: 1,
            topic: "Raíces cuadradas",
            timeLimit: 5000
        },
        {
            question: "2⁴",
            answer: "16",
            type: "potencia",
            difficulty: 1,
            topic: "Potencias de 2",
            timeLimit: 8000
        },
        {
            question: "√49",
            answer: "7",
            type: "raiz",
            difficulty: 1,
            topic: "Raíces cuadradas",
            timeLimit: 5000
        }
    ],
    
    generateWrongAnswers: function(correctAnswer, questionType) {
        const correct = parseInt(correctAnswer);
        const wrongAnswers = [];
        
        if (questionType === 'potencia') {
            wrongAnswers.push(
                (correct + 1).toString(),
                (correct - 1).toString(),
                (correct + 2).toString(),
                (correct - 2).toString(),
                Math.floor(correct / 2).toString()
            );
        } else if (questionType === 'raiz') {
            wrongAnswers.push(
                (correct + 1).toString(),
                (correct - 1).toString(),
                (correct + 2).toString(),
                (correct - 2).toString(),
                (correct * 2).toString()
            );
        }
        
        return wrongAnswers.filter(ans => ans !== correctAnswer && parseInt(ans) > 0).slice(0, 4);
    },
    
    reflection: {
        title: "Reflexión y Feedback del Módulo 6",
        content: `El pensamiento exponencial es clave en la era digital y de crecimiento acelerado. En Comunicación Social y Marketing Digital, entender el crecimiento viral de contenidos, calcular alcance exponencial de campañas y analizar tendencias de engagement requiere intuición con potencias y raíces. Un profesional que anticipa crecimientos exponenciales puede aprovechar tendencias emergentes.
En Biotecnología Avanzada, modelar crecimiento bacteriano, calcular diluciones seriadas y analizar curvas de crecimiento exponencial son aplicaciones directas. En Administración y Gestión Comercial, proyectar rendimientos compuestos, analizar escalabilidad de negocios y evaluar inversiones con crecimiento exponencial requiere dominio de estas operaciones para tomar decisiones financieras estratégicas.`,
        feedback: `La fluidez con crecimiento exponencial te permite identificar oportunidades de alto impacto y riesgos escalables. En un mundo donde los cambios son acelerados, los profesionales que entienden patrones exponenciales pueden liderar transformaciones e innovaciones que generen valor sostenible.`
    }
};