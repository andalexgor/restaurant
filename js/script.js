$('.slick-slider-specialties').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  dots: true,
  arrows: false,
  autoplaySpeed: 5000,
  touchMove: false,
  fade: true,
});



let toggleBurger = document.querySelector('.header__burger')
let mobMenu = document.querySelector('.m-menu')
let bodyLock = document.getElementsByTagName('html')[0]


toggleBurger.addEventListener('click', (event) => {
  const target = event.target
  mobMenu.classList.toggle('active-burger')
  bodyLock.classList.toggle('lock')
  toggleBurger.classList.toggle('active-span')
})


let mobMenuItems = document.querySelectorAll('.m-menu-burger-item')
for (let i = 0; i < mobMenuItems.length; i++) {
  mobMenuItems[i].onclick = function () {
    mobMenu.classList.toggle('active-burger')
    bodyLock.classList.toggle('lock')
    toggleBurger.classList.toggle('active-span')

  }
}

let allFoodItems = document.querySelectorAll('.dish__desriptions')
let foodCategory = document.querySelector('.categories-menu')
foodCategory.addEventListener('click', event => {

  if (event.target.tagName !== 'LI') return false;
  let filterClass = event.target.dataset['category']
  allFoodItems.forEach(elem => {
    elem.classList.remove('hide')
    if (!elem.classList.contains(filterClass) && filterClass !== 'all') {
      elem.classList.add('hide')
    }
  })
})
let deliciousMenuName = document.querySelectorAll('.delicious-menu-name')

for (let i = 0; i < deliciousMenuName.length; i++) {

  deliciousMenuName[i].onclick = function () {
    deliciousMenuName.forEach(element => element.classList.remove('yllw-bgr'))

    deliciousMenuName[i].classList.add('yllw-bgr')

  }

}

let siteIcon = document.querySelector('.icon')


function removeWowClass() {
  siteIcon.classList.remove('wow')
  siteIcon.classList.remove('flip')
  siteIcon.classList.remove('animated')
}
siteIcon.addEventListener('click', (event) => {
  siteIcon.classList.add('wow')
  siteIcon.classList.add('flip')
  siteIcon.classList.add('animated')

  setTimeout(removeWowClass, 1000)

})


const classMobileAnimations = document.querySelectorAll('.wow')
function removeMobileAnimationClass() {

  if (document.documentElement.clientWidth <= 768 || document.documentElement.clientHeight <= 400) {

    for (let i = 0; i < classMobileAnimations.length; i++) {
      classMobileAnimations[i].classList.remove('wow')
      classMobileAnimations[i].classList.remove('fadeInLeft')
      classMobileAnimations[i].classList.remove('fadeInRight')
    }

  }
}
removeMobileAnimationClass()
