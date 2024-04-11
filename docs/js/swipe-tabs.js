document.addEventListener('DOMContentLoaded', function() {
  const tabsContainer = document.querySelector('.tabbed-set');
  if (tabsContainer) {
    const hammer = new Hammer(tabsContainer);

    hammer.on('swipeleft', function() {
      // Swipe left, show next tab
      let checkedTab = null;
      document.querySelectorAll("[name='__tabbed_1']").forEach((tab, index) => {
        if (tab.checked) checkedTab = index + 1;
      });
      if (checkedTab < 3) {
        document.querySelector(`label[for='__tabbed_1_${checkedTab + 1}']`).click();
      }
    });

    hammer.on('swiperight', function() {
        let checkedTab = null;
        document.querySelectorAll("[name='__tabbed_1']").forEach((tab, index) => {
            if (tab.checked) checkedTab = index + 1;
        });


        if (checkedTab > 1) {
            document.querySelector(`label[for='__tabbed_1_${checkedTab - 1}']`).click();
        }
    });
  }
});

console.log("Swipe tabs loaded");
