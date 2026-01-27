let currentInput = "";
let targetNumber = Math.floor(Math.random() * 100) + 1;
const display = document.getElementById("display");
const feedback = document.getElementById("feedback");

function addNumber(num) {
    if (currentInput.length < 3) { 
        currentInput += num;
        display.innerText = currentInput;
    }
}

function clearDisplay() {
    currentInput = "";
    display.innerText = "?";
    feedback.innerText = "Enter a number";
    feedback.style.color = "#ffd700";
}

function submitGuess() {
    if (currentInput === "") return;

    let guess = parseInt(currentInput);

    if (guess === targetNumber) {
        display.innerText = "WIN";
        feedback.innerText = "🎉 Correct! You found it!";
        feedback.style.color = "#fff";
        document.querySelector('.glass-card').style.background = "rgba(46, 204, 113, 0.4)";
    } else if (guess > targetNumber) {
        feedback.innerText = "📉 Too High! Try lower.";
        currentInput = "";
        display.innerText = "?";
    } else {
        feedback.innerText = "📈 Too Low! Try higher.";
        currentInput = "";
        display.innerText = "?";
    }
}
