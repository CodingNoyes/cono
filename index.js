// 베스트모델 페이지 스크롤 고정
    const logoSize = gsap.timeline({  
    scrollTrigger: {
    trigger: ".main-bestmodel-container",
    start: "top top",
    end: "+=4000",
    scrub: true,
   pin: true,
   markers: false,
   anticipatePin: 1  }
});

//  버튼 클릭 시 맨 위로 이동
$('.bottom-btn').on('click', (evt) => {
  evt.preventDefault();
  const home = $('nav').offset().top;
  console.log(home);
  scrollTo({
    top: home
  });
});
// a 기본 이벤트 제거
$('a[href="#"]').on('click', (evt)=>{
  evt.preventDefault();
});

// 로고 사이즈 줄이기
$(window).stop().on('scroll', () => {
  const logoSize = $('.nav-logo').offset().top;
  console.log(logoSize);
  console.log(scrollY);
  if(200 < logoSize) {
    $('header').addClass('hide');
  } else {
    $('header').removeClass('hide');
  }
});

// 홈 벗어나면 메뉴 보이기
$(window).stop().on('scroll',()=>{
  const logo = $('.main-about').offset().top;
   if ( scrollY > logo) {
     $('nav').addClass('show');
     $('header').addClass('change');
   } else {
     $('nav').removeClass('show');
     $('header').removeClass('change');
   }
 });

//swiper
const mainSlide = new Swiper('#slide1', {
  direction: rtl,
  parallax: true,
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets'
  },
  loop: true,
  autoplay: true,
    delay: 2000,
    slidesPerView: 2,
  breakpoints: {  
    480: { slidesPerView: 2, // 화면에 보여지는 이미지
      },
      1200: { 
        slidesPerView:2,
        spaceBetween: 20,
      },
  }
});
const Slide3 = new Swiper('#slide3', {
  parallax: true,
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets'
  },
  loop: true,
  autoplay: {
    delay: 2000
  },  slidesPerView: 2,
  breakpoints: {  // 480보다 크거나 같으면
    480: { slidesPerView: 2, // 화면에 보여지는 이미지
      },
      1200: { 
        slidesPerView:2,
        spaceBetween: 20,
      },
  }
});
const Slide = new Swiper('#slide2', {
  parallax: true,
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
  loop: true,
  autoplay: {
    delay: 2000,
    speed: 400
  },  slidesPerView: 1,
  breakpoints: {  // 480보다 크거나 같으면
    480: { slidesPerView: 2, // 화면에 보여지는 이미지
      },
      1200: { 
        slidesPerView:3,
        spaceBetween: 20,
      },
  }
});

//배경과 함께 올라가는 스크롤
const aboutscroll = gsap.timeline({  
  scrollTrigger: {
  trigger: ".main-about",
  start: "top top",
  end: "+=500",
  scrub: true,
  pin: true,
  markers: false,
  anticipatePin: 1
}
});