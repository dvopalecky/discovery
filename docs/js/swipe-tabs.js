const thirdsLabels = [
    "Pohled zpět",
    "Pohled nahoru",
    "Pohled dopředu"
]


const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // Navigation arrows
    // navigation: {
    //   nextEl: '.swiper-button-next',
    //   prevEl: '.swiper-button-prev',
    // },

    // // And if we need scrollbar
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },

      // If we need pagination
    // pagination: {
    //     el: '.swiper-pagination',
    // },

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + (index + 1) + "</span>";
        },
      },

    breakpoints: {
        768: {
            slidesPerView: 3,
            spaceBetween: 40
        }
    }
  });
