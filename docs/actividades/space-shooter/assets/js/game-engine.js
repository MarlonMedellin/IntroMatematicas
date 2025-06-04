// ============================================
// MOTOR DEL JUEGO - SPACE SHOOTER MATEMÁTICO
// Desarrollado por Profe Marlon Arcila
// VERSION CORREGIDA - SISTEMA ANTI-DESINCRONIZACIÓN
// ============================================

class SpaceShooterEngine {
    constructor(config, questions) {
        this.config = config;
        this.questions = questions;
        this.state = {
            score: 0,
            lives: 3,
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
        this.pauseSpawning = false; // Sistema anti-desincronización
    }

    // ============================================
    // INICIALIZACIÓN
    // ============================================
    init() {
        try {
            console.log('🚀 Iniciando Space Shooter Engine...');
            this.cacheElements();
            this.createStars();
            this.setupControls();
            this.setupUI();
            this.generateNewQuestion();
            console.log('✅ Space Shooter Engine inicializado correctamente');
        } catch (error) {
            console.error('❌ Error durante la inicialización:', error);
            alert('Error al inicializar el juego. Por favor, recarga la página.');
        }
    }

    cacheElements() {
        console.log('📦 Cacheando elementos del DOM...');
        
        // Lista de elementos requeridos
        const requiredElements = {
            gameArea: 'gameArea',
            spaceship: 'spaceship',
            score: 'score',
            lives: 'lives',
            level: 'level',
            accuracy: 'accuracy',
            currentQuestion: 'currentQuestion',
            questionInstruction: 'questionInstruction',
            feedback: 'feedback',
            progressBar: 'progressBar',
            progressText: 'progressText',
            startBtn: 'startBtn',
            pauseBtn: 'pauseBtn',
            restartBtn: 'restartBtn',
            backBtn: 'backBtn',
            completionModal: 'completionModal',
            reflectionContent: 'reflectionContent'
        };

        // Cachear elementos y verificar que existan
        for (const [key, id] of Object.entries(requiredElements)) {
            const element = document.getElementById(id);
            if (!element) {
                console.warn(`⚠️ Elemento no encontrado: ${id}`);
            }
            this.elements[key] = element;
        }

        console.log('✅ Elementos cacheados:', Object.keys(this.elements).filter(k => this.elements[k]).length);
    }

    createStars() {
        const starsContainer = document.getElementById('stars');
        if (!starsContainer) {
            console.warn('⚠️ Contenedor de estrellas no encontrado');
            return;
        }
        
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
        console.log('🎮 Configurando interfaz de usuario...');
        
        // Configurar información del juego
        const gameTitle = document.getElementById('gameTitle');
        const gameSubtitle = document.getElementById('gameSubtitle');
        
        if (gameTitle) gameTitle.textContent = this.config.gameInfo.title;
        if (gameSubtitle) gameSubtitle.textContent = this.config.gameInfo.subtitle;
        if (this.elements.questionInstruction) {
            this.elements.questionInstruction.textContent = this.config.gameInfo.instruction;
        }
        
        // Event listeners para botones con verificación
        if (this.elements.startBtn) {
            this.elements.startBtn.addEventListener('click', () => {
                console.log('🚀 Botón Start presionado');
                this.startGame();
            });
        }
        
        if (this.elements.pauseBtn) {
            this.elements.pauseBtn.addEventListener('click', () => {
                console.log('⏸️ Botón Pause presionado');
                this.togglePause();
            });
        }
        
        if (this.elements.restartBtn) {
            this.elements.restartBtn.addEventListener('click', () => {
                console.log('🔄 Botón Restart presionado');
                this.restartGame();
            });
        }
        
        if (this.elements.backBtn) {
            this.elements.backBtn.addEventListener('click', () => {
                console.log('🔙 Botón Back presionado');
                this.goBack();
            });
        }
        
        this.updateUI();
        console.log('✅ UI configurada correctamente');
    }

    setupControls() {
        console.log('🎮 Configurando controles...');
        
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
            } else {
                console.warn(`⚠️ Control móvil no encontrado: ${elementId}`);
            }
        };

        setupMobileControl('moveLeft', 'left');
        setupMobileControl('moveRight', 'right');
        setupMobileControl('shoot', null, () => this.shoot());
        
