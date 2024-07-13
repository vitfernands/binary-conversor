let selectInput = document.getElementById("select-input-number-system");
let selectOutput = document.getElementById("select-output-number-system");
let inputNumber = document.getElementById("input-number").value;
let button = document.getElementById("button-calculate");
let resultNumber = document.getElementById("result-number").value;

function verifySelectedOption () {
    const selectedInputOption = selectInput.options[selectInput.selectedIndex].value;
    const selectedOutputOption = selectOutput.options[selectOutput.selectedIndex].value;
    alert("input: " + selectedInputOption + " output: " + selectedOutputOption);
}

button.addEventListener("click", () => {
    verifySelectedOption();
});
