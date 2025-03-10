function navigateTo(screen) {
    document.querySelectorAll('section').forEach(section => {
        section.style.display = 'none';
    });

    document.getElementById(screen).style.display = 'block';
}

function playAudio() {
    alert("Playing Meditation Audio...");
}

document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll("section").forEach(section => {
        if (section.id !== "home") section.style.display = "none";
    });
});