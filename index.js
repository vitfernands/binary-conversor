let selectInput = document.getElementById("select-input-number-system");
let selectOutput = document.getElementById("select-output-number-system");
let inputNumber = document.getElementById("input-number").value;
let button = document.getElementById("button-calculate");
let resultNumber = document.getElementById("result-number").value;
resultNumber = parseInt(resultNumber);

function verifyInputSelectedOption () {
    const selectedInputOption = selectInput.options[selectInput.selectedIndex].value;
    return selectedInputOption;
}
    
function verifyOutputSelectedoption() {
    const selectedOutputOption = selectOutput.options[selectOutput.selectedIndex].value;
    return selectedOutputOption;
}

button.addEventListener("click", () => {
    inputOption = verifyInputSelectedOption();
    outputOption = verifyOutputSelectedoption();
});


//
