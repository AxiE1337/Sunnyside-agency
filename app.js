const menu = document.querySelector('#menu')
const menuBtn = document.querySelector('#header-menu')
const arrow = document.querySelector('#arrow-btn')
const container = document.querySelector('.main-container')

menuBtn.addEventListener('click', () => {
    menu.classList.toggle('open')
})

arrow.addEventListener('click', () => {
    window.scrollTo({
        left: 0,
        top: 1000,
        behavior: 'smooth',
    })
})

