const layout = document.querySelector('.login-menu')
const login = document.querySelector('#verification')
const allDivs=document.querySelectorAll('div')

login.addEventListener('click',function (e) {
  e.preventDefault();
  layout.classList.add('hidden')
})

//submit button idea//

let btn = document.querySelector('#interactive');

btn.addEventListener('click', active);

function active() {
  btn.classList.toggle("is_active");
}