const loginForm = document.querySelector('.login-form')
const emailInput = loginForm.querySelector('input[name=email]')
const passwordInput = loginForm.querySelector('input[name=password]')

loginForm.addEventListener('submit', (event) => {
  event.preventDefault()
  if(emailInput.length||passwordInput.length<1){
    alert("all poles")
  }
  const gotInfo={email: emailInput.value, password: passwordInput.value}
console.log(gotInfo)
loginForm.reset()
})
