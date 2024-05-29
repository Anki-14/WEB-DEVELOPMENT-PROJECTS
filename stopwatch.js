let startTime, updatedTime, difference, tInterval;
let running = false;
let lapCount = 0;

const display = document.getElementById("display");
const startPauseBtn = document.getElementById("startPauseBtn");
const resetBtn = document.getElementById("resetBtn");
const lapBtn = document.getElementById("lapBtn");
const laps = document.getElementById("laps");

function startPause() {
  if (!running) {
    startTime = new Date().getTime();
    tInterval = setInterval(updateTime, 10);
    startPauseBtn.innerText = "Pause";
    running = true;
  } else {
    clearInterval(tInterval);
    running = false;
    startPauseBtn.innerText = "Start";
  }
}

function reset() {
  clearInterval(tInterval);
  running = false;
  startPauseBtn.innerText = "Start";
  display.innerText = "00:00:00.00";
  laps.innerHTML = "";
  lapCount = 0;
}

function lap() {
  if (running) {
    lapCount++;
    const lapTime = document.createElement("li");
    lapTime.innerText = `Lap ${lapCount}: ${display.innerText}`;
    laps.appendChild(lapTime);
  }
}

function updateTime() {
  updatedTime = new Date().getTime();
  difference = updatedTime - startTime;
  let hours = Math.floor(
    (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((difference % (1000 * 60)) / 1000);
  let milliseconds = Math.floor((difference % 1000) / 10);
  display.innerText =
    (hours ? (hours > 9 ? hours : "0" + hours) : "00") +
    ":" +
    (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") +
    ":" +
    (seconds > 9 ? seconds : "0" + seconds) +
    "." +
    (milliseconds > 9 ? milliseconds : "0" + milliseconds);
}

startPauseBtn.addEventListener("click", startPause);
resetBtn.addEventListener("click", reset);
lapBtn.addEventListener("click", lap);
