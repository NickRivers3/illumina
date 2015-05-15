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

/* 
 * Global Vars 
 * Variables for various functions listed below
 *
*/
var windowWidth = $(window).width();
var windowHeight = $(window).height();
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('header').outerHeight();
var front = $("body.front");
var portfolioLink = $(".portfolio-content .group-projects .field-name-field-portfolio-images .field-item a");

/* 
 * Document.ready Functions
 *

*/
$(document).ready(function () {
	// Set up Toggle Sidebar
	$('[data-toggle=offcanvas]').click(function () {$('.row-offcanvas').toggleClass('active');});
	
	// windowSize();
	windowSize();
	
	// clientSlider();
	//clientSlider();
	
	// Check if the current page is the front
	front.exists(function() {
		// start the carousel
		carouselDimensions();
		
		// add active class to slider navigation
		$("#frontpage-carousel-attachment ul.slide-nav li.item-0").addClass("active");

		// Click functions for Frontpage slider
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
	});
	
	// create the modal functionality for portfolio images
	portfolioLink.exists(function() {
		$(this).each( function( index, element ){
			var imageLink = $(this).attr('href');
			var title = $(this).children('img').attr('title');
			$(this).attr('data-toggle','modal').attr('data-img-url', imageLink).attr('href', '#image-modal');
			$(this).click(function(e) {
				$('#image-modal img').attr('src', $(this).attr('data-img-url')); 
				$('#image-modal .modal-title').text(title);
			});
		});
	});
	
});

/* 
 * srSmoothscroll
 * adds smooth scrolling with options
 *
*/
$(function () {
  $.srSmoothscroll({
   // defaults
    step: 100,
    speed: 400,
    ease: 'swing',
    target: $('body'),
    container: $(window)
  });
});


/* 
 * $(window).scroll(function(event)
 * When a user scrolls check weather bowser is large enough for custom scrolling functionality
 *
*/
$(window).scroll(function(event) {
	if (windowWidth > 1199) {
		didScroll = true;
		hasScrolled();
	} else {
		$('header').removeClass('nav-up').addClass('nav-down');
	}
	didScroll = false;
});

/* 
 * function hasScrolled()
 * Animate header on scroll up
 *
*/
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

/*  
 * $(window).resize(function()
 * Check the browser size and adjust the variables
 *
*/
$(window).resize(function() {
	// adjust the variables
	windowWidth = $(window).width();
	windowHeight = $(window).height();
	
	// check if the current page is the front
	front.exists(function() {
		carouselDimensions();
	});
});


/*
 * windowSize() Function
 * Check the window size
 *
*/
function windowSize() {
	front.exists(function() {
		// if windowWidth is greater than 1199px, 
		if (windowWidth > 1199) {
			sklStart();
		}
		else if (windowWidth < 767) {
			$('#reasons-content .carousel').carousel('pause');
		}
		else {}
	});
}


/*
 * carouselDimensions() Function
 * Helper function for Bootstrap frontpage carousel
 *
*/
function carouselDimensions() {
	var imgHeight = "300";
	var containers = $("#view-frontpage-carousel-slider, .view-frontpage-carousel .slider-content, .view-frontpage-carousel .carousel-inner, .view-frontpage-carousel .item");	
	// if windowWidth is greater than 1199px, 
	// synchronize the height of the carousel and browser window
	if (windowWidth > 767) {
		containers.css({"height": windowHeight + "px"});
	}
	// else, synchronize the height of the carousel and slide image
	else {
		containers.css({"height": imgHeight + "px"});
	}
}

/*
 * Bootstrap on slid.bs.carousel
 *
*/
$('#views-bootstrap-carousel-1').on('slid.bs.carousel', function () {frontpageCarousel();});

/*
 * function frontpageCarousel()
 * Helper function for Bootstrap carousel
 *
*/
function frontpageCarousel() {
	var slide = $("#views-bootstrap-carousel-1 .carousel-inner .item");
	var slideActive = $("#views-bootstrap-carousel-1 .carousel-inner .item.active");
	var activeClasses = slideActive.attr("class").split(' ');
	var activeClass = activeClasses[1];
	$("#frontpage-carousel-attachment ul.slide-nav li.active").removeClass("active");
	$("#frontpage-carousel-attachment ul.slide-nav li."+activeClass).addClass("active");
}

/*
 * function clientSlider()
 * Client slider for the frontpage.
 *
*/
/*function clientSlider() {
	var content = $("#companies-content .view-content").width();
	var contentWidth = content / 5;
	var width = contentWidth;
	var size = $("#companies-content .view-content .client").size();
	var dimensions = width * size;
	var speed = 10000;
	
	// move the last list item before the first item.
	$("#companies-content .view-content .client").css({"width" : contentWidth+"px",});
	
	$("#companies-content .view-content").css({"left" : "-"+width+"px","width" : dimensions+"px",});
	
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
	
	if (windowWidth > 1199) {
		var run = setInterval(function() {rotate();}, speed);
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
}*/

/*
 * function rotate() 
 * Helper function for frontpage carousel
 *
*/
function rotate() {$('.slider-nav .next').click();}

/*
 * sklStart()
 * Adds parallax scrolling
 *
*/
function sklStart() {
	var s = skrollr.init({});
	s.refresh($('.parallax'));
	console.log("skrollr");
}

/*
 * $.fn.exists = function(callback)
 * Check if the element exists and if so run some code.
 *
*/
$.fn.exists = function(callback) {
	var args = [].slice.call(arguments, 1);
	if (this.length) {callback.call(this, args);}
	return this;
};


}};})(jQuery, Drupal, this, this.document);