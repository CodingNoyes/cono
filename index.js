// 베스트모델 페이지 스크롤 고정
//    const logoSize = gsap.timeline({  
//    scrollTrigger: {
//    trigger: ".main-bestmodel-container",
//    start: "top top",
//    end: "+=4000",
//    scrub: true,
//    pin: true,
//    markers: false,
//    anticipatePin: 1  }
//});

//  버튼 클릭 시 맨 위로 이동
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
  parallax: true,
  spaceBetween: 10,
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets'
  },
  loop: true,
  autoplay: true,
  delay: 4000,
  slidesPerView: 2,
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
    parallax: true,
    loop: true,
    autoplay: true,
    delay: 4000,
    slidesPerView: 2
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