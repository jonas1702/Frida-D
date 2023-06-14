wkd.autoInit();

const menu = document.querySelector('.checkbox')
const blur = document.querySelector('.blur')
const mobile_expand = document.querySelector('.nav-list--mobile')
const buttons = document.querySelector('.login-section')
let expanded = false

menu.addEventListener('click', () => {
    expanded = !expanded
    if (expanded == false) {
        mobile_expand.style.top = '-500px'
        blur.style.display = 'none'
        buttons.style.display = 'flex'
    }
    if (expanded == true) {
        mobile_expand.style.top = '90px'
        setTimeout( function () {
            blur.style.display = 'block' 
            buttons.style.display = 'none'
        },200);
    }
    
})

blur.addEventListener('click', () => {
    mobile_expand.style.top = '-500px'
    blur.style.display = 'none' 
    menu.click()
})

const mobileNavButtons = Array.from(document.querySelectorAll('.nav-list-item--mobile'))

mobileNavButtons.forEach(button => {
    button.addEventListener('click', () => {
        menu.click()
    })
})

document.querySelector('.contact').addEventListener('click', () => window.scrollTo(0, getOffset(document.querySelector('.contact-section-03')).top))

document.querySelector('.pricing').addEventListener('click', () => window.scrollTo(0, getOffset(document.querySelector('.pricing-section-04')).top))

function getOffset(el) {
    const rect = el.getBoundingClientRect();
    return {
      left: rect.left + window.scrollX,
      top: rect.top + window.scrollY
    };
  }


function handleSubmit() {
    
    let forms = Array.from(document.querySelectorAll('.contact-section-form-field'))
    forms.forEach(form => {
        if (form.value.length == 0) {
            form.classList.add('form-field--wrong')
        } else {
            form.classList.remove('form-field--wrong')
        }
    })
    Toastify({
        text: "Submit",
        className: "contact-toast",
        duration: 3000,
        close: true,
        stopOnFocus: true, 
      }).showToast();
}


/* copy text */

const copyElm = Array.from(document.querySelectorAll('.copyElm'))

copyElm.forEach(element => {
    element.addEventListener('click', () => {
        let copyText = element.querySelector('.copyText')
        navigator.clipboard.writeText(copyText.innerHTML);
        alert("Copied the text: " + copyText.innerHTML);
    })
})


/* switch */
const monthlyPricing = {
    card1: '11 $ / m',
    card2: '22 $ / m',
    card3: '33 $ / m'
}

const yearlyPricing = {
    card1: '110 $ / y',
    card2: '230 $ / y',
    card3: '350 $ / y'
}

const switchBtn = document.querySelector('.pricing-switch')

const label1 = document.querySelector('#label1')
const label2 = document.querySelector('#label2')

const cards = Array.from(document.querySelectorAll('.pricing-section-card'))

function interpretCheckbox(checkbox) {
    if (checkbox.checked) {
        label1.classList.remove('pricing-section-switch-label--active')
        label1.classList.add('pricing-section-switch-label')
        label2.classList.remove('pricing-section-switch-label')
        label2.classList.add('pricing-section-switch-label--active')
        for (i = 0; i < cards.length; i++) {
            let cardText = cards[i].querySelector('.card-heading')
            cardText.innerHTML = Object.values(yearlyPricing)[i]
        }
    }

    if (!checkbox.checked) {
        label1.classList.remove('pricing-section-switch-label')
        label2.classList.remove('pricing-section-switch-label--active')
        label1.classList.add('pricing-section-switch-label--active')
        label2.classList.add('pricing-section-switch-label')

        for (i = 0; i < cards.length; i++) {
            let cardText = cards[i].querySelector('.card-heading')
            cardText.innerHTML = Object.values(monthlyPricing)[i]
        }
    }
}

switchBtn.addEventListener('click', () => {
    interpretCheckbox(switchBtn)
})


/* nav scroll */

Array.from(document.querySelectorAll('[name=reload]')).forEach(element => {
    element.addEventListener('click', () => location.reload())
})

Array.from(document.querySelectorAll('[name=up]')).forEach(element => {
    element.addEventListener('click', () => window.scrollTo(0, 0))
})

document.querySelector('[name=contact]').addEventListener('click', () => window.scrollTo(0, 1000))
document.querySelector('[name=pricing]').addEventListener('click', () => window.scrollTo(0, 1740))


function handleLogin() {
    
    let forms = Array.from(document.querySelectorAll('.login-interface-form-field'))
    forms.forEach(form => {
        if (form.value.length == 0) {
            form.classList.add('form-field--wrong')
        } else {
            form.classList.remove('form-field--wrong')
        }
    })
}

