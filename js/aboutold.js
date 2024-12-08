console.log('about.js script is running');

function initOwlCarousel() {
  if (typeof $.fn.owlCarousel === 'undefined') {
    console.error('Owl Carousel is not loaded. Please check your script includes.');
    return;
  }
  try {
    console.log('Initializing Owl Carousel');
    $(".custom-carousel").owlCarousel({
      items: 1,
      loop: true,
      center: true,
      margin: 0,
      autoWidth: false,
      responsive: {
        0: {
          items: 1,
          stagePadding: 0
        },
        441: {
          items: 3,
          autoWidth: true
        }
      },
      onInitialized: centerSlide,
      onTranslated: centerSlide
    });
    console.log('Owl Carousel initialized successfully');

    $(".custom-carousel .item").click(function () {
      console.log('Item clicked');
      var $owl = $(".custom-carousel").data('owl.carousel');
      var index = $(this).parent().index() - $owl.clones().length / 2;
      $owl.to(index, 300);
      
      $(".custom-carousel .item").not($(this)).removeClass("active");
      $(this).toggleClass("active");
    });

    function centerSlide(event) {
      if ($(window).width() <= 440) {
        $('.owl-item').removeClass('center');
        $('.owl-item.active').addClass('center');
      } else {
        $('.owl-item').removeClass('center');
        var center = Math.floor(($('.owl-item.active').length - 1) / 2);
        $('.owl-item.active').eq(center).addClass('center');
      }
    }

    // Reinitialize on window resize
    $(window).resize(function() {
      $(".custom-carousel").trigger('destroy.owl.carousel');
      initOwlCarousel();
    });

  } catch (error) {
    console.error('Error initializing Owl Carousel:', error);
  }
}

// Check if jQuery and Owl Carousel are loaded before initializing
if (typeof $ !== 'undefined' && typeof $.fn.owlCarousel !== 'undefined') {
  $(document).ready(initOwlCarousel);
} else {
  console.error('jQuery or Owl Carousel not loaded. Waiting for 1 second before retrying...');
  setTimeout(function() {
    if (typeof $ !== 'undefined' && typeof $.fn.owlCarousel !== 'undefined') {
      initOwlCarousel();
    } else {
      console.error('Failed to initialize Owl Carousel after waiting.');
    }
  }, 1000);
}