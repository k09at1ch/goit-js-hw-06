const loginForm = document.querySelector('.login-form')
const emailInput = loginForm.querySelector('input[name=email]')
const passwordInput = loginForm.querySelector('input[name=password]')

loginForm.addEventListener('submit', (event) => {
  event.preventDefault()
  const gotInfo = { email: emailInput.value, password: passwordInput.value }
  if(gotInfo.email==="", gotInfo.password===""){
    alert("All poles must be filled!")
  }
  console.log(gotInfo)
  loginForm.reset()
})
