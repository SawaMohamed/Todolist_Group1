const layout = document.querySelector('.layout')
const login = document.querySelector('#login')
const allDivs=document.querySelectorAll('div')
console.log(allDivs);

// login.addEventListener('click',function () {
//   layout.classList.add('hidden')
// })

function hideLayout() {
  layout.classList.add('hidden')
}
