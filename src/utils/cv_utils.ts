import html2pdf from 'html2pdf.js/dist/html2pdf.bundle.min.js'

/*==================== SHOW MENU ====================*/
const showMenu = () => {
  const toggle = document.getElementById('nav-toggle'),
    nav = document.getElementById('nav-menu')

  // Validate that variables exist
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      // We add the show-menu class to the div tag with the nav__menu class
      nav.classList.toggle('show-menu')
    })
  }
}

/*==================== REMOVE MENU MOBILE ====================*/
function linkAction() {
  const navMenu = document.getElementById('nav-menu')
  // When we click on each nav__link, we remove the show-menu class
  navMenu?.classList.remove('show-menu')
}

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
function scrollActive() {
  const scrollY = window.scrollY

  const sections = document.querySelectorAll<HTMLElement>('section[id]')
  sections.forEach(current => {
    const sectionHeight = current.offsetHeight
    const sectionTop = current.offsetTop - 50
    const sectionId = current.getAttribute('id')

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector('.nav__menu a[href*=' + sectionId + ']')
        ?.classList.add('active-link')
    } else {
      document
        .querySelector('.nav__menu a[href*=' + sectionId + ']')
        ?.classList.remove('active-link')
    }
  })
}

/*==================== SHOW SCROLL TOP ====================*/
function scrollTop() {
  const scrollTop = document.getElementById('scroll-top')
  // When the scroll is higher than 560 viewport height, add the show-scroll class to a tag with the scroll-top class
  window.scrollY >= 200
    ? scrollTop?.classList.add('show-scroll')
    : scrollTop?.classList.remove('show-scroll')
}

const theme = localStorage.getItem('theme') // 'dark' | 'light' | null
document.body.classList[theme === 'dark' ? 'add' : 'remove']('dark-theme')

/*==================== REDUCE THE SIZE AND PRINT ON AN A4 SHEET ====================*/
const scaleCV = () => {
  document.body.classList.add('scale-cv')
}

/*==================== REMOVE THE SIZE WHEN THE CV IS DOWNLOADED ====================*/
const removeScaleCV = () => {
  document.body.classList.remove('scale-cv')
}

/*==================== GENERATE PDF ====================*/
function generateResume() {
  // PDF generated area
  const areaCv = document.getElementById('area-cv')

  // Html2pdf options
  let opt = {
    margin: [0, -2, -2, 0],
    filename: 'resume.pdf',
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 4 },
    jsPDF: {
      format: 'a4',
      orientation: 'portrait',
    },
  }

  html2pdf(areaCv, opt)
}

export {
  showMenu,
  linkAction,
  scrollActive,
  scrollTop,
  scaleCV,
  removeScaleCV,
  generateResume,
}