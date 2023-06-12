/* login slider */

const loginSlide = Array.from(document.querySelectorAll('.login-swipe-card'))

index = 100

function move() {
    loginSlide.forEach(card => {
        card.style.transform = `translateX(-${index}%)`
    })
    if (index == 300) {
        loginSlide.forEach(card => {
            card.style.transform = `translateX(0)`
            index = 0
        })
    }
    index += 100
}

setInterval(move, 10000)