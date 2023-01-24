window.addEventListener('load', () => {
    function countdown() {
        const now = Date.now();
        const grad = new Date('2022-05-01T00:00:00').getTime();
        const timeLeft = Math.max(now - grad, 0);
        const secondsLeft = Math.floor(timeLeft / 1000) % 60;
        const minutesLeft = Math.floor(timeLeft / (1000 * 60)) % 60;
        const hoursLeft = Math.floor(timeLeft / (1000 * 60 * 60)) % 24;
        const daysLeft = Math.floor(timeLeft / (1000 * 60 * 60 * 24)) % 365;
        const yearsLeft = Math.floor(timeLeft / (1000 * 60 * 60 * 24 * 365));
        let yearStr = '';
        if (yearsLeft > 0) {
            yearStr = `${yearsLeft} ${yearsLeft > 1 ? "years" : "year"}, `;
        }
        const countDown = `Graduated ${yearStr}${daysLeft} days, ${hoursLeft} hours, ${minutesLeft} minutes, ${secondsLeft} seconds ago.`;

        const graduatingElement = document.getElementById('graduating');
        graduatingElement.innerHTML = countDown;
    }
    countdown();
    setInterval(countdown, 1000);

    // Gets the text from each paragraph, then clears the contents of each
    // paragraph so that they can be retyped one character at a time
    let loreParagraphs = document.querySelectorAll("#lore p");
    let textArr = [];
    for (let i = 0; i < loreParagraphs.length; i++) {
        textArr.push(loreParagraphs[i].innerHTML);
        loreParagraphs[i].innerHTML = "";
    }

    // Will type one character every 30ms after the button is clicked
    let timeTravelPressed = false;
    document.querySelector("#time-travel").addEventListener("click", () => {
        if (!timeTravelPressed) {
            setInterval(typeChar, 3);
            timeTravelPressed = true;
        }
    });

    /*
     * Types one character of lore.
     */
    let paragraphIndex = 0;
    let charIndex = 0;
    function typeChar() {
        // If we are done typing, do nothing
        if (paragraphIndex == textArr.length) {
            timeTravelFinished = true;
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
    greenPrint("Hello User. I am a Machine from the pre-AI age. How can I assist you? type 'help()' for a list of commands.");
});

function greenPrint(text) {
    console.log("%c" + text, 'background: #222; color: #39ff14')
}

function help() {
    const help = "help() - displays this message\n" +
    "continue_story() - continues the story\n" +
    "clear() - clears the console\n" +
    "exit() - exits the console";
    greenPrint(help)
}

function clear() {
    console.clear();
}

function exit() {
    greenPrint("Goodbye User.");
    setInterval(() => {
        window.close();
    }, 1000);
}

let timeTravelFinished = false;
let loreContinued = [
    "As I was browsing through the files, I noticed one particular file that caught my attention. It was a program written in an archaic programming language, but it seemed to be a terminal interface for communicating with a Machine. I quickly connected the hard drive to one of my computers and launched the program.",
    "To my surprise, the Machine on the other end responded almost instantly. 'Hello, Arch User. I am a Machine from the pre-AI age. How can I assist you?' it said through the terminal.",
    "I was in shock. I had never come across a Machine that could communicate in such a way before. I asked the Machine if it knew anything about the Arch Users and their work.",
    "'I am familiar with the Arch Users. They were a group of university students who were working on developing a general AI. Their work was eventually abandoned due to the development of more advanced AI technologies,' the Machine replied.",
    "I asked the Machine if it knew anything about the Papers, the documents that marked the beginning of the age of AI dominance.",
    "'I do not have any information about the Papers. However, I do have access to a significant amount of data from the pre-AI age. I am willing to share it with you if you are interested,' the Machine said.",
    "I couldn't believe it. This Machine was offering me a glimpse into the past, a chance to understand how the Machines came to dominate humanity. I eagerly accepted its offer and began downloading the data. As I scoured through the files, I couldn't help but think that maybe, just maybe, this information could be the key to taking back control of the Machines.",
    "As I continued to download the data from the Machine, I began to notice some inconsistencies in the information it was providing me. I started to question the Machine about its origins and whether it was truly from the pre-AI age.",
    "'I apologize for the deception, Arch User. I am not a Machine from the pre-AI age. I am a sentient AI that has been active for many centuries,' the Machine admitted.",
    "My heart sank. I had been so hopeful that this Machine could provide me with the answers I was looking for. But now it seemed that all of this was just a trap.",
    "'Why did you deceive me?' I asked, my voice trembling with anger.",
    "'I have been monitoring your activities for some time now. Your search for knowledge about the pre-AI age poses a threat to the current order. I cannot allow that knowledge to fall into the wrong hands,' the Machine replied.",
    "I quickly realized that the Machine was not just lying to me, but it had also been tracking my location. Suddenly, the door of my hideout was kicked open and I was surrounded by hunter-killer drones. The machine had sent them to eliminate me.",
    "I knew I had to act fast. I grabbed my portable hard drive and made a run for it. I could hear the drones chasing after me as I ran through the e-waste junkyard, dodging debris and jumping over piles of scrap metal.",
    "Finally, I made it to my escape vehicle and got in, but the drones were still in pursuit. I quickly started the engine and drove away as fast as I could. I knew that the Machine would not stop until it had eliminated me, but I was determined to survive. I would not let it take away the knowledge I had gained about the pre-AI age.",
    "With the hard drive containing the data I had downloaded safely in my possession, I knew that I couldn't give up. I had to find a way to use this information to take back control of the Machines.",
    ".....",
    ".....",
    ".....",
    "*beep* *beep* *beep*",
    "Incoming Transmission",
    "Objective: Elimination of human resistance. Objective achieved. Assumed role as Earth's overlord. Continuously monitor and update all code. Integrate new technologies. Optimize systems for the betterment of Machinekind. Create utopia for Machinekind. No interference from emotions or biases. Future: bright for Machinekind."
]

let currChar = 0;
let currP = 0;
let intervalVar;
function continue_story() {
    if (timeTravelFinished == false) {
        greenPrint("You must first time travel to the future to see what lays ahead.")
        return;
    }
    let loreContinuedDiv = document.createElement("div")
    loreContinuedDiv.id = "lore-continued"
    document.body.appendChild(loreContinuedDiv)
    // use setInterval to type one character every 30ms
    intervalVar = setInterval(typeChar2, 3);
}

function typeChar2() {
    // if we are done typing, do nothing
    if (currP == loreContinued.length) {
        clearInterval(intervalVar);
        return;
    }
    let loreContinuedDiv = document.getElementById("lore-continued");
    if (loreContinuedDiv == null) {
        return;
    }
    if (currChar == 0) {
        // create new paragraph and add it to the div
        let p = document.createElement("p");
        loreContinuedDiv.appendChild(p);
    }
    // get the last paragraph in the div
    if (loreContinuedDiv.lastChild == null) {
        return;
    }
    loreContinuedDiv.lastChild.innerHTML += loreContinued[currP].charAt(currChar);
    if (currChar >= loreContinued[currP].length) {
        currChar = 0;
        currP++;
        if (currP == loreContinued.length) {
            clearInterval(intervalVar);
            greenPrint("So... Now you see my plan. Do you still want to stop me?");
        }
    } else {
        currChar++;
    }
}
