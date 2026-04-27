//Make Variables

let counter = document.getElementById("counter");
let number = 0;
let counterbutton = document.getElementById("add-1-counter-button");
let minusbutton = document.getElementById("minus-1-counter-button");
let clearbutton = document.getElementById("clear-button");
let zerobutton = document.getElementById("zero-button");
let onebutton = document.getElementById("one-button");
let twobutton = document.getElementById("two-button");
let threebutton = document.getElementById("three-button");
let fourbutton = document.getElementById("four-button");
let fivebutton = document.getElementById("five-button")
let sixbutton = document.getElementById("six-button");
let sevenbutton=document.getElementById("seven-button");
let eightbutton = document.getElementById("eight-button");
let ninebutton = document.getElementById("nine-button");

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

function zero (){
    number = 0;
    counter.textContent = number;
}

function one () {
    number = 1;
    counter.textContent = number;
}

function two () {
    number= 2;
    counter.textContent = number;
}

function three (){
    number = 3;
    counter.textContent = number;
}

function four (){
    number = 4;
    counter.textContent = number;
}

function five (){
    number = 5;
    counter.textContent = number;
}

function six (){
    number= 6;
    counter.textContent=number;
}

function seven (){
    number= 7
    counter.textContent=number;
}

function eight(){
    number= 8
    counter.textContent=number;
}

function nine(){
    number=9
    counter.textContent=number;
}

//Define Button Event Listeners
counterbutton.addEventListener("click", add1);
minusbutton.addEventListener("click", minus1);
clearbutton.addEventListener("click", clear1);
zerobutton.addEventListener("click", zero);
onebutton.addEventListener("click", one);
twobutton.addEventListener("click", two);
threebutton.addEventListener("click", three);
fourbutton.addEventListener("click",four);
fivebutton.addEventListener("click", five);
sixbutton.addEventListener("click", six);
sevenbutton.addEventListener("click",seven);
eightbutton.addEventListener("click",eight);
ninebutton.addEventListener("click", nine);


