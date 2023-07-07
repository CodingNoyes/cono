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

const mySwiper1 = new Swiper('.mySwiper1', {
  loop: true,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },

  autoplay: {
    delay: 5000,
  },
});
