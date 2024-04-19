const secondary_buttons = Array.from(document.querySelectorAll('.secondary-button'))
console.log(secondary_buttons)

let hoverTimeout;

secondary_buttons.forEach(button => {
    button.addEventListener('mouseenter', () => {
        hoverTimeout = setTimeout(function() {
            button.children[0].classList.add('finartis-secondary-button__text--hover')
            button.children[1].classList.add('finartis-secondary-button-hover--active')

            if (button.id == 'footer-button') {
                button.children[0].classList.add('secondary-dark')
                button.children[1].classList.add('secondary-dark')
            }
          }, 60);
    })

    button.addEventListener('mouseleave', () => {
        clearTimeout(hoverTimeout);
        button.children[0].classList.remove('finartis-secondary-button__text--hover')
        button.children[1].classList.remove('finartis-secondary-button-hover--active')

        if (button.id == 'footer-button') {
            button.children[0].classList.remove('secondary-dark')
            button.children[1].classList.remove('secondary-dark')
        }
    })
    
})