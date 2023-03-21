let counterValue = document.querySelector('#value')
const btn = document.getElementsByTagName('button')
btn[0].addEventListener('click', () => {
  counterValue.innerHTML -= 1
})
btn[1].addEventListener('click', () => {
  counterValue.innerHTML++
})
