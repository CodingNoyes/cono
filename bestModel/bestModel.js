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

// swiper1
new Swiper('.mySwiper1', {
  loop: true,
  pagination: {
    // 페이징 설정
    el: '.swiper-pagination',
    clickable: true, // 페이징을 클릭하면 해당 영역으로 이동, 필요시 지정해 줘야 기능 작동
  },
  navigation: {
    // 네비게이션 설정
    nextEl: '.swiper-button-next', // 다음 버튼 클래스명
    prevEl: '.swiper-button-prev', // 이번 버튼 클래스명
  },

  autoplay: {
    delay: 4000,
  },
});

// swiper2
new Swiper('.mySwiper2', {
  loop: true,
  pagination: {
    // 페이징 설정
    el: '.swiper-pagination',
    clickable: true, // 페이징을 클릭하면 해당 영역으로 이동, 필요시 지정해 줘야 기능 작동
  },
  navigation: {
    // 네비게이션 설정
    nextEl: '.swiper-button-next', // 다음 버튼 클래스명
    prevEl: '.swiper-button-prev', // 이번 버튼 클래스명
  },

  autoplay: {
    delay: 4000,
  },
});
