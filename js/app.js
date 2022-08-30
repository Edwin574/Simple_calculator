const lightswitch = document.getElementById('light-switch')
const body=document.getElementsByName('body')



lightswitch.addEventListener('click', () => {
    lightswitch.classList.toggle('light-mode')
    body.classList.add('light')

})