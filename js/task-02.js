const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

ingredients.map((item) => {
  const listEl = document.querySelector("#ingredients");
  const itemEl = document.createElement("li"); 
  itemEl.textContent = item;
  itemEl.classList.add("item");
  listEl.append(itemEl);
  return;
})









