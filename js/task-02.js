const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
]
const elem = document.getElementById('ingredients')
ingredients.forEach((ingredient)=>{
  let item=document.createElement("li")
  item.textContent=`${ingredient}`
  elem.insertAdjacentHTML("afterbegin", `<li>${item.textContent}</li>`)
})
