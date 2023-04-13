const inputEl = document.querySelector("#name-input");
const outputEl = document.querySelector("#name-output");

/*inputEl.addEventListener("input", () => {
    if (inputEl.value !== "") {
      outputEl.textContent = inputEl.value;
      return;
    }

   outputEl.textContent = "Anonymous";

});*/

inputEl.addEventListener("input", onInputElChange);

function onInputElChange(event) {

     if (event.currentTarget.value.trim() !== "") {
        outputEl.textContent = event.currentTarget.value.trim();
      } else {
        outputEl.textContent = "Anonymous"; 
      }

   
}

