if ($(document).width() >= 1024) {
  $('.program-selection__slider').removeClass('swiper-container');
  $('.program-selection__list').removeClass('swiper-wrapper');
  $('.program-selection__list-item').each(function() {
    $(this).removeClass('swiper-slide');
  });
}

if ($(document).width() >= 1400) {
  var programItem = $('.program-selection__list-item-wrapper');
  programItem.on("mouseenter", function() {
    $(this).find('.program-selection__mini-title').addClass('program-selection__mini-title--hover');
    var element = '<div class="program-selection__list-item-overlay"></div>';
    $(this).append(element);
    $(this).find('.program-selection__link-text--program').fadeOut(0);
    $(this).find('.program-selection__link-text--more-info').fadeIn(300);
  });

  programItem.on("mouseleave", function() {
    $(this).find('.program-selection__link-text--more-info').fadeOut(0);
    $(this).find('.program-selection__link-text--program').fadeIn(300);
    $(this).find('.program-selection__mini-title').removeClass('program-selection__mini-title--hover');
    $(this).find('.program-selection__list-item-overlay').fadeOut(300);
    function removeElemet() {
      $(this).find('.program-selection__list-item-overlay').remove();
    }
    setTimeout(removeElemet, 400)
  });
}

$(window).resize(function(){
  location.reload();
});

$('.header__menu-btn').click(function(){
  if(($(window).width() < 1024)) {
    $('.header__top').toggleClass('header__top--menu-active');
    if($('.header__top').hasClass('header__top--menu-active')){
      $('.header__wrapper').css('paddingTop', '69px');​
    } else {
      $('.header__wrapper').removeAttr('style');
    }
  } else if (($(window).width() >= 1024) && ($(window).width() < 1440)) {
    $('.header__user').toggleClass('header__user--tab-active');
    $('.header__menu-btn').toggleClass('header__menu-btn--close');
  }
});

var $page = $('html, body');
$('.scroll-block__btn').click(function(evt) {
  evt.preventDefault();
    $page.animate({
        scrollTop: $('.program-selection').offset().top
    }, 400);
    return false;
});

$(document).ready(function() {
  function calculateOffset() {
    return Math.floor($(window).width() / 16);
  };
  function calculateSpaceBetween() {
    return Math.floor($(window).width() / 22);
  };
  function calculateWidth() {
    var result = Math.floor($(window).width() / 1.23);
    return result
  };
  var swiperSettings = {
    loop: true,
    width: calculateWidth(),
    slidesOffsetBefore: calculateOffset(),
    spaceBetween: calculateSpaceBetween(),
    loopedSlides: 3,
    breakpoints :{
      640:{
        slidesPerView: 2,
        loopedSlides: 3,
        spaceBetween: 20,
      },
      768:{
        slidesPerView: 2,
        loopedSlides: 3,
        spaceBetween: 20,
      }
    }
  };

  mySwiper = new Swiper ('.program-selection__slider', swiperSettings );
  mySwiper.init();

  if ($(window).width() >= 1024) {
    mySwiper.destroy(true, true);
  }
});



