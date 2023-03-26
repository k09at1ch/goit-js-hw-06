let counterValue = document.querySelector('#value')
const btn = document.getElementsByTagName('button')
btn[0].addEventListener('click', () => {
  counterValue.innerHTML --
})
btn[1].addEventListener('click', () => {
  counterValue.innerHTML++
})
