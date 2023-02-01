
const btn = document.querySelector('.start-timer')
const display = document.querySelector('.display')


btn.addEventListener('click', startTimer)


let timeNow;
let loggedTime;

function startTimer() {
    timeNow = new Date()
    setInterval(update, 1000)
    btn.innerText = 'Stop Timer'
    btn.removeEventListener('click', startTimer)
    btn.addEventListener('click', stopTimer)
}


function update() {
    loggedTime = (new Date() - timeNow) / 1000
    display.innerText = `${loggedTime} Seconds`
}

function stopTimer() {
    btn.innerText = 'Start Timer'
    btn.removeEventListener('click', stopTimer)
    btn.addEventListener('click', startTimer)
}