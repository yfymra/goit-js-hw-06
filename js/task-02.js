const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listEl = document.querySelector("#ingredients");

const itemEl = ingredients.map((item) => {
  
  const itemElement = document.createElement("li"); 
  itemElement.textContent = item;
  itemElement.classList.add("item");
  
  return itemElement;
})

listEl.append(...itemEl);







