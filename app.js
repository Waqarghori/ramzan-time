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


document.addEventListener("DOMContentLoaded", function () {
    const audio = document.getElementById("myAudio");
    const btn = document.getElementById("btn");

    btn.addEventListener("click", function () {
        if (audio.paused) {
            audio.play();
            btn.innerText = "Stop";
        } else {
            audio.pause();
            audio.currentTime = 0; // آڈیو دوبارہ شروع ہونے کے لیے ری سیٹ کریں
            btn.innerText = "Click For Pleasure";
        }
    });
});