const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
]

const elem = document.querySelector('#ingredients');
const pasting = new DocumentFragment();

for (let i = 0; i < ingredients.length; i++) {
  const li = document.createElement('li');
  li.innerText = ingredients[i];
  li.classList.add('item');
  pasting.appendChild(li);
}

elem.appendChild(pasting);
