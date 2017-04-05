var baner = (function () {

  //Catche DOM
  var $baner;
  var $item;
  var $img;

  //binds events


  var init = function () {
    $baner = $('.baner');
    if ($baner.length > 0) {
      $item = $baner.find('.baner__item');
      $img = $baner.find('.baner__img');

      baners();

    }

  };

  $(document).ready(function () {
    init();

  });

  var baners = function () {

    $item.waitForImages(function () {
      $item.slick({
        infinite: true,
        selector: $img,
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        dots: false,
        arrows: true,
        appendArrows: '.baner__item',
        prevArrow: '<div class="baner__prev"><i class="fa fa-angle-left" aria-hidden="true"></div>',
        nextArrow: '<div class="baner__next"><i class="fa fa-angle-right" aria-hidden="true"></div>'
      });
    });

  };

})();