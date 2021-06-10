

//import { diffTimes } from "./timerSet.js"; 
import {timerSet} from "./timerSet.js"; 

const  startBtn = document.getElementById("start");
const  stopBtn = document.getElementById("stop");

let timeInterval;

setStateBtn(true, true);

startBtn.addEventListener("click", (event) => {
    event.preventDefault();
    setStateBtn(true, false);

    //console.log('startBtn0',  now, diff);
    
    //diffTimes(now, end);

    timeInterval = setInterval(() => {
        timerSet(timeInterval);
    }, 1000);    

stopBtn.addEventListener("click", (event) => {
    event.preventDefault();
    setStateBtn(false, true);
    clearInterval(timeInterval);
    
});
});

export function setStateBtn(stateStartBtn, stateStopBtn) {
    startBtn.disabled = stateStartBtn;
    stopBtn.disabled = stateStopBtn;
};





