const menu = document.querySelector('#menu')
const menuBtn = document.querySelector('#header-menu')
const arrow = document.querySelector('#arrow-btn')
const container = document.querySelector('.main-container')
const logo = document.querySelector('.footer-logo')
const menuBtns = document.querySelector('.menu-buttons')
const divBlur = document.querySelector('#overlay')

menuBtn.addEventListener('click', () => {
    divBlur.classList.add('blur')
    menu.classList.add('open')
    divBlur.addEventListener('click', blurOff)
})

function blurOff () {
    setTimeout(() => {
        divBlur.classList.remove('blur')
    }, 50) 
    menu.classList.remove('open')
}

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