        console.log('✅ Controles configurados');
    }

    // ============================================
    // CONTROL DEL JUEGO
    // ============================================
    startGame() {
        try {
            this.state.isRunning = true;
            this.state.isPaused = false;
            this.gameStartTime = Date.now();
            
            if (this.elements.startBtn) this.elements.startBtn.style.display = 'none';
            if (this.elements.pauseBtn) this.elements.pauseBtn.style.display = 'inline-flex';
            
            this.state.lastTime = performance.now();
            this.gameLoop();
            console.log('🎮 Juego iniciado');
        } catch (error) {
            console.error('❌ Error al iniciar el juego:', error);
        }
    }

    togglePause() {
        this.state.isPaused = !this.state.isPaused;
        if (this.elements.pauseBtn) {
            this.elements.pauseBtn.innerHTML = this.state.isPaused ? 
                '<i class="fas fa-play"></i> Continuar' : 
                '<i class="fas fa-pause"></i> Pausar';
        }
        
        if (!this.state.isPaused) {
            this.state.lastTime = performance.now();
            this.gameLoop();
        }
        console.log(this.state.isPaused ? '⏸️ Juego pausado' : '▶️ Juego reanudado');
    }

    restartGame() {
        try {
            this.stopGame();
            this.resetGameState();
            this.cleanupAllElements();
            this.resetSpaceshipPosition();
            this.generateNewQuestion();
            this.updateUI();
            this.updateProgress();
            
            // Ocultar modal de finalización
            if (this.elements.completionModal) {
                this.elements.completionModal.style.display = 'none';
            }
            
            console.log('🔄 Juego reiniciado');
        } catch (error) {
            console.error('❌ Error al reiniciar el juego:', error);
        }
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
            lives: 3,
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
        
        this.pauseSpawning = false; // Resetear sistema anti-desincronización

        // Resetear UI
        if (this.elements.startBtn) this.elements.startBtn.style.display = 'inline-flex';
        if (this.elements.pauseBtn) this.elements.pauseBtn.style.display = 'none';
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

        try {
            this.update();
        } catch (error) {
            console.error('❌ Error en el game loop:', error);
        }
        
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
        if (this.state.currentQuestionIndex >= this.questions.questions.length) {
            this.completeGame();
            return;
        }
        
        // 1. Limpiar TODOS los enemigos anteriores
        this.cleanupEnemiesOnly();
        
        // 2. Pausar spawning temporalmente para evitar desincronización
        this.pauseSpawning = true;
        
        // 3. Establecer nueva pregunta
        this.state.currentQuestion = this.questions.questions[this.state.currentQuestionIndex];
        if (this.elements.currentQuestion) {
            this.elements.currentQuestion.textContent = this.state.currentQuestion.question + ' = ?';
        }
        this.updateProgress();
        
        console.log('📝 Nueva pregunta:', this.state.currentQuestion.question, '| Respuesta correcta:', this.state.currentQuestion.answer);
        
        // 4. Reanudar spawning después de 300ms
        setTimeout(() => {
            this.pauseSpawning = false;
            console.log('✅ Spawning reanudado para pregunta:', this.state.currentQuestion.question);
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
        if (!this.elements.spaceship) return;
        
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
        if (!this.state.isRunning || this.state.isPaused || !this.elements.gameArea) return;
        
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
        
        console.log('💥 Disparo realizado');
    }

    spawnEnemies() {
        // Verificar si el spawning está pausado
        if (this.pauseSpawning) return;
        
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
        if (!this.state.currentQuestion || !this.elements.gameArea) return;
        if (this.pauseSpawning) return; // Doble verificación

        // Verificar sincronización pregunta-índice
        const expectedQuestion = this.questions.questions[this.state.currentQuestionIndex];
        if (this.state.currentQuestion !== expectedQuestion) {
            console.error('❌ SYNC ERROR: Question mismatch!', {
                current: this.state.currentQuestion?.question,
                expected: expectedQuestion?.question,
                index: this.state.currentQuestionIndex
            });
            // Auto-corrección
            this.state.currentQuestion = expectedQuestion;
        }

        const isCorrect = Math.random() < this.config.gameplay.correctEnemyChance;
        let answer;
        
        if (isCorrect) {
            answer = this.state.currentQuestion.answer;
        } else {
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
            questionId: this.state.currentQuestionIndex, // Track which question this enemy belongs to
            questionText: this.state.currentQuestion.question // For debugging
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
        
        // Log detallado para debugging
        console.log(`👾 Enemy spawned - Q${this.state.currentQuestionIndex + 1}: "${this.state.currentQuestion.question}" → Answer: "${answer}" (${isCorrect ? 'CORRECT✅' : 'WRONG❌'}) | Expected: "${this.state.currentQuestion.answer}"`);
    }

    updateEnemies() {
        if (!this.elements.gameArea) return;
        
        const speed = (this.config.gameplay.enemySpeed + 
                      this.state.level * this.config.difficulty.speedIncrease) * 
                      (this.state.deltaTime / 16);

        this.state.enemies.forEach((enemy, index) => {
            enemy.y += speed;
            if (enemy.element) {
                enemy.element.style.top = enemy.y + 'px';
            }
            
            if (enemy.y > this.elements.gameArea.offsetHeight + 50) {
                if (enemy.isCorrect) {
                    this.loseLife("¡Perdiste la respuesta correcta!");
                }
                this.removeEnemy(index);
            }
        });
    }

    updateBullets() {
        if (!this.elements.gameArea) return;
        
        const speed = this.config.gameplay.bulletSpeed * (this.state.deltaTime / 16);
        
        this.state.bullets.forEach((bullet, index) => {
            bullet.y += speed;
            if (bullet.element) {
                bullet.element.style.bottom = bullet.y + 'px';
            }
            
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
                if (particle.element) {
                    particle.element.style.left = particle.x + 'px';
                    particle.element.style.top = particle.y + 'px';
                    particle.element.style.opacity = particle.life / this.config.visual.particleDuration;
                }
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
        // Detectar enemigos desincronizados
        if (enemy.questionId !== this.state.currentQuestionIndex) {
            console.error('❌ DESYNC DETECTED!', {
                enemyQuestionId: enemy.questionId,
                currentQuestionIndex: this.state.currentQuestionIndex,
                enemyQuestion: enemy.questionText,
                currentQuestion: this.state.currentQuestion?.question,
                enemyAnswer: enemy.answer,
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
        
        // Pausar spawning inmediatamente para evitar enemigos de la pregunta anterior
        this.pauseSpawning = true;
        
        // Avanzar a la siguiente pregunta con un pequeño delay
        setTimeout(() => {
            this.state.currentQuestionIndex++;
            this.generateNewQuestion();
            
            if (this.state.correctShots % this.config.gameplay.levelUpRequirement === 0) {
                this.levelUp();
            }
        }, 800);
        
        console.log(`✅ Respuesta correcta! Puntos: ${this.state.score}, Combo: ${this.state.comboCount}`);
    }

    handleIncorrectAnswer() {
        this.state.comboCount = 0;
        this.loseLife('¡Respuesta incorrecta!');
        console.log('❌ Respuesta incorrecta!');
    }

    loseLife(message) {
        this.state.lives--;
        this.showFeedback(message + ` (-1 vida)`, 'incorrect');
        
        if (this.state.lives <= 0) {
            this.endGame();
        }
    }

    levelUp() {
        this.state.level++;
        const message = `🎉 ¡Nivel ${this.state.level}!`;
        this.showFeedback(message, 'correct');
        
        console.log(`📈 Subiste de nivel! Nuevo nivel: ${this.state.level}`);
    }

    // ============================================
    // EFECTOS VISUALES
    // ============================================
    createExplosion(x, y) {
        if (!this.elements.gameArea) return;
        
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
        if (!this.elements.gameArea) return;
        
        const particleCount = this.config.gameplay.particleCount;
        const color = isCorrect ? '#00ff88' : '#ff4444';
        
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
        if (!this.elements.feedback) return;
        
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
        console.log('🏆 Juego completado exitosamente!');
    }

    endGame() {
        this.stopGame();
        this.showCompletionModal(false);
        console.log('💀 Juego terminado');
    }

    showCompletionModal(success = true) {
        if (!this.elements.completionModal || !this.elements.reflectionContent) return;
        
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
        if (this.elements.score) this.elements.score.textContent = this.state.score.toLocaleString();
        if (this.elements.level) this.elements.level.textContent = this.state.level;
        if (this.elements.accuracy) this.elements.accuracy.textContent = this.state.accuracy + '%';
        
        if (this.elements.lives) {
            const hearts = '❤️'.repeat(Math.max(0, this.state.lives));
            const emptyHearts = '💔'.repeat(Math.max(0, 3 - this.state.lives));
            this.elements.lives.textContent = hearts + emptyHearts;
        }
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
        // Limpiar todos los enemigos actuales
        this.state.enemies.forEach(enemy => {
            if (enemy.element && enemy.element.parentNode) {
                enemy.element.parentNode.removeChild(enemy.element);
            }
        });
        this.state.enemies = [];
        console.log('🧹 Enemigos limpiados para nueva pregunta');
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

        if (this.elements.gameArea) {
            const explosions = this.elements.gameArea.querySelectorAll('.explosion');
            explosions.forEach(explosion => explosion.remove());
        }
    }

    cleanupObjects() {
        // Los objetos se limpian automáticamente en sus respectivas funciones update
    }

    resetSpaceshipPosition() {
        this.state.spaceshipX = 50;
        if (this.elements.spaceship) {
            this.elements.spaceship.style.left = '50%';
        }
    }
}

// Exportar para uso en módulos
if (typeof module !== 'undefined' && module.exports) {
    module.exports = SpaceShooterEngine;
}