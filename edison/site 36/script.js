const countDate = new Date('July 30, 2023 00:00:00').getTime();

const updateTimer = () => {
    const nowDate = new Date().getTime();
    const gap = countDate - nowDate;

    const dayElement = document.getElementById('day');
    const hourElement = document.getElementById('hour');
    const minuteElement = document.getElementById('minute');
    const secondElement = document.getElementById('second');

    if(gap <=0) {
        Text.innerText = 'Celebrate to My Birthday';
        dayElement.innerText ="00";
        hourElement.innerText ="00";
        minuteElement.innerText ="00";
        secondElement.innerText ="00";
        return;
    }

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const d = Math.floor(gap / day);
    const h = Math.floor((gap % day) / hour);
    const m = Math.floor((gap % hour) / minute);
    const s = Math.floor((gap % minute) / second);

    dayElement.innerText = d;
    hourElement.innerText = h;
    minuteElement.innerText = m;
    secondElement.innerText = s;
    
}

setInterval(updateTimer, 1000)