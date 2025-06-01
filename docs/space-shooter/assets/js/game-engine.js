// ============================================
// MOTOR DEL JUEGO - SPACE SHOOTER MATEMÁTICO
// Desarrollado por Profe Marlon Arcila
// VERSIÓN CORREGIDA - Sincronización pregunta-respuesta
// ============================================

class SpaceShooterEngine {
    constructor(config, questions) {
        this.config = config;
        this.questions = questions;
        this.state = {
            score: 0,
            lives: 3,              // Vidas originales
            level: 1,
            accuracy: 100,
            currentQuestionIndex: 0,
            currentQuestion: null,
            spaceshipX: 50,
            enemies: [],
            bullets: [],
            particles: [],
            isRunning: false,
            isPaused: false,
            totalShots: 0,
            correctShots: 0,
            comboCount: 0,
            gameCompleted: false,
            animationId: null,
            lastTime: 0,
            deltaTime: 0,
            lastEnemySpawn: 0
        };
        
        this.keys = { 
            left: false, 
            right: false, 
            space: false, 
            spacePressed: false 
        };
        
        this.elements = {};
        this.gameStartTime = null;
        this.pauseSpawning = false;  // Flag para pausar spawning durante cambios de pregunta
    }

    // ============================================
    // INICIALIZACIÓN
    // ============================================
    init() {
        this.cacheElements();
        this.createStars();
        this.setupControls();
        this.setupUI();
        
        // CRÍTICO: Asegurar que la primera pregunta se cargue correctamente
        this.pauseSpawning = false;
        this.generateNewQuestion();
        
        console.log('🚀 Space Shooter Engine initialized with first question ready');
    }

    cacheElements() {
        this.elements = {
            gameArea: document.getElementById('gameArea'),
            spaceship: document.getElementById('spaceship'),
            score: document.getElementById('score'),
            lives: document.getElementById('lives'),
            level: document.getElementById('level'),
            accuracy: document.getElementById('accuracy'),
            currentQuestion: document.getElementById('currentQuestion'),
            questionInstruction: document.getElementById('questionInstruction'),
            feedback: document.getElementById('feedback'),
            progressBar: document.getElementById('progressBar'),
            progressText: document.getElementById('progressText'),
            startBtn: document.getElementById('startBtn'),
            pauseBtn: document.getElementById('pauseBtn'),
            restartBtn: document.getElementById('restartBtn'),
            backBtn: document.getElementById('backBtn'),
            completionModal: document.getElementById('completionModal'),
            reflectionContent: document.getElementById('reflectionContent')
        };
    }

    createStars() {
        const starsContainer = document.getElementById('stars');
        if (!starsContainer) return;
        
        const starCount = window.innerWidth < 768 ? 30 : 50;
        
        for (let i = 0; i < starCount; i++) {
            const star = document.createElement('div');
            star.className = 'star';
            star.style.left = Math.random() * 100 + '%';
            star.style.top = Math.random() * 100 + '%';
            star.style.animationDelay = Math.random() * 3 + 's';
            star.style.animationDuration = (2 + Math.random() * 2) + 's';
            starsContainer.appendChild(star);
        }
    }

    setupUI() {
        // Configurar información del juego
        document.title = this.config.gameInfo.title;
        document.getElementById('gameTitle').textContent = this.config.gameInfo.title;
        document.getElementById('gameSubtitle').textContent = this.config.gameInfo.subtitle;
        this.elements.questionInstruction.textContent = this.config.gameInfo.instruction;
        
        // Event listeners para botones
        this.elements.startBtn.addEventListener('click', () => this.startGame());
        this.elements.pauseBtn.addEventListener('click', () => this.togglePause());
        this.elements.restartBtn.addEventListener('click', () => this.restartGame());
        this.elements.backBtn.addEventListener('click', () => this.goBack());
        
        this.updateUI();
    }

