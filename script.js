const word = document.getElementById("word");
const text = document.getElementById("text");
const scoreEl = document.getElementById("score");
const timeEl = document.getElementById("time");
const endgameEl = document.getElementById("endgame");
const settingsBtn = document.getElementById("settings");
const settings = document.getElementById("settings-form");
const modeSelect = document.getElementById("mode");

//Array of words for game
const words = [
  "sigh",
  "silver",
  "highfalutin",
  "superficial",
  "tense",
  "airplane",
  "ball",
  "pies",
  "juice",
  "warlike",
  "bad",
  "north",
  "dependent",
  "steer",
  "quince",
  "eight",
  "feeble",
  "admit",
  "drag",
  "loving",
  "Behemoth",
  "programming",
  "exorbitant",
  "caveat",
  "capitulate",
  "exorbitant",
];

//init the randon word choosen
let randonWord;

//init score
let score = 0;

// init time
let time = 10;

//text focus
text.focus();

//generate random word from array
function getRandomWord() {
  return words[Math.floor(Math.random() * words.length)];
}

// Add word to DOM
function addWordToDom() {
  randonWord = getRandomWord();
  word.innerHTML = randonWord;
}

//update score
function updateScore() {
  score++;
  scoreEl.innerHTML = score;
}
addWordToDom();

//Event Listeners
text.addEventListener("input", (e) => {
  const insertedText = e.target.value;
  // console.log(insertedText)

  if (insertedText === randonWord) {
    addWordToDom();
    updateScore();

    // clear input
    e.target.value = "";
  }
});
