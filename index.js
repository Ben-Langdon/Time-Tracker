
const btn = document.querySelector('.start-timer')
const display = document.querySelector('.display')
const logSection = document.querySelector('.previous-logs')


btn.addEventListener('click', startTimer)


let startTime;
let timeSinceStart;
let updateInterval;
let loggedTimeTotal = 0;

function startTimer() {
    startTime = new Date()
    updateInterval = setInterval(update, 1000)
    btn.innerText = 'Stop / Log'
    btn.removeEventListener('click', startTimer)
    btn.addEventListener('click', stopTimer)
}


function update() {
    timeSinceStart = (new Date() - startTime) / 3600000
    display.innerText = `Hours: ${timeSinceStart.toString().slice(0,6)}`
}

function stopTimer() {
    btn.innerText = 'Start Timer'
    clearInterval(updateInterval)
    btn.removeEventListener('click', stopTimer)
    btn.addEventListener('click', startTimer)
    loggedTimeTotal += timeSinceStart
    logSection.innerText = loggedTimeTotal
}