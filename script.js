function display(val) {
    document.getElementById("answer").value += val;
}

function clearAnswer() {
    document.getElementById("answer").value = "";
}

function backSpace() {
    var answer = document.getElementById('answer').value;
    document.getElementById("answer").value = answer.substr(0, answer.length - 1);
}

function performCalculation() {
    var x = document.getElementById("answer").value;
    var y = eval(x); // Avoid using eval for security reasons in production
    document.getElementById("answer").value = y;
}

var answerInput = document.getElementById("answer");
answerInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("equal").click();
    }
});