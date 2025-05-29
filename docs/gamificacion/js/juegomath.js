        // Problemas contextualizados con los programas del Colegio Mayor de Antioquia
        const questions = [
            {
                context: "Un restaurante de Gastronomía y Culinaria analiza sus finanzas",
                program: "Gastronomía y Culinaria",
                icon: "fas fa-utensils",
                prompt: "Si tuvieron ganancias de 480.000 COP el lunes, pero pérdidas de 125.000 COP el martes",
                expression: "480,000 + (-125,000)",
                answer: "355000",
                hint: "Ganancias menos pérdidas: suma algebraica",
                currency: "COP"
            },
            {
                context: "Una agencia de Gestión Turística planifica un paquete",
                program: "Tec. en Gestión Turística",
                icon: "fas fa-suitcase-rolling",
                prompt: "El costo base es 320 USD pero hay un descuento de 45 USD",
                expression: "320 - 45",
                answer: "275",
                hint: "Costo final = costo base - descuento",
                currency: "USD"
            },
            {
                context: "Un proyecto de Ingeniería Ambiental mide temperaturas",
                program: "Ingeniería Ambiental",
                icon: "fas fa-leaf",
                prompt: "La temperatura bajó 8°C desde los 15°C iniciales",
                expression: "15 + (-8)",
                answer: "7",
                hint: "Temperatura final = inicial + cambio (negativo = baja)",
                currency: "°C"
            },
            {
                context: "Una empresa de Administración de Empresas Turísticas evalúa pérdidas",
                program: "Administración de Empresas Turísticas",
                icon: "fas fa-chart-line",
                prompt: "Pérdidas de 85.000 COP en enero y 72.000 COP en febrero",
                expression: "(-85,000) + (-72,000)",
                answer: "-157000",
                hint: "Suma de pérdidas: ambos valores son negativos",
                currency: "COP"
            },
            {
                context: "Un laboratorio de Bacteriología analiza muestras",
                program: "Bacteriología y Laboratorio Clínico",
                icon: "fas fa-microscope",
                prompt: "Se multiplicaron 4 cultivos, cada uno redujo 6 colonias",
                expression: "4 × (-6)",
                answer: "-24",
                hint: "Multiplicación: positivo × negativo = negativo",
                currency: "colonias"
            },
            {
                context: "Un estudio de Arquitectura calcula áreas",
                program: "Arquitectura",
                icon: "fas fa-drafting-compass",
                prompt: "Edificio rectangular: 25m × 18m",
                expression: "25 × 18",
                answer: "450",
                hint: "Área = largo × ancho",
                currency: "m²"
            },
            {
                context: "Análisis de costos en Construcciones Civiles",
                program: "Construcciones Civiles",
                icon: "fas fa-hard-hat",
                prompt: "Presupuesto de 2.400.000 COP dividido en 8 etapas",
                expression: "2,400,000 ÷ 8",
                answer: "300000",
                hint: "División: total ÷ número de partes",
                currency: "COP"
            },
            {
                context: "Un proyecto de Biotecnología estudia crecimiento",
                program: "Biotecnología",
                icon: "fas fa-dna",
                prompt: "Población inicial: 1200, decrece a razón de 150 por día durante 4 días",
                expression: "1200 + 4 × (-150)",
                answer: "600",
                hint: "Población final = inicial + (cambio × tiempo)",
                currency: "especímenes"
            },
            {
                context: "Análisis financiero en Ingeniería Comercial",
                program: "Ingeniería Comercial",
                icon: "fas fa-handshake",
                prompt: "Inversión de 1.500 USD con pérdida del 20%",
                expression: "1500 × (-0.2)",
                answer: "-300",
                hint: "Pérdida = inversión × porcentaje negativo",
                currency: "USD"
            },
            {
                context: "Estudio social en Planeación y Desarrollo Social",
                program: "Planeación y Desarrollo Social",
                icon: "fas fa-users",
                prompt: "Encuesta a 840 personas, distribuidas en 12 sectores equitativamente",
                expression: "840 ÷ 12",
                answer: "70",
                hint: "División equitativa: total ÷ número de grupos",
                currency: "personas"
            }
        ];

        // Variables del juego
        let current = 0;
        let score = 0;
        let streak = 0;
        let correctCount = 0;
        let totalAttempts = 0;
        let timeLeft = 60;
        let gameTimer;
        let powerups = { skip: 3, time: 2, hint: 2 };
        let achievements = { streak: false, speed: false, perfect: false, machine: false, genius: false };
        let incorrectAnswers = [];
        let questionStartTime;

        // Inicializar juego
        document.addEventListener('DOMContentLoaded', initGame);

        function initGame() {
            updateQuestion();
            startTimer();
            updateUI();
            playSound('start');
            
            // Event listeners
            document.getElementById('answerInput').addEventListener('keypress', function(e) {
                if (e.key === 'Enter') {
                    checkAnswer();
                }
            });
            
            // Focus en el input
            document.getElementById('answerInput').focus();
        }

        function updateQuestion() {
            if (current >= questions.length) {
                endGame();
                return;
            }
            
            const question = questions[current];
            
            // Actualizar contexto y programa
            document.getElementById('questionContext').innerHTML = 
                `<i class="${question.icon}"></i> ${question.context}`;
            document.getElementById('currentProgram').innerHTML = 
                `<i class="fas fa-graduation-cap program-icon"></i>${question.program}`;
            
            document.getElementById('questionText').textContent = question.prompt;
            document.getElementById('mathExpression').innerHTML = question.expression;
            
            document.getElementById('answerInput').value = '';
            document.getElementById('answerInput').focus();
            document.getElementById('feedback').classList.remove('show');
            document.getElementById('hintDisplay').style.display = 'none';
            document.getElementById('checkBtn').disabled = false;
            
            questionStartTime = Date.now();
            updateProgress();
        }

        function checkAnswer() {
            const userAnswer = document.getElementById('answerInput').value.trim().replace(/[,\s]/g, '');
            const correctAnswer = questions[current].answer;
            const feedback = document.getElementById('feedback');
            
            if (!userAnswer) {
                feedback.innerHTML = '<i class="fas fa-exclamation-triangle"></i> ¡Escribe una respuesta!';
                feedback.className = 'feedback incorrect show';
                return;
            }
            
            totalAttempts++;
            const responseTime = (Date.now() - questionStartTime) / 1000;
            
            if (userAnswer === correctAnswer) {
                // Respuesta correcta
                correctCount++;
                streak++;
                
                // Calcular puntos (tiempo, racha, precisión)
                const timeBonus = Math.max(0, Math.floor((15 - responseTime) * 3));
                const streakBonus = streak * 8;
                const basePoints = 25;
                const pointsEarned = basePoints + timeBonus + streakBonus;
                
                score += pointsEarned;
                
                feedback.innerHTML = `<i class="fas fa-check-circle"></i> ¡Excelente! +${pointsEarned} puntos`;
                feedback.className = 'feedback correct show';
                
                // Mostrar combo
                if (streak >= 3) {
                    showCombo(`¡${streak}x COMBO!`);
                }
                
                // Logro velocista
                if (responseTime < 4 && !achievements.speed) {
                    achievements.speed = true;
                    document.getElementById('achievement2').classList.add('unlocked');
                    showCombo('<i class="fas fa-bolt"></i> VELOCISTA!');
                }
                
                playSound('correct');
                
                // Siguiente pregunta después de 2 segundos
                setTimeout(() => {
                    current++;
                    updateQuestion();
                }, 2000);
                
            } else {
                // Respuesta incorrecta
                streak = 0;
                incorrectAnswers.push({
                    question: questions[current].prompt,
                    expression: questions[current].expression,
                    userAnswer: userAnswer,
                    correctAnswer: correctAnswer,
                    program: questions[current].program
                });
                
                feedback.innerHTML = `<i class="fas fa-times-circle"></i> Incorrecto. La respuesta correcta es: ${correctAnswer}`;
                feedback.className = 'feedback incorrect show';
                
                playSound('incorrect');
                
                // Siguiente pregunta después de 3 segundos
                setTimeout(() => {
                    current++;
                    updateQuestion();
                }, 3000);
            }
            
            document.getElementById('checkBtn').disabled = true;
            checkAchievements();
            updateUI();
        }

        function startTimer() {
            gameTimer = setInterval(() => {
                timeLeft--;
                updateUI();
                
                if (timeLeft <= 0) {
                    endGame();
                }
                
                if (timeLeft <= 20) {
                    document.getElementById('timer').style.color = 'var(--naranja)';
                }
            }, 1000);
        }

        function useSkip() {
            if (powerups.skip <= 0 || current >= questions.length) return;
            
            powerups.skip--;
            totalAttempts++;
            streak = 0;
            
            incorrectAnswers.push({
                question: questions[current].prompt,
                expression: questions[current].expression,
                userAnswer: 'SALTADA',
                correctAnswer: questions[current].answer,
                program: questions[current].program
            });
            
            current++;
            updateQuestion();
            updateUI();
            playSound('powerup');
        }

        function useTimeBoost() {
            if (powerups.time <= 0) return;
            
            powerups.time--;
            timeLeft += 30;
            updateUI();
            playSound('powerup');
            showCombo('<i class="fas fa-plus-circle"></i> +30 SEGUNDOS!');
        }

        function useHint() {
            if (powerups.hint <= 0 || current >= questions.length) return;
            
            powerups.hint--;
            const hintDisplay = document.getElementById('hintDisplay');
            hintDisplay.innerHTML = `<i class="fas fa-lightbulb"></i> ${questions[current].hint}`;
            hintDisplay.style.display = 'block';
            
            setTimeout(() => {
                hintDisplay.style.display = 'none';
            }, 10000);
            
            updateUI();
            playSound('powerup');
        }

        function checkAchievements() {
            // Primera racha de 3
            if (streak >= 3 && !achievements.streak) {
                achievements.streak = true;
                document.getElementById('achievement1').classList.add('unlocked');
                showCombo('<i class="fas fa-fire"></i> PRIMERA RACHA!');
            }
            
            // Racha de 5
            if (streak >= 5 && !achievements.machine) {
                achievements.machine = true;
                document.getElementById('achievement4').classList.add('unlocked');
                showCombo('<i class="fas fa-rocket"></i> MÁQUINA!');
            }
            
            // Genio (racha de 7)
            if (streak >= 7 && !achievements.genius) {
                achievements.genius = true;
                document.getElementById('achievement5').classList.add('unlocked');
                showCombo('<i class="fas fa-brain"></i> GENIO MATEMÁTICO!');
            }
        }

        function showCombo(text) {
            const comboDisplay = document.getElementById('comboDisplay');
            comboDisplay.innerHTML = text;
            comboDisplay.classList.add('show');
            
            setTimeout(() => {
                comboDisplay.classList.remove('show');
            }, 2000);
        }

        function updateUI() {
            document.getElementById('timer').textContent = timeLeft;
            document.getElementById('streak').textContent = streak;
            document.getElementById('score').textContent = score.toLocaleString();
            
            // Calcular precisión
            const accuracy = totalAttempts > 0 ? Math.round((correctCount / totalAttempts) * 100) : 100;
            document.getElementById('accuracy').textContent = `${accuracy}%`;
            
            // Actualizar power-ups
            document.getElementById('skipPowerup').innerHTML = `<i class="fas fa-forward"></i> Saltar (${powerups.skip})`;
            document.getElementById('timePowerup').innerHTML = `<i class="fas fa-plus-circle"></i> +30s (${powerups.time})`;
            document.getElementById('hintPowerup').innerHTML = `<i class="fas fa-lightbulb"></i> Pista (${powerups.hint})`;
            
            // Deshabilitar power-ups agotados
            document.getElementById('skipPowerup').disabled = powerups.skip <= 0;
            document.getElementById('timePowerup').disabled = powerups.time <= 0;
            document.getElementById('hintPowerup').disabled = powerups.hint <= 0;
        }

        function updateProgress() {
            const progress = (current / questions.length) * 100;
            document.getElementById('progressFill').style.width = `${progress}%`;
            document.getElementById('progressText').textContent = `Pregunta ${current + 1} de ${questions.length}`;
        }

        function endGame() {
            clearInterval(gameTimer);
            
            const accuracy = totalAttempts > 0 ? Math.round((correctCount / totalAttempts) * 100) : 0;
            
            // Logro perfeccionista
            if (accuracy === 100 && correctCount === questions.length && !achievements.perfect) {
                achievements.perfect = true;
                document.getElementById('achievement3').classList.add('unlocked');
            }
            
            // Determinar título según rendimiento
            let title = '<i class="fas fa-trophy"></i> ¡Desafío Completado!';
            if (accuracy >= 90) title = '<i class="fas fa-crown"></i> ¡Rendimiento Excepcional!';
            else if (accuracy >= 70) title = '<i class="fas fa-thumbs-up"></i> ¡Buen Trabajo!';
            else if (accuracy >= 50) title = '<i class="fas fa-chart-line"></i> ¡Sigue Mejorando!';
            else title = '<i class="fas fa-dumbbell"></i> ¡Continúa Practicando!';
            
            document.getElementById('gameOverTitle').innerHTML = title;
            
            // Mostrar estadísticas finales
            document.getElementById('finalStats').innerHTML = `
                <strong><i class="fas fa-award"></i> Puntuación Final: ${score.toLocaleString()}</strong><br><br>
                <i class="fas fa-check-circle"></i> Respuestas Correctas: ${correctCount}/${questions.length}<br>
                <i class="fas fa-bullseye"></i> Precisión: ${accuracy}%<br>
                <i class="fas fa-fire"></i> Mejor Racha: ${streak}<br>
                <i class="fas fa-clock"></i> Tiempo Utilizado: ${60 - timeLeft}s
            `;
            
            // Mostrar respuestas incorrectas
            const incorrectContainer = document.getElementById('incorrectAnswers');
            if (incorrectAnswers.length > 0) {
                incorrectContainer.innerHTML = '<h3><i class="fas fa-clipboard-list"></i> Repasa estos conceptos:</h3>';
                incorrectAnswers.forEach(item => {
                    const div = document.createElement('div');
                    div.className = 'incorrect-item';
                    div.innerHTML = `
                        <strong><i class="fas fa-question-circle"></i> ${item.question}</strong><br>
                        <i class="fas fa-user-edit"></i> Tu respuesta: ${item.userAnswer}<br>
                        <i class="fas fa-check"></i> Correcta: ${item.correctAnswer}<br>
                        <i class="fas fa-graduation-cap"></i> Programa: ${item.program}
                    `;
                    incorrectContainer.appendChild(div);
                });
            } else {
                incorrectContainer.innerHTML = '<h3><i class="fas fa-star"></i> ¡Perfecto! Sin errores</h3>';
            }
            
            document.getElementById('gameOver').style.display = 'flex';
            playSound('end');
        }

        function restartGame() {
            // Reiniciar variables
            current = 0;
            score = 0;
            streak = 0;
            correctCount = 0;
            totalAttempts = 0;
            timeLeft = 60;
            powerups = { skip: 3, time: 2, hint: 2 };
            incorrectAnswers = [];
            
            // Ocultar pantalla de fin
            document.getElementById('gameOver').style.display = 'none';
            
            // Reiniciar interfaz
            document.getElementById('timer').style.color = 'var(--naranja)';
            updateQuestion();
            startTimer();
            updateUI();
            playSound('start');
        }

        function playSound(type) {
            // Crear contexto de audio para efectos de sonido
            if (typeof AudioContext !== 'undefined' || typeof webkitAudioContext !== 'undefined') {
                const audioContext = new (window.AudioContext || window.webkitAudioContext)();
                const oscillator = audioContext.createOscillator();
                const gainNode = audioContext.createGain();
                
                oscillator.connect(gainNode);
                gainNode.connect(audioContext.destination);
                
                switch(type) {
                    case 'correct':
                        oscillator.frequency.setValueAtTime(523.25, audioContext.currentTime); // C5
                        oscillator.frequency.setValueAtTime(659.25, audioContext.currentTime + 0.1); // E5
                        break;
                    case 'incorrect':
                        oscillator.frequency.setValueAtTime(220, audioContext.currentTime); // A3
                        oscillator.frequency.setValueAtTime(196, audioContext.currentTime + 0.2); // G3
                        break;
                    case 'powerup':
                        oscillator.frequency.setValueAtTime(784, audioContext.currentTime); // G5
                        break;
                    case 'start':
                        oscillator.frequency.setValueAtTime(440, audioContext.currentTime); // A4
                        break;
                    case 'end':
                        oscillator.frequency.setValueAtTime(329.63, audioContext.currentTime); // E4
                        break;
                }
                
                gainNode.gain.setValueAtTime(0.08, audioContext.currentTime);
                gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3);
                
                oscillator.start(audioContext.currentTime);
                oscillator.stop(audioContext.currentTime + 0.3);
            }
        }
