
const btn = document.querySelector('.start-timer')
const display = document.querySelector('.display')


btn.addEventListener('click', startTimer)


let startTime;
let loggedTime;

function startTimer() {
    startTime = new Date()
    setInterval(update, 1000)
    btn.innerText = 'Pause'
    btn.removeEventListener('click', startTimer)
    btn.addEventListener('click', stopTimer)
}


function update() {
    loggedTime = (new Date() - startTime) / 3600000
    display.innerText = `hours: ${loggedTime.toString().slice(0,6)}`
}

function stopTimer() {
    btn.innerText = 'Start Timer'
    btn.removeEventListener('click', stopTimer)
    btn.addEventListener('click', startTimer)
}