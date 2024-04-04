let selectNumberSystem = document.getElementById("select-number-system");
let optionDecimal = document.getElementById("optionDecimal");
let optionBinary = document.getElementById("optionBinary");
let optionOctal = document.getElementById("optionOctal");
let optionHexadecimal = document.getElementById("optionHexadecimal");
let inputNumber = document.getElementById("inputNumber");
let selectResultNumberSystem = document.getElementById("select-result-number-system");
let optionBinaryResult = document.getElementById("optionBinaryResult");
let optionDecimalResult = document.getElementById("optionDecimalResult");
let optionOctalResult = document.getElementById("optionOctalResult");
let optionHexadecimalResult = document.getElementById("optionHexadecimalResult");
const buttonCalculate = document.getElementById("buttonCalculate");
let resultNumber = document.getElementById("resultNumber");
let selectInputNumberOption;
let selectOutputNumberOption;
let number;

selectNumberSystem.addEventListener("change", function() { 
    selectInputNumberOption = selectNumberSystem.value;
})

selectResultNumberSystem.addEventListener("change", function() {    //eventos para checar o que esta selecionado no <select> do html
    selectOutputNumberOption = selectResultNumberSystem.value;
})

buttonCalculate.onclick = function () {
    let number = parseInt(inputNumber.value);                           //É NECESSARIO TROCAR O NUMBER PELO InputNumber para dar certo a conversao
    let selectInputNumberOption = selectNumberSystem.value;
    let selectOutputNumberOption = selectResultNumberSystem.value;  

    if(selectInputNumberOption === "optionDecimal" && selectOutputNumberOption === "optionBinaryResult") {  //decimal para outros
        resultNumber.value = number.toString(2);
    } else if (selectInputNumberOption === "optionDecimal" && selectOutputNumberOption === "optionOctalResult") {  
        resultNumber.value = number.toString(8);
    } else if (selectInputNumberOption === "optionDecimal" && selectOutputNumberOption === "optionHexadecimalResult") {
        resultNumber.value = number.toString(16).toUpperCase();

    } else if (selectInputNumberOption === "optionBinary" && selectOutputNumberOption === "optionDecimalResult") {  //binario para outros
        resultNumber.value = parseInt(inputNumber.value, 2);
    } else if (selectInputNumberOption === "optionBinary" && selectOutputNumberOption === "optionOctalResult") {
        number = parseInt(inputNumber.value, 2)
        number = number.toString(8)
        resultNumber.value = number
    } else if (selectInputNumberOption === "optionBinary" && selectOutputNumberOption === "optionHexadecimalResult") {
        number = parseInt(inputNumber.value, 2)
        number = number.toString(16).toUpperCase()
        resultNumber.value = number

    } else if (selectInputNumberOption === "optionOctal" && selectOutputNumberOption === "optionDecimalResult") {   //octal para outros
        resultNumber.value = parseInt(inputNumber.value, 8)
    } else if (selectInputNumberOption === "optionOctal" && selectOutputNumberOption === "optionBinaryResult") {
        number = parseInt(inputNumber.value, 8)
        number = number.toString(2)
        resultNumber.value = number
    } else if (selectInputNumberOption === "optionOctal" && selectOutputNumberOption === "optionHexadecimalResult") {
        number = parseInt(inputNumber.value, 8)
        number = number.toString(16).toUpperCase()
        resultNumber.value = number

    } else if (selectInputNumberOption === "optionHexadecimal" && selectOutputNumberOption === "optionDecimalResult") {     //hexadecimal para outros
        number = parseInt(inputNumber.value, 16)
        resultNumber.value = number
    } else if (selectInputNumberOption === "optionHexadecimal" && selectOutputNumberOption === "optionBinaryResult") {
        number = parseInt(inputNumber.value, 16)
        number = number.toString(2)
        resultNumber.value = number
    } else if (selectInputNumberOption === "optionHexadecimal" && selectOutputNumberOption === "optionOctalResult") {
        number = parseInt(inputNumber.value, 16)
        number = number.toString(8)
        resultNumber.value = number
    }
}


