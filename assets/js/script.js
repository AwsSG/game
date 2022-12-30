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

  /* var lvl1_win = {
    a_angle: [-90, 270],
    b_angle: [-90, 90],
    c_angle: [90, -270],
    d_angle: [-180, 180],
    e_angle: [-90, 90],
    f_angle: [0, 360],
    g_angle: [-90, 90],
    h_angle: [-90, 270],
    i_angle: [90, -270]
  } */

  var a_angle = [-90, 270];
  $('#a').mousedown(function () {
    if (($('#a').data('angle')) === -90 || ($('#a').data('angle')) === 270){
      console.log($(this).data('angle'))
    };
  });

});