    setupControls() {
        // Controles de teclado
        document.addEventListener('keydown', (e) => {
            if (!this.state.isRunning || this.state.isPaused) return;
            
            switch(e.code) {
                case 'ArrowLeft':
                case 'KeyA':
                    this.keys.left = true;
                    e.preventDefault();
                    break;
                case 'ArrowRight':
                case 'KeyD':
                    this.keys.right = true;
                    e.preventDefault();
                    break;
                case 'Space':
                    if (!this.keys.spacePressed) {
                        this.keys.space = true;
                        this.keys.spacePressed = true;
                        this.shoot();
                    }
                    e.preventDefault();
                    break;
            }
        });

        document.addEventListener('keyup', (e) => {
            switch(e.code) {
                case 'ArrowLeft':
                case 'KeyA':
                    this.keys.left = false;
                    break;
                case 'ArrowRight':
                case 'KeyD':
                    this.keys.right = false;
                    break;
                case 'Space':
                    this.keys.space = false;
                    this.keys.spacePressed = false;
                    break;
            }
        });

        // Controles móviles
        const setupMobileControl = (elementId, key, action) => {
            const element = document.getElementById(elementId);
            if (element) {
                element.addEventListener('touchstart', (e) => {
                    e.preventDefault();
                    if (action) action();
                    else this.keys[key] = true;
                });
                element.addEventListener('touchend', (e) => {
                    e.preventDefault();
                    if (!action) this.keys[key] = false;
                });
                element.addEventListener('click', (e) => {
                    e.preventDefault();
                    if (action) action();
                });
            }
        };

        setupMobileControl('moveLeft', 'left');
        setupMobileControl('moveRight', 'right');
        setupMobileControl('shoot', null, () => this.shoot());
    }

    // ============================================
    // CONTROL DEL JUEGO
    // ============================================
    startGame() {
        this.state.isRunning = true;
        this.state.isPaused = false;
        this.gameStartTime = Date.now();
        
        this.elements.startBtn.style.display = 'none';
        this.elements.pauseBtn.style.display = 'inline-flex';
        
        this.state.lastTime = performance.now();
        this.gameLoop();
        console.log('🎮 Game started');
    }

    togglePause() {
        this.state.isPaused = !this.state.isPaused;
        this.elements.pauseBtn.innerHTML = this.state.isPaused ? 
            '<i class="fas fa-play"></i> Continuar' : 
            '<i class="fas fa-pause"></i> Pausar';
        
        if (!this.state.isPaused) {
            this.state.lastTime = performance.now();
            this.gameLoop();
        }
        console.log(this.state.isPaused ? '⏸️ Game paused' : '▶️ Game resumed');
    }

    restartGame() {
        this.stopGame();
        this.resetGameState();
        this.cleanupAllElements();
        this.resetSpaceshipPosition();
        this.generateNewQuestion();
        this.updateUI();
        this.updateProgress();
        
        // Ocultar modal de finalización
        this.elements.completionModal.style.display = 'none';
        
        console.log('🔄 Game restarted');
    }

    stopGame() {
        this.state.isRunning = false;
        if (this.state.animationId) {
            cancelAnimationFrame(this.state.animationId);
        }
    }

    resetGameState() {
        this.state = {
            ...this.state,
            score: 0,
            lives: 3,              // Vidas originales
            level: 1,
            accuracy: 100,
            currentQuestionIndex: 0,
            currentQuestion: null,
            spaceshipX: 50,
            enemies: [],
            bullets: [],
            particles: [],
            isRunning: false,
            isPaused: false,
            totalShots: 0,
            correctShots: 0,
            comboCount: 0,
            gameCompleted: false,
            animationId: null,
            lastTime: 0,
            deltaTime: 0,
            lastEnemySpawn: 0
        };

        this.keys = { 
            left: false, 
            right: false, 
            space: false, 
            spacePressed: false 
        };

        this.pauseSpawning = false;  // Resetear flag de spawning

        // Resetear UI
        this.elements.startBtn.style.display = 'inline-flex';
        this.elements.pauseBtn.style.display = 'none';
    }

    goBack() {
        this.stopGame();
        window.location.href = '../index.html';
    }

