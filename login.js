Array.from(document.querySelectorAll('[name=reload]')).forEach(element => {
    element.addEventListener('click', () => location.reload())
})

Array.from(document.querySelectorAll('[name=up]')).forEach(element => {
    element.addEventListener('click', () => window.scrollTo(0, 0))
})

/* login slider */

const loginSlide = document.querySelector('.login-swipe-container')
console.log(loginSlide)

