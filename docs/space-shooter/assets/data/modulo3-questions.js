// ============================================
// MÓDULO 3: SISTEMA DE LOS NÚMEROS RACIONALES
// ============================================

const Modulo3Config = {
    gameInfo: {
        title: "🧮 Space Shooter - Números Racionales",
        subtitle: "¡Navega por fracciones y decimales en el cosmos matemático!",
        instruction: "Calcula fracciones y decimales para eliminar amenazas espaciales"
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
        correctAnswer: 110,
        levelBonus: 55,
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

const Modulo3Questions = {
    subject: "Números Racionales",
    description: "Operaciones con fracciones, decimales y conversiones",
    
    questions: [
        {
            question: "1/2 + 1/4",
            answer: "3/4",
            type: "suma_fracciones",
            difficulty: 1,
            topic: "Suma de fracciones",
            timeLimit: 8000
        },
        {
            question: "0.5 × 2",
            answer: "1",
            type: "multiplicacion_decimal",
            difficulty: 1,
            topic: "Multiplicación con decimales",
            timeLimit: 3000
        },
        {
            question: "3/4 - 1/4",
            answer: "1/2",
            type: "resta_fracciones",
            difficulty: 1,
            topic: "Resta de fracciones",
            timeLimit: 5000
        },
        {
            question: "¿Cuánto es 1/5 en decimal?",
            answer: "0.2",
            type: "conversion",
            difficulty: 1,
            topic: "Conversión fracción a decimal",
            timeLimit: 5000
        },
        {
            question: "2/3 + 1/3",
            answer: "1",
            type: "suma_fracciones",
            difficulty: 1,
            topic: "Suma de fracciones",
            timeLimit: 5000
        },
        {
            question: "0.25 + 0.75",
            answer: "1",
            type: "suma_decimales",
            difficulty: 1,
            topic: "Suma de decimales",
            timeLimit: 5000
        },
        {
            question: "1/2 × 1/2",
            answer: "1/4",
            type: "multiplicacion_fracciones",
            difficulty: 1,
            topic: "Multiplicación de fracciones",
            timeLimit: 8000
        },
        {
            question: "¿Cuánto es 3/5 en decimal?",
            answer: "0.6",
            type: "conversion",
            difficulty: 1,
            topic: "Conversión fracción a decimal",
            timeLimit: 8000
        },
        {
            question: "1 - 1/4",
            answer: "3/4",
            type: "resta_mixta",
            difficulty: 1,
            topic: "Resta con enteros y fracciones",
            timeLimit: 8000
        },
        {
            question: "0.1 + 0.3",
            answer: "0.4",
            type: "suma_decimales",
            difficulty: 1,
            topic: "Suma de decimales",
            timeLimit: 5000
        }
    ],
    
    generateWrongAnswers: function(correctAnswer, questionType) {
        const wrongAnswers = [];
        
        if (correctAnswer.includes('/')) {
            // Para fracciones
            const [num, den] = correctAnswer.split('/').map(n => parseInt(n));
            wrongAnswers.push(
                `${num + 1}/${den}`,
                `${num}/${den + 1}`,
                `${num - 1}/${den}`,
                `${Math.abs(num - den)}/${den}`,
                `${num * 2}/${den * 2}`
            );
        } else if (correctAnswer.includes('.')) {
            // Para decimales
            const num = parseFloat(correctAnswer);
            wrongAnswers.push(
                (num + 0.1).toFixed(1),
                (num - 0.1).toFixed(1),
                (num + 0.2).toFixed(1),
                (num - 0.2).toFixed(1),
                (num * 2).toFixed(1)
            );
        } else {
            // Para enteros
            const num = parseInt(correctAnswer);
            wrongAnswers.push(
                (num + 1).toString(),
                (num - 1).toString(),
                `${num}/2`,
                `${num * 2}`,
                `0.${num}`
            );
        }
        
        return wrongAnswers.filter(ans => ans !== correctAnswer).slice(0, 4);
    },
    
    reflection: {
        title: "Reflexión y Feedback del Módulo 3",
        content: `Las fracciones y decimales definen la precisión profesional. En Gastronomía y Culinaria Avanzada, escalar recetas para eventos de 50 a 500 personas manteniendo proporciones exactas, calcular rendimientos de insumos y ajustar concentraciones de sabores requiere dominio de racionales. Un error de 0.1 en una proporción puede arruinar un banquete empresarial.
En Arquitectura y Construcción, interpretar planos con medidas fraccionarias, calcular proporciones estructurales y ajustar especificaciones técnicas demanda precisión decimal. En Turismo y Administración Hotelera, calcular ocupación real (habitaciones parcialmente reservadas), ajustar tarifas con descuentos fraccionarios y gestionar comisiones de agencias requiere fluidez con decimales para maximizar ingresos.`,
        feedback: `La precisión matemática refleja excelencia profesional y atención al detalle. Los clientes y empleadores confían en profesionales que manejan números exactos, especialmente en sectores donde los márgenes de error son costosos. Esta competencia te posiciona como un especialista confiable.`
    }
};