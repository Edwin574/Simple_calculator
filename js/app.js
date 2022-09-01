const lightswitch = document.getElementById("light-switch");
const body = document.querySelector("body");
const display = document.querySelector(".answer-area");

const digits = document.querySelectorAll(".digit");

//light switch

lightswitch.addEventListener("click", () => {
    lightswitch.classList.toggle("light-mode");
    body.classList.toggle("light");
});

//numeric buttons

digits.forEach((element) => {
    element.addEventListener("click", (e) => {
        display.innerHTML = parseInt(e.target.innerText)
        console.log(display.innerHTML);
    });
});
