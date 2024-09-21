'use strict';
/*
console.log(document.querySelector('.message').textContent);


document.querySelector('.message').textContent = '🎉 Correct Number!'

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10

console.log(document.querySelector('.guess').value); 
document.querySelector('.guess').value = 23;
*/

let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(typeof guess);

// when there is no input
  if (!guess) {
    document.querySelector('.message').textContent = '⛔️ No number!';

// when the player wins
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🎉 Correct number!';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').style.transition = '1s';
    document.querySelector('.number').textContent = secretNumber;

    if (score > highscore){
      highscore = score
      document.querySelector('.highscore').textContent = highscore
    }

// when guess is too high
  } else if (guess > secretNumber) {
    if (score > 1){
    document.querySelector('.message').textContent = '📈 Too high!';
    score = score - 1;
    document.querySelector('.score').textContent = score;
    } else {
    document.querySelector('.message').textContent = '❌ You lost the game!';
    document.querySelector('.score').textContent = 0;
    }

// when guess is too low
  } else if (guess < secretNumber) { 
    if (score > 1){
    document.querySelector('.message').textContent = '📈 Too low!';
    score = score - 1;
    document.querySelector('.score').textContent = score;
    } else {
    document.querySelector('.message').textContent = '❌ You lost the game!';
    document.querySelector('body').style.backgroundColor = 'red';
    document.querySelector('.score').textContent = 0;
  }
}
});

// again button function
document.querySelector('.again').addEventListener('click', function(){
  document.querySelector('.score').textContent = 20;
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.guess').value = '';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').style.transition = '1s';document.querySelector('.number').textContent = '?';
  document.querySelector('.message').textContent = 'Start guessing...'
});
