var teamItem = (function () {

  //catche DOM
  var $team;
  var $bot;
  var $opt;
  var $select;

  //bind events

  var init = function () {
    $team = $('.teamItem');
    if ($team.length > 0) {

      $bot = $team.find(".teamItem__bot");
      $opt = $team.find(".teamItem__opt");
      $select = $team.find(".teamItem__select");

      bindEvents();
      first();

    }
  };

  $(document).ready(function () {
    init();
    first();
  });

  var bindEvents = function () {
    clickBtn();
  };

  var clickBtn = function () {
    $select.on('change', function () {
      var  sampleAmount = $('select#sample option:selected').data('list');
      change(sampleAmount);
    })
  };

  var change = function (act) {
    var active = $team.find('*[data-list="'+ act +'"]').css("display", "block");
    $bot.not(active).css("display", "none");
  };

  var first = function () {
    $team.find('[data-list="1"]').css("display", "block");

  }


})();