// Iteration 8: Making scoreboard functional
const scoreBoard = document.getElementById('score-board');
const playAgainButton = document.getElementById('play-again-button');

let totalScore = localStorage.getItem('score');
scoreBoard.innerHTML = totalScore;
playAgainButton.addEventListener('click', function () {
  window.location.href = 'game.html';
});