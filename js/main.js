$('.slyder__box').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 2,
  responsive: [
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});


// ================================================== 
let burger = document.querySelector('.burger');
let nav = document.querySelector('.header__block-nav');
let headerWrap = document.querySelector('.header__wrap');

burger.addEventListener('click', rotateBurger); 

function rotateBurger() {
  
  burger.classList.toggle('burger-active');
  headerWrap.classList.toggle('header__wrap--active');

  if (nav.style.display === "block") {
    nav.style.display = "none";
  } else {
    nav.style.display = "block";
  }
}
// ============================================
let boxBtn = document.querySelectorAll('.command__accordion-box');
let showText = document.querySelectorAll('.command__text');
let icon = document.querySelectorAll('.command__img-icon');

for (let i = 0; i < boxBtn.length; i++) {
  
  boxBtn[i].addEventListener('click', function () {

      if (showText[i].style.display === "block") {
      showText[i].style.display = "none";
    } else {
      showText[i].style.display = "block";
    }
    icon[i].classList.toggle('command__img-icon--activ');
    
  });
}

// ==============================================
let popapOpen = document.querySelector('.bid__title');
let popapClose = document.querySelector('.popap__close');
let popapWrap = document.querySelector('.popap');

popapOpen.addEventListener('click', function() {
  popapWrap.style.display = 'flex';  
}); 


popapClose.addEventListener('click', closePopap);

function closePopap() {
  popapWrap.style.display = 'none';  
}

// =====================================================

