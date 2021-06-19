window.addEventListener('load', init);
// Global variables
let time = 5;
let score = 0;
let isPlaying;

// Dom Elements
const wordInput = document.querySelector("#word-input");
const currentWord = document.querySelector("#current-word");
const scoreDisplay = document.querySelector("#score");
const timeDisplay = document.querySelector("#time");
const message = document.querySelector("#message");
const seconds = document.querySelector("#seconds");

// Words to be typed
const words = [
  "hero",
  "Computer",
  "better",
  "beach",
  "saint",
  "patriotic"
];

// initialize game.
function init ( ) {
  // load random Word
  loadWord (words);
  // countdown every second
  setInterval(countdown, 1000);
  // game status
  setInterval(check, 50);
  // check word with input
  wordInput.addEventListener('input', match);
}

// pick random from the array
function loadWord(words) {
  //generate random index
  const randIndex = Math.floor(Math.random() * words.length)
  // output generated word
  currentWord.innerHTML = words[randIndex]
}

// countdown func
function countdown (){
  // check remaing time
  if (time > 0) {
    time--;
  } else if( time === 0) {
    // Game over
    isPlaying = false;
  }
  // Show remaining time
  timeDisplay.innerHTML = time;
}

// check game status
function check (){
  if(!isPlaying && time === 0) {
    message.innerHTML = "Game Over";
    score = -1;
  }
}

//Match word
function match (){
  if (wordsMatch()) {
    isPlaying = true;
    time = 6;
    loadWord(words);
    wordInput.value = '';
    score++;
  }
  
  // if score = -1 set to 0
  if (score === -1){
    scoreDisplay.innerHTML = 0;
  } else {
    scoreDisplay.innerHTML = score;
  }
}

// Bolean func check if word match the input
function wordsMatch(){
  if (wordInput.valueOf === currentWord.innerHTML) {
    message.innerHTML = " Correct!";
    return true;
  } else {
    message.innerHTML = "";
    return false;
  }
}