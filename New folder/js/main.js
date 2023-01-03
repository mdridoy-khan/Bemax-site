(function ($) {
"use strict";

/*---------------------------------------------------------------------------------------
	Mean Menu Active
-----------------------------------------------------------------------------------------*/
	// Mobile-menu
	$('#mobile-menu').meanmenu({
		meanMenuContainer: '.mobile-menu-active',
		meanScreenWidth: "991",
	});
/*---------------------------------------------------------------------------------------
	Data Background Active
-----------------------------------------------------------------------------------------*/
	$("[data-background]").each(function () {
		$(this).css("background-image", "url(" + $(this).attr("data-background") + ")")
	});
/*---------------------------------------------------------------------------------------
	Sticky Header Active
-----------------------------------------------------------------------------------------*/
	// sticky Header layout 1
	$(window).on('scroll', function () {
		var scroll = $(window).scrollTop();
		if (scroll < 70) {
		  $("#header-sticky").removeClass("sticky");
		} else {
		  $("#header-sticky").addClass("sticky");
		}
	});	
	// sticky Header layout 2, 3
	$(window).on('scroll', function () {
		var scroll = $(window).scrollTop();
		if (scroll < 5) {
		  $("#header-sticky-2").removeClass("sticky");
		} else {
		  $("#header-sticky-2").addClass("sticky");
		}
	});	
	// sticky Header Inner page
	$(window).on('scroll', function () {
		var scroll = $(window).scrollTop();
		if (scroll < 5) {
		  $("#header-sticky-3").removeClass("sticky");
		} else {
		  $("#header-sticky-3").addClass("sticky");
		}
	});

/*---------------------------------------------------------------------------------------
	Full Screen Search Popup Active
-----------------------------------------------------------------------------------------*/                                     
	// search popup
    if ($('.popup-with-zoom-anim').length) {
        $('.popup-with-zoom-anim').magnificPopup({
            type: 'inline',

            fixedContentPos: false,
            fixedBgPos: true,

            overflowY: 'auto',

            closeBtnInside: true,
            preloader: false,

            midClick: true,
            removalDelay: 300,
            mainClass: 'my-mfp-zoom-in'
        });
    }
/*---------------------------------------------------------------------------------------
	Slick Slider Active
-----------------------------------------------------------------------------------------*/  
	// mainSlider
	function mainSlider() {
		var BasicSlider = $('.slider-active');
		BasicSlider.on('init', function (e, slick) {
			var $firstAnimatingElements = $('.single-slider:first-child').find('[data-animation]');
			doAnimations($firstAnimatingElements);
		});
		BasicSlider.on('beforeChange', function (e, slick, currentSlide, nextSlide) {
			var $animatingElements = $('.single-slider[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
			doAnimations($animatingElements);
		});
		BasicSlider.slick({
			autoplay: false,
			autoplaySpeed: 10000,
			dots: true,
			fade: true,
			arrows: true,
			prevArrow:'<i class="fas fa-chevron-left"></i>',
			nextArrow:'<i class="fas fa-chevron-right"></i>',
			responsive: [
		    {
		      breakpoint: 993,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1,
		        infinite: true,
		        arrows: false,
		      }
		    },
		    {
		      breakpoint: 767,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1,
		        arrows: false,
				dots: true,
		      }
		    },
		    {
		      breakpoint: 480,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1,
		        arrows: false,
		        dots: true,
		      }
		    }
		  ]
		});

		function doAnimations(elements) {
			var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
			elements.each(function () {
				var $this = $(this);
				var $animationDelay = $this.data('delay');
				var $animationType = 'animated ' + $this.data('animation');
				$this.css({
					'animation-delay': $animationDelay,
					'-webkit-animation-delay': $animationDelay
				});
				$this.addClass($animationType).one(animationEndEvents, function () {
					$this.removeClass($animationType);
				});
			});
		}
	}
	mainSlider();

	// latest blog slider active
	$('.project-active').slick({
		autoplay: true,
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		dots: false,
		arrows: true,
		autoplaySpeed: 1000,
		prevArrow:'<i class="fas fa-chevron-left"></i>',
		nextArrow:'<i class="fas fa-chevron-right"></i>',
		responsive: [
	    {
	      breakpoint: 993,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1,
	        infinite: true,
	      }
	    }
	  ]
	});
	// Blog post slider active
	$('.blog-active').slick({
		autoplay: true,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: false,
		arrows: true,
		autoplaySpeed: 1000,
		prevArrow:'<i class="fas fa-chevron-left"></i>',
		nextArrow:'<i class="fas fa-chevron-right"></i>',
	});


	// Blog post slider active2
	$('.testimonial-act').slick({
		autoplay: true,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: false,
		arrows: true,
		autoplaySpeed: 1000,
		prevArrow:'<i class="fas fa-chevron-left"></i>',
		nextArrow:'<i class="fas fa-chevron-right"></i>',
	});
	// brand slider active
	$('.testimonial-activation').slick({
		autoplay: true,
		infinite: true,
		slidesToShow: 6,
		slidesToScroll: 1,
		dots: false,
		arrows: false,
		autoplaySpeed: 1000,
		responsive: [
	    {
	      breakpoint: 1200,
	      settings: {
	        slidesToShow: 4,
	        slidesToScroll: 1,
	        infinite: true,
	      }
	    },
	    {
	      breakpoint: 993,
	      settings: {
	        slidesToShow: 3,
	        slidesToScroll: 1
	      }
	    },
	    {
	      breakpoint: 540,
	      settings: {
	        slidesToShow: 2,
	        slidesToScroll: 1
	      }
	    },
	    {
	      breakpoint: 400,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1
	      }
	    }
	  ]
	});

	// author-review active
	$('.author-review-active').slick({
		autoplay: true,
		infinite: true,
		dots: true,
		arrows: false,
		autoplaySpeed: 10000,
	});

	// author-review active
	$('.testimonial-active').slick({
		autoplay: true,
		infinite: true,
		dots: false,
		arrows: true,
		autoplaySpeed: 1000,
		prevArrow:'<i class="fas fa-chevron-left"></i>',
		nextArrow:'<i class="fas fa-chevron-right"></i>',
		responsive: [
	    {
	      breakpoint: 767,
	      settings: {
	        infinite: true,
	        arrows: false,
	      }
	    },
	  ]
	});
	
	/* project slide */
		$('.project-activ').slick({
		autoplay: true,
		infinite: true,
		dots: false,
		arrows: true,
		autoplaySpeed: 1000,
		prevArrow:'<i class="fas fa-chevron-left"></i>',
		nextArrow:'<i class="fas fa-chevron-right"></i>',
		responsive: [
	    {
	      breakpoint: 767,
	      settings: {
	        infinite: true,
	        arrows: false,
	      }
	    },
	  ]
	});
