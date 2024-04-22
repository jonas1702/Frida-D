const secondary_buttons = Array.from(document.querySelectorAll('.secondary-button'))
console.log(secondary_buttons)

let hoverTimeout;

secondary_buttons.forEach(button => {
    button.addEventListener('mouseenter', () => {
        console.log('hover')
        hoverTimeout = setTimeout(function() {
            button.children[0].classList.add('secondary-button__text--hover')
            button.children[1].classList.add('secondary-button-hover--active')
          }, 50);
    })

    button.addEventListener('mouseleave', () => {
        clearTimeout(hoverTimeout);
        button.children[0].classList.remove('secondary-button__text--hover')
        button.children[1].classList.remove('secondary-button-hover--active')
    })
    
})