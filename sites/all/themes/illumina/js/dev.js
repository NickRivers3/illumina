/**
 * @file
 * A JavaScript file for the theme.
 *
 * In order for this JavaScript to be loaded on pages, see the instructions in
 * the README.txt next to this file.
 */

// JavaScript should be made compatible with libraries other than jQuery by
// wrapping it with an "anonymous closure". See:
// - https://drupal.org/node/1446420
// - http://www.adequatelygood.com/2010/3/JavaScript-Module-Pattern-In-Depth
(function ($, Drupal, window, document, undefined) {


	// To understand behaviors, see https://drupal.org/node/756722#behaviors
	Drupal.behaviors.my_custom_behavior = {
		attach: function (context, settings) {
			
			
			var windowHeight = $( window ).height();
			$("").css({
				"height": windowHeight + "px"
			});
			$("#view-frontpage-carousel-slider, .view-frontpage-carousel .slider-content, .view-frontpage-carousel .carousel-inner, .view-frontpage-carousel .item").css({
				"height": windowHeight + "px"
			});
			
			
			// hide header on scroll and show on scroll
			var didScroll;
			var lastScrollTop = 0;
			var delta = 5;
			var navbarHeight = $('header').outerHeight();
			$(window).scroll(function(event){
				didScroll = true;
			});
			setInterval(function() {
				if (didScroll) {
					hasScrolled();
					didScroll = false;
				}
			}, 250);
			function hasScrolled() {
				var st = $(this).scrollTop();
				// Make sure they scroll more than delta
				if(Math.abs(lastScrollTop - st) <= delta)
				return;
				// If they scrolled down and are past the navbar, add class .nav-up.
				// This is necessary so you never see what is "behind" the navbar.
				if (st > lastScrollTop && st > navbarHeight){
					// Scroll Down
					$("#header").removeClass('nav-down').addClass('nav-up');
				} else {
					// Scroll Up
					if(st + $(window).height() < $(document).height()) {
						$('header').removeClass('nav-up').addClass('nav-down');
					}
				}
				lastScrollTop = st;
			}
			
			// add active class to slider navigation
			$("#frontpage-carousel-attachment ul.slide-nav li.item-0").addClass("active");
			$('#views-bootstrap-carousel-1').on('slid.bs.carousel', function () {
				frontpageCarousel();
			});
			function frontpageCarousel() {
				var slide = $("#views-bootstrap-carousel-1 .carousel-inner .item");
				var slideActive = $("#views-bootstrap-carousel-1 .carousel-inner .item.active");
				var activeClasses = slideActive.attr("class").split(' ');
				var activeClass = activeClasses[1];
				$("#frontpage-carousel-attachment ul.slide-nav li.active").removeClass("active");
				$("#frontpage-carousel-attachment ul.slide-nav li."+activeClass).addClass("active");
			}
			$("ul.slide-nav li.item-0").click(function() {
				$('#views-bootstrap-carousel-1').carousel(0);
				frontpageCarousel();
			});
			$("ul.slide-nav li.item-1").click(function() {
				$('#views-bootstrap-carousel-1').carousel(1);
				frontpageCarousel();
			});
			$("ul.slide-nav li.item-2").click(function() {
				$('#views-bootstrap-carousel-1').carousel(2);
				frontpageCarousel();
			});
			$("ul.slide-nav li.item-3").click(function() {
				$('#views-bootstrap-carousel-1').carousel(3);
				frontpageCarousel();
			});
		}
	};
})(jQuery, Drupal, this, this.document);
