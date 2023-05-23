const menu = document.querySelector('.hamburger-menu')
const mobile_expand = document.querySelector('.nav-list--mobile')
let expanded = false

menu.addEventListener('click', () => {
    expanded = !expanded
    if (expanded == false) {
        mobile_expand.style.display = 'none'
    }
    if (expanded == true) {
        mobile_expand.style.display = 'block'
    }
    
})

function handleSubmit() {
    
}


/* scroll */
