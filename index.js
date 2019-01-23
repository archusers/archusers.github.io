window.addEventListener('load', () => {
    setInterval(() => {
        const now = Date.now();
        const grad = new Date('2022-05-01T00:00:00').getTime();
        const timeLeft = Math.max(grad - now, 0);
        const secondsLeft = Math.floor(timeLeft / 1000) % 60;
        const minutesLeft = Math.floor(timeLeft / (1000 * 60)) % 60;
        const hoursLeft = Math.floor(timeLeft / (1000 * 60 * 60)) % 24;
        const daysLeft = Math.floor(timeLeft / (1000 * 60 * 60 * 24)) % 365;
        const yearsLeft = Math.floor(timeLeft / (1000 * 60 * 60 * 24 * 365));
        const countDown = `Graduating in ${yearsLeft} years, ${daysLeft} days, ${hoursLeft} hours, ${minutesLeft} minutes, ${secondsLeft} seconds.`

        const graduatingElement = document.getElementById('graduating');
        graduatingElement.innerHTML = countDown;
    }, 1);
});
