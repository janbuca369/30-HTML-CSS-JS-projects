const startE1 = document.getElementById("start");
const stopE1 = document.getElementById("stop");
const resetE1 = document.getElementById("reset");
const timerE1 = document.getElementById("timer");

let interval;
let timeLeft = 1500;


function updateTimer(){
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;
    let formattedTime = minutes + ":" + seconds;

    timerE1.innerHTML = formattedTime
}

function startTimer(){
    // console.log("Start"); // Checking
    timeLeft--;
    interval = setInterval(()=>{
       updateTimer();
        
    }, 1000)
}

function StopTime(){
    console.log("Stop");    
}

function resetTime(){
    console.log("Reset");    
}
startE1.addEventListener("click", startTimer)
stopE1.addEventListener("click", StopTime)
resetE1.addEventListener("click", resetTime)