

var top1 = $('#home').offset().top;
var top2 = $('#skills').offset().top;
var top3 = $('#projects').offset().top;

$(document).scroll(function() {
  var scrollPos = $(document).scrollTop();
  if (scrollPos <= top2) {
    $('.navbar').css('background-color', 'white');
  } else if (scrollPos >= top2 && scrollPos < top3) {
    $('.navbar').css('background-color', 'red');
  } });