    // ============================================
    // LOOP PRINCIPAL DEL JUEGO
    // ============================================
    gameLoop() {
        if (!this.state.isRunning || this.state.isPaused) return;

        const currentTime = performance.now();
        this.state.deltaTime = currentTime - this.state.lastTime;
        this.state.lastTime = currentTime;

        this.update();
        
        this.state.animationId = requestAnimationFrame(() => this.gameLoop());
    }

    update() {
        this.moveSpaceship();
        this.updateEnemies();
        this.updateBullets();
        this.updateParticles();
        this.spawnEnemies();
        this.checkCollisions();
        this.cleanupObjects();
    }

    // ============================================
    // GESTIÓN DE PREGUNTAS
    // ============================================
    generateNewQuestion() {
        // Verificar si se completaron todas las preguntas
        if (this.state.currentQuestionIndex >= this.questions.questions.length) {
            this.completeGame();
            return;
        }
        
        // CRÍTICO: Limpiar TODOS los enemigos antes de cambiar pregunta
        this.cleanupEnemiesOnly();
        
        // CRÍTICO: Pausar spawning temporalmente para evitar respuestas incorrectas
        this.pauseSpawning = true;
        
        // Establecer nueva pregunta
        this.state.currentQuestion = this.questions.questions[this.state.currentQuestionIndex];
        this.elements.currentQuestion.textContent = this.state.currentQuestion.question + ' = ?';
        this.updateProgress();
        
        // CRÍTICO: Reanudar spawning después de un pequeño delay para asegurar sincronización
        setTimeout(() => {
            this.pauseSpawning = false;
            console.log(`📝 Question ${this.state.currentQuestionIndex + 1}/${this.questions.questions.length} READY: "${this.state.currentQuestion.question}" → Correct: "${this.state.currentQuestion.answer}"`);
        }, 300);
    }

    updateProgress() {
        const progress = (this.state.currentQuestionIndex / this.questions.questions.length) * 100;
        if (this.elements.progressBar) {
            this.elements.progressBar.style.width = progress + '%';
        }
        if (this.elements.progressText) {
            this.elements.progressText.textContent = 
                `Pregunta ${this.state.currentQuestionIndex + 1} de ${this.questions.questions.length}`;
        }
    }

    // ============================================
    // MECÁNICAS DE JUEGO
    // ============================================
    moveSpaceship() {
        const speed = this.config.gameplay.spaceshipSpeed * (this.state.deltaTime / 16);
        
        if (this.keys.left && this.state.spaceshipX > 5) {
            this.state.spaceshipX = Math.max(5, this.state.spaceshipX - speed);
        }
        if (this.keys.right && this.state.spaceshipX < 95) {
            this.state.spaceshipX = Math.min(95, this.state.spaceshipX + speed);
        }
        
        this.elements.spaceship.style.left = this.state.spaceshipX + '%';
    }

    shoot() {
        if (!this.state.isRunning || this.state.isPaused) return;
        
        this.state.totalShots++;
        this.updateAccuracy();
        
        const bullet = {
            x: this.state.spaceshipX,
            y: 80,
            element: null
        };
        
        const bulletElement = document.createElement('div');
        bulletElement.className = 'bullet';
        bulletElement.style.left = bullet.x + '%';
        bulletElement.style.bottom = bullet.y + 'px';
        
        bullet.element = bulletElement;
        this.state.bullets.push(bullet);
        this.elements.gameArea.appendChild(bulletElement);
        
        console.log('💥 Bullet fired');
    }

    spawnEnemies() {
        // CRÍTICO: No spawning si está pausado para cambio de pregunta
        if (this.pauseSpawning) {
            return;
        }
        
        const currentTime = performance.now();
        const spawnInterval = Math.max(1000, 
            this.config.gameplay.spawnInterval - 
            (this.state.level * this.config.difficulty.spawnDecrease)
        );

        if (currentTime - this.state.lastEnemySpawn > spawnInterval && 
            this.state.enemies.length < this.config.gameplay.maxEnemiesOnScreen) {
            
            this.spawnEnemy();
            this.state.lastEnemySpawn = currentTime;
        }
    }

