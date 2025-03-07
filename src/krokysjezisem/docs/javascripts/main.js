let swiper;

function setupSwiper() {
  const thirdsLabels = [
    "Pohled zpět",
    "Pohled nahoru",
    "Pohled dopředu"
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

  // Make Discovery link open in a new tab
  const discoveryLink = document.querySelector('a[href="https://discoverybible.cz"]');
  if (discoveryLink) discoveryLink.setAttribute('target', '_blank');
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
    if (document.querySelector('#bozi-rodina-main')) {
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
