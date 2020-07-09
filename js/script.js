$('.slick-slider-specialties').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  dots: true,
  arrows: false,
  autoplaySpeed: 50000,
  touchMove: false,
  fade:true,
  // adaptiveHeight: true,
});

let toggleBurger = document.querySelector('.header__burger')
let mobMenu=document.querySelector('.m-menu')
let bodyLock=document.getElementsByTagName('body')[0]

  toggleBurger.addEventListener('click',(event)=>{
    const target=event.target
    mobMenu.classList.toggle('active-burger')
    bodyLock.classList.toggle('lock')
  })
