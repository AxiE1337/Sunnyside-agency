const menu = document.querySelector('#menu')
const menuBtn = document.querySelector('#header-menu')
const arrow = document.querySelector('#arrow-btn')
const container = document.querySelector('.main-container')
const logo = document.querySelector('.footer-logo')
const menuBtns = document.querySelector('.menu-buttons')

menuBtn.addEventListener('click', () => {
    menu.classList.toggle('open')
})

arrow.addEventListener('click', () => {
    let elem = document.querySelector('.main-container')
    window.scrollTo({
        top: elem.offsetTop,
        behavior: 'smooth',
    })
})

logo.addEventListener('click', () => {
    let elem = document.querySelector('.header')
    window.scrollTo({
        top: elem.offsetTop,
        behavior: 'smooth',
    })
})

