/* login slider */

const loginSlide = Array.from(document.querySelectorAll('.login-swipe-card'))

index = 100

function move() {
    loginSlide.forEach(card => {
        card.style.transform = `translateX(-${index}%)`
    })
    if (index == 200) {
        loginSlide.forEach(card => {
            card.style.transform = `translateX(0)`
            index = 0
        })
    }
    index += 100
}

setInterval(move, 10000)

Array.from(document.querySelectorAll('[name=reload]')).forEach(element => {
    element.addEventListener('click', () => location.reload())
    console.log('click')
})

Array.from(document.querySelectorAll('[name=up]')).forEach(element => {
    element.addEventListener('click', () => window.scrollTo(0, 0))
})


