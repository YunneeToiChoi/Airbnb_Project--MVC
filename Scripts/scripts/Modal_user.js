var user = document.querySelector('.user-navbar__box')
var userParent = document.querySelector('.user-header__form--active-Parent')
var overplayUser = document.querySelector('.form-user--overplay')

function main() {
    openUserNav(); // mo user box nav
    remove(); // tat userboxnav
    openForm(); // mo form
    hideBoxNavForm(); // mo form xong tat nav user 
}
////////////////////////////   BEGIN On Off USERNAV     //////////////////////////
function openUserNav() { // mo nav
    user.addEventListener('click', openUserNav)
    userParent.classList.add('active')
}
user.addEventListener('click', openUserNav) // mo user box nav 
function remove() { // tat nav khi chua mo overplay/form
    userParent.classList.remove('active')
}
overplayUser.addEventListener('click', remove); // tat nav user o ngoai main
////////////////////////////  END On Off USERNAV     //////////////////////////

const registerNav = document.querySelector('.user-header__form--navRegister') // goi sign in
const ModalForm = document.querySelector('.form-vadition--modal') // goi form
const closeForm = ModalForm.querySelector('.vadition__header-icon') // goi dong form
const overPlayForm = ModalForm.querySelector('.form-vadition--overplay') // goi overplay



////////////////////////////////// BEGIN OPEN OFF form///////////////////////////

registerNav.addEventListener('click', () => { // mo form
    ModalForm.classList.add('active')
    hideBoxNavForm();
})

function hideBoxNavForm() { // dong form
    userParent.classList.remove('active')

}

// close Form = overplay

overPlayForm.addEventListener('click', () => { ModalForm.classList.remove('active') }) // click overplay >> tat form
closeForm.addEventListener('click', () => { ModalForm.classList.remove('active') }) // icon close


////////////////////////////////// END OPEN OFF form///////////////////////////


