(function($){
	"use strict";

	// append the first letter of project name to data attribute
	$('.projects__item').each(function() {
		var thisSymbol = $(this).find('.projects__item-name').text().charAt(0);
		console.log(thisSymbol);
		$(this).attr('data-symbol', thisSymbol);
	});

	// show side menu
	$('.js-menu').on('click', function(e) {
		e.preventDefault();
		e.stopPropagation();
		showMenu();
	});
	// hide side menu
	$('.js-menu-close').on('click', function(e) {
		e.preventDefault();
		hideMenu();
	});
	$(document).on('click', function(e) {
		if (!$(e.target).closest('.header__menu').length) {
			hideMenu();
		}
	});

	// homepage carousel
	var $slider = $('.js-homepage-slider').carousel({
		interval: 4000,
	});
	$('.js-slider-prev').on('click', function(e) {
		e.preventDefault();
		$slider.carousel('prev');
	});
	$('.js-slider-next').on('click', function(e) {
		e.preventDefault();
		$slider.carousel('next');
	});
	// touch control
	$slider.swipe({
		swipe: function(event, direction, distance, duration, fingerCount, fingerData) {
			if (direction === 'left') $(this).carousel('next');
			if (direction === 'right') $(this).carousel('prev');
		},
		allowPageScroll:"vertical"
	});

	// project details image carousel
	var $projectCarousel = $('.js-project-gallery').carousel();
	$('.js-project-gallery-indicator').on('click', function(e) {
		e.preventDefault();
		$projectCarousel.carousel($(this).index());
	});
	// touch control
	$projectCarousel.swipe({
		swipe: function(event, direction, distance, duration, fingerCount, fingerData) {
			if (direction === 'left') $(this).carousel('next');
			if (direction === 'right') $(this).carousel('prev');
		},
		allowPageScroll:"vertical"
	});

	// photo gallery
	var $gallery = $('.js-gallery').carousel({
		interval: 4000,
	});
	$('.js-gallery-prev').on('click', function(e) {
		e.preventDefault();
		$gallery.carousel('prev');
	});
	$('.js-gallery-next').on('click', function(e) {
		e.preventDefault();
		$gallery.carousel('next');
	});
	// photo gallery thumbs
	$('.js-gallery-thumb').on('click', function(e) {
		e.preventDefault();
		$gallery.carousel($(this).index());
	});
	// touch control
	$gallery.swipe({
		swipe: function(event, direction, distance, duration, fingerCount, fingerData) {
			if (direction === 'left') $(this).carousel('next');
			if (direction === 'right') $(this).carousel('prev');
		},
		allowPageScroll:"vertical"
	});

	// coming soon page countdown
	$('.js-countdown').countdown();

	function showMenu() {
		if (!$('.header__menu-cover').length) $('body').prepend('<div class="header__menu-cover"></div>');
		$('html').addClass('no-scroll').css('padding-right',getScrollbarWidth()+'px');
		$('.header__menu').addClass('header__menu--active');
	}

	function hideMenu() {
		if ($('html').hasClass('no-scroll')) $('html').removeClass('no-scroll').css('padding-right','0');
		if ($('.header__menu-cover').length) {
			$('.header__menu-cover').addClass('header__menu-cover--hide');
			setTimeout(function(){
				$('.header__menu-cover').remove();
			}, 500);
		}
		$('.header__menu').removeClass('header__menu--active');
	}

	function getScrollbarWidth() {
		var outer = document.createElement("div");
		outer.style.visibility = "hidden";
		outer.style.width = "100px";
		document.body.appendChild(outer);
		var widthNoScroll = outer.offsetWidth;
		outer.style.overflow = "scroll";
		var inner = document.createElement("div");
		inner.style.width = "100%";
		outer.appendChild(inner);        
		var widthWithScroll = inner.offsetWidth;
		outer.parentNode.removeChild(outer);
		return widthNoScroll - widthWithScroll;
	}

})(jQuery);