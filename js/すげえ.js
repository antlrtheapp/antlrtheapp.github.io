$(document).ready(function() {
  $('#particles').particleground({
    dotColor: '#e64b46',
    lineColor: '#9C8DF7'
  });
  $('.intro').css({
    'margin-top': -($('.intro').height() / 2)
  });
});
