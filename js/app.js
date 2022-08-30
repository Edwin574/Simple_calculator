const lightswitch = document.getElementById('light-switch')
const body = document.querySelector('body')
const digits = document.querySelectorAll('.digit')
const display=document.querySelector('answer-area')

console.log(digits)


lightswitch.addEventListener('click', () => {
    lightswitch.classList.toggle('light-mode')
    body.classList.toggle('light')
    
})
