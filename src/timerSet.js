import { DateTime} from 'luxon';
import 'howler';
import { diffTimes } from "./diffSet.js"; 
import { setStateBtn } from "./timer.js"; 


const  timerHours = document.getElementById("timerHours");
const  timerMinutes = document.getElementById("timerMinutes");
const  timerSeconds = document.getElementById("timerSeconds");

let now = DateTime.local().set({ milliseconds: 0 }),
    end = {};



timerHours.addEventListener('input', () => {
    
    if (timerHours.value != "" && typeof(+timerHours.value) === 'number' && timerHours.value > 0) {
        setStateBtn(false, true); 
        end = now.plus({ hour: timerHours.value });
    }
    else {
        setStateBtn(true, true)
    };
});
timerMinutes.addEventListener('input', () => {
    
    if (timerHours.value != "" && typeof(+timerMinutes.value) === 'number' && timerMinutes.value > 0) {
        setStateBtn(false, true); 
        end = now.plus({ minute: timerMinutes.value });
    }
    else {
        setStateBtn(true, true)
    };
});
timerSeconds.addEventListener('input', () => {
    
    if (timerHours.value != "" && typeof(+timerSeconds.value) === 'number' && timerSeconds.value > 0) {
        setStateBtn(false, true); 
        end = now.plus({ second: timerSeconds.value });
    }
    else {
        setStateBtn(true, true)
    };
});


export function timerSet(timeInterval) {
    diffTimes(now, end, 'timer__value');
    now = now.plus({ second: 1 });

    //console.log('startBtn', timeInterval, now, diff);
    const sound = new Howl({
        src: ['../libr/sound.mp3']
    });

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

