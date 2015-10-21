$(function() {
  const $m_btn = $('#m_btn');
  const $m_menu = $('#m_menu');
  const $menu = $('#menu');
  const $window = $(window);

  /* slider-show configuration */
  $('.owl-carousel').owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout: 5000,
    dots: true,
    smartSpeed: 1000,
    items: 1,
  });

  /* show .slider-nav-control when .image-show is hovered */
  (function() {
    const sliderNavControl = $('.slider-nav-control');
    const imageShow = $('.image-show');
    const sliderContent = $('.slider-content-wrapper');

    imageShow.hover(
      function() {
        sliderNavControl.fadeIn('slow');
        $('.owl-carousel').trigger('stop.owl.autoplay');
      },
      function() {
        sliderNavControl.fadeOut('slow');

        function autoPlay() {
          $('.owl-carousel').trigger('play.owl.autoplay');
        }
        setTimeout(autoPlay, 2000);
      }
    );

    sliderContent.hover(
      function() {
        $('.owl-carousel').trigger('stop.owl.autoplay');
      },
      function() {
        function autoPlay() {
          $('.owl-carousel').trigger('play.owl.autoplay');
        }
        setTimeout(autoPlay, 2000);
      }
    );
  }());

  /* make next and prev icon work */
  (function() {
    const owl = $('.owl-carousel');
    owl.owlCarousel();

    $('i.chevron.left.icon').click(function() {
      owl.trigger('prev.owl.carousel');
    });

    $('i.chevron.right.icon').click(function() {
      owl.trigger('next.owl.carousel');
    });
  }());

  /* fix .image-show until finishing .desc content  */
  function makeSliderFixed() {
    const scrollTop = $(window).scrollTop();
    const windowHeight = $(window).height();
    const aboutOffset = $('#about').offset().top;
    const workOffset = $('#work').offset().top;

    if (scrollTop >= aboutOffset && scrollTop <= (workOffset - windowHeight)) {
      $('#about .image-show').addClass('fixed').removeClass('finishFixed');
    } else if (scrollTop > (workOffset - windowHeight)) {
      $('#about .image-show').removeClass('fixed').addClass('finishFixed');
    }else {
      $('#about .image-show').removeClass('fixed').removeClass('finishFixed');
    }
  }

  $(window).on('scroll', function(event) {
    event.preventDefault();
    makeSliderFixed();
  });

  // ----- navigation button trigger ----- //
  $('#nav-trigger-btn').on('click', function(event) {
    event.preventDefault();
    if (!$('body').hasClass('navigation-is-open')) {
      $('body').addClass('navigation-is-open');
      $('main').css('left', '100%');
      $('.nav-out-wrapper').css('left', '0');
      $('.owl-carousel').trigger('stop.owl.autoplay');
    } else {
      $('body').removeClass('navigation-is-open');
      $('main').css('left', '0');
      $('.nav-out-wrapper').css('left', '-100%');
    }
  });

  // ----- navigation item clicked ----- //
  (function() {
    const $root = $('html, body');
    const $item = $('a.item[href*=#]');
    $item.on('click', function() {
      $('body').removeClass('navigation-is-open');
      $('main').css('left', '0');
      $('.nav-out-wrapper').css('left', '-100%');
      $root.animate({
        scrollTop: $($.attr(this, 'href')).offset().top,
      }, 500);
      return false;
    });
  })();

  // ----- make work column width = height ----- //
  (function() {
    const $column = $('.work-gallery-inner').find('.column');
    $column.height($column.width());
    $(window).resize(function() {
      $column.height($column.width());
    });
  })();

  $('.tlt').textillate({
    loop: true,
    minDisplayTime: 2000,
    autoStart: true,
    in: {
      effect: 'rollIn',
      delayScale: 1.5,
      delay: 50,
      sync: false,
      shuffle: false,
      reverse: false,
    },
    out: {
      effect: 'rollOut',
      delayScale: 1.5,
      delay: 50,
      sync: false,
      shuffle: false,
      reverse: false,
    },
    type: 'char',
  });

  $('.tltOnce').textillate({
    loop: false,
    minDisplayTime: 2000,
    autoStart: true,
    in: {
      effect: 'fadeIn',
      delayScale: 1.5,
      delay: 50,
      sync: false,
      shuffle: false,
      reverse: false,
    },
    out: {
      effect: 'rollOut',
      delayScale: 1.5,
      delay: 50,
      sync: false,
      shuffle: false,
      reverse: false,
    },
    type: 'char',
  });

  Github.userProfile({
    username: 'Ron-Yu',
    selector: '.user-1',
    OAuth: '032c007a62166e5d70c1e402dd64e084f96a6037',
  });

  Github.userActivity({
    username: 'Ron-Yu',
    selector: '.user-1',
    limit: 10,
  });

  Github.repoProfile({
    username: 'Ron-Yu',
    reponame: 'BatonHunter',
    selector: '.repo-1',
  });
});