/*---------------------------------------------------------------------------------------
	Barfiller Progress Bar Active
-----------------------------------------------------------------------------------------*/
    $(window).on('scroll', function () {
        var scroll = $(window).scrollTop();
        if (scroll > 850) {
            $('#bar1').barfiller();
            $('#bar2').barfiller();
            $('#bar3').barfiller();
            $('#bar4').barfiller();
        }
    });
/*---------------------------------------------------------------------------------------
	Isotope Filter Active
-----------------------------------------------------------------------------------------*/
    // Latest work isotope active
	var $grid = $('.latest-work-items').isotope({
	  itemSelector: '.grid-item',
	  percentPosition: true,
	  masonry: {
	    // use outer width of grid-sizer for columnWidth
	    columnWidth: '.grid-item',
	  }
	});

	// filter items on button click
	$('.work-control-button').on( 'click', 'button', function() {
	  var filterValue = $(this).attr('data-filter');
	  $grid.isotope({ filter: filterValue });
	});
	//for button active class
	$('.work-control-button > button').on('click', function(event) {
		$(this).siblings('.active').removeClass('active');
		$(this).addClass('active');
		event.preventDefault();
	});
/*---------------------------------------------------------------------------------------
	Magnific popup Active
-----------------------------------------------------------------------------------------*/
	// image popup
	$('.myimage').magnificPopup({
		type: 'image',
		gallery:{
			enabled:true
		}
	});
	// video popup
	$('.popup-video').magnificPopup({
		type: 'iframe'
	});
