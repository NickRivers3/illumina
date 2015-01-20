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
			// windowSize Function
			function windowSize() {
				// set the height of the frontpage carousel
				var windowWidth = $(window).width();
				var windowHeight = $(window).height();
				var imgHeight = $(".view-frontpage-carousel .slider-content .item.active .slide-image img").height();
				var containers = $("#view-frontpage-carousel-slider, .view-frontpage-carousel .slider-content, .view-frontpage-carousel .carousel-inner, .view-frontpage-carousel .item");
				// if windowWidth is greater than 1199px, 
				// synchronize the height of the carousel and browser window
				if (windowWidth > 1199) {
					containers.css({"height": windowHeight + "px"});
				}
				// else, synchronize the height of the carousel and slide image
				else {
					containers.css({"height": imgHeight + "px"});
				}
			}
			$(window).resize(function() {
				windowSize();
			});
			windowSize();
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
			
			// client slider 
			function clientSlider() {
				var content = $("#companies-content .view-content").width();
				var contentWidth = content / 5;
				
				var width = contentWidth;
				var size = $("#companies-content .view-content .client").size();
				var dimensions = width * size;
				var speed = 10000;
				var run = setInterval(function() {rotate();}, speed);
						
				// move the last list item before the first item.
				$("#companies-content .view-content .client").css({
					"width" : contentWidth+"px",
				});
				$("#companies-content .view-content").css({
					"left" : "-"+width+"px",
					"width" : dimensions+"px",
				});
				$("#companies-content .view-content .client:first").before($("#companies-content .view-content .client:last"));
				
				// when the user clicks the bttn for sliding right
				$(".slider-nav .next").click(function() {
					// get the width of the items
					var item_width = $("#companies-content .view-content .client").outerWidth();
					// calculate the new left indent of the unordered list
					var left_indent = parseInt($("#companies-content .view-content").css("left")) - item_width;
					// make the sliding effect using jquery animate
					$("#companies-content .view-content:not(:animated)").animate({
						left : left_indent
					},500, function() {
						// get the first list item and put it after the last list item
						$("#companies-content .view-content .client:last").after($("#companies-content .view-content .client:first"));
						// and get the left indent to the default -700px
						$("#companies-content .view-content").css({"left" : "-"+width+"px"});
					});
				});
				// when the user clicks the bttn for sliding left
				$(".slider-nav .prev").click(function() {
					// get the width of the items
					var item_width = $("#companies-content .view-content .client").outerWidth();
					// calculate the new left indent of the unordered list
					var left_indent = parseInt($("#companies-content .view-content").css("left")) + item_width;
					// make the sliding effect using jquery animate
					$("#companies-content .view-content:not(:animated)").animate({
						left : left_indent
					},500, function() {
						// get the fist list item and put it after the last list item
						$("#companies-content .view-content .client:first").before($("#companies-content .view-content .client:last"));
						// and get the left indent to the default -700px
						$("#companies-content .view-content").css({"left" : "-"+width+"px"});
					});
				});
				// if mouse hover, pause the auto rotation, otherwise rotate it
				$('.client, .slider-nav .next, .slider-nav .prev').hover(
					function() {
						clearInterval(run);
					}, function() {
						run = setInterval(function() {
							rotate();
						}, speed);
					}
				);
			}
			function rotate() {
				$('.slider-nav .next').click();
			}
			clientSlider();

		}
	};
})(jQuery, Drupal, this, this.document);
