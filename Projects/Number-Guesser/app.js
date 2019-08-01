/*
GAME FUNCTION:
- Player must guess a number between a min and max
- Player ges a certain amount of guesses 
- Notify player of guesses remaining  
- Notify the player of the correct answer if lose
- Let player choose to play again 
*/

// Game Values 
// Able to define all the variables in one foul swoop using this method
let min = 1,
    max = 10,
    winningNum = getRandomNum(min, max),
    guessesLeft = 3;

// UI Elements 
const game = document.querySelector('#game'),
    minNum = document.querySelector('.min-num'),
    maxNum = document.querySelector('.max-num'),
    guessBtn = document.querySelector('#guess-btn'),
    guessInput = document.querySelector('#guess-input'),
    message = document.querySelector('.message');

// Assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;

// Play again event listener 
// We use mouse down cause we can then choose to play again instead of automatically refreshing as soon you guess the correct number
game.addEventListener('mousedown', function(e) {
    if(e.target.className === 'play-again') {
        window.location.reload()
    }
})

// Listen for guess
guessBtn.addEventListener('click', function () {
    let guess = parseInt(guessInput.value)
    console.log(guess)
    // Validate 
    if (isNaN(guess) || guess < min || guess > max) {
        setMessage(`Please enter a number between ${min} and ${max}`, 'red');
    }

    // Check if won 
    if (guess === winningNum) {
        // WIN
        gameOver(true, `${winningNum} is correct, YOU WIN!`)

    } else {
        // Wrong number
        guessesLeft -= 1

        if (guessesLeft === 0) {
            // LOST  
            gameOver(false, `Game Over | You Lose | The correct number was ${winningNum}`)

        } else {
            // Game Continues 
            message.style.color = 'red'
            // Change border color
            guessInput.style.borderColor = 'red'
            // Clear Input
            guessInput.value = '';

            // Wrong Number 
            setMessage(`${guess} is not correct, ${guessesLeft} guesses left.`)
        }
    }
})

// Game Over 
function gameOver(won, msg) {

    let color;
    won === true ? color = 'green' : color = 'red'

    // Disable input 
    guessInput.disabled = true
    // Change border color
    guessInput.style.borderColor = color
    // Set text color 
    message.style.color = color
    // Set message 
    setMessage(msg)

    // Play Again?
    guessBtn.value = 'Play Again'
    // Adds a class to the guessbtn
    guessBtn.className += 'play-again'
    
}

// Get Winning Number 
function getRandomNum(min, max) {
    // Math random always takes away 1 leavingn max at 9 so we need to add 1 
    return Math.floor(Math.random() * (max-min+1))
}

// Set message 
function setMessage(msg, color) {
    message.style.color = color;
    message.textContent = msg;
}
