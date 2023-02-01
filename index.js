
const btn = document.querySelector('.start-timer')


btn.addEventListener('click', startTimer)


function startTimer() {
    btn.innerText = 'Stop Timer'
    btn.removeEventListener('click', startTimer)
    btn.addEventListener('click', stopTimer)
}


function stopTimer() {
    btn.innerText = 'Start Timer'
    btn.removeEventListener('click', stopTimer)
    btn.addEventListener('click', startTimer)
}