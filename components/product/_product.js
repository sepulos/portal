var product = (function () {

//catche DOM
  var $product;
  var $slick;
  var $slick2;
  var $slick3;
  var $item;

  //bind events


  var init = function () {
    $product = $('.product');
    if ($product.length > 0) {
      $slick = $product.find('.product__slick');

      $item = $product.find('.product__item');

      lightBox();
    }
  };

  $(document).ready(function () {
    init();
  });

  //binds events

  var lightBox = function () {
    $slick.lightGallery({

      speed: 1500,
      swipeThreshold: 100
    })

  };


})();