    spawnEnemy() {
        // CRÍTICO: Verificaciones estrictas antes de generar enemigo
        if (!this.state.currentQuestion) {
            console.error('❌ SYNC ERROR: No current question available');
            return;
        }
        
        if (this.pauseSpawning) {
            console.warn('⏸️ Spawning paused for question transition');
            return;
        }
        
        if (this.state.currentQuestionIndex >= this.questions.questions.length) {
            console.warn('⚠️ No more questions available');
            return;
        }
        
        // Verificar que la pregunta actual corresponde al índice
        const expectedQuestion = this.questions.questions[this.state.currentQuestionIndex];
        if (this.state.currentQuestion !== expectedQuestion) {
            console.error('❌ SYNC ERROR: Question mismatch!', {
                current: this.state.currentQuestion,
                expected: expectedQuestion
            });
            // Corregir sincronización
            this.state.currentQuestion = expectedQuestion;
        }

        const isCorrect = Math.random() < this.config.gameplay.correctEnemyChance;
        let answer;
        
        if (isCorrect) {
            // Usar la respuesta correcta de la pregunta ACTUAL verificada
            answer = this.state.currentQuestion.answer;
        } else {
            // Generar respuesta incorrecta basada en la pregunta ACTUAL verificada
            const wrongAnswers = this.questions.generateWrongAnswers(
                this.state.currentQuestion.answer, 
                this.state.currentQuestion.type
            );
            answer = wrongAnswers[Math.floor(Math.random() * wrongAnswers.length)] || 
                     this.generateGenericWrongAnswer(this.state.currentQuestion.answer);
        }
        
        const enemy = {
            x: Math.random() * (85 - 15) + 15,
            y: -100,
            answer: answer,
            isCorrect: isCorrect,
            element: null,
            id: Date.now() + Math.random(),
            questionId: this.state.currentQuestionIndex,  // Para tracking
            questionText: this.state.currentQuestion.question,  // Para debugging
            correctAnswer: this.state.currentQuestion.answer   // Para debugging
        };
        
        const enemyElement = document.createElement('div');
        enemyElement.className = `enemy ${isCorrect ? 'correct' : 'incorrect'}`;
        enemyElement.style.left = enemy.x + '%';
        enemyElement.style.top = enemy.y + 'px';
        
        enemyElement.innerHTML = `
            <div class="enemy-content">
                <div class="enemy-answer">${answer}</div>
            </div>
        `;
        
        enemy.element = enemyElement;
        this.state.enemies.push(enemy);
        this.elements.gameArea.appendChild(enemyElement);
        
        console.log(`👾 Enemy spawned - Q${this.state.currentQuestionIndex + 1}: "${this.state.currentQuestion.question}" → Answer: "${answer}" (${isCorrect ? 'CORRECT✅' : 'wrong❌'}) | Expected: "${this.state.currentQuestion.answer}"`);
    }

    updateEnemies() {
        const speed = (this.config.gameplay.enemySpeed + 
                      this.state.level * this.config.difficulty.speedIncrease) * 
                      (this.state.deltaTime / 16);

        this.state.enemies.forEach((enemy, index) => {
            enemy.y += speed;
            enemy.element.style.top = enemy.y + 'px';
            
            if (enemy.y > this.elements.gameArea.offsetHeight + 50) {
                if (enemy.isCorrect) {
                    // Si una respuesta correcta llega al fondo, solo perdemos vida
                    // PERO NO avanzamos la pregunta - la pregunta sigue siendo la misma
                    this.loseLife("¡Se escapó la respuesta correcta!");
                } else {
                    // Si una respuesta incorrecta llega al fondo, no pasa nada malo
                    console.log('💨 Incorrect answer escaped - no penalty');
                }
                this.removeEnemy(index);
            }
        });
    }

