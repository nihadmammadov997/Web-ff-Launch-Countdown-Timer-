const now = new Date();
const randomDays = Math.floor(Math.random() * (14 - 7 + 1)) + 7; 
const launchDate = new Date(now.getTime() + randomDays * 24 * 60 * 60 * 1000);

function updateCountdown() {
    const currentTime = new Date().getTime();
    const timeLeft = launchDate - currentTime;

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.getElementById('days').innerText = days < 10 ? `0${days}` : days;
    document.getElementById('hours').innerText = hours < 10 ? `0${hours}` : hours;
    document.getElementById('minutes').innerText = minutes < 10 ? `0${minutes}` : minutes;
    document.getElementById('seconds').innerText = seconds < 10 ? `0${seconds}` : seconds;

    if (timeLeft < 0) {
        clearInterval(countdown);
        document.querySelector('.timer').innerHTML = '<h2>We Have Launched!</h2>';
    }
}

const countdown = setInterval(updateCountdown, 1000);
updateCountdown();
