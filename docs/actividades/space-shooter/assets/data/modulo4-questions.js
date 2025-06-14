// ============================================
// MÓDULO 4: RAZONES, PROPORCIONES Y REGLA DE TRES
// ============================================

const Modulo4Config = {
    gameInfo: {
        title: "⚖️ Space Shooter - Razones y Proporciones",
        subtitle: "¡Equilibra relaciones matemáticas en el espacio infinito!",
        instruction: "Resuelve proporciones y porcentajes para mantener el equilibrio galáctico"
    },
    
    gameplay: {
        enemySpeed: 0.6,
        bulletSpeed: 4,
        spaceshipSpeed: 1.5,
        spawnInterval: 4000,
        correctEnemyChance: 0.4,
        maxEnemiesOnScreen: 3,
        levelUpRequirement: 5,
        particleCount: 8
    },
    
    scoring: {
        correctAnswer: 120,
        levelBonus: 60,
        comboMultiplier: 1.35,
        accuracyBonus: 30
    },
    
    difficulty: {
        speedIncrease: 0.1,
        spawnDecrease: 200,
        maxLevel: 5
    },
    
    visual: {
        explosionDuration: 650,
        feedbackDuration: 1800,
        particleDuration: 1100,
        glowIntensity: 0.85
    }
};

const Modulo4Questions = {
    subject: "Razones, Proporciones y Regla de Tres",
    description: "Relaciones proporcionales, porcentajes y regla de tres",
    
    questions: [
        {
            question: "Si 2:4 = x:8, ¿cuál es x?",
            answer: "4",
            type: "proporcion",
            difficulty: 1,
            topic: "Proporciones básicas",
            timeLimit: 8000
        },
        {
            question: "¿Cuál es el 50% de 80?",
            answer: "40",
            type: "porcentaje",
            difficulty: 1,
            topic: "Cálculo de porcentajes",
            timeLimit: 5000
        },
        {
            question: "Si 3 = 6, entonces 9 = ?",
            answer: "18",
            type: "proporcion_directa",
            difficulty: 1,
            topic: "Proporcionalidad directa",
            timeLimit: 8000
        },
        {
            question: "¿Cuál es el 25% de 100?",
            answer: "25",
            type: "porcentaje",
            difficulty: 1,
            topic: "Cálculo de porcentajes",
            timeLimit: 5000
        },
        {
            question: "En la proporción 5:10 = 3:x, ¿cuál es x?",
            answer: "6",
            type: "proporcion",
            difficulty: 1,
            topic: "Proporciones básicas",
            timeLimit: 10000
        },
        {
            question: "¿Cuál es el 10% de 50?",
            answer: "5",
            type: "porcentaje",
            difficulty: 1,
            topic: "Cálculo de porcentajes",
            timeLimit: 5000
        },
        {
            question: "Si 4 personas = 8 tareas, ¿cuántas tareas hacen 2 personas?",
            answer: "4",
            type: "regla_de_tres",
            difficulty: 1,
            topic: "Regla de tres simple",
            timeLimit: 8000
        },
        {
            question: "¿Cuál es el doble de 15?",
            answer: "30",
            type: "multiplicacion",
            difficulty: 1,
            topic: "Multiplicación por 2",
            timeLimit: 3000
        },
        {
            question: "Si 1:3 = 4:x, ¿cuál es x?",
            answer: "12",
            type: "proporcion",
            difficulty: 1,
            topic: "Proporciones básicas",
            timeLimit: 10000
        },
        {
            question: "¿Cuál es la mitad de 60?",
            answer: "30",
            type: "division",
            difficulty: 1,
            topic: "División por 2",
            timeLimit: 3000
        }
    ],
    
    generateWrongAnswers: function(correctAnswer, questionType) {
        const correct = parseInt(correctAnswer);
        const wrongAnswers = [];
        
        if (questionType === 'proporcion') {
            wrongAnswers.push(
                (correct + 1).toString(),
                (correct - 1).toString(),
                (correct + 2).toString(),
                (correct - 2).toString(),
                (correct * 2).toString()
            );
        } else if (questionType === 'porcentaje') {
            wrongAnswers.push(
                (correct + 5).toString(),
                (correct - 5).toString(),
                (correct + 10).toString(),
                (correct - 10).toString(),
                (correct * 2).toString()
            );
        } else {
            wrongAnswers.push(
                (correct + 1).toString(),
                (correct - 1).toString(),
                (correct + 3).toString(),
                (correct - 3).toString(),
                Math.floor(correct / 2).toString()
            );
        }
        
        return wrongAnswers.filter(ans => ans !== correctAnswer && parseInt(ans) > 0).slice(0, 4);
    },
    
    reflection: {
        title: "Reflexión y Feedback del Módulo 4",
        content: `El pensamiento proporcional es esencial para análisis estratégico. En Comunicación Social y Periodismo, analizar métricas de audiencia, calcular reach efectivo, determinar engagement rates y planificar presupuestos publicitarios requiere dominio proporcional instantáneo. Un community manager que calcula rápidamente ROI de campañas toma decisiones más efectivas.
En Turismo y Administración Hotelera, ajustar precios según temporadas, calcular capacidad óptima versus rentabilidad y gestionar escalas de personal según ocupación son aplicaciones directas de proporciones. En Administración y Gestión Comercial, determinar puntos de equilibrio, calcular comisiones escalonadas y analizar tendencias de ventas requiere agilidad en regla de tres para responder rápidamente a cambios del mercado.`,
        feedback: `El dominio proporcional te permite adaptar estrategias ágilmente a diferentes escalas y contextos. En un mundo empresarial dinámico, los profesionales que ven relaciones proporcionales anticipan tendencias y optimizan recursos, convirtiéndose en valiosos estrategas organizacionales.`
    }
};