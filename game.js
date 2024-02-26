let num1Div = document.getElementById('number1');
let num2Div = document.getElementById('number2');
let num3Div = document.getElementById('number3');

const plusButton = document.querySelector('#plus');
const minusButton = document.querySelector('#minus');
const multiplyButton = document.querySelector('#mul');
const divideButton = document.querySelector('#divide');
const moduloButton = document.querySelector('#modulus');

let timer = document.getElementById('timer');

let num1;
let num2;
let num3;
let clock = 20;
timer.innerHTML = clock;
let score = 0;
let interval;

function randomGenerator() {
  num1 = Math.floor(Math.random() * 100) + 1;
  num2 = Math.floor(Math.random() * 100) + 1;

  let randomOperator = Math.floor(Math.random() * 5) + 1;

  if (randomOperator == 1) {
    num3 = num1 + num2;
  } else if (randomOperator == 2) {
    num3 = num1 - num2;
  } else if (randomOperator == 3) {
    num3 = num1 * num2;
  } else if (randomOperator === 4) {
    num3 = Math.floor(num1 / num2);
  } else if (randomOperator == 5) {
    num3 = num1 % num2;
  }

  num1Div.innerHTML = num1;
  num2Div.innerHTML = num2;
  num3Div.innerHTML = num3;
}

randomGenerator();

plusButton.addEventListener('click', function () {
  if (num1 + num2 == num3) {
    score++;
    randomGenerator();
    clearInterval(interval);
    resetTimer();
    localStorage.setItem('score', score);
  } else {
    window.location.href = './gameover.html';
  }
});

minusButton.addEventListener('click', function () {
  if (num1 - num2 == num3) {
    score++;
    randomGenerator();
    clearInterval(interval);
    resetTimer();
    localStorage.setItem('score', score);
  } else {
    window.location.href = './gameover.html';
  }
});

multiplyButton.addEventListener('click', function () {
  if (num1 * num2 == num3) {
    score++;
    randomGenerator();
    clearInterval(interval);
    resetTimer();
    localStorage.setItem('score', score);
  } else {
    window.location.href = './gameover.html';
  }
});

divideButton.addEventListener('click', function () {
  if (num1 / num2 == num3) {
    score++;
    randomGenerator();
    clearInterval(interval);
    resetTimer();
    localStorage.setItem('score', score);
  } else {
    window.location.href = './gameover.html';
  }
});

moduloButton.addEventListener('click', function () {
  if (num1 % num2 == num3) {
    score++;
    randomGenerator();
    clearInterval(interval);
    resetTimer();
    localStorage.setItem('score', score);
  } else {
    window.location.href = './gameover.html';
  }
});

function resetTimer() {
  clock = 20;
  timer.innerHTML = clock;
  interval = setInterval(function () {
    clock = clock - 1;
    timer.innerHTML = clock;
    if (clock == 0) {
      window.location.href = './gameover.html';
    }
  }, 1000);
}

resetTimer();