    updateBullets() {
        const speed = this.config.gameplay.bulletSpeed * (this.state.deltaTime / 16);
        
        this.state.bullets.forEach((bullet, index) => {
            bullet.y += speed;
            bullet.element.style.bottom = bullet.y + 'px';
            
            if (bullet.y > this.elements.gameArea.offsetHeight + 50) {
                this.removeBullet(index);
            }
        });
    }

    updateParticles() {
        this.state.particles.forEach((particle, index) => {
            particle.life -= this.state.deltaTime;
            
            if (particle.life <= 0) {
                if (particle.element && particle.element.parentNode) {
                    particle.element.parentNode.removeChild(particle.element);
                }
                this.state.particles.splice(index, 1);
            } else {
                particle.x += particle.vx * (this.state.deltaTime / 16);
                particle.y += particle.vy * (this.state.deltaTime / 16);
                particle.element.style.left = particle.x + 'px';
                particle.element.style.top = particle.y + 'px';
                particle.element.style.opacity = particle.life / this.config.visual.particleDuration;
            }
        });
    }

    checkCollisions() {
        this.state.bullets.forEach((bullet, bulletIndex) => {
            this.state.enemies.forEach((enemy, enemyIndex) => {
                if (this.isColliding(bullet, enemy)) {
                    this.handleCollision(bullet, enemy, bulletIndex, enemyIndex);
                }
            });
        });
    }

    isColliding(bullet, enemy) {
        if (!bullet.element || !enemy.element) return false;
        
        const bulletRect = bullet.element.getBoundingClientRect();
        const enemyRect = enemy.element.getBoundingClientRect();
        
        return bulletRect.left < enemyRect.right &&
               bulletRect.right > enemyRect.left &&
               bulletRect.top < enemyRect.bottom &&
               bulletRect.bottom > enemyRect.top;
    }

    handleCollision(bullet, enemy, bulletIndex, enemyIndex) {
        // VERIFICACIÓN DE SINCRONIZACIÓN: Detectar si el enemigo corresponde a la pregunta actual
        if (enemy.questionId !== this.state.currentQuestionIndex) {
            console.error('❌ DESYNC DETECTED!', {
                enemyQuestionId: enemy.questionId,
                currentQuestionIndex: this.state.currentQuestionIndex,
                enemyAnswer: enemy.answer,
                currentQuestion: this.state.currentQuestion?.question,
                expectedAnswer: this.state.currentQuestion?.answer
            });
        }
        
        this.createExplosion(enemy.x + 75, enemy.y + 40);
        this.createParticles(enemy.x + 75, enemy.y + 40, enemy.isCorrect);
        
        if (enemy.isCorrect) {
            this.handleCorrectAnswer();
        } else {
            this.handleIncorrectAnswer();
        }
        
        this.removeBullet(bulletIndex);
        this.removeEnemy(enemyIndex);
        
        this.updateUI();
        this.updateAccuracy();
    }

    // ============================================
    // MANEJO DE RESPUESTAS
    // ============================================
    handleCorrectAnswer() {
        const basePoints = this.config.scoring.correctAnswer;
        const levelBonus = this.config.scoring.levelBonus * this.state.level;
        const comboBonus = Math.floor(this.state.comboCount * this.config.scoring.comboMultiplier * 10);
        const totalPoints = basePoints + levelBonus + comboBonus;
        
        this.state.score += totalPoints;
        this.state.correctShots++;
        this.state.comboCount++;
        
        let message = `¡Correcto! +${totalPoints}`;
        if (this.state.comboCount > 1) {
            message += ` (Combo x${this.state.comboCount})`;
        }
        
        this.showFeedback(message, 'correct');
        
        // LÓGICA ORIGINAL: Avanzar a la siguiente pregunta cuando aciertas
        setTimeout(() => {
            this.state.currentQuestionIndex++;
            this.generateNewQuestion();
            
            if (this.state.correctShots % this.config.gameplay.levelUpRequirement === 0) {
                this.levelUp();
            }
        }, 1000);
        
        console.log(`✅ Correct answer! Advancing to next question. Score: ${this.state.score}, Combo: ${this.state.comboCount}`);
    }

