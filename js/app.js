let sections = document.querySelectorAll('section')
let navLinks = document.querySelectorAll('.nav-link')

let currentSection = 'home'

window.addEventListener('scroll', () => {
  sections.forEach((sectionEl) => {
    if (window.scrollY >= sectionEl.offsetTop - 150) {
      currentSection = sectionEl.id
    }
  })

  navLinks.forEach((navLinkEl) => {
    if (navLinkEl.href.includes(currentSection)) {
      document.querySelector('.active').classList.remove('active')
      navLinkEl.classList.add('active')
    }
  })
})

function toggleActive(button) {
  const tabBtns = document.querySelectorAll('.tab-btn')

  tabBtns.forEach(function (btn) {
    if (btn) {
      btn.classList.remove('active')
    }
    button.classList.add('active')
  })

  handleToggle(button)
}

const allProjects = document.querySelectorAll('.all')
const htmlProjects = document.querySelectorAll('.html')
const javaScriptProjects = document.querySelectorAll('.javascript')
const AngularProjects = document.querySelectorAll('.angular')

function handleToggle(button) {
  let allCards = button.value === 'all'
  let htmlCards = button.value === 'html'
  let javaScriptCards = button.value === 'javascript'
  let angularCards = button.value === 'angular'

  if (allCards) {
    ShowAllCards()
  }

  if (htmlCards) {
    showHtmlCards()
  }

  if (javaScriptCards) {
    showJavaScriptCards()
  }

  if (angularCards) {
    showAngularCards()
  }
}

function ShowAllCards() {
  allProjects.forEach((card) => {
    card.classList.add('visible')
  })
}

function showHtmlCards() {
  htmlProjects.forEach((card) => {
    card.classList.add('visible')
  })

  javaScriptProjects.forEach((card) => {
    card.classList.remove('visible')
    card.classList.add('hidden')
  })

  AngularProjects.forEach((card) => {
    card.classList.remove('visible')
    card.classList.add('hidden')
  })
}

function showJavaScriptCards() {
  javaScriptProjects.forEach((card) => {
    card.classList.add('visible')
  })
  htmlProjects.forEach((card) => {
    card.classList.remove('visible')
    card.classList.add('hidden')
  })

  AngularProjects.forEach((card) => {
    card.classList.remove('visible')
    card.classList.add('hidden')
  })
}

function showAngularCards() {
  AngularProjects.forEach((card) => {
    card.classList.add('visible')
  })
  htmlProjects.forEach((card) => {
    card.classList.remove('visible')
    card.classList.add('hidden')
  })

  javaScriptProjects.forEach((card) => {
    card.classList.remove('visible')
    card.classList.add('hidden')
  })
}
