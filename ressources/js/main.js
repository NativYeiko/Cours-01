/* Show and hide mene */

$(document).ready(function(){
  'use strict';
  $(window).scroll(function(){
    'use strict';
    if($(window).scrolltop() <80){
      $('.navbar').css({
        'margin-top': '-100px',
        'opacity': '0'
      });
    } else {
      $('.navbar').css({
        'margin-top': '-100px',
        'opacity': '1'
      });
    }
  });
});
