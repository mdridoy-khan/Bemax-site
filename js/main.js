(function ($) {
"use strict";
	// background img call
	$("[data-background]").each(function () {
		$(this).css("background-image", "url(" + $(this).attr("data-background") + ")")
	});
	
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
			autoplaySpeed: 5000,
			dots: true,
			fade: true,
			arrows: true,
			prevArrow:'<button type="button" class="slick-prev"><i class="fas fa-chevron-right"></i>prev</button>',
			nextArrow:'<button type="button" class="slick-next"><i class="fas fa-chevron-right"></i>next</button>',
			responsive: [
		    {
		      breakpoint: 1200,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1,
		        infinite: true,
		        arrows: false,
		      }
		    },
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




	$('.slider-project').slick({
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
	        slidesToShow: 2,
	        slidesToScroll: 1,
	        infinite: true,
	      }
	    },
		{
	      breakpoint: 767,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1,
	        infinite: true,
	      }
	    },
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
		autoplaySpeed: 3000,
		prevArrow:'<i class="fas fa-chevron-left"></i>',
		nextArrow:'<i class="fas fa-chevron-right"></i>',
	});


	// Blog post slider active
	$('.testimonial-active').slick({
		autoplay: true,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: false,
		arrows: true,
		autoplaySpeed: 3000,
		prevArrow:'<i class="fas fa-chevron-left"></i>',
		nextArrow:'<i class="fas fa-chevron-right"></i>',
	});


	$('.brand-active').slick({
		autoplay: true,
		infinite: true,
		slidesToShow: 6,
		slidesToScroll: 1,
		dots: false,
		arrows: false,
		prevArrow:'<i class="fas fa-chevron-left"></i>',
		nextArrow:'<i class="fas fa-chevron-right"></i>',
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


		// sticky-menu
		var wind = $(window);
		var sticky = $('#sticky-header');
		wind.on('scroll', function(){
		var scroll = wind.scrollTop();
			if(scroll < 10){
				sticky.removeClass('sticky-menu');
			} else {
				$('#sticky-header').addClass('sticky-menu');
			}
		});
	
	// one page navigation
	$('#nav').onePageNav({
		currentClass: 'current',
		changeHash: false,
		scrollSpeed: 750,
		scrollThreshold: 0.5,
		filter: '',
		easing: 'swing',
		begin: function() {
		},
		end: function() {
		},
		scrollChange: function($currentListItem) {
		}
	});

	// magnific popup
	$('.video').magnificPopup({
	  type: 'iframe',
	  
	  
	});


	// Mobile-menu
	$('#mobile-menu').meanmenu({
		meanMenuContainer: '.mobile-menu',
		meanScreenWidth: "991",
	});






})(jQuery);	