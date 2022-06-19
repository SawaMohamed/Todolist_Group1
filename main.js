const layout = document.querySelector('.login-menu')
const login = document.querySelector('#interactive')
const logout = document.querySelector('#logout')
const email = document.querySelector('#exampleInputEmail1')
const password = document.querySelector('#exampleInputPassword1')
const cardsListContainer = document.querySelector('.cards-list-container')
const addCard = document.querySelector('#add_card')
const somePerson = { email: 'email@gmail.com', password: '123' }

// sting default value in local storage
// will be replace with real value after finishing register page
localStorage.setItem('person', JSON.stringify(somePerson))
const personStorage = JSON.parse(localStorage.getItem('person'))
const personEmail = personStorage.email
const personPassword = personStorage.password

// Login page take value from localStorage
login.addEventListener('click', function (e) {
  e.preventDefault()
  if (!email.value && !password.value) {
    alert('Please fill in the from first')
  }
  if (personEmail !== email.value || personPassword !== password.value) {
    alert('Wrong input fields!')
  } else {
    layout.classList.add('hidden')
  }
})

// fetching data from localStorage
const cardsDisplay = () => {
  const cardsArrLocal = JSON.parse(localStorage.getItem('cards'))
  if (cardsArrLocal) {
    cardsListContainer.innerHTML = ''

    cardsArrLocal.forEach(card => {
      let ran = (min, max) => min + Math.floor(Math.random() * (max - min + 1))
      let r = ran(0, 255)
      let g = ran(0, 255)
      let b = ran(0, 255)
      let ranBackGround = `rgba(${r},${g},${b},0.5)`
      let cardContainer = document.createElement('div')
      cardContainer.classList.add('card-container')
      cardContainer.innerHTML = `
      <div class="card card-front" >
      <div class="card-body" style="background-color: ${ranBackGround};">
        <p class="card-text">${card}</p>
        </div>
        </div>
    <div class="card card-back" >
    <div class="card-body" style="background-color: ${ranBackGround};">
        <p>${card}</p>
        <button href="#" class="btn btn-danger">X</button>
        </div>
        </div>
        `
      cardsListContainer.appendChild(cardContainer)
    })
  }
}
cardsDisplay()

// adding new card
addCard.addEventListener('click', function (e) {
  e.preventDefault()
  const cardsArrLocal = JSON.parse(localStorage.getItem('cards'))
  const cardFormInput = document.querySelector('#card_form_input')
  const cardFormInputValue = cardFormInput.value
  let cardsArr = []
  if (cardsArrLocal) {
    cardsArr = [...cardsArrLocal]
  }
  if (!cardFormInputValue || cardFormInputValue === ' ') {
    alert('Please fill in the card first!')
  } else if (cardsArr.length >= 7) {
    alert('No more space for cards delete one card before!')
  } else {
    cardsArr.push(cardFormInputValue)

    localStorage.setItem('cards', JSON.stringify(cardsArr))
    cardsDisplay()
  }
})

// logout to the main page
logout.addEventListener('click', function (e) {
  e.preventDefault()
  layout.classList.remove('hidden')
})
