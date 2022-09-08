const header = document.querySelector('.header')
const sections = document.querySelectorAll('.box')
const POSITION = 800
let sectionsTop = []

getSectionTop()

window.addEventListener('scroll', () => {
  let scrollValue = window.pageYOffset

  if (scrollValue >= 40) {
    header.classList.add('on')
  } else {
    header.classList.remove('on')
  }

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
  sections.forEach((section, i) => {
    section.classList.remove('on')

    if (scrollValue >= sectionsTop[i] - POSITION) {
      sections[i].classList.add('on')
    }
  })
}
