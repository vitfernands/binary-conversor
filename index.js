const selectInput = document.getElementById("select-input-number-system");
const selectOutput = document.getElementById("select-output-number-system");
const button = document.getElementById("button-calculate");
let resultNumber = document.getElementById("result-number").value;
const resultNumberDisplay = document.getElementById("result-number");
//resultNumber = parseInt(resultNumber);

function getInputnumber() {
    let inputNumber = document.getElementById("input-number").value;
    return inputNumber;
}

function verifyInputSelectedOption () {
    const selectedInputOption = selectInput.options[selectInput.selectedIndex].value;

    return selectedInputOption === "option-binary"
    ? 2 
    : selectedInputOption === "option-octal"
    ? 8 
    : selectedInputOption === "option-hexadecimal"
    ? 16 
    : 10;
    
}
    
function verifyOutputSelectedoption() {
    const selectedOutputOption = selectOutput.options[selectOutput.selectedIndex].value;

    return selectedOutputOption === "option-binary-result"
    ? 2
    : selectedOutputOption === "option-octal-result"
    ? 8
    : selectedOutputOption === "option-hexadecimal-result"
    ? 16
    : 10;
}

function calculate(inputOption, inputNumber, resultNumber, resultNumberDisplay, outputOption) {

    if (inputOption === outputOption) {
        resultNumber = "Same number base";
        resultNumberDisplay.value = resultNumber;
        return;
    }

    if (inputOption === 16) {
        resultNumber = parseInt(inputNumber, 16);
        resultNumber = resultNumber.toString(outputOption).toUpperCase();
        resultNumber = validNumberCheck(resultNumber);
        resultNumberDisplay.value = resultNumber;
    } else {
        inputNumber = parseInt(inputNumber);
        resultNumber = parseInt(inputNumber, inputOption);
        resultNumber = resultNumber.toString(outputOption).toUpperCase();
        resultNumber = validNumberCheck(resultNumber);
        resultNumberDisplay.value = resultNumber;
    }
    
}

function validNumberCheck(resultNumber) {
    if (isNaN(resultNumber)) {
        resultNumber = "Invalid Number";
        return resultNumber;
    }

    return resultNumber;
}

function focusOnDisplay() {
    const inputNumberDisplay = document.getElementById("input-number");
    inputNumberDisplay.focus();
}


button.addEventListener("click", e => {
    e.preventDefault();

    const inputNumber = getInputnumber();

    const inputOption = verifyInputSelectedOption();

    const outputOption = verifyOutputSelectedoption();

    calculate(inputOption, inputNumber, resultNumber, resultNumberDisplay, outputOption);

    focusOnDisplay();
});

document.addEventListener("keypress", e => {
    if (e.key === 'Enter') {
        e.preventDefault();

        const inputNumber = getInputnumber();

        const inputOption = verifyInputSelectedOption();

        const outputOption = verifyOutputSelectedoption();

        calculate(inputOption, inputNumber, resultNumber, resultNumberDisplay, outputOption);

        focusOnDisplay();
    }
}); 



