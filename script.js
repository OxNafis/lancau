let questions = {
    Membawang: ["Who’s the most bojio out of all of you and why?", "Who’s the most likely to have their first date a mamak?", "Who do you think out of your group, would make a good couple?", "Who’s the most likely to become a politican?", "Who out of all of your friends, would you date?" ],
    Bukak_Cerita: ["Who do you regret sleeping with and why?", "What’s the biggest secret you can share with the group but not everyone else?", "Who in this group would you sell for a nasi lemak", "Which Malaysian celebrity have you fantasised about? Deets.", "Tell the group, your weirdest fetish"],
    Babi_Tak_Salah: ["Whats your most 'babi' trait", "When was the moment you went 'babilah'", "Who in your life, did you call 'babi' the most", "Who in your group, deserves the 'Babi of The Year Award'", "When was a time where you called a family member 'Babi'" ]
};

let currentMood = new URLSearchParams(window.location.search).get('mood');
let currentQuestion = 0;

function setupIndicators() {
    const container = document.querySelector('.indicator');
    container.innerHTML = ''; // Clear existing indicators
    questions[currentMood].forEach((_, idx) => {
        let dot = document.createElement('span');
        dot.className = 'dot' + (idx === currentQuestion ? ' active' : '');
        container.appendChild(dot);
    });
}

function displayQuestion() {
    if (currentMood && questions[currentMood]) {
        document.getElementById('question').textContent = questions[currentMood][currentQuestion];
        setupIndicators();
    } else {
        document.getElementById('question').textContent = "Please select a mood from the home page.";
    }
}

function nextQuestion() {
    if (currentQuestion < questions[currentMood].length - 1) {
        currentQuestion++;
        displayQuestion();
        setupIndicators();
    }
}

function previousQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        displayQuestion();
        setupIndicators();
    }
}

document.addEventListener('DOMContentLoaded', () => {
    displayQuestion();
    setupIndicators();
});
