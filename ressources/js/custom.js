/* NAVIGATION */

$(document).ready(function(){
  'use strict';
  $(window).scroll(function(){
    'use strict';
    if($(window).scrollTop() < 80 ) {
      $('.navbar').css({
        'margin-top': '-100px',
        'opacity': '0'
      });
      $('.navbar-default').css({
        'background-color': 'rgba(59, 59, 59, 0)'
      })
    } else {
      $('.navbar').css ({
        'margin-top': '0px',
        'opacity': '1'
      });
      $('.navbar-default').css({
        'background-color': 'rgba(59, 59, 59, 0.7)',
        'border-color': '#444'
      });
      $('.navbar-brand img').css({
        'height': '35px',
        'padding-top': '0px;'
      });
      $('.navbar-nav > li > a').css({
        'padding-top': '15px'
      });
    }
  });
});

/*SMOOTH SCROLL*/

$(document).ready(function() {
		$('.nav-item, #scroll-to-top').on('click', function() { // Au clic sur un élément
			var page = $(this).attr('href'); // Page cible
			var speed = 750; // Durée de l'animation (en ms)
			$('html, body').animate( { scrollTop: $(page).offset().top }, speed ); // Go
			return false;
		});
	});

/* MENU ACTIF AU CLIQUE */

$(document).ready(function(){
  'use strict';
  $('.navbar-nav li a').click(function(){
    'use strict';
    $('.navbar-nav li a').parent().removeClass("active");
    $(this).parent().addClass("active");
  });
});

/* MENU SURLIGNE AU SCROLL */

$(document).ready(function(){
  'use strict'
  $(window).scroll(function(){
    'use strict'
    $("section").each(function(){
      'use strict'
      var bb = $(this).attr("id");
      var hei = $(this).outerHeight();
      var grttop = $(this).offset().top - 70;
      if ($(window).scrollTop() > grttop && $(window).scrollTop() < grttop + hei) {
        $(".navbar-nav li a[href='#" + bb + "']").parent().addClass("active");
      } else {
        $(".navbar-nav li a[href='#" + bb + "']").parent().removeClass("active");
      }
    });
  });
});

/* AUTO PADDING HEADER */

$(document).ready(function(){
  'use strict'
  setInterval(function(){
    'use strict'
    var windowHeight = $(window).height();
    var containerHeight = $(".header-container").height();
    var padTop = windowHeight - containerHeight;
    $(".header-container").css({
      'padding-top': Math.round( padTop / 2) + 'px',
      'padding-bottom': Math.round( padTop / 2) + 'px'
    });
  }, 10);
});

/* SLIDER */

$(document).ready(function(){
      $('.bxslider').bxSlider({
        slideWidth: 292.5,
        auto: true,
        minSlides: 1,
        maxSlides: 3,
        sliderMargin: 50
      });
    });

/* COUNTER */

$(document).ready(function(){
  $('.counter-num').counterUp({
    delay: 10,
    time: 2000
  });
});

/* ANIMATIONS */

$(document).ready(function(){
  'use strict'
  new WOW().init();
});
