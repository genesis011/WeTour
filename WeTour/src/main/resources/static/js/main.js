/* ===================================================================
 * Elevate - Main JS
 *  1. Preloader and Intro Animations
 *  2. ----
 *  3. Hide Logo
 *  4. Fitvids
 *	5. Flexslider
 *  6. Mobile Menu
 *  7. Stat Counter
 * 	8. Highlight the current section in the navigation bar
 *	9. Smooth Scrolling
 * 10. Placeholder Plugin Settings
 * 11. AjaxChimp
 * 12. Animations
 * 13. Back to Top
 * 14. 
 * ------------------------------------------------------------------- */ 

(function($) {

	"use strict";

	/* ------------------------------------------------------
	 * 1. Preloader and Intro Animations
	 * ------------------------------------------------------ */ 	 
   $(window).on('load', function() {

      // will first fade out the loading animation 
    	$("#loader").fadeOut("slow", function(){

        // will fade out the whole DIV that covers the website.
        $("#preloader").delay(300).fadeOut("slow");

      }); 

      // intro section animation
     	if (!$("html").hasClass('no-cssanimations')) {

     		setTimeout(function(){

    			$('body .animate-intro').each(function(ctr) {

					var el = $(this),
                  animationEfx = el.data('animate');

               if (animationEfx === null || animationEfx === undefined || animationEfx.trim() === "") {
                 	animationEfx = "fadeInUp";
               }

              	setTimeout( function () {
						el.addClass(animationEfx + ' animated');
					}, ctr * 100);

				});
					
			}, 1000);
     	}   	   	

  	});

	/* ------------------------------------------------------
	 * 2. ----
	 * ------------------------------------------------------ */ 


	/* ------------------------------------------------------
	 * 3. Hide Logo
	 * ------------------------------------------------------ */ 	 
   $(window).on('scroll', function() {

		var y = $(window).scrollTop(),
		    siteHeader = $('header'),
		    siteLogo = siteHeader.find('.logo'),
		    triggerHeight = siteHeader.innerHeight();		
     
	   if (y > triggerHeight) {
	      siteLogo.fadeOut();	     
	   }
      else {
         siteLogo.fadeIn();
      }
    
	});
	

	/* ------------------------------------------------------
	 * 4. Fitvids
	 * ------------------------------------------------------ */ 	
  	$(".fluid-video-wrapper").fitVids();


	/* ------------------------------------------------------
	 * 5. Flexslider
	 * ------------------------------------------------------ */
  	$(window).on('load', function() {

	   $('#testimonial-slider').flexslider({
	   	namespace: "flex-",
	      controlsContainer: ".flexslider-controls",
	      animation: "fade",
		  	manualControls: ".flex-control-nav li",	     
	      controlNav: true,
	      directionNav: false,
	      smoothHeight: true,
	      slideshowSpeed: 7000,
	      animationSpeed: 600,
	      randomize: false,
	      touch: true,
	      useCSS: false, // Chrome fix
	      start: function(slider){
			   $(slider).trigger('resize');  	
			}			
	   });

   });


	/* ------------------------------------------------------
	 * 6. Mobile Menu
	 * ------------------------------------------------------ */
   var toggleButton = $('.menu-toggle'),
       nav = $('#menu-nav-wrap'),
       siteBody = $('body'),
       mainContents = $('#main-content-wrap, header');

	// open-close menu by clicking on the menu icon
	toggleButton.on('click', function(e){

		e.preventDefault();

		toggleButton.toggleClass('is-clicked');
		siteBody.toggleClass('menu-is-open').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
			// firefox transitions break when parent overflow is changed, 
			// so we need to wait for the end of the trasition to give the body an overflow hidden
			siteBody.toggleClass('overflow-hidden');
		});
			
		// check if transitions are not supported 
		if ($('html').hasClass('no-csstransitions')) {
			 siteBody.toggleClass('overflow-hidden');
		}

	});

	// close menu clicking outside the menu itself
	mainContents.on('click', function(e){

		if( !$(e.target).is('.menu-toggle, .menu-toggle span') ) {

			toggleButton.removeClass('is-clicked');
			siteBody.removeClass('menu-is-open').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
				siteBody.removeClass('overflow-hidden');
			});
			
			// check if transitions are not supported
			if ($('html').hasClass('no-csstransitions')) {
				 siteBody.removeClass('overflow-hidden');
			}
		}

	});


	/* ------------------------------------------------------
	 * 7. Stat Counter
	 * ------------------------------------------------------ */
   var statSection = $("#stats"),
       stats = $(".stat-count");

   statSection.waypoint({

   	handler: function(direction) {

      	if (direction === "down") {       		

			   stats.each(function () {
				   var $this = $(this);

				   $({ Counter: 0 }).animate({ Counter: $this.text() }, {
				   	duration: 4000,
				   	easing: 'swing',
				   	step: function (curValue) {
				      	$this.text(Math.ceil(curValue));
				    	}
				  	});
				});

       	} 

       	// trigger once only
       	this.destroy();  

		},			
		offset: "90%"
	
	});


  /* ------------------------------------------------------
	* 8. Highlight the current section in the navigation bar
	* ------------------------------------------------------ */
	var sections = $("section"),
	navigationLinks = $("#menu-nav-wrap .nav-list a");	

	sections.waypoint( {

      handler: function(direction) {

		   var activeSection;

			activeSection = $('section#' + $(this.element).attr("id"));

			if (direction === "up") activeSection = activeSection.prev();

			var activeLink = $('#menu-nav-wrap .nav-list a[href="#' + activeSection.attr("id") + '"]');			

         navigationLinks.parent().removeClass("current");
			activeLink.parent().addClass("current");

		},
		offset: '25%'
	});


  /* ------------------------------------------------------
	* 9. Smooth Scrolling
	* ------------------------------------------------------ */
  	$('.smoothscroll').on('click', function (e) {
	 	
	 	e.preventDefault();

   	var target = this.hash,
    	$target = $(target);

    	$('html, body').stop().animate({
       	'scrollTop': $target.offset().top
      }, 800, 'swing').promise().done(function () {

      	// check if menu is open
      	if ($('body').hasClass('menu-is-open')) {
				$('.menu-toggle').trigger('click');
			}

      	window.location.hash = target;
      });

  	});


  /* ------------------------------------------------------
	* 10. Placeholder Plugin Settings
	* ------------------------------------------------------ */
	$('input, textarea, select').placeholder()  


  /* ------------------------------------------------------
	* 11. AjaxChimp
	* ------------------------------------------------------ */

	// Example MailChimp url: http://xxx.xxx.list-manage.com/subscribe/post?u=xxx&id=xxx
	var mailChimpURL = 'http://facebook.us8.list-manage.com/subscribe/post?u=cdb7b577e41181934ed6a6a44&amp;id=e65110b38d'

	$('#mc-form').ajaxChimp({

		language: 'es',
	   url: mailChimpURL

	});

	// Mailchimp translation
	//
	//  Defaults:
	//	 'submit': 'Submitting...',
	//  0: 'We have sent you a confirmation email',
	//  1: 'Please enter a value',
	//  2: 'An email address must contain a single @',
	//  3: 'The domain portion of the email address is invalid (the portion after the @: )',
	//  4: 'The username portion of the email address is invalid (the portion before the @: )',
	//  5: 'This email address looks fake or invalid. Please enter a real email address'

	$.ajaxChimp.translations.es = {
	  'submit': 'Submitting...',
	  0: '<i class="fa fa-check"></i> We have sent you a confirmation email',
	  1: '<i class="fa fa-warning"></i> You must enter a valid e-mail address.',
	  2: '<i class="fa fa-warning"></i> E-mail address is not valid.',
	  3: '<i class="fa fa-warning"></i> E-mail address is not valid.',
	  4: '<i class="fa fa-warning"></i> E-mail address is not valid.',
	  5: '<i class="fa fa-warning"></i> E-mail address is not valid.'
	} 


	/* ------------------------------------------------------
	* 12. Animations
	* ------------------------------------------------------ */
	if (!$("html").hasClass('no-cssanimations')) {

		$('.animate-this').waypoint({

			handler: function(direction) {

				var defAnimationEfx = "fadeInUp";

				if ( direction === 'down' && !$(this.element).hasClass('animated')) {

					$(this.element).addClass('item-animate');

					setTimeout(function() {

						$('body .animate-this.item-animate').each(function(ctr) {

							var el = $(this),
		                  animationEfx = el.data('animate');

		               if (animationEfx === null || animationEfx === undefined || animationEfx.trim() === "") {
		                 	animationEfx = defAnimationEfx;
		               }

		              	setTimeout( function () {
								el.addClass(animationEfx + ' animated');
								el.removeClass('item-animate');
							}, ctr * 50);

						});
							
					}, 500);

				}

				// trigger once only
       		this.destroy();  

			}, 
			offset: '95%'

		}); 
	} 

  /* ------------------------------------------------------
	* 13. Back to Top
	* ------------------------------------------------------ */
	var pxShow = 300,      // height on which the button will show
	    fadeInTime = 400,  // how slow/fast you want the button to show
	    fadeOutTime = 400, // how slow/fast you want the button to hide
       scrollSpeed = 300, // how slow/fast you want the button to scroll to top. can be a value, 'slow', 'normal' or 'fast'
       goTopButton = $("#go-top") 

	// Show or hide the sticky footer button
	$(window).on('scroll', function() {

		if ($(window).scrollTop() >= pxShow) {
			goTopButton.fadeIn(fadeInTime);
		} else {
			goTopButton.fadeOut(fadeOutTime);
		}

	});

})(jQuery);

	
	
	
	
	