let button1 = document.getElementById("+");
let button2 = document.getElementById("-");
let button3 = document.getElementById("/");
let button4 = document.getElementById("*");
let input1 = document.getElementById("num1");
let input2 = document.getElementById("num2");
let output = document.getElementById("answer");
function plus() {
    let num1 = Number(input1.value);  
    let num2 = Number(input2.value);  
    let answer = num1 + num2;
    output.value = answer;
}
button1.addEventListener("click", plus); 

function minus() {
    let num1 = Number(input1.value);  
    let num2 = Number(input2.value);  
    let answer = num1 - num2;
    output.value = answer;
}
button2.addEventListener("click", minus); 

function division() {
    let num1 = Number(input1.value);  
    let num2 = Number(input2.value);  
    let answer = num1 / num2;
    output.value = answer;
}
button3.addEventListener("click", division); 

function multiply() {
    let num1 = Number(input1.value);  
    let num2 = Number(input2.value);  
    let answer = num1 * num2;
    output.value = answer;
}
button4.addEventListener("click", multiply); 






