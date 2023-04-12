const inputEl = document.querySelector("#validation-input");
inputEl.addEventListener('blur', onInputElValidation);

/*function onInputElValidation(event) {
    const eventEl = event.currentTarget;

    if (Number(eventEl.value.trim().length) !== Number(eventEl.dataset.length)) {
        eventEl.classList.remove('valid');
        eventEl.classList.add('invalid');
    } else {
        eventEl.classList.remove('invalid');
        eventEl.classList.add('valid');
    }

}*/

function onInputElValidation(event) {
    const eventEl = event.currentTarget;

    if (Number(eventEl.value.trim().length) !== Number(eventEl.dataset.length)) {
        eventEl.classList.remove('valid');
        return eventEl.classList.add('invalid');
    } 
        eventEl.classList.remove('invalid');
        return eventEl.classList.add('valid');
}



