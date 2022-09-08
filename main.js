const header = document.querySelector('.header')
const sections = document.querySelectorAll('.box')
const POSITION = 800
let sectionsTop = []

getSectionTop()

window.addEventListener('scroll', () => {
  let scrollValue = window.pageYOffset
  toggleOnHeader(scrollValue)
  toggleOn(scrollValue)
})

window.addEventListener('resize', () => {
  getSectionTop()
})

function getSectionTop() {
  sectionsTop = []
  sections.forEach((section) => sectionsTop.push(section.offsetTop))
}

function toggleOn(scrollValue) {
  const last = sections.length - 1

  sections.forEach((section, i) => {
    section.classList.remove('on')

    if (scrollValue >= sectionsTop[i] - POSITION) {
      sections[i].classList.add('on')
    }
  })
}

function toggleOnHeader(scrollValue) {
  if (scrollValue >= 40) {
    header.classList.add('on')
    header
      .querySelector('.logo-white')
      .setAttribute('src', './assets/logo_black.svg')
  } else {
    header.classList.remove('on')
    header
      .querySelector('.logo-white')
      .setAttribute('src', './assets/logo_white.svg')
  }
}
