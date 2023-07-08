/* 마우스 휠 이벤트 */
$('.event').each(function () {
  $(this).on('wheel', function (evt) {
    evt.preventDefault();

    let delta = evt.originalEvent.deltaY;
    let currentTop = null;
    const nextBox = this.nextElementSibling;
    const prevBox = this.previousElementSibling;

    if (delta > 0) {
      if (nextBox) {
        currentTop = nextBox.offsetTop;
      } else {
        currentTop = this.offsetTop;
      }
    } else {
      if (prevBox) {
        currentTop = prevBox.offsetTop;
      } else {
        return;
      }
    }

    scrollTo({
      top: currentTop,
      behavior: 'smooth',
    });
  });
});

/* hire 클릭 시 위로 부드럽게 스크롤 */

$('a[href="#"]').on('click', (evt) => {
  evt.preventDefault();
});

$('.bottom-btn').on('click', () => {
  scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});

/* swiper */
const mySwiper = new Swiper ('.swiper-container', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  speed: 300,
 mousewheel: true,
 coverflowEffect: {
  rotate: 30,
  slideShadows: true
},
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

})


