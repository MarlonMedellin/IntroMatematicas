        // Problemas contextualizados con los programas del Colegio Mayor de Antioquia
const questions = [
    {
        context: "Un carpintero de Construcciones Civiles corta listones",
        program: "Construcciones Civiles",
        icon: "fas fa-tools",
        prompt: "Listones de 120cm, 180cm y 240cm. ¿Cuál es la mayor longitud para cortarlos en trozos iguales?",
        expression: "MCD(120, 180, 240)",
        answer: "60",
        hint: "Se busca dividir en trozos iguales lo más grandes posible = MCD",
        currency: "cm"
    },
    {
        context: "Tres ciclistas en una pista para Licenciatura en Ciencias Sociales",
        program: "Licenciatura en Ciencias Sociales", 
        icon: "fas fa-bicycle",
        prompt: "Tardan 10, 12 y 15 minutos por vuelta. ¿Cuándo volverán a coincidir en la salida?",
        expression: "MCM(10, 12, 15)",
        answer: "60",
        hint: "Coincidencia en el tiempo de eventos cíclicos = MCM",
        currency: "minutos"
    },
    {
        context: "Baldosas para proyecto de Arquitectura",
        program: "Arquitectura",
        icon: "fas fa-th",
        prompt: "Piso de 420cm × 300cm. ¿Cuál es el lado máximo de baldosas cuadradas que lo cubran exactamente?",
        expression: "MCD(420, 300)",
        answer: "60",
        hint: "Baldosas lo más grandes posible que dividan exactamente = MCD",
        currency: "cm"
    },
    {
        context: "Alarmas de Seguridad y Salud en el Trabajo",
        program: "Tec. en Seguridad y Salud en el Trabajo",
        icon: "fas fa-bell",
        prompt: "Suenan cada 15, 20 y 25 minutos. Si suenan juntas a las 8:00am, ¿cuándo volverán a sonar juntas?",
        expression: "MCM(15, 20, 25)",
        answer: "300",
        hint: "Próxima coincidencia de eventos periódicos = MCM",
        currency: "minutos"
    },
    {
        context: "Investigación en Ciencias Sociales",
        program: "Licenciatura en Ciencias Sociales",
        icon: "fas fa-users",
        prompt: "Entrevistas en grupos de 8, 10 y 12 personas. ¿Menor cantidad de encuestas para grupos completos?",
        expression: "MCM(8, 10, 12)",
        answer: "120",
        hint: "Menor cantidad que contenga exactamente a todas = MCM",
        currency: "encuestas"
    },
    {
        context: "Muestras ambientales para Gestión Ambiental",
        program: "Tec. en Gestión Ambiental (Virtual)",
        icon: "fas fa-flask",
        prompt: "Muestras de 50ml, 75ml y 100ml. ¿Mayor volumen de pipeta para submuestras exactas?",
        expression: "MCD(50, 75, 100)",
        answer: "25",
        hint: "Pipetas lo más grandes posible que dividan exactamente = MCD",
        currency: "ml"
    },
    {
        context: "Recorridos turísticos en Gestión de Guianza",
        program: "Tec. en Gestión de Guianza Turística",
        icon: "fas fa-route",
        prompt: "Recorridos cada 3, 4 y 6 días. Si hoy coinciden, ¿en cuántos días volverán a coincidir?",
        expression: "MCM(3, 4, 6)",
        answer: "12",
        hint: "Próxima coincidencia de ciclos = MCM",
        currency: "días"
    },
    {
        context: "Empaque comercial en Gestión Comercial",
        program: "Tec. en Gestión Comercial",
        icon: "fas fa-box",
        prompt: "32 lápices rojos y 40 azules en cajas iguales. ¿Máximo número de cajas posible?",
        expression: "MCD(32, 40)",
        answer: "8",
        hint: "Máximo número de grupos iguales = MCD",
        currency: "cajas"
    },
    {
        context: "Ingredientes en Gastronomía y Culinaria",
        program: "Gastronomía y Culinaria",
        icon: "fas fa-egg",
        prompt: "Pasteles (6 huevos) y flanes (4 huevos). ¿Menor cantidad de huevos para usar exactamente?",
        expression: "MCM(6, 4)",
        answer: "12",
        hint: "Menor cantidad que se divide exactamente por ambos = MCM",
        currency: "huevos"
    },
    {
        context: "Materiales de construcción en Construcciones Civiles",
        program: "Construcciones Civiles",
        icon: "fas fa-cubes",
        prompt: "Ladrillos en filas de 24, 36 y 48 unidades. ¿Mayor cantidad por columna para formar rectángulos?",
        expression: "MCD(24, 36, 48)",
        answer: "12",
        hint: "Mayor división común para formar grupos iguales = MCD",
        currency: "ladrillos"
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