    handleIncorrectAnswer() {
        this.state.comboCount = 0; // Romper combo
        this.loseLife('¡Respuesta incorrecta!');
        
        console.log('❌ Incorrect answer! Combo broken.');
    }

    loseLife(message) {
        this.state.lives--;
        this.showFeedback(message + ` (-1 vida)`, 'incorrect');
        
        if (this.state.lives <= 0) {
            this.endGame();
        }
        // IMPORTANTE: NO avanzar pregunta cuando se pierde vida
        // La pregunta solo avanza cuando se dispara a respuesta incorrecta
    }

    levelUp() {
        this.state.level++;
        const message = `🎉 ¡Nivel ${this.state.level}!`;
        this.showFeedback(message, 'correct');
        
        console.log(`📈 Level up! New level: ${this.state.level}`);
    }

    // ============================================
    // EFECTOS VISUALES
    // ============================================
    createExplosion(x, y) {
        const explosion = document.createElement('div');
        explosion.className = 'explosion';
        explosion.style.left = x + 'px';
        explosion.style.top = y + 'px';
        
        this.elements.gameArea.appendChild(explosion);
        
        setTimeout(() => {
            if (explosion.parentNode) {
                explosion.parentNode.removeChild(explosion);
            }
        }, this.config.visual.explosionDuration);
    }

