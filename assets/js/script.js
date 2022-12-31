jQuery(document).ready(function ($) {

  $('table tr td img').mousedown(function (event) {
    switch (event.which) {
      case 1:
        var angle = ($(this).data('angle')) || 0;
        angle -= 90;
        $(this).css({ 'transform': 'rotate(' + angle + 'deg)' });
        $(this).data('angle', angle);
        break;
      case 3:
        var angle = ($(this).data('angle')) || 0;
        angle += 90;
        $(this).css({ 'transform': 'rotate(' + angle + 'deg)' });
        $(this).data('angle', angle);
        break;
    }
  });

  /* level 1 winning combintion */

  var lvl1_win = {
    a: [-90, 270],
    b: [-90, 90],
    c: [90, -270],
    d: [-180, 180],
    e: [-90, 90],
    f: [0, 360],
    g: [-90, 90],
    h: [-90, 270],
    i: [90, -270]
  }

  var a_angle = [-90, 270];
  $('table tr td img').mousedown(function () {
    var img_id = $(this).attr('id');
    var img_angle = lvl1_win[img_id];
    if (($(this).data('angle')) === img_angle[0] || ($(this).data('angle')) === img_angle[1]){
      console.log("win!!!!!!")
    };
  });

});