const inputEl = document.querySelector("#name-input");
const outputEl = document.querySelector("#name-output");

/*inputEl.addEventListener("input", () => {
    if (inputEl.value !== "") {
       return outputEl.textContent = inputEl.value;
    }

   return outputEl.textContent = "Anonymous";

});*/

inputEl.addEventListener("input", onInputElChange);

function onInputElChange(event) {

     if (event.currentTarget.value.trim() !== "") {
        return outputEl.textContent = event.currentTarget.value.trim();
      }

   return outputEl.textContent = "Anonymous"; 
}

