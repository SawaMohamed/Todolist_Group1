const layout = document.querySelector('.login-menu')
const login = document.querySelector('#login')
const allDivs=document.querySelectorAll('div')

login.addEventListener('click',function () {
  layout.classList.add('hidden')
})

