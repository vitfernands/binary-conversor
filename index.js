const selectInput = document.getElementById("select-input-number-system");
const selectOutput = document.getElementById("select-output-number-system");
const button = document.getElementById("button-calculate");
let resultNumber = document.getElementById("result-number").value;
//resultNumber = parseInt(resultNumber);

function getInputnumber() {
    let inputNumber = document.getElementById("input-number").value;
    inputNumber = parseInt(inputNumber);
    return inputNumber;
}

function verifyInputSelectedOption () {
    const selectedInputOption = selectInput.options[selectInput.selectedIndex].value;
    return selectedInputOption;
}
    
function verifyOutputSelectedoption() {
    const selectedOutputOption = selectOutput.options[selectOutput.selectedIndex].value;
    return selectedOutputOption;
}

function calculate() {
    
}

button.addEventListener("click", () => {
    const inputNumber = getInputnumber();

    const inputOption = verifyInputSelectedOption();

    const outputOption = verifyOutputSelectedoption();

    console.log(inputNumber, typeof inputNumber);

    calculate();
});



