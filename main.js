const sections = document.querySelectorAll('.box')
const POSITION = 800
let sectionsTop = []

getSectionTop()

window.addEventListener('scroll', () => {
  let scrollValue = window.pageYOffset
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
