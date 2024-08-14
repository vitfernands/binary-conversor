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

    return selectedInputOption === "option-binary"
     ? 2 
     : selectedInputOption === "option-octal"
     ? 8 
     : selectedInputOption === "option-hexadecimal"
     ? 
     16 :
     10;
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

    console.log(inputOption, outputOption);

    console.log(inputNumber, typeof inputNumber);

    calculate();
});



