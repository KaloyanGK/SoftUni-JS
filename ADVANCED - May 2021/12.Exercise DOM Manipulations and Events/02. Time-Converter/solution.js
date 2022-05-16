function attachEventsListeners() {
    let daysInput = document.getElementById(`days`);
    let hourInput = document.getElementById(`hours`);
    let minInput = document.getElementById(`minutes`);
    let secInput = document.getElementById(`seconds`);

    let rations = {
        days: 1,
        hours: 24,
        minutes: 1440,
        seconds: 86400,
    };

    document.getElementById(`daysBtn`).addEventListener(`click`, onClick);
    document.getElementById(`hoursBtn`).addEventListener(`click`, onClick);
    document.getElementById(`minutesBtn`).addEventListener(`click`, onClick);
    document.getElementById(`secondsBtn`).addEventListener(`click`, onClick);

    function convert(value, id) {
        let days = value / rations[id];
        return {
            days: days,
            hours: days * rations.hours,
            minutes: days * rations.minutes,
            seconds: days * rations.seconds,
        };
    }
    function onClick(e) {
        let input = e.currentTarget.parentElement.querySelector('input[type="text"]');
        let time = convert(Number(input.value), input.id);
        daysInput.value = time.days;
        hourInput.value = time.hours;
        minInput.value = time.minutes;
        secInput.value = time.seconds;
    }
}