    createParticles(x, y, isCorrect) {
        const particleCount = this.config.gameplay.particleCount;
        const color = isCorrect ? '#00AEAC' : '#ff4444';
        
        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.position = 'absolute';
            particle.style.left = x + 'px';
            particle.style.top = y + 'px';
            particle.style.background = color;
            particle.style.width = '4px';
            particle.style.height = '4px';
            particle.style.borderRadius = '50%';
            particle.style.zIndex = '25';
            
            const angle = (Math.PI * 2 * i) / particleCount;
            const speed = 50 + Math.random() * 100;
            const vx = Math.cos(angle) * speed;
            const vy = Math.sin(angle) * speed;
            
            const particleData = {
                element: particle,
                x: x,
                y: y,
                vx: vx,
                vy: vy,
                life: this.config.visual.particleDuration
            };
            
            this.state.particles.push(particleData);
            this.elements.gameArea.appendChild(particle);
        }
    }

    showFeedback(message, type) {
        const feedback = this.elements.feedback;
        feedback.textContent = message;
        feedback.className = `feedback ${type} show`;
        
        setTimeout(() => {
            feedback.classList.remove('show');
        }, this.config.visual.feedbackDuration);
    }

    // ============================================
    // FINALIZACIÓN DEL JUEGO
    // ============================================
    completeGame() {
        this.state.gameCompleted = true;
        this.stopGame();
        this.showCompletionModal();
        console.log('🏆 Game completed successfully!');
    }

    endGame() {
        this.stopGame();
        this.showCompletionModal(false);
        console.log('💀 Game ended');
    }

    showCompletionModal(success = true) {
        const modal = this.elements.completionModal;
        const reflectionContent = this.elements.reflectionContent;
        
        if (success) {
            // Mostrar reflexión educativa
            reflectionContent.innerHTML = `
                <h3>${this.questions.reflection.title}</h3>
                <p><strong>Reflexión:</strong> ${this.questions.reflection.content}</p>
                <p><strong>Feedback:</strong> ${this.questions.reflection.feedback}</p>
                <div class="final-stats">
                    <h4>🏆 Estadísticas Finales</h4>
                    <p><strong>Puntuación:</strong> ${this.state.score.toLocaleString()}</p>
                    <p><strong>Nivel:</strong> ${this.state.level}</p>
                    <p><strong>Precisión:</strong> ${this.state.accuracy}%</p>
                    <p><strong>Preguntas completadas:</strong> ${this.state.currentQuestionIndex}/${this.questions.questions.length}</p>
                </div>
            `;
        } else {
            reflectionContent.innerHTML = `
                <h3>💫 ¡Misión Espacial Terminada!</h3>
                <p>No te preocupes, explorar el espacio matemático requiere práctica. ¡Inténtalo de nuevo!</p>
                <div class="final-stats">
                    <h4>📊 Estadísticas</h4>
                    <p><strong>Puntuación:</strong> ${this.state.score.toLocaleString()}</p>
                    <p><strong>Nivel:</strong> ${this.state.level}</p>
                    <p><strong>Precisión:</strong> ${this.state.accuracy}%</p>
                    <p><strong>Preguntas completadas:</strong> ${this.state.currentQuestionIndex}/${this.questions.questions.length}</p>
                </div>
            `;
        }
        
        modal.style.display = 'flex';
    }

    // ============================================
    // UTILIDADES
    // ============================================
    updateAccuracy() {
        if (this.state.totalShots > 0) {
            this.state.accuracy = Math.round((this.state.correctShots / this.state.totalShots) * 100);
        }
    }

    updateUI() {
        this.elements.score.textContent = this.state.score.toLocaleString();
        this.elements.level.textContent = this.state.level;
        this.elements.accuracy.textContent = this.state.accuracy + '%';
        
        // Volver a 3 vidas máximo
        const hearts = '❤️'.repeat(Math.max(0, this.state.lives));
        const emptyHearts = '💔'.repeat(Math.max(0, 3 - this.state.lives));
        this.elements.lives.textContent = hearts + emptyHearts;
    }

    generateGenericWrongAnswer(correctAnswer) {
        const correct = parseFloat(correctAnswer) || 0;
        const variations = [
            correct + Math.floor(Math.random() * 10) + 1,
            correct - Math.floor(Math.random() * 10) - 1,
            -correct,
            Math.abs(correct)
        ];
        return variations[Math.floor(Math.random() * variations.length)].toString();
    }

    removeEnemy(index) {
        if (this.state.enemies[index]) {
            const enemy = this.state.enemies[index];
            if (enemy.element && enemy.element.parentNode) {
                enemy.element.parentNode.removeChild(enemy.element);
            }
            this.state.enemies.splice(index, 1);
        }
    }

    removeBullet(index) {
        if (this.state.bullets[index]) {
            const bullet = this.state.bullets[index];
            if (bullet.element && bullet.element.parentNode) {
                bullet.element.parentNode.removeChild(bullet.element);
            }
            this.state.bullets.splice(index, 1);
        }
    }

    cleanupEnemiesOnly() {
        // CRÍTICO: Limpiar todos los enemigos y pausar spawning durante transición
        this.pauseSpawning = true;
        
        let cleanedCount = 0;
        this.state.enemies.forEach(enemy => {
            if (enemy.element && enemy.element.parentNode) {
                enemy.element.parentNode.removeChild(enemy.element);
                cleanedCount++;
            }
        });
        this.state.enemies = [];
        
        console.log(`🧹 Cleaned ${cleanedCount} enemies for question transition`);
        
        // El pauseSpawning se reactivará en generateNewQuestion()
    }

    cleanupAllElements() {
        this.state.enemies.forEach(enemy => {
            if (enemy.element && enemy.element.parentNode) {
                enemy.element.parentNode.removeChild(enemy.element);
            }
        });
        
        this.state.bullets.forEach(bullet => {
            if (bullet.element && bullet.element.parentNode) {
                bullet.element.parentNode.removeChild(bullet.element);
            }
        });
        
        this.state.particles.forEach(particle => {
            if (particle.element && particle.element.parentNode) {
                particle.element.parentNode.removeChild(particle.element);
            }
        });

        const explosions = this.elements.gameArea.querySelectorAll('.explosion');
        explosions.forEach(explosion => explosion.remove());
    }

    cleanupObjects() {
        // Los objetos se limpian automáticamente en sus respectivas funciones update
    }

    resetSpaceshipPosition() {
        this.state.spaceshipX = 50;
        this.elements.spaceship.style.left = '50%';
    }
}

// Exportar para uso en módulos
if (typeof module !== 'undefined' && module.exports) {
    module.exports = SpaceShooterEngine;
}