import { DateTime, Duration } from 'luxon';

//import { Duration } from 'https://moment.github.io/luxon/es6/luxon.js';

export function diffDates(firstDate, secondDate) {
    firstDate = DateTime.fromISO(firstDate);
    secondDate = DateTime.fromISO(secondDate);
    console.log(firstDate);
    if (firstDate > secondDate)
        secondDate = [firstDate, firstDate = secondDate][0]; // 2

    return secondDate.diff(firstDate, ['years', 'months', 'days']).toObject();
}

// 3
export const diffToHtml = diff => `
    <span> 
        ${diff.years ? 'Лет: ' + diff.years : ''} 
        ${diff.months ? 'Месяцев: ' + diff.months : ''} 
        ${diff.days ? 'Дней: ' + diff.days : ''}
    </span>
`;

export function diffTimes(now, end, selector) {
    const diff = end.diff(now).toObject();
    document.getElementById(selector).innerHTML = Duration.fromObject(diff).toFormat('hh:mm:ss');
};