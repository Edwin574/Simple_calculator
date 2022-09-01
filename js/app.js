const lightswitch = document.getElementById("light-switch");
const body = document.querySelector("body");
const display = document.querySelector(".answer-area");
const clear = document.querySelector(".clear-button");

const digits = document.querySelectorAll(".digit");
const operators = document.querySelectorAll(".operator");
const squareRoot = document.querySelector('.square-root')
const equal = document.querySelector('.equal-sign')
const percent = document.querySelector('.percentage')
const multiply = document.querySelector('.multiply')
const decimal=document.querySelector('.decimal')
//light switch

lightswitch.addEventListener("click", () => {
    lightswitch.classList.toggle("light-mode");
    body.classList.toggle("light");
});

//getting values from numeric buttons

digits.forEach((element) => {
    element.addEventListener("click", (e) => {
        let value = e.target.innerText
        display.append(value);
        let number = display.innerHTML


        equal.addEventListener('click', () => {
            if (number.includes('x')) {
                let newValue = number.split('x')
                let product = (parseInt(newValue[0])) * (parseInt(newValue[1]))
                display.innerHTML = ''
                display.append(product)
            } else if (number.includes('÷')) {
                newValue = number.split('÷')
                product = (parseInt(newValue[0])) / (parseInt(newValue[1]))
                display.innerHTML = ''
                display.append(product)
            } else if (number.includes('+')) {
                newValue = number.split('+')
                product = (parseInt(newValue[0])) + (parseInt(newValue[1]))
                display.innerHTML = ''
                display.append(product)
            } else if (number.includes('-')) {
                newValue = number.split('-')
                product = (parseInt(newValue[0])) - (parseInt(newValue[1]))
                display.innerHTML = ''
                display.append(product)
            }
        
        })
    })



})





//clear button
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
//appending decimal
decimal.addEventListener('click', (e) => {
    display.append(e.target.innerText)
})
//squareroot

squareRoot.addEventListener('click', () => {
    let answer = Math.sqrt(parseInt(display.innerHTML))
    console.log(answer)
    equal.addEventListener('click', () => {
        display.innerHTML = ''
        display.append(answer)
    })
})
//percentage
percent.addEventListener('click', () => {
    let answer = (parseInt(display.innerHTML) / 100)
    equal.addEventListener('click', () => {
        display.innerHTML = ''
        display.append(answer)
    })
})