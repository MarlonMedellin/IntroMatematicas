/**
 * Flashcard Game - Lógica común para todos los juegos de memoria
 * Versión modular con validación y manejo de errores
 * Desarrollado por Profe Marlon Arcila
 */

class FlashcardGame {
    constructor(gameData) {
        // Validar datos del juego antes de inicializar
        if (!this.validateGameData(gameData)) {
            throw new Error('Los datos del juego son inválidos. Revisa la consola para más detalles.');
        }
        
        // Configuración del juego
        this.gameData = gameData;
        this.cards = [];
        this.flippedCards = [];
        this.matchedPairs = [];
        this.moves = 0;
        this.gameTime = 0;
        this.gameTimer = null;
        this.isGameActive = false;
        this.gameWon = false;

        // Elementos del DOM
        this.gameGrid = null;
        this.timerElement = null;
        this.movesElement = null;
        this.victoryMessage = null;
        this.victoryText = null;
        this.errorMessage = null;

        // Inicializar cuando el DOM esté listo
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.initializeDOM());
        } else {
            this.initializeDOM();
        }

        // Binding para usar en event listeners
        this.restartGame = this.restartGame.bind(this);
        this.handleKeydown = this.handleKeydown.bind(this);
        
        // Hacer disponible globalmente para el botón de reinicio
        window.restartGame = this.restartGame;

        console.log('🎮 FlashcardGame inicializado correctamente');
    }

    /**
     * Valida que los datos del juego sean correctos
     * @param {Array} data - Array con los datos de las cartas
     * @returns {boolean} - true si los datos son válidos
     */
    validateGameData(data) {
        console.log('🔍 Validando datos del juego...');

        if (!Array.isArray(data) || data.length === 0) {
            console.error('❌ gameData debe ser un array no vacío');
            return false;
        }

        if (data.length % 2 !== 0) {
            console.error('❌ El número de cartas debe ser par');
            return false;
        }

        const pairs = new Set();
        const ids = new Set();

        for (const card of data) {
            // Verificar propiedades requeridas
            if (!card.id || !card.type || !card.content || card.pair === undefined) {
                console.error('❌ Carta inválida (faltan propiedades):', card);
                return false;
            }

            // Verificar IDs únicos
            if (ids.has(card.id)) {
                console.error('❌ ID duplicado:', card.id);
                return false;
            }
            ids.add(card.id);

            // Verificar tipos válidos
            if (!['concept', 'definition'].includes(card.type)) {
                console.error('❌ Tipo inválido (debe ser "concept" o "definition"):', card.type);
                return false;
            }

            pairs.add(card.pair);
        }

        // Verificar que cada par tenga exactamente 2 cartas
        const pairCounts = {};
        data.forEach(card => {
            pairCounts[card.pair] = (pairCounts[card.pair] || 0) + 1;
        });

        for (const [pair, count] of Object.entries(pairCounts)) {
            if (count !== 2) {
                console.error(`❌ El par ${pair} tiene ${count} cartas, debe tener exactamente 2`);
                return false;
            }
        }

        // Verificar que cada par tenga un concept y un definition
        const pairsByType = {};
        data.forEach(card => {
            if (!pairsByType[card.pair]) {
                pairsByType[card.pair] = [];
            }
            pairsByType[card.pair].push(card.type);
        });

        for (const [pair, types] of Object.entries(pairsByType)) {
            if (!types.includes('concept') || !types.includes('definition')) {
                console.error(`❌ El par ${pair} debe tener un 'concept' y un 'definition'`);
                return false;
            }
        }

        console.log('✅ Datos del juego válidos');
        return true;
    }

    /**
     * Inicializa elementos del DOM y evento listeners
     */
    initializeDOM() {
        try {
            // Obtener elementos del DOM
            this.gameGrid = document.getElementById('gameGrid');
            this.timerElement = document.getElementById('timer');
            this.movesElement = document.getElementById('moves');
            this.victoryMessage = document.getElementById('victoryMessage');
            this.victoryText = document.getElementById('victoryText');

            // Crear mensaje de error si no existe
            this.createErrorMessage();

            // Verificar que todos los elementos existan
            if (!this.gameGrid || !this.timerElement || !this.movesElement || !this.victoryMessage) {
                throw new Error('No se encontraron todos los elementos DOM necesarios');
            }

            // Agregar event listeners
            document.addEventListener('keydown', this.handleKeydown);

            // Inicializar el juego
            this.init();

        } catch (error) {
            console.error('❌ Error al inicializar DOM:', error);
            this.showError('Error al inicializar el juego. Verifica que el HTML tenga todos los elementos necesarios.');
        }
    }

    /**
     * Crea el elemento de mensaje de error si no existe
     */
    createErrorMessage() {
        this.errorMessage = document.getElementById('errorMessage');
        if (!this.errorMessage) {
            this.errorMessage = document.createElement('div');
            this.errorMessage.id = 'errorMessage';
            this.errorMessage.className = 'error-message';
            
            // Insertar después del header
            const header = document.querySelector('.header');
            if (header) {
                header.insertAdjacentElement('afterend', this.errorMessage);
            }
        }
    }

    /**
     * Muestra un mensaje de error
     * @param {string} message - Mensaje a mostrar
     */
    showError(message) {
        if (this.errorMessage) {
            this.errorMessage.textContent = message;
            this.errorMessage.classList.add('show');
            setTimeout(() => {
                this.errorMessage.classList.remove('show');
            }, 5000);
        }
    }

    /**
     * Maneja eventos de teclado para accesibilidad
     * @param {KeyboardEvent} event - Evento de teclado
     */
    handleKeydown(event) {
        // Solo procesar si el juego está activo
        if (this.gameWon || !this.isGameActive) return;

        // Enter o Espacio para activar carta
        if (event.key === 'Enter' || event.key === ' ') {
            const focusedElement = document.activeElement;
            if (focusedElement && focusedElement.classList.contains('card-container')) {
                event.preventDefault();
                const cardId = parseInt(focusedElement.dataset.cardId);
                this.handleCardClick(cardId);
            }
        }

        // R para reiniciar
        if (event.key.toLowerCase() === 'r' && event.ctrlKey) {
            event.preventDefault();
            this.restartGame();
        }
    }

    /**
     * Inicializa el juego
     */
    init() {
        console.log('🎯 Iniciando juego...');
        this.shuffleCards();
        this.renderCards();
        this.resetStats();
        this.startTimer();
    }

    /**
     * Baraja las cartas aleatoriamente
     */
    shuffleCards() {
        this.cards = [...this.gameData].sort(() => Math.random() - 0.5);
        console.log('🔀 Cartas barajadas');
    }

    /**
     * Renderiza las cartas en el DOM
     */
    renderCards() {
        if (!this.gameGrid) {
            console.error('❌ No se puede renderizar: gameGrid no encontrado');
            return;
        }

        this.gameGrid.innerHTML = '';
        
        this.cards.forEach((card, index) => {
            const cardContainer = document.createElement('div');
            cardContainer.className = 'card-container';
            cardContainer.dataset.cardId = card.id;
            cardContainer.tabIndex = 0; // Hacer focuseable para accesibilidad
            cardContainer.setAttribute('aria-label', `Carta ${index + 1} de ${this.cards.length}`);
            
            cardContainer.innerHTML = `
                <div class="card" id="card-${card.id}">
                    <div class="card-face card-back">
                        <i class="fas fa-question" aria-hidden="true"></i>
                    </div>
                    <div class="card-face card-front ${card.type}">
                        <i class="card-icon ${this.getCardIcon(card.type)}" aria-hidden="true"></i>
                        <div class="card-content ${card.type}">${card.content}</div>
                    </div>
                </div>
            `;
            
            // Event listener para clic
            cardContainer.addEventListener('click', () => this.handleCardClick(card.id));
            
            this.gameGrid.appendChild(cardContainer);
        });

        console.log('🎨 Cartas renderizadas');
    }

    /**
     * Obtiene el icono apropiado para el tipo de carta
     * @param {string} type - Tipo de carta ('concept' o 'definition')
     * @returns {string} - Clase del icono
     */
    getCardIcon(type) {
        return type === 'concept' ? 'fas fa-lightbulb' : 'fas fa-book-open';
    }

    /**
     * Maneja el clic en una carta
     * @param {number} cardId - ID de la carta clickeada
     */
    handleCardClick(cardId) {
        // Verificar condiciones para no procesar el clic
        if (this.flippedCards.length === 2 || 
            this.flippedCards.includes(cardId) || 
            this.matchedPairs.includes(cardId) ||
            this.gameWon) {
            return;
        }

        console.log('🎯 Carta clickeada:', cardId);

        // Voltear carta
        const cardElement = document.getElementById(`card-${cardId}`);
        if (!cardElement) {
            console.error('❌ No se encontró el elemento carta:', cardId);
            return;
        }

        cardElement.classList.add('flipped');
        this.flippedCards.push(cardId);

        // Si tenemos 2 cartas volteadas, verificar coincidencia
        if (this.flippedCards.length === 2) {
            this.moves++;
            this.updateMoves();
            
            const [firstCardId, secondCardId] = this.flippedCards;
            const firstCard = this.cards.find(card => card.id === firstCardId);
            const secondCard = this.cards.find(card => card.id === secondCardId);

            if (!firstCard || !secondCard) {
                console.error('❌ No se encontraron las cartas:', firstCardId, secondCardId);
                return;
            }

            if (firstCard.pair === secondCard.pair) {
                // ✅ Par encontrado
                console.log('✅ Par encontrado:', firstCard.pair);
                setTimeout(() => {
                    this.matchedPairs.push(firstCardId, secondCardId);
                    this.markCardsAsMatched(firstCardId, secondCardId);
                    this.flippedCards = [];
                    
                    // Verificar si el juego terminó
                    if (this.matchedPairs.length === this.cards.length) {
                        this.endGame();
                    }
                }, 1000);
            } else {
                // ❌ No es par
                console.log('❌ No es par');
                setTimeout(() => {
                    const firstCardElement = document.getElementById(`card-${firstCardId}`);
                    const secondCardElement = document.getElementById(`card-${secondCardId}`);
                    
                    if (firstCardElement && secondCardElement) {
                        firstCardElement.classList.remove('flipped');
                        secondCardElement.classList.remove('flipped');
                    }
                    this.flippedCards = [];
                }, 1500);
            }
        }
    }

    /**
     * Marca las cartas como emparejadas
     * @param {number} cardId1 - ID de la primera carta
     * @param {number} cardId2 - ID de la segunda carta
     */
    markCardsAsMatched(cardId1, cardId2) {
        const card1Container = document.querySelector(`[data-card-id="${cardId1}"]`);
        const card2Container = document.querySelector(`[data-card-id="${cardId2}"]`);
        
        if (!card1Container || !card2Container) {
            console.error('❌ No se encontraron los contenedores de cartas');
            return;
        }

        const card1Front = card1Container.querySelector('.card-front');
        const card2Front = card2Container.querySelector('.card-front');
        
        card1Container.classList.add('matched');
        card2Container.classList.add('matched');
        card1Front.classList.add('matched');
        card2Front.classList.add('matched');

        // Actualizar aria-label para accesibilidad
        card1Container.setAttribute('aria-label', 'Carta emparejada');
        card2Container.setAttribute('aria-label', 'Carta emparejada');
    }

    /**
     * Reinicia el juego
     */
    restartGame() {
        console.log('🔄 Reiniciando juego...');

        this.flippedCards = [];
        this.matchedPairs = [];
        this.gameWon = false;
        this.victoryMessage.classList.remove('show');
        
        // Remover clases de cartas volteadas y emparejadas
        document.querySelectorAll('.card').forEach(card => {
            card.classList.remove('flipped');
        });
        document.querySelectorAll('.card-container').forEach(container => {
            container.classList.remove('matched');
            container.removeAttribute('aria-label'); // Reset aria-label
        });
        document.querySelectorAll('.card-front').forEach(front => {
            front.classList.remove('matched');
        });
        
        this.shuffleCards();
        this.renderCards();
        this.resetStats();
        this.startTimer();
    }

    /**
     * Resetea las estadísticas del juego
     */
    resetStats() {
        this.moves = 0;
        this.gameTime = 0;
        this.updateMoves();
        this.updateTimer();
    }

    /**
     * Inicia el cronómetro del juego
     */
    startTimer() {
        this.isGameActive = true;
        if (this.gameTimer) {
            clearInterval(this.gameTimer);
        }
        
        this.gameTimer = setInterval(() => {
            if (this.isGameActive && !this.gameWon) {
                this.gameTime++;
                this.updateTimer();
            }
        }, 1000);
    }

    /**
     * Actualiza el display del cronómetro
     */
    updateTimer() {
        if (!this.timerElement) return;

        const mins = Math.floor(this.gameTime / 60);
        const secs = this.gameTime % 60;
        this.timerElement.textContent = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    }

    /**
     * Actualiza el display de movimientos
     */
    updateMoves() {
        if (!this.movesElement) return;

        this.movesElement.textContent = `${this.moves} movimientos`;
    }

    /**
     * Termina el juego y muestra mensaje de victoria
     */
    endGame() {
        console.log('🎉 ¡Juego terminado!');

        this.gameWon = true;
        this.isGameActive = false;
        clearInterval(this.gameTimer);
        
        const mins = Math.floor(this.gameTime / 60);
        const secs = this.gameTime % 60;
        const timeText = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
        
        if (this.victoryText) {
            this.victoryText.textContent = `¡Felicitaciones! Completaste el juego en ${timeText} con ${this.moves} movimientos.`;
        }
        
        if (this.victoryMessage) {
            this.victoryMessage.classList.add('show');
        }

        // Log de estadísticas finales
        console.log('📊 Estadísticas finales:', {
            tiempo: timeText,
            movimientos: this.moves,
            eficiencia: Math.round((this.cards.length / 2) / this.moves * 100) + '%'
        });
    }

    /**
     * Obtiene estadísticas del juego
     * @returns {Object} - Objeto con las estadísticas actuales
     */
    getStats() {
        return {
            moves: this.moves,
            time: this.gameTime,
            matched: this.matchedPairs.length / 2,
            total: this.cards.length / 2,
            isActive: this.isGameActive,
            isWon: this.gameWon
        };
    }
}

// Función de utilidad para crear un juego con manejo de errores
function createFlashcardGame(gameData) {
    try {
        return new FlashcardGame(gameData);
    } catch (error) {
        console.error('❌ Error al crear el juego:', error.message);
        
        // Mostrar error en la página si es posible
        const errorDiv = document.createElement('div');
        errorDiv.className = 'error-message show';
        errorDiv.innerHTML = `
            <strong>Error al cargar el juego:</strong><br>
            ${error.message}<br>
            <small>Revisa la consola para más detalles</small>
        `;
        
        const container = document.querySelector('.container');
        if (container) {
            container.insertBefore(errorDiv, container.firstChild);
        }
        
        return null;
    }
}

// Exportar para uso en módulos (si es necesario)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { FlashcardGame, createFlashcardGame };
}

console.log('📦 FlashcardGame class cargada correctamente');