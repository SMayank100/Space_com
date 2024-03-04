let [msecs, seconds, minutes, hours] = [0,0,0,0];
let displayTime = document.getElementById("displayTime");
let timer = null;
var home = document.getElementById('home');
var playpausebutton = document.getElementById("playpausebutton");

function stopwatch(){
    msecs++;
    if(msecs == 100){
        msecs = 0;
        seconds++;
        if(seconds == 60){
            seconds = 0;
            minutes++;
            if(minutes == 60){
                minutes = 0;
                hours++;
            }
        }
    }
    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;
    let ms = msecs < 10 ? "0" + msecs : msecs;

    displayTime.innerHTML = h +":"+ m +":"+ s +"."+ ms;
}

function watchstart(){
    if (playpausebutton.innerHTML == "<strong>START</strong>"){
        playpausebutton.style.background = "green";
        playpausebutton.innerHTML = "<strong>PAUSE</strong>";
        if (timer!== null)
        {
            clearInterval(timer);
        }
        timer = setInterval(stopwatch,10);
    }else{
        playpausebutton.style.background = "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))";
        playpausebutton.innerHTML = "<strong>START</strong>";
        clearInterval(timer);
    }
}

function watchreset(){
    clearInterval(timer);
    [msecs, seconds, minutes, hours] = [0,0,0,0];
    displayTime.innerHTML = "00:00:00.00";
    playpausebutton.innerHTML = "<strong>START</strong>";
    playpausebutton.style.background = "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))";
}

home.addEventListener('click', function () {
    window.open("space.com.html", "_self");
});

document.getElementById('weather').addEventListener('click', function () {
    window.open("weather.html", "_self");
});

function updateTime() {
    // Create a new Date object

    // Get the current time components
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();

    // Format the time as HH:MM:SS
    var timeString = `${addLeadingZero(hours)}:${addLeadingZero(minutes)}:${addLeadingZero(seconds)}`;

    // Display the time in the 'time' div
    document.getElementById('time').innerHTML = timeString;
}

function addLeadingZero(number) {
    // Add a leading zero for single-digit numbers
    return (number < 10 ? '0' : '') + number;
}

// Update the time every second (1000 milliseconds)
setInterval(updateTime, 1000);

function showDate() {
    var date_now = new Date();
    var date = date_now.getDate();
    var month = date_now.getMonth();
    var year = date_now.getFullYear();

    var dateString = `<strong>${addLeadingZero(date)}/${addLeadingZero(month + 1)}/${addLeadingZero(year)}</strong>`;

    document.getElementById('date').innerHTML = dateString;
}

document.getElementById('calculator').addEventListener('click', function () {
    window.open("calculator.html", "_self");
});

updateTime();
showDate();