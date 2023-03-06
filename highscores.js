const highScoresList = document.getElementById('highScoresList');
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

highScoresList.innerHTML = highScores
  .map(score => {
    return `<div class="ab"><li class="high-score">${score.name} - ${score.score}</li></div>`;
  })
 .join("");