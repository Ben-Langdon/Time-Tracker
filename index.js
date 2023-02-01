
const btn = document.querySelector('.start-timer-btn')
const display = document.querySelector('.display')
const logSection = document.querySelector('.previous-logs')
const body = document.querySelector('body')


btn.addEventListener('click', startTimer)
document.addEventListener('keyup', spaceBarStart)


let startTime;
let timeSinceStart;
let updateInterval;
let loggedTimeTotal = 0;

function startTimer() {
    document.removeEventListener('keyup', spaceBarStart)
    document.addEventListener('keyup', spaceBarStop)
    startTime = new Date()
    updateInterval = setInterval(update, 1000)
    btn.innerText = 'Stop / Log'
    btn.removeEventListener('click', startTimer)
    btn.addEventListener('click', stopTimer)
    body.style.backgroundColor = 'rgb(0,100,0)'
}

function spaceBarStart(evt) {
    if (evt.key === ' ') {
        startTimer()
    }
}

function spaceBarStop(evt) {
    if (evt.key === ' ') {
        stopTimer()
    }
}

function update() {
    timeSinceStart = (new Date() - startTime) / 3600000
    display.innerText = `Current Hours: ${timeSinceStart.toString().slice(0,6)}`
}

function stopTimer() {
    document.removeEventListener('keyup', spaceBarStop)
    document.addEventListener('keyup', spaceBarStart)
    display.innerText = `Current Hours: 0.0000`
    btn.innerText = 'Start Timer'
    clearInterval(updateInterval)
    btn.removeEventListener('click', stopTimer)
    btn.addEventListener('click', startTimer)
    loggedTimeTotal += timeSinceStart
    logSection.innerText = loggedTimeTotal.toString().slice(0,6)
    body.style.backgroundColor = 'rgb(100,0,0)'
}