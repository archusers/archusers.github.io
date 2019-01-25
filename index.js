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

    // Gets the text from each paragraph, then clears the contents of each
    // paragraph so that they can be retyped one character at a time
    let loreParagraphs = document.querySelectorAll("#lore p");
    let textArr = [];
    for (let i = 0; i < loreParagraphs.length; i++) {
        textArr.push(loreParagraphs[i].innerHTML);
        loreParagraphs[i].innerHTML = "";
    }

    // Will type one character every 30ms after 2000ms have passed
    setTimeout(() => { setInterval(typeChar, 30); }, 2000);

    /*
     * Types one character of lore.
     */
    let paragraphIndex = 0;
    let charIndex = 0;
    function typeChar() {
        // If we are done typing, do nothing
        if (paragraphIndex == textArr.length) {
	    return;
	}
        loreParagraphs[paragraphIndex].innerHTML += textArr[paragraphIndex].charAt(charIndex);
        charIndex++;
        // If we have reached the end of a paragraph, go to the beginning of the next paragraph
        if (charIndex >= textArr[paragraphIndex].length) {
	    charIndex = 0;
	    paragraphIndex++;
        }
    }
});
