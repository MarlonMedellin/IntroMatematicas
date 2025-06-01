/**
 * Common functions for the space shooter game
 */

// Initialize the game when a module page is loaded
function initGame(moduleQuestions) {
    // Wait for DOM to be loaded
    document.addEventListener('DOMContentLoaded', () => {
        // Create game UI elements if they don't exist
        createGameUIElements();
        
        // Initialize the game engine
        const gameEngine = new GameEngine('gameCanvas');
        gameEngine.init(moduleQuestions);
        
        // Setup restart button
        const restartButton = document.getElementById('restartButton');
        if (restartButton) {
            restartButton.addEventListener('click', () => {
                gameEngine.restart();
            });
        }
        
        // Setup return to menu button
        const menuButton = document.getElementById('menuButton');
        if (menuButton) {
            menuButton.addEventListener('click', () => {
                window.location.href = '../index.html';
            });
        }
    });
}

// Create game UI elements
function createGameUIElements() {
    const gameContainer = document.querySelector('.game-container');
    if (!gameContainer) return;
    
    // Create canvas if it doesn't exist
    if (!document.getElementById('gameCanvas')) {
        const canvas = document.createElement('canvas');
        canvas.id = 'gameCanvas';
        gameContainer.appendChild(canvas);
    }
    
    // Create question container if it doesn't exist
    if (!document.querySelector('.question-container')) {
        const questionContainer = document.createElement('div');
        questionContainer.className = 'question-container';
        
        questionContainer.innerHTML = `
            <div class="question-text"></div>
            <div class="answer-options"></div>
        `;
        
        gameContainer.appendChild(questionContainer);
    }
    
    // Create game over screen if it doesn't exist
    if (!document.querySelector('.game-over')) {
        const gameOverScreen = document.createElement('div');
        gameOverScreen.className = 'game-over';
        
        gameOverScreen.innerHTML = `
            <h2>¡Juego Terminado!</h2>
            <div class="final-score"></div>
            <button id="restartButton">Jugar de nuevo</button>
            <button id="menuButton">Volver al menú</button>
        `;
        
        gameContainer.appendChild(gameOverScreen);
    }
}

// Format a question for display
function formatQuestion(question) {
    return {
        question: question.text,
        options: question.options,
        correctIndex: question.correctIndex
    };
}

// Shuffle array (Fisher-Yates algorithm)
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Get a subset of questions
function getRandomQuestions(questions, count) {
    const shuffled = shuffleArray([...questions]);
    return shuffled.slice(0, Math.min(count, questions.length));
}

