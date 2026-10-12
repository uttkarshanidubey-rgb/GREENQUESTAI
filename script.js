
const activities = {
    relax: [
        "Sit in a peaceful spot and notice five things around you.",
        "Listen to the natural sounds nearby for a few minutes.",
        "Observe the clouds and notice their different shapes."
    ],

    explore: [
        "Find three different leaf shapes in your surroundings.",
        "Explore a familiar path and discover three new details.",
        "Find five interesting natural patterns around you."
    ],

    learn: [
        "Observe a plant and notice its leaves, stem, and shape.",
        "Listen carefully and identify three outdoor sounds.",
        "Look for different kinds of plants without touching unknown ones."
    ],

    active: [
        "Take a comfortable walk and notice five things you enjoy.",
        "Explore your garden or park at a comfortable pace.",
        "Try a gentle outdoor movement session in a safe space."
    ],

    creative: [
        "Sketch a leaf or flower you can see.",
        "Write three sentences describing the world around you.",
        "Find an interesting natural pattern and draw it."
    ]
};

const placeNames = {
    garden: "a garden",
    park: "a park",
    balcony: "your balcony or outdoor area",
    neighborhood: "a safe neighborhood route",
    trail: "a safe, accessible nature trail"
};

const result = document.getElementById("result");
const timerDisplay = document.getElementById("timer");

document.getElementById("generateBtn").addEventListener(
    "click", generateQuest
);

document.getElementById("timerBtn").addEventListener(
    "click", startTimer
);

function generateQuest() {
    const time = Number(document.getElementById("time").value);
    const mood = document.getElementById("mood").value;
    const place = document.getElementById("place").value;
    const interest = document.getElementById("interest").value.trim();

    const list = activities[mood];
    const activity = list[Math.floor(Math.random() * list.length)];

    result.replaceChildren();

    const icon = document.createElement("div");
    icon.className = "emoji";
    icon.textContent = "🌳";

    const duration = document.createElement("span");
    duration.className = "badge";
    duration.textContent = time + " minutes";

    const badge = document.createElement("span");
    badge.className = "badge";
    badge.textContent = "Nature mission";

    const title = document.createElement("h3");
    title.textContent = "Your Outdoor Adventure";

    const description = document.createElement("p");
    description.textContent = activity;

    const details = document.createElement("p");
    details.style.marginTop = "12px";

    details.textContent =
        "Location: " + placeNames[place] +
        (interest ? "\nYour interest: " + interest : "") +
        "\n\nYour steps:" +
        "\n1. Read your mission." +
        "\n2. Put your phone away and explore safely." +
        "\n3. Remember one thing you discovered.";

    result.append(
        icon, duration, badge, title, description, details
    );
}

let timerInterval = null;

function startTimer() {
    clearInterval(timerInterval);

    let seconds = Number(document.getElementById("time").value) * 60;

    const button = document.getElementById("timerBtn");
    button.textContent = "↻ Restart Outdoor Timer";

    function updateTimer() {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;

        timerDisplay.textContent =
            String(minutes).padStart(2, "0") + ":" +
            String(remainingSeconds).padStart(2, "0");

        if (seconds <= 0) {
            clearInterval(timerInterval);
            timerInterval = null;

            timerDisplay.textContent =
                "🎉 Quest complete! What did you discover?";

            button.textContent = "⏱️ Start Outdoor Timer";
            return;
        }

        seconds--;
    }

    updateTimer();
    timerInterval = setInterval(updateTimer, 1000);
}
