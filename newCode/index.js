let selectedNumberSystem = document.querySelector("#select-number-system");
let selectedNumberIndex = selectedNumberSystem.selectedIndex;
let selectedNumberOption = selectedNumberSystem[selectedNumberIndex];
let selectedValue = selectedNumberOption.value;
let selectedText = selectedNumberOption.text;

let selectedOutputNumberSystem = document.querySelector("#choose-output-number-system-label");
let selectedOutputNumberIndex = selectedOutputNumberSystem.selectedIndex;
let selectedOutpuNumberOption = selectedOutputNumberSystem[selectedOutputNumberIndex];
let selectedOutputValue = selectedOutpuNumberOption.value;
let selectedOutputText = selectedOutpuNumberOption.text;

console.log(selectedValue);
console.log(selectedOutputValue);
