let answers = [];

function selectAnswer(answer) {
    answers.push(answer);
}

function showResult() {
    if (answers.length < 3) {
        alert("Please answer all questions!");
        return;
    }

    let resultCount = {};
    answers.forEach(ans => {
        resultCount[ans] = (resultCount[ans] || 0) + 1;
    });

    let result = Object.keys(resultCount).reduce((a, b) => resultCount[a] > resultCount[b] ? a : b);
    
    let personalityMap = {
        "A": "The Thinker 🤓",
        "B": "The Adventurer 🌍",
        "C": "The Gamer 🎮"
    };

    document.getElementById("quiz-container").style.display = "none";
    document.getElementById("result-container").style.display = "block";
    document.getElementById("result").innerText = personalityMap[result] || "Unknown";
}

function restartQuiz() {
    answers = [];
    document.getElementById("quiz-container").style.display = "block";
    document.getElementById("result-container").style.display = "none";
}