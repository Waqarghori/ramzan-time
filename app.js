let countDownDate = new Date("February 28, 2025 00:00:00").getTime();
    let x = setInterval(function(){
    let now = new Date().getTime();
    let distance = countDownDate - now;
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes; 
    document.getElementById("seconds").innerHTML = seconds;
});


document.addEventListener("DOMContentLoaded", function() {
    let audio = document.getElementById("myAudio");

    // Try to play the audio automatically
    let playPromise = audio.play();

    if (playPromise !== undefined) {
        playPromise.catch(error => {
            console.log("Autoplay blocked! User interaction required.");

            // Create a play button if autoplay fails
            let button = document.createElement("button");
            button.innerText = "Play Audio";
            button.style.padding = "10px 20px";
            button.style.fontSize = "16px";
            button.style.position = "fixed";
            button.style.top = "50%";
            button.style.left = "50%";
            button.style.transform = "translate(-50%, -50%)";
            button.style.backgroundColor = "#4CAF50";
            button.style.color = "white";
            button.style.border = "none";
            button.style.borderRadius = "5px";
            button.style.cursor = "pointer";

            button.onclick = function() {
                audio.play();
                button.remove(); // Remove button after play
            };

            document.body.appendChild(button);
        });
    }
});console.log("Countdown started.");
console.log("Days: " + days);
console.log("Hours: " + hours);
console.log("Minutes: " + minutes);
console.log("Seconds: " + seconds);