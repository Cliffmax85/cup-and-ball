// import functions and grab DOM elements
const cupOne = document.getElementById('cup-one-button');
const cupTwo = document.getElementById('cup-two-button');
const cupThree = document.getElementById('cup-three-button');
const cupOneImg = document.getElementById('cup1-image');
const cupTwoImg = document.getElementById('cup2-image');
const cupThreeImg = document.getElementById('cup3-image');
const winsEl = document.getElementById('wins');
const totalEl = document.getElementById('total');
const lossesEl = document.getElementById('losses');
const resetScore = document.getElementById('reset-score'); 
const resetPics = document.getElementById('reset-styles');
const resetAll = document.getElementById('reset-all');

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
    cupOneImg.src = `./assets/cup-image.png`;
    cupTwoImg.src = `./assets/cup-image.png`;
    cupThreeImg.src = './assets/cup-image.png';
}

function resetImagesAndScore() {
    cupOneImg.src = `./assets/cup-image.png`;
    cupTwoImg.src = `./assets/cup-image.png`;
    cupThreeImg.src = './assets/cup-image.png';
    totalGuesses = 0;
    correctGuesses = 0;
    winsEl.textContent = '0';
    lossesEl.textContent = '0';
    totalEl.textContent = '0';

}

function handleGuess(userGuess, correctSpot) {
    resetStyles();

    totalGuesses++;

    let correctGuess = document.getElementById(`${correctSpot}-image`);
    correctGuess.src = './assets/correctCupImg.png';

    if (userGuess === correctSpot) {
        correctGuesses++;
    }

    totalEl.textContent = totalGuesses;
    winsEl.textContent = correctGuesses;
    lossesEl.textContent = totalGuesses - correctGuesses;

}

resetScore.addEventListener('click', () => {
    resetGameScore();
});

resetPics.addEventListener('click', () => {
    resetImages();
});

resetAll.addEventListener('click', () => {
    resetImagesAndScore();
});

function resetGameScore() {
    totalGuesses = 0;
    correctGuesses = 0;
    winsEl.textContent = '0';
    lossesEl.textContent = '0';
    totalEl.textContent = '0';
}

function resetImages() {
    cupOneImg.src = `./assets/cup-image.png`;
    cupTwoImg.src = `./assets/cup-image.png`;
    cupThreeImg.src = './assets/cup-image.png';
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
