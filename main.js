const wordDiv = document.querySelector('.word')
const input = document.querySelector('input')
const scoreDiv = document.querySelector('.score')
const timeDiv = document.querySelector('.time-left')
const message = document.querySelector('.result')

const words = [
    'postgresql',
    'avenger',
    'daredevil',
    'slayer',
    'player',
    'spiderman',
    'captain',
    'cristiano',
    'madrid',
    'manchester',
    'titan',
    'anonymous'
]

let timeLeft = 4
let score = 0
let isPlaying = true
let timeInterval

function init() {
    getWord()
    input.addEventListener('input', matchWords)
    clearInterval(timeInterval)
    timeInterval = setInterval(timer, 1000)
}

function getWord() {
    let word = words[Math.floor(Math.random()*words.length)]
    // difficult word at 4, 8 score
    if (score%5 == 0 && score) {
        word = 'methamphetamine'
    }
    wordDiv.innerText = word
}

function matchWords() {
    if (input.value == wordDiv.innerText) {
        score++
        timeLeft = 4
        scoreDiv.innerText = score
        timeDiv.innerText = timeLeft
        message.innerText = 'Correct!!'
        input.value = ''
        // new word
        init()
    }
}

function timer() {
    if (timeLeft > 0) {
        timeLeft--
    } else if (timeLeft == 0) {
        score = -1
        message.innerHTML = `
            Game Over<br>
            <p>Type the word to play again!</p>
            `        
    }    
    timeDiv.innerText = timeLeft
}


     
// event 
window.addEventListener('load', init)
