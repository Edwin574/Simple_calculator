const lightswitch = document.getElementById("light-switch");
const body = document.querySelector("body");
const display = document.querySelector(".answer-area");
const clear = document.querySelector(".clear-button");

const digits = document.querySelectorAll(".digit");
const operators = document.querySelectorAll(".operator");
const squareRoot = document.querySelector('.square-root')
const equal = document.querySelector('.equal-sign')

//light switch

lightswitch.addEventListener("click", () => {
    lightswitch.classList.toggle("light-mode");
    body.classList.toggle("light");
});

//numeric buttons

digits.forEach((element) => {
    element.addEventListener("click", (e) => {
        let number = parseInt(e.target.innerText);
        display.append(number);
        // console.log(display.innerHTML);
    });
});

clear.addEventListener("click", () => {
    display.innerHTML = "";
});
//appending mathematical operators
operators.forEach((symbol) => {
    symbol.addEventListener("click", (e) => {
        let operator = e.target.innerText;

        display.append(operator);
    });
});

//squareroot

squareRoot.addEventListener('click', () => {
let answer=Math.sqrt(parseInt(display.innerHTML))
    console.log(answer)
    equal.addEventListener('click', () => {
        display.innerHTML = ''
        display.append(answer)
    })
})
//percentage