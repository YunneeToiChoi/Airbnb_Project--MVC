var user = document.querySelector('.user-navbar__box')
var userParent = document.querySelector('.user-header__form--active-Parent')
var overplayUser = document.querySelector('.form-user--overplay')
function xx() {
    userParent.classList.add('active')
}
function remove() {
    userParent.classList.remove('active')
}
user.addEventListener('click', xx)
overplayUser.addEventListener('click', remove);



// END EVENT CLICK 

//BEGIN NAV CLICK TO VADITION


//BEGIN NAV CLICK TO VADITION

const register = userParent.querySelector('.user-header__form--navRegister')

////////////////////////////////// Mo form
const ModalForm = document.querySelector('.form-vadition--modal')
const closeForm =ModalForm.querySelector('.vadition__header-icon')
const overPlayForm = ModalForm.querySelector('.form-vadition--overplay')


// register 
const registerNav = document.querySelector('.user-header__form--navRegister')

registerNav.addEventListener('click', () => { ModalForm.classList.add('active') })

// close Form

overPlayForm.addEventListener('click', () => { ModalForm.classList.remove('active') })


closeForm.addEventListener('click', () => { ModalForm.classList.remove('active') })

