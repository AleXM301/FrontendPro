function startTimer(time) {

    const [minutes, seconds] = time.split(':').map(Number);

    let currentTime = new Date();
    currentTime.setMinutes(minutes);
    currentTime.setSeconds(seconds);

    const result = document.querySelector('#result');
    result.textContent = timeToString(currentTime.getMinutes()) + ":" + timeToString(currentTime.getSeconds())

    let intervalSet = setInterval(() => {

        currentTime.setSeconds(currentTime.getSeconds() - 1);
        result.textContent = timeToString(currentTime.getMinutes()) + ":" + timeToString(currentTime.getSeconds());

        if (currentTime.getMinutes() === 0 && currentTime.getSeconds() === 0) {
            clearInterval(intervalSet);

        }
    }, 1000);
}

function timeToString(value) {
    return value.toString().padStart(2, "0");
}

startTimer("01:25");


