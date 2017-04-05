var product = (function () {

//catche DOM
  var $product;
  var $bot;
  var $item;

  //bind events


  var init = function () {
    $product = $('.product');
    if ($product.length > 0) {
      $bot = $product.find('.product__bot');

      $item = $product.find('.product__item');

      lightBox();
    }
  };

  $(document).ready(function () {
    init();
  });

  //binds events

  var lightBox = function () {
    $bot.lightGallery({

      speed: 1500,
      swipeThreshold: 100
    })

  };


})();