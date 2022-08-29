const word = document.getElementById("word");
const text = document.getElementById("text");
const scoreEl = document.getElementById("score");
const timeEl = document.getElementById("time");
const endgameEl = document.getElementById("end-game-container");
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

//Input focus on start
text.focus();

//start counting down
const timeInterval = setInterval(updateTime, 1000);

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

//Update time
function updateTime() {
  // console.log(1);
  time--;
  timeEl.innerHTML = time;

  if (time === 0) {
    clearInterval(timeInterval);

    //end game
    gameOver();
  }
}

//Game over show end screen
function gameOver() {
  endgameEl.innerHTML = `
  <h1>Time ran out</h1>
  <p>Your final score is: ${score}</p>
  <button onclick="location.reload()">Reload</button>
  `;

  //display it to screen
  endgameEl.style.display = "flex";
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

    //add 5 sec upon correct answer 
    time += 5;

    //call update time
    updateTime();
  }
});
