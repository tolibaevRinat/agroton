const menu = document.querySelector('.menu')
const menuBurger = document.querySelector('.menu-burger')
const body = document.querySelector('body')

menuBurger.addEventListener('click', function () {
	menu.classList.toggle('active')
	menuBurger.classList.toggle('active')
	body.classList.toggle('is-lock')
})
