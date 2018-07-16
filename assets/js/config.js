/* ============================
Copyright José Borrás 2018
Writen for: http://www.jborras.com
Version: 1.0
==============================*/

/*-------------------------------------
	Smooth Scroll
	-------------------------------------*/
$('a.smooth-scroll').on('click', function (event) {
  var $anchor = $(this);
  $('html, body').stop().animate({
    scrollTop: $($anchor.attr('href')).offset().top - 56
  }, {
      duration: 1000,
      specialEasing: {
        width: "linear",
        height: "easeInOutCubic"
      }
    });
  event.preventDefault();
});

/*-------------------------------------
  Navbar scrolling change
  -------------------------------------*/
$(window).scroll(function () {
  if ($("#top-nav").offset().top > 50) {
    $("#top-nav").removeClass("navbar-dark");
    $("#top-nav").addClass("bg-light navbar-light ");
  } else {
    $("#top-nav").removeClass("bg-light");
    $("#top-nav").addClass("navbar-dark");
  }
});

/*-------------------------------------
  Scroll Up
  -------------------------------------*/
$(document).ready(function () {
  $('.toTop').click(function () {
    $('html, body').animate({
      scrollTop: '0px'
    }, 1000);
  });

  $(window).scroll(function () {

    if ($(this).scrollTop() > 0) {
      $('.toTop').slideDown(300);
    } else {
      $('.toTop').slideUp(300);
    }
  });
});


/*Particles configuration script*/
particlesJS('particles-js',
  {
    "particles": {
      "number": {
        "value": 50,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 5,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 6,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "repulse"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true,
    "config_demo": {
      "hide_card": false,
      "background_color": "#b61924",
      "background_image": "",
      "background_position": "50% 50%",
      "background_repeat": "no-repeat",
      "background_size": "cover"
    }
  }
);
