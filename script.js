const generateQuote = function() {
    const quotes = [
        {
            quote: "Do not pity the dead, Harry. Pity the living, and, above all those who live without love.",
        },
        {
            quote: "It is impossible to manufacture or imitate love",
        },
        {
            quote: "Being different isn't a bad thing. It means that you are brave enough to be yourself.",
        },
        {
            quote: "If you want to know what a man’s like, take a good look at how he treats his inferiors, not his equals.",
        },
        {
            quote: "Never trust anything that can think for itself if you can’t see where it keeps its brain.",
        },
        {
            quote: "Every human life is worth the same, and worth saving.",
        },
        {
            quote: "Have a biscuit, Potter.",
        },
        {
            quote: "Happiness can be found even in the darkest of times, if one only remembers to turn on the light.",
        },
        {
            quote: "Socks are Dobby’s favorite, favorite clothes, sir!",
        }
    ];

    let arrayIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById("quotes").innerHTML = quotes[arrayIndex].quote;
}

const themeToggle = document.getElementById('theme-toggle-button');
const themeToggleImg = document.getElementById('theme-toggle-img');
const body = document.body;

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark');
    if (body.classList.contains('dark')) {
        themeToggleImg.src = "carbon--sun.svg";
    } else {
        themeToggleImg.src = "carbon--moon.svg";
    }
});

let timerInterval;

const startTimer = () => {
    const timerDisplay = document.getElementById("timer");
    let timeLeft = 1800; // 30 minutes in seconds

    // Clear any existing interval
    clearInterval(timerInterval);

    // Update timer display every second
    timerInterval = setInterval(() => {
        const minutes = Math.floor(timeLeft / 60);
        const seconds = timeLeft % 60;
        timerDisplay.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

        // Blink effect when time is up
        if (timeLeft === 0) {
            timerDisplay.classList.toggle("blink");
        }

        // Decrement time left
        timeLeft--;

        // Stop timer if time is up
        if (timeLeft < 0) {
            clearInterval(timerInterval);
        }
    }, 1000);
}

const stopTimer = () => {
    clearInterval(timerInterval);
    document.getElementById("timer").textContent = "";
    document.getElementById("timer").classList.remove("blink");
}

window.onload = function() {
    generateQuote();
    
    document.getElementById("generate").addEventListener('click', () => {
        generateQuote();
        stopTimer(); // Stop timer when picking another prompt
    });
    
    document.getElementById("write-for-30-min").addEventListener('click', () => {
        startTimer(); // Start the timer when the button is clicked
    });

    // Add event listener for "Pick another prompt" button
    document.getElementById("generate").addEventListener('click', () => {
        stopTimer(); // Stop timer when picking another prompt
    });
}
