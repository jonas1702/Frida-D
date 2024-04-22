wkd.autoInit();

/* tab */
function handleEnter(e){
    var keycode = (e.keyCode ? e.keyCode : e.which);
    if (keycode == '13' || keycode == '32') {
        document.activeElement.click();
    }
}

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
        if (window.innerWidth >= 700 && window.innerWidth <= 1000) {
          buttons.style.display = 'flex'
        }
       
    }
    if (expanded == true) {
        mobile_expand.style.top = '90px'
        setTimeout( function () {
            blur.style.display = 'block' 
            buttons.style.display = 'none'
        }, 100);
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

window.addEventListener('resize', () => {
    let width = window.screen.width

    //   if (width <= 1000 && width >= 700 && expanded == true) {  
    //     buttons.style.display = 'flex'
    //   }

    //   if (width < 700) {
    //     buttons.style.display = 'none !important'
    //   }

      if (window.innerWidth >= 700) {
        if(expanded == true) {
            menu.click()
        }
        buttons.style.display = 'flex'
    }
    if (window.innerWidth < 700) {
        buttons.style.display = 'none'
    }
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

    let submitTrue = true
    forms.forEach(form => {
        if (form.value.length == 0) {
            form.classList.add('form-field--wrong')
            submitTrue = false
        } else {
            form.classList.remove('form-field--wrong')
        }
    })
    if (submitTrue == false) {
        const newToast = new Toast({
            text: "Submit failed",
            position: "top-right",
            pauseOnHover: true,
            pauseOnFocusLoss: true,
          })
    }
    
}
function handleLogin() {
      
  let forms = Array.from(document.querySelectorAll('.login-interface-form-field'))
  let loginTrue = true
  forms.forEach(form => {
      if (form.value.length == 0) {
          form.classList.add('form-field--wrong')
          loginTrue = false
      } else {
          form.classList.remove('form-field--wrong')
      }
  })
}


/* copy text */

const copyElm = Array.from(document.querySelectorAll('.copyElm'))

copyElm.forEach(element => {
    element.addEventListener('click', () => {
        console.log('click')
        let copyText = element
        navigator.clipboard.writeText(copyText.innerText);
        const newToast = new Toast({
            text: "Copied: " + copyText.innerText,
            position: "top-right",
            pauseOnHover: true,
            pauseOnFocusLoss: true,
          })
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
    console.log('click')
})

Array.from(document.querySelectorAll('[name=up]')).forEach(element => {
    element.addEventListener('click', () => window.scrollTo(0, 0))
})

document.querySelector('[name=contact]').addEventListener('click', () => window.scrollTo(0, 1000))
document.querySelector('[name=pricing]').addEventListener('click', () => window.scrollTo(0, 1740))


/* !!! */
/* Der code für die toast animations und so kommt von https://github.com/WebDevSimplified/live-toast-notification-library weil ich ansonsten keine coolen toast libraries gefunden habe*/

// const DEFAULT_OPTIONS = {
//     autoClose: 5000,
//     position: "top-right",
//     onClose: () => {},
//     canClose: true,
//     showProgress: true,
//   }
  
//     class Toast {
//     #toastElem
//     #autoCloseInterval
//     #progressInterval
//     #removeBinded
//     #timeVisible = 0
//     #autoClose
//     #isPaused = false
//     #unpause
//     #pause
//     #visibilityChange
//     #shouldUnPause
  
//     constructor(options) {
//       this.#toastElem = document.createElement("div")
//       this.#toastElem.classList.add("toast")
//       requestAnimationFrame(() => {
//         this.#toastElem.classList.add("show")
//       })
//       this.#removeBinded = this.remove.bind(this)
//       this.#unpause = () => (this.#isPaused = false)
//       this.#pause = () => (this.#isPaused = true)
//       this.#visibilityChange = () => {
//         this.#shouldUnPause = document.visibilityState === "visible"
//       }
//       this.update({ ...DEFAULT_OPTIONS, ...options })
//     }
  
//     set autoClose(value) {
//       this.#autoClose = value
//       this.#timeVisible = 0
//       if (value === false) return
  
//       let lastTime
//       const func = time => {
//         if (this.#shouldUnPause) {
//           lastTime = null
//           this.#shouldUnPause = false
//         }
//         if (lastTime == null) {
//           lastTime = time
//           this.#autoCloseInterval = requestAnimationFrame(func)
//           return
//         }
//         if (!this.#isPaused) {
//           this.#timeVisible += time - lastTime
//           if (this.#timeVisible >= this.#autoClose) {
//             this.remove()
//             return
//           }
//         }
  
//         lastTime = time
//         this.#autoCloseInterval = requestAnimationFrame(func)
//       }
  
//       this.#autoCloseInterval = requestAnimationFrame(func)
//     }
  
//     set position(value) {
//       const currentContainer = this.#toastElem.parentElement
//       const selector = `.toast-container[data-position="${value}"]`
//       const container = document.querySelector(selector) || createContainer(value)
//       container.append(this.#toastElem)
//       if (currentContainer == null || currentContainer.hasChildNodes()) return
//       currentContainer.remove()
//     }
  
//     set text(value) {
//       this.#toastElem.textContent = value
//     }
  
//     set canClose(value) {
//       this.#toastElem.classList.toggle("can-close", value)
//       if (value) {
//         this.#toastElem.addEventListener("click", this.#removeBinded)
//       } else {
//         this.#toastElem.removeEventListener("click", this.#removeBinded)
//       }
//     }
  
//     set showProgress(value) {
//       this.#toastElem.classList.toggle("progress", value)
//       this.#toastElem.style.setProperty("--progress", 1)
  
//       if (value) {
//         const func = () => {
//           if (!this.#isPaused) {
//             this.#toastElem.style.setProperty(
//               "--progress",
//               1 - this.#timeVisible / this.#autoClose
//             )
//           }
//           this.#progressInterval = requestAnimationFrame(func)
//         }
  
//         this.#progressInterval = requestAnimationFrame(func)
//       }
//     }
  
//     set pauseOnHover(value) {
//       if (value) {
//         this.#toastElem.addEventListener("mouseover", this.#pause)
//         this.#toastElem.addEventListener("mouseleave", this.#unpause)
//       } else {
//         this.#toastElem.removeEventListener("mouseover", this.#pause)
//         this.#toastElem.removeEventListener("mouseleave", this.#unpause)
//       }
//     }
  
//     set pauseOnFocusLoss(value) {
//       if (value) {
//         document.addEventListener("visibilitychange", this.#visibilityChange)
//       } else {
//         document.removeEventListener("visibilitychange", this.#visibilityChange)
//       }
//     }
  
//     update(options) {
//       Object.entries(options).forEach(([key, value]) => {
//         this[key] = value
//       })
//     }
  
//     remove() {
//       cancelAnimationFrame(this.#autoCloseInterval)
//       cancelAnimationFrame(this.#progressInterval)
//       const container = this.#toastElem.parentElement
//       this.#toastElem.classList.remove("show")
//       this.#toastElem.addEventListener("transitionend", () => {
//         this.#toastElem.remove()
//         if (container.hasChildNodes()) return
//         container.remove()
//       })
//       this.onClose()
//     }
//   }
  
//   function createContainer(position) {
//     const container = document.createElement("div")
//     container.classList.add("toast-container")
//     container.dataset.position = position
//     document.body.append(container)
//     return container
//   }

