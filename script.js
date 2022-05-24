'use strict';

/*
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = '🎉 Congratulations!!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 20;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

let secretNumber = Math.trunc(Math.random() * 20 + 1);
console.log(secretNumber);

let score = 20;
let highscore = 0;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector('.message').textContent = '⛔ No Number';
  } else if (guess === secretNumber) {
    displayMessage('🎉 Congratulations!!');
    // document.querySelector('.message').textContent = '🎉 Congratulations!!';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#3BACB6';
    document.querySelector('.number').style.width = '30rem';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(
        guess < secretNumber ? ' 📈 Guess higher' : ' 📉 Guess lower' // USING TERNARY OPERATOR (REFRACTING THE CODE)
      );
      /*
      document.querySelector('.message').textContent =
      guess < secretNumber ? ' 📈 Guess higher' : ' 📉 Guess lower'; */

      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage(' 💥 You Lost The Game');
      // document.querySelector('.message').textContent = ' 💥 You Lost The Game';
    }

    // else if (guess < secretNumber) {
    //   if (score > 1) {
    //     document.querySelector('.message').textContent = ' 📈 Guess higher';
    //     score--;
    //     document.querySelector('.score').textContent = score;
    //   } else {
    //     document.querySelector('.message').textContent = ' 💥 You Lost The Game';
    //   }
    // } else if (guess > secretNumber) {
    //   if (score > 1) {
    //     document.querySelector('.message').textContent = ' 📉 Guess lower';
    //     score--;
    //     document.querySelector('.score').textContent = score;
    //   } else {
    //     document.querySelector('.message').textContent = ' 💥 You Lost The Game';
    //   }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.score').textContent = '20';
  document.querySelector('.number').textContent = '?';

  displayMessage('Start guessing...');
  // document.querySelector('.message').textContent = 'Start guessing...';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = ' ';
});
