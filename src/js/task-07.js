const selector = document.getElementById('font-size-control')
const text = document.getElementById('text')
selector.addEventListener('input', () => {
  text.style.fontSize = `${selector.value}px`;
})