/*---------------------------------------------------------------------------------------
	Scroll to top Active
-----------------------------------------------------------------------------------------*/
    $.scrollUp({
        scrollName: 'scrollUp', // Element ID
        topDistance: '300', // Distance from top before showing element (px)
        topSpeed: 300, // Speed back to top (ms)
        animation: 'fade', // Fade, slide, none
        animationInSpeed: 200, // Animation in speed (ms)
        animationOutSpeed: 200, // Animation out speed (ms)
        scrollText: '<span class="ti-angle-up"></span>', // Text for element
        activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
    });
/*---------------------------------------------------------------------------------------
	AOS Animation Active
-----------------------------------------------------------------------------------------*/
	if ($("[data-aos]").length) {
		AOS.init({
			duration: 1000,
			mirror: true
		});
	}
/*---------------------------------------------------------------------------------------
	Wow Animation Active
-----------------------------------------------------------------------------------------*/ 
if ($(".wow").length) {
	var wow = new WOW({
		boxClass: 'wow',      // animated element css class (default is wow)
		animateClass: 'animated', // animation css class (default is animated)
		offset: 20,          // distance to the element when triggering the animation (default is 0)
		mobile: true,       // trigger animations on mobile devices (default is true)
		live: true,       // act on asynchronously loaded content (default is true)
	});
	wow.init();
}
/*---------------------------------------------------------------------------------------
	Counter Active
-----------------------------------------------------------------------------------------*/
	$('.counter').counterUp({
	    delay: 10,
	    time: 1000
	});





/*---------------------------------------------------------------------------------------
	Preloader Active
-----------------------------------------------------------------------------------------*/
	function loader() {
		$(window).on('load', function () {
			$('#ctn-preloader').addClass('loaded');
			$("#loading").fadeOut(500);
			// Una vez haya terminado el preloader aparezca el scroll

			if ($('#ctn-preloader').hasClass('loaded')) {
				// Es para que una vez que se haya ido el preloader se elimine toda la seccion preloader
				$('#preloader').delay(900).queue(function () {
					$(this).remove();
				});
			}
		});
	}
	loader();

/*---------------------------------------------------------------------------------------
	Side-bar Active
-----------------------------------------------------------------------------------------*/
	$('.bar').on("click", function() {
		$('.btn-menu-main').addClass('btn-menu-main-right');
	});
	$('.crose').on("click", function() {
		$('.btn-menu-main').removeClass('btn-menu-main-right');
	});



/*---------------------------------------------------------------------------------------
	Map Active
-----------------------------------------------------------------------------------------*/ 
	function basicmap() {
		// Basic options for a simple Google Map
		// For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
		var mapOptions = {
			// How zoomed in you want the map to start at (always required)
			zoom: 11,
			scrollwheel: false,
			// The latitude and longitude to center the map (always required)
			center: new google.maps.LatLng(40.712776, -74.005974), // New York
			// This is where you would paste any style found on Snazzy Maps.
			styles: [{ "featureType": "landscape", "elementType": "all", "stylers": [{ "visibility": "on" }] }, { "featureType": "poi.business", "elementType": "all", "stylers": [{ "visibility": "simplified" }] }, { "featureType": "poi.business", "elementType": "labels", "stylers": [{ "visibility": "simplified" }] }, { "featureType": "poi.park", "elementType": "all", "stylers": [{ "visibility": "off" }] }, { "featureType": "poi.school", "elementType": "all", "stylers": [{ "visibility": "on" }] }, { "featureType": "poi.sports_complex", "elementType": "all", "stylers": [{ "visibility": "off" }] }, { "featureType": "transit.station.bus", "elementType": "all", "stylers": [{ "visibility": "on" }, { "saturation": "21" }, { "weight": "4.05" }] }]
		};
		// Get the HTML DOM element that will contain your map
		// We are using a div with id="map" seen below in the <body>
		var mapElement = document.getElementById('contact-map');

		// Create the Google Map using our element and options defined above
		var map = new google.maps.Map(mapElement, mapOptions);

		// Let's also add a marker while we're at it
		var marker = new google.maps.Marker({
			position: new google.maps.LatLng(40.712776, -74.005974),
			map: map,
			title: 'Cryptox'
		});
	}
	if ($('#contact-map').length != 0) {
		google.maps.event.addDomListener(window, 'load', basicmap);
	}




})(jQuery);	