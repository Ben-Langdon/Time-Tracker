
const btn = document.querySelector('.start-timer')
const display = document.querySelector('.display')


btn.addEventListener('click', startTimer)


let startTime;
let loggedTime;
let updateInterval

function startTimer() {
    startTime = new Date()
    updateInterval = setInterval(update, 1000)
    btn.innerText = 'Pause'
    btn.removeEventListener('click', startTimer)
    btn.addEventListener('click', pauseTimer)
}


function update() {
    loggedTime = (new Date() - startTime) / 3600000
    display.innerText = `hours: ${loggedTime.toString().slice(0,6)}`
}

function pauseTimer() {
    btn.innerText = 'Resume'
    clearInterval(updateInterval)
    btn.removeEventListener('click', pauseTimer)
    btn.addEventListener('click', resumeTimer)
}

function resumeTimer() {
    alert('working')
}