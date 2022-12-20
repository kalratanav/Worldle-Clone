
let fiveLetterWords = [
    'APPLE',
    'HELLO'
];
let currentWord = '';
 

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('guess-button').addEventListener('click', () => {
        guess(); 
    });
    document.getElementById('new-game').addEventListener('click', () => {
        startGame(); 
    });

    startGame(); 
});

/** 
 * Start the game
 * 
 * Get a random word and save it to currentWord.
 * Blank out guess text area
 * Blank out guesses div 
 */
function startGame() {

    window.alert('Game Started');
    document.getElementById('guess').reset();
    document.getElementById('guesses').reset();
    let index = getRandomInt(0, fiveLetterWords.length);
    currentWord = fiveLetterWords[index];
}

/**
 * Handle a guess
 * 
 * Read the guess
 * Compare the guess to currentWord
 * Append to guesses div
 * Check if win
 */
function guess() {
    window.alert("Guessed")
    document.getElementById('guess').value.toUpperCase(); 
    
}

function readTextFile(file)
{
    let reader = new FileReader();
    reader.readAsText(file);
    reader.onload = function() {
        print(reader.result);
    }
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); 
  }