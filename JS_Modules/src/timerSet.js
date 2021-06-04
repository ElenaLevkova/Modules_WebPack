import { DateTime } from 'https://moment.github.io/luxon/es6/luxon.js';
import 'https://cdnjs.cloudflare.com/ajax/libs/howler/2.2.1/howler.js';
import { diffTimes } from "./diffSet.js"; 
import { setStateBtn } from "./timer.js"; 


const  timerHours = document.getElementById("timerHours");
const  timerMinutes = document.getElementById("timerMinutes");
const  timerSeconds = document.getElementById("timerSeconds");

let now = DateTime.local().set({ milliseconds: 0 }),
    end = {};

const sound = new Howl({
    src: ['../libr/sound.mp3']
  });

timerHours.addEventListener('input', () => {
    end = now.plus({ hour: timerHours.value });
    setStateBtn(false, true);
});
timerMinutes.addEventListener('input', () => {
    end = now.plus({ minute: timerMinutes.value });
    setStateBtn(false, true);
});
timerSeconds.addEventListener('input', () => {
    end = now.plus({ second: timerSeconds.value });
    setStateBtn(false, true);
});


export default function timerSet(timeInterval) {
    diffTimes(now, end, 'timer__value');
    now = now.plus({ second: 1 });

    //console.log('startBtn', timeInterval, now, diff);

    if (now >= end.plus({ second: 1 })) { 
        clearInterval(timeInterval);
        resetTimerValue();
        setStateBtn(true, true);
        sound.play();
    };

    //console.log('startBtn1', now, end);

    
}

function resetTimerValue() {
    timerHours.value = 0;
    timerMinutes.value = 0;
    timerSeconds.value = 0;
};

