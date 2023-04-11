const inputEl = document.querySelector("#validation-input");
inputEl.addEventListener('blur', onInputElValidation);

function onInputElValidation(event) {
    const eventEl = event.currentTarget;

    if (Number(eventEl.value.trim().length) !== Number(eventEl.dataset.length)) {
        eventEl.classList.remove('valid');
        eventEl.classList.add('invalid');
    } else {
        eventEl.classList.remove('invalid');
        eventEl.classList.add('valid');
    }

}



