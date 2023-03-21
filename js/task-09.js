function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const btn=document.querySelector(".change-color")
const bg=document.querySelector("body")
const colorName=document.querySelector(".color")
btn.addEventListener("click", (event)=>{
  bg.style.backgroundColor=getRandomHexColor()
  colorName.innerHTML=getRandomHexColor()
})