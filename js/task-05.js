const input = document.querySelector('#name-input')
const output = document.querySelector('#name-output')

input.addEventListener('input', (event) => {
  let text = event.target.value
  if (!text) {
    output.innerText = 'Anonymous'
  } else {
    output.innerText = text
  }
})
