let scores, roundScore, activePlayer, isplaying;

init();

function init() {
  scores = [0, 0];
  roundScore = 0;
  activePlayer = 0;
  isplaying = true;
  document.querySelector(".dice").style.display = "none";
  document.getElementById("score-0").textContent = "0";
  document.getElementById("score-1").textContent = "0";
  document.getElementById("current-0").textContent = "0";
  document.getElementById("current-1").textContent = "0";
  document.getElementById("name-0").textContent = "Player 1";
  document.getElementById("name-1").textContent = "Player 2";
  document.querySelector(".player-0-panel").classList.remove("winner");
  document.querySelector(".player-1-panel").classList.remove("winner");
  document.querySelector(".player-0-panel").classList.remove("active");
  document.querySelector(".player-1-panel").classList.remove("active");
  document.querySelector(".player-0-panel").classList.add("active");
}

document.querySelector(".btn-roll").addEventListener("click", function () {
  if (isplaying) {
    let num = Math.floor(Math.random() * 6) + 1;
    let dice = document.querySelector(".dice");
    dice.style.display = "block";
    dice.src = `./assets/dice-${num}.png`;
    if (num !== 1) {
      roundScore += num;
      document.querySelector("#current-" + activePlayer).textContent = roundScore;
    } else nextPlayer();
  }
});

document.querySelector(".btn-hold").addEventListener("click", function () {
  if (isplaying) {
    scores[activePlayer] += roundScore;
    document.getElementById("score-" + activePlayer).textContent = scores[activePlayer];
    if (scores[activePlayer] >= 100) {
      isplaying = false;
      document.getElementById("name-" + activePlayer).textContent = "Winner!";
      document.querySelector(".dice").style.display = "none";
      document.querySelector(".player-" + activePlayer + "-panel").classList.add("winner");
      document.querySelector(".player-" + activePlayer + "-panel").classList.remove("active");
    } else {
      nextPlayer();
    }
  }
});

function nextPlayer() {
  roundScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  document.getElementById("current-0").textContent = "0";
  document.getElementById("current-1").textContent = "0";
  document.querySelector(".player-0-panel").classList.toggle("active");
  document.querySelector(".player-1-panel").classList.toggle("active");
  document.querySelector(".dice").style.display = "none";
}

document.querySelector(".btn-new").addEventListener("click", init);
