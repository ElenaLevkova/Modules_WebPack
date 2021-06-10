const  headerCalc = document.querySelector(".header__calc"); 
const headerTimer = document.querySelector(".header__timer");

const dateCalcForm = document.getElementById("datecalc");
const timerForm = document.getElementById("timer");

console.log(headerCalc)

headerCalc.addEventListener("click", (event) => {
    event.preventDefault();
    console.log(timerForm.style.display);
    dateCalcForm.style.display = 'block';
    timerForm.style.display = 'none';
    console.log(timerForm.style.display);
});
headerTimer.addEventListener("click", (event) => {
    event.preventDefault();
    timerForm.style.display = 'block';
    dateCalcForm.style.display = 'none';
});