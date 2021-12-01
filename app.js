// import functions and grab DOM elements
const cupOne = document.getElementById('cup-one-button');
const cupTwo = document.getElementById('cup-two-button');
const cupThree = document.getElementById('cup-three-button');
const cupOneImg = document.getElementById('cup-one-image');
const cupTwoImg = document.getElementById('cup-two-image');
const cupThreeImg = document.getElementById('cup-three-image');
const winsEl = document.getElementById('wins');
const totalEl = document.getElementById('total');
const lossesEl = document.getElementById('losses');

const cupPlaces = [
  'cup1',
  'cup2',
  'cup3'
];







// let state
let correctGuesses = 0;
let totalGuesses = 0;

function getRandomItem(arr) {
  const index = Math.floor(Math.random() * arr.length);

  return arr[index];
}

function resetStyles() {
  cupOneImg.src = './assets/cupImg.png';
  cupTwoImg.src = './assets/cupImg.png';
  cupThreeImg.src = './assets/cupImg.png';
}

function handleGuess(userGuess, correctSpot) {
  resetStyles();

  totalGuesses++;

  let correctEl = document.getElementById(`${correctSpot}-image`);
  correctEl.src="./assets/Screen Shot 2021-11-28 at 8.09.09 PM.png"

  if (userGuess === correctSpot) {
    correctGuesses++;
  }

  totalEl.textContent = totalGuesses;
  winsEl.textContent = correctGuesses;
  lossesEl.textContent = totalGuesses - correctGuesses;

}


// set event listeners 
cupOne.addEventListener('click', () => {
  const randomButton = getRandomItem(cupPlaces);
  handleGuess('cup1', randomButton);
});

cupTwo.addEventListener('click', () => {
  const randomButton = getRandomItem(cupPlaces);
  handleGuess('cup2', randomButton);
});

cupThree.addEventListener('click', () => {
  const randomButton = getRandomItem(cupPlaces);
  handleGuess('cup3', randomButton);
});



  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
