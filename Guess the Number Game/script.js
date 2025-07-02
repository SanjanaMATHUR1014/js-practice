let secretNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function checkGuess() {
  const guessInput = document.getElementById("userGuess");
  const message = document.getElementById("message");
  const score = document.getElementById("score");
  const userGuess = parseInt(guessInput.value);

  if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
    message.textContent = "⛔ Enter a number between 1 and 100!";
    return;
  }

  attempts++;
  score.textContent = `Attempts: ${attempts}`;

  if (userGuess > secretNumber) {
    message.textContent = "📈 Too high! Try again.";
  } else if (userGuess < secretNumber) {
    message.textContent = "📉 Too low! Try again.";
  } else {
    message.textContent = `🎉 Correct! You guessed it in ${attempts} attempts.`;
    message.style.color = "green";
  }

  guessInput.value = "";
  guessInput.focus();
}

function resetGame() {
  secretNumber = Math.floor(Math.random() * 100) + 1;
  attempts = 0;
  document.getElementById("message").textContent = "";
  document.getElementById("score").textContent = "Attempts: 0";
  document.getElementById("userGuess").value = "";
  document.getElementById("message").style.color = "#000";
}
