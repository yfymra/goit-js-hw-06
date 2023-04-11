const listEl = document.querySelector('#categories')
console.log(`Number of categories: ${listEl.childElementCount}`);

[...listEl.children].forEach(function (item) {
    console.log(`Category: ${item.firstElementChild.textContent}`);
    console.log(`Elements: ${item.lastElementChild.childElementCount}`);
});



