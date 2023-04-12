function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const bodyEl = document.querySelector('body');
const colorValueEl = document.querySelector('.color');
const changeColorBtnEl = document.querySelector('.change-color')

changeColorBtnEl.addEventListener('click', () => {
  const color = getRandomHexColor();
  colorValueEl.textContent = color;
  bodyEl.style.backgroundColor = color;
  return color;
});

/*changeColorBtnEl.addEventListener('click', onChangeBodyElColor);

function onChangeBodyElColor(event) {
  const color = getRandomHexColor();
  colorValueEl.textContent = color;

  bodyEl.style.backgroundColor = color;
  return color;
}*/
