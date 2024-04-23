const thirdsLabels = [
    "Pohled zpět",
    "Pohled nahoru",
    "Pohled dopředu"
]

const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + thirdsLabels[index] + "</span>";
        },
      },

    breakpoints: {
        768: {
            slidesPerView: 3,
            spaceBetween: 20
        }
    }
  });

swiper.on('slideChange', function () {
  console.log(swiper.activeIndex);
});
