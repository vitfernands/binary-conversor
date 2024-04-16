{{ 
const select = {
    inputSystem: document.getElementById("select-number-system"),
    outputNumber: document.getElementById("select-number-system"),
};

const buttonCalculate = document.getElementById("buttonCalculate");
let resultNumber = document.getElementById("resultNumber");

let input;
let output;
let number;

select.numberSystem.addEventListener("change", () => input = select.inputSystem.value);
select.outputNumber.addEventListener("change", () => output = select.outputNumber.value);  //eventos para checar o que esta selecionado no <select> do html


buttonCalculate.onclick = converge

function converge() {
    let number = parseInt(inputNumber.value);                           //É NECESSARIO TROCAR O NUMBER PELO InputNumber para dar certo a conversao

    if(input === 'decimal') {
        switch(output) {
            case 'BinaryResult': {
                resultNumber.value = number.toString(2);
            };
            case 'DecimalResult': {
                resultNumber.value = number.toString(8);
            };
        }
    }
};

}}
// buttonCalculate.onclick = function () {
//     let number = parseInt(inputNumber.value);                           //É NECESSARIO TROCAR O NUMBER PELO InputNumber para dar certo a conversao
//     let selectInputNumberOption = selectNumberSystem.value;
//     let selectOutputNumberOption = selectResultNumberSystem.value;  

//     if(selectInputNumberOption === "optionDecimal" && selectOutputNumberOption === "optionBinaryResult") {  //decimal para outros
//         resultNumber.value = number.toString(2);
//     } else if (selectInputNumberOption === "optionDecimal" && selectOutputNumberOption === "optionOctalResult") {  
//         resultNumber.value = number.toString(8);
//     } else if (selectInputNumberOption === "optionDecimal" && selectOutputNumberOption === "optionHexadecimalResult") {
//         resultNumber.value = number.toString(16).toUpperCase();

//     } else if (selectInputNumberOption === "optionBinary" && selectOutputNumberOption === "optionDecimalResult") {  //binario para outros
//         resultNumber.value = parseInt(inputNumber.value, 2);
//     } else if (selectInputNumberOption === "optionBinary" && selectOutputNumberOption === "optionOctalResult") {
//         number = parseInt(inputNumber.value, 2)
//         number = number.toString(8)
//         resultNumber.value = number
//     } else if (selectInputNumberOption === "optionBinary" && selectOutputNumberOption === "optionHexadecimalResult") {
//         number = parseInt(inputNumber.value, 2)
//         number = number.toString(16).toUpperCase()
//         resultNumber.value = number

//     } else if (selectInputNumberOption === "optionOctal" && selectOutputNumberOption === "optionDecimalResult") {   //octal para outros
//         resultNumber.value = parseInt(inputNumber.value, 8)
//     } else if (selectInputNumberOption === "optionOctal" && selectOutputNumberOption === "optionBinaryResult") {
//         number = parseInt(inputNumber.value, 8)
//         number = number.toString(2)
//         resultNumber.value = number
//     } else if (selectInputNumberOption === "optionOctal" && selectOutputNumberOption === "optionHexadecimalResult") {
//         number = parseInt(inputNumber.value, 8)
//         number = number.toString(16).toUpperCase()
//         resultNumber.value = number

//     } else if (selectInputNumberOption === "optionHexadecimal" && selectOutputNumberOption === "optionDecimalResult") {     //hexadecimal para outros
//         number = parseInt(inputNumber.value, 16)
//         resultNumber.value = number
//     } else if (selectInputNumberOption === "optionHexadecimal" && selectOutputNumberOption === "optionBinaryResult") {
//         number = parseInt(inputNumber.value, 16)
//         number = number.toString(2)
//         resultNumber.value = number
//     } else if (selectInputNumberOption === "optionHexadecimal" && selectOutputNumberOption === "optionOctalResult") {
//         number = parseInt(inputNumber.value, 16)
//         number = number.toString(8)
//         resultNumber.value = number
//     }
// }


