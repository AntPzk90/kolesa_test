$(document).ready(function(){
  var slickSettings = {
    slidesToShow: 5,
    slidesToScroll: 5,
    infinite: true,
    dots: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
    ]
  };
  $('.products__list').slick(slickSettings);
  //toggle slider settings 1column & 2column
  $('.toggle__btn--1column').click(function() {
    $('.products__list').slick('destroy');
    slickSettings.responsive[1].settings.slidesToShow = 1;
    $('.products__list').slick(slickSettings);
  });
  $('.toggle__btn--2column').click(function() {
    $('.products__list').slick('destroy');
    slickSettings.responsive[1].settings.slidesToShow = 2;
    $('.products__list').slick(slickSettings);
  });
  // animate proce__bonus (mini-pig)
  var priceBonusElement = $('.price__bonus');
  function addAnimateClassOnHover () {
    $(this).addClass('price__bonus--active');
  }
  function removeAnimateClassOnHover () {
    $(this).removeClass('price__bonus--active');
  }
  priceBonusElement.hover(addAnimateClassOnHover, removeAnimateClassOnHover)
  // show popup
  var popup = $('.popup');
  var popupDscr = $('.popup--dscr');
  var popupCard = $('.popup--card');
  var cardBtn = $('.cart-btn');
  var tableLink = $('.parameters-table__link');
  var popupCloseBtn = $('.popup__close');
  var overlayElement = '<div class="overlay"></div>';

  function showCardPopupOnClick (evt) {
    evt.preventDefault();
    popupCard.fadeIn(400);
    $('body').append(overlayElement);
    $('body').css({'overflow-y': 'hidden'});
    $('.overlay').click(hidePopupOnOverlayClick);
  }
  function showDscrPopupOnClick (evt) {
    evt.preventDefault();
    popupDscr.fadeIn(400);
    $('body').append(overlayElement);
    $('body').css({'overflow-y': 'hidden'});
    $('.overlay').click(hidePopupOnOverlayClick);
  }
  function hidePopupOnClick (evt) {
    evt.preventDefault();
    popup.fadeOut(400);
    if($('.overlay')) {
      $('.overlay').remove();
      $('body').removeAttr('style');
    }
  }
  function hidePopupOnEscKeypress (evt) {
    if (evt.keyCode === 27) {
      if($('.overlay') && popup) {
        popup.fadeOut(400);
        $('.overlay').remove();
        $('body').removeAttr('style');
      }
    }
  }
  function hidePopupOnOverlayClick () {
    popup.fadeOut(400);
    $(this).remove();
    $('body').removeAttr('style');
  }
  tableLink.click(showDscrPopupOnClick);
  cardBtn.click(showCardPopupOnClick);
  popupCloseBtn.click(hidePopupOnClick);
  $(document).keydown(hidePopupOnEscKeypress);
});
