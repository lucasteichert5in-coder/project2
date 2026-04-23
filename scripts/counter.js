//Make Variables

let counter = document.getElementById("counter");
let number = 0;
let counterbutton = document.getElementById("add-1-counter-button");
let minusbutton = document.getElementById("minus-1-counter-button");
let clearbutton = document.getElementById("clear-button")

// Define functions
function add1() {
    number = number + 1;
    counter.textContent = number;
}

function minus1() {
    number = number - 1;
    counter.textContent = number;
}
function clear1() {
    number = 0;
    counter.textContent = number;
}


//Define Button Event Listeners
counterbutton.addEventListener("click", add1);
minusbutton.addEventListener("click", minus1);
clearbutton.addEventListener("click", clear1)



