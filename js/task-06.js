const input = document.querySelector('#validation-input')
const getAttribute = Number(input.getAttribute('data-length'))
input.addEventListener('input', (event) => {
  let text = event.target.value

  if (text.length !== getAttribute) {
    input.classList.remove('valid')
    input.classList.add('invalid')
  }
  if (text.length === getAttribute) {
    input.classList.add('valid')
    input.classList.remove('invalid')
  }
})
