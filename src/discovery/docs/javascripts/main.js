let swiper;

function setupSwiper() {
  const thirdsLabels = [
    "Look back",
    "Look up",
    "Look forward"
  ]

  swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: false,
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
    // console.log(swiper.activeIndex);
  });
}



function onDomLoaded() {
  onPageChange();
  const observer = new MutationObserver(mutationObserverCallback);
  observer.observe(document.body, { childList: true, subtree: true });
}

function onPageChange() {
  swiper?.destroy();
  swiper = undefined;
  const printMode = window.location.hash.includes('#print');
  if (printMode) {
    document.body.classList.add('print-mode');
    document.body.setAttribute('data-md-color-scheme', 'default');
  } else {
    document.body.classList.remove('print-mode');
    if (document.querySelector('#discovery-main')) {
      // && window.matchMedia("(orientation: portrait)").matches) {
      setupSwiper();
    }
  }
}

function mutationObserverCallback(mutationsList, _observer) {
  for(let mutation of mutationsList) {
    if (mutation.type === 'childList' &&
        mutation.addedNodes?.[0]?.classList?.contains('md-container')) {
      onPageChange();
    }
  }
};


document.addEventListener('DOMContentLoaded', onDomLoaded);

// window.addEventListener('orientationchange', function() {
//   onPageChange();
// });
