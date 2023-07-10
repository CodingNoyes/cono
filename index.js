// 하단 버튼 클릭 시 맨 위로 이동
$('.bottom-btn').on('click', (evt) => {
  evt.preventDefault();
  const home = $('nav').offset().top;
  console.log(home);
  scrollTo({
    top: home,
    behavior: 'smooth'
  });
});
//  홈 버튼 클릭 시 맨 위로 이동
$('ul li').eq(1).on('click', (evt) => {
  evt.preventDefault();
  const top = $('nav').offset().top;
  console.log(top);
  scrollTo({
    top: top,
    behavior: 'smooth'
  });
});
// a 기본 이벤트 제거
$('a[href="#"]').on('click', (evt)=>{
  evt.preventDefault();
});

// 로고 사이즈 줄이고 메뉴 내려오기
$(window).stop().on('scroll', () => {
  const logoSize = $('.nav-logo').offset().top;
  console.log(logoSize);
  console.log(scrollY);
  if(100 < logoSize) {
    $('header').addClass('hide');
    $('nav').addClass('show');
  } else {
    $('header').removeClass('hide');
    $('nav').removeClass('show');
  }
});

//swiper
const mainSlide = new Swiper('#slide1', {
  parallax: true,
  spaceBetween: 1,
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets'
  },
  loop: true,
  autoplay: true,
  delay: 4000,
  slidesPerView: 2,
  centeredSlides : true
  });
  const mySwiper4 = new Swiper('#slide2', {
    loop: true,
    autoplay: {
    delay: 3000,
    },
  });
  const mySwiper1 = new Swiper('#swiper2', {
    direction: 'vertical',
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    autoplay: {
      delay: 4000,
    },
  });
  const mySwiper2 = new Swiper('#swiper3', {
    spaceBetween: 30,
    parallax: true,
    loop: true,
    autoplay: true,
    delay: 4000,
    slidesPerView: 2,
    centeredSlides : true
  });
  const mySwiper3 = new Swiper('#swiper4', {
    direction: 'vertical',
    loop: true,
    autoplay: {
    delay: 2000,
    },
  });
  //베스트 모델 화면고정
  const pin = gsap.timeline({
    scrollTrigger: {
      trigger: ".main-bestmodel-container",
      pin: true,
      scrub: 0.3,
      start: "top top",
      end: "+=500"
    }
  });
