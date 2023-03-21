const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const elem=document.querySelector("#ingredients")
let elem2;
for(let i = 0; i<ingredients.length; i++){
  elem2 = document.createElement("li")
  elem2.textContent=ingredients[i]
  console.dir(elem2)
  elem.append(elem2)
}