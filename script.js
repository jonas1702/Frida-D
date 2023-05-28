const menu = document.querySelector('.hamburger-menu')
const blur = document.querySelector('.blur')
const mobile_expand = document.querySelector('.nav-list--mobile')
let expanded = false

menu.addEventListener('click', () => {
    expanded = !expanded
    if (expanded == false) {
        mobile_expand.style.top = '-500px'
        blur.style.display = 'none'
    }
    if (expanded == true) {
        mobile_expand.style.top = '90px'
        setTimeout( function () {
            blur.style.display = 'block' },200);
    }
    
})

function handleSubmit() {
    return
}


/* scroll */
