const ball = document.querySelector('.ball');
const goal = document.querySelector('.goal');
const scoreDisplay = document.getElementById('score');
let score = 0;

function shootBall() {
  ball.style.transition = 'bottom 0.5s ease-out';
  ball.style.bottom = '75%';

  setTimeout(() => {
    checkGoal();
  }, 500);
}

function checkGoal() {
  const ballRect = ball.getBoundingClientRect();
  const goalRect = goal.getBoundingClientRect();

  const ballCenter = ballRect.left + ballRect.width / 2;
  const goalLeft = goalRect.left;
  const goalRight = goalRect.right;

  const isGoal = ballCenter >= goalLeft && ballCenter <= goalRight;

  if (isGoal) {
    score++;
    alert('GOAL! 🎉');
  } else {
    alert('Missed 😢');
  }

  scoreDisplay.textContent = score;
  resetBall();
}

function resetBall() {
  ball.style.transition = 'none';
  ball.style.bottom = '30px';
}

ball.addEventListener('click', shootBall);
