const select = {
  input: document.getElementById("select-number-system"),
  output: document.getElementById("select-result-number-system"),
};
const buttonCalculate = document.getElementById("buttonCalculate");

const inputNumber = document.getElementById("inputNumber");
let resultNumber = document.getElementById("resultNumber"); // Elemento que ira imprimir o resultado

// Variveis de controle que irão receber o select
let inputSystemNumber = "decimal";
let outputSystemNumber = "BinaryResult";

select.input.addEventListener(
  "change",
  () => (inputSystemNumber = select.input.value)
);
select.output.addEventListener("change", () => {
  outputSystemNumber = select.output.value;
  console.log(outputSystemNumber);
}); //eventos para checar o que esta selecionado no <select> do html

buttonCalculate.addEventListener("click", converge);

function converge() {
  let number = parseInt(inputNumber.value); //É NECESSARIO TROCAR O NUMBER PELO InputNumber para dar certo a conversao

  if (inputSystemNumber === "decimal") {
    switch (outputSystemNumber) {
      case "BinaryResult": {
        resultNumber.value = number.toString(2);
        break;
      }
      case "OctalResult": {
        resultNumber.value = number.toString(8);
        break;
      }
      case "HexaResult": {
        resultNumber.value = number.toString(16).toUpperCase();
        break;
      }
      default: {
        resultNumber.value = inputNumber.value;
        break;
      }
    }
  }
  if (inputSystemNumber === "binary") {
    switch (outputSystemNumber) {
      case "OctalResult": {
        resultNumber.value = number.toString(8);
        break;
      }
      case "DecimalResult": {
        resultNumber.value = number.toString(10);
        break;
      }
      case "HexaResult": {
        number = parseInt(inputNumber.value, 2);
        number = number.toString(16).toUpperCase();
        resultNumber.value = number;
        break;
      }
      default: {
        resultNumber.value = inputNumber.value;
        break;
      }
    }
  }
  if (inputSystemNumber === "octal") {
    switch (outputSystemNumber) {
      case "BinaryResult": {
        number = parseInt(inputNumber.value, 8);
        number = number.toString(2);
        resultNumber.value = number;
        break;
      }
      case "DecimalResult": {
        resultNumber.value = parseInt(inputNumber.value, 8);
        break;
      }
      case "HexaResult": {
        number = parseInt(inputNumber.value, 8);
        number = number.toString(16).toUpperCase();
        resultNumber.value = number;
        break;
      }
      default: {
        resultNumber.value = inputNumber.value;
        break;
      }
    }
  }
  if (inputSystemNumber === "hexa") {
    switch (outputSystemNumber) {
      case "BinaryResult": {
        number = parseInt(inputNumber.value, 16);
        number = number.toString(2);
        resultNumber.value = number;
        break;
      }
      case "OctalResult": {
        number = parseInt(inputNumber.value, 16);
        number = number.toString(8);
        resultNumber.value = number;
        break;
      }
      case "DecimalResult": {
        number = parseInt(inputNumber.value, 16);
        resultNumber.value = number;
        break;
      }
      default: {
        resultNumber.value = inputNumber.value;
        break;
      }
    }
  }
}
