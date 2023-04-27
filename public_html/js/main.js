   
      
      
   /*-----------------------------
               SCRIPTS
   -----------------------------*/
       
    (function() {
       "use strict";
   
      /*--------------------------
                 LOADER
       --------------------------*/
   
     $(window).on('load', function() {
				 	// Animate loader off screen
				 		$('.loader-wrap').fadeOut();
				 					$('.spinner').delay(350).fadeOut('slow');
	    });
					
      /*--------------------------
                 NAVBAR
       --------------------------*/
							
     $(window).on('scroll', function() {
				 		if ($(document).scrollTop() > 10) {
				 			$('nav').addClass('shrink');
					 	} else {
					 		$('nav').removeClass('shrink');
				 		}
			 	});

		    /*--------------------------
                 VIDEO
       --------------------------*/
   
     var $vid1 = $("#bgndVideo");
         $vid1.YTPlayer({
      });
     var $vid2 = $("#bgndVideo-2");
         $vid2.YTPlayer({
      });
      
      /*--------------------------
          ANIMATION TO DROPDOWN
      ---------------------------*/

     // ADD SLIDEDOWN ANIMATION TO DROPDOWN //
     $("#dropdown-slide").find("li.dropdown").on('show.bs.dropdown', function (e) {
        $(this).find('.dropdown-menu').first().stop(true, true).slideDown();
     });
     // ADD SLIDEUP ANIMATION TO DROPDOWN //
     $("#dropdown-slide").find("li.dropdown").on('hide.bs.dropdown', function (e) {
        e.preventDefault();
        $(this).find('.dropdown-menu').first().stop(true, true).slideUp(400, function () {
            $(this).parent().removeClass('open');
        });
     });
				
     /*--------------------------
            SCROLL ONEPAGE
     ---------------------------*/
					
     $(".page-scroll").on("click", function(event){
						event.preventDefault();
						//calculate destination place
						var dest=0;
						if($(this.hash).offset().top > $(document).height()-$(window).height()){
											dest=$(document).height()-$(window).height();
						}else{
											dest=$(this.hash).offset().top;
						}
						//go to destination
						$('html,body').animate({scrollTop:dest}, 1000,'swing');
     });
					
     /*--------------------------
               TOOL TIP
     ---------------------------*/

    $('[data-toggle="tooltip"]').tooltip();

     /*--------------------------
              ACCORDION
     ---------------------------*/
       
     var $acc1 = $("#accordion1");
         $acc1.rlAccordion({
      });
      
     var $acc2 = $("#accordion2");
         $acc2.rlAccordion('single', {
         titles: "h3", // html tag parent of minus and plus, this may replaced also for a class
         childNum: 2, // number of the children start open
         open: "+", // unicode plus sign
         close: "−", // unicode minus sign
      });
   
     var $acc3 = $("#accordion3");
         $acc3.rlAccordion('mix', {
         titles: "h3",
         childNum: 2,
         open: "+",
         close: "−",
      });
   
     var $acc4 = $("#accordion4");
         $acc4.rlAccordion('mix', {
         titles: "h3",
         childNum: 4,
         open: "+",
         close: "−",
      });
      
     var $acc5 = $("#accordion5");
         $acc5.rlAccordion('single', {
         titles: "h4",
         childNum: 1,
         open: "+",
         close: "−",
      });
      
     var $acc6 = $("#accordion6");
         $acc6.rlAccordion('mix', {
         titles: "h4",
         childNum: 2,
         open: "+",
         close: "−",
      });
      
     var $acc7 = $("#accordion7");
         $acc7.rlAccordion('mix', {
         titles: "h4",
         childNum: 2,
         open: "+",
         close: "−",
      });
      
     var $acc8 = $("#accordion8");
         $acc8.rlAccordion('mix', {
         titles: "h4",
         childNum: 4,
         open: "+",
         close: "−",
      });
   
      /*--------------------------
                   TABS
       ---------------------------*/
       
     var $tabs1 = $("#tabs-scale");
         $tabs1.tabulous({
         effect: 'scale'         
      });
      
     var $tabs2 = $("#tabs-slide-left");
         $tabs2.tabulous({
         effect: 'slideLeft'         
      });

     var $tabs3 = $("#tabs-slide-left-2");
         $tabs3.tabulous({
         effect: 'slideLeft'         
      });
      
     var $tabs4 = $("#tabs-flip");
         $tabs4.tabulous({
         effect: 'flip'         
      });
   
      /*--------------------------
              ANIMATED TEXT
       ---------------------------*/
       
     var $tex1 = $('.tlt-adventure');
         $tex1.textillate({
         minDisplayTime: 3800,
         in : {
            effect: 'flipInY',
            reverse: false,
         },
         out: {
            delay: 3,
            effect: 'fadeOut'
         },
         loop: true
      });
         
     var $tex2 = $('.tlt-left');
         $tex2.textillate({
         minDisplayTime: 1000,
         in : {
            effect: 'flipInY',
            reverse: false,
         },
         out: {
            delay: 3,
            effect: 'fadeOut'
         },
         loop: true
      });
   
     var $tex3 = $('.tlt-right');
         $tex3.textillate({
         minDisplayTime: 1000,
         in : {
            effect: 'flipInY',
            reverse: true,
         },
         out: {
            delay: 3,
            effect: 'fadeOut'
         },
         loop: true
      });
   
      /*--------------------------
              OWL CAROUSEL
       ---------------------------*/
   
     var $owl1 = $(".slide-home");
         $owl1.owlCarousel({
         animateIn: 'fadeIn',
         animateOut: 'fadeOut',
         items: 1,
         rewind: true,
         pagination: true,
         autoplay: true,
         autoplayTimeout: 4000,
         autoplayHoverPause: false,
      });
      
     var $owl2 = $(".slide-home-2");
         $owl2.owlCarousel({
         items: 1,
         rewind: true,
         smartSpeed: 1000,
         pagination: true,
         autoplay: true,
         autoplayTimeout: 4000,
         autoplayHoverPause: false,
   
      });
      
     var $owl3 = $(".slide-v-l");
         $owl3.owlCarousel({
         animateOut: 'slideOutUp',
         animateIn: 'slideInUp',
         items: 1,
         rewind: true,
         smartSpeed: 650,
         autoplay: true,
         autoplayTimeout: 4000,
         dots: false,
         mouseDrag: false,
      });
     
     var $owl4 = $(".slide-v-r");
         $owl4.owlCarousel({
         animateIn: 'slideOutUp',
         animateOut: 'slideInUp',
         items: 1,
         rewind: true,
         smartSpeed: 650,
         autoplay: true,
         autoplayTimeout: 4000,
         dots: false,
         mouseDrag: false,
      });
   
     var $owl5 = $(".slide-h-l");
         $owl5.owlCarousel({
         animateIn: 'fadeInLeft',
         animateOut: 'fadeOut',
         items: 1,
         rewind: true,
         smartSpeed: 650,
         autoplay: true,
         autoplayTimeout: 4000,
         dots: false,
         mouseDrag: false,
      });
   
     var $owl6 = $(".slide-h-r");
         $owl6.owlCarousel({
         animateIn: 'fadeInRight',
         animateOut: 'fadeOut',
         items: 1,
         rewind: true,
         smartSpeed: 650,
         autoplay: true,
         autoplayTimeout: 4000,
         dots: false,
         mouseDrag: false,
      });
   
     var $owl7 = $(".creative");
         $owl7.owlCarousel({
         items: 1,
         rewind: true,
         smartSpeed: 450,
         autoplay: true,
         autoplayTimeout: 3000,
         autoplayHoverPause: true,
         dots: false,
         nav: true,
         navText: [
            "<img src='img/icon/arrow2-left.png'>",
            "<img src='img/icon/arrow2-right.png'>"
         ],
      });
   
     var $owl8 = $(".testimonial");
         $owl8.owlCarousel({
         items: 1,
         rewind: true,
         smartSpeed: 450,
         autoplay: true,
         autoplayTimeout: 3000,
         autoplayHoverPause: true,
         nav: false,
      });
   
     var $owl9 = $(".box-slide-1");
         $owl9.owlCarousel({
         items: 1,
         rewind: true,
         smartSpeed: 1000,
         autoplay: true,
         autoplayTimeout: 3000,
         autoplayHoverPause: true,
         dots: true,
      });
   
     var $owl10 = $(".box-slide-2");
         $owl10.owlCarousel({
         items: 1,
         rewind: true,
         smartSpeed: 450,
         autoplay: true,
         autoplayTimeout: 3000,
         autoplayHoverPause: true,
         nav: false,
      });
   
     var $owl11 = $(".blog-slide");
         $owl11.owlCarousel({
         items: 1,
         rewind: true,
         smartSpeed: 450,
         autoplay: true,
         autoplayTimeout: 3000,
         autoplayHoverPause: true,
         dots: false,
         nav: true,
         navText: [
            "<img src='img/icon/arrow2-left.png' width='25' height='25'>",
            "<img src='img/icon/arrow2-right.png' width='25' height='25'>"
         ],
      });
   
     var $owl12 = $(".clients-1");
         $owl12.owlCarousel({
         loop: true,
         items: 5,
         rewind: true,
         smartSpeed: 1000,
         autoplay: true,
         autoplayTimeout: 3000,
         autoplayHoverPause: true,
         dots: false,
         nav: false,
         responsive: {
            0: {
               items: 3,
               margin: 10
            },
            480: {
               items: 4,
               margin: 20
            },
            768: {
               items: 5,
               margin: 20
            },
            992: {
               items: 5,
               margin: 50
            },
            1200: {
               items: 5,
               margin: 50
            }
         }
      });
   
     var $owl13 = $(".portfolio-single");
         $owl13.owlCarousel({
         items: 2,
         loop: true,
         margin: 40,
         autoplay: true,
         autoplayTimeout: 3000,
         rewind: true,
         smartSpeed: 750,
         autoplayHoverPause: true,
         dots: false,
         nav: true,
         navText: [
            "<img src='img/icon/arrow-left.png' width='40' height='40'>",
            "<img src='img/icon/arrow-right.png' width='40' height='40'>"
         ],
         responsive: {
            0: {
               items: 1
            },
            480: {
               items: 2
            }
         }
      });
   
      /*--------------------------
            VALIDOR FORM EMAIL
       ---------------------------*/
   
      $('#form-contact').validator();
      $('#form-contact').on('submit', function(e) {
         if (!e.isDefaultPrevented()) {
            var url = "contact.php";
            $.ajax({
              type: "POST",
              url: url,
              data: $(this).serialize(),
              success: function(data) {
                  var messageAlert = 'alert-' + data.type;
                  var messageText = data.message;
                  var alertBox = '<div class="alert ' + messageAlert + ' alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button>' + messageText + '</div>';
                  if (messageAlert && messageText) {
                     $('#form-contact').find('.messages').html(alertBox);
                     $('#form-contact')[0].reset();
                  }
               }
            });
            return false;
         }
      });
   
      $('#form-comments').validator();
      $('#form-comments').on('submit', function(e) {
         if (!e.isDefaultPrevented()) {
            var url = "contact.php";
            $.ajax({
              type: "POST",
              url: url,
              data: $(this).serialize(),
              success: function(data) {
                  var messageAlert = 'alert-' + data.type;
                  var messageText = data.message;
                  var alertBox = '<div class="alert ' + messageAlert + ' alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button>' + messageText + '</div>';
                  if (messageAlert && messageText) {
                     $('#form-comments').find('.messages').html(alertBox);
                     $('#form-comments')[0].reset();
                  }
               }
            });
            return false;
         }
      });
   
      $('#form-newsletter').validator();
      $('#form-newsletter').on('submit', function(e) {
         if (!e.isDefaultPrevented()) {
            var url = "contact.php";
            $.ajax({
              type: "POST",
              url: url,
              data: $(this).serialize(),
              success: function(data) {
                  var messageAlert = 'alert-' + data.type;
                  var messageText = data.message;
   
                  var alertBox = '<div class="alert ' + messageAlert + ' alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button>' + messageText + '</div>';
                  if (messageAlert && messageText) {
                     $('#form-newsletter').find('.messages').html(alertBox);
                     $('#form-newsletter')[0].reset();
                  }
               }
            });
            return false;
         }
      });
						
     $('#login').validator();
     $('#login').on('submit', function (e) {
        if (!e.isDefaultPrevented()) {
           var url = "contact.php";
           $.ajax({
             type: "POST",
             url: url,
             data: $(this).serialize(),
             success: function (data) {
                 var messageAlert = 'alert-' + data.type;
                 var messageText = data.message;

                 var alertBox = '<div class="alert ' + messageAlert + ' alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button>' + messageText + '</div>';
                 if (messageAlert && messageText) {
                    $('#login').find('.messages').html(alertBox);
                    $('#login')[0].reset();
                 }
              }
           });
           return false;
        }
     });

     $('#register').validator();
     $('#register').on('submit', function (e) {
        if (!e.isDefaultPrevented()) {
           var url = "contact.php";
           $.ajax({
             type: "POST",
             url: url,
             data: $(this).serialize(),
             success: function (data) {
                 var messageAlert = 'alert-' + data.type;
                 var messageText = data.message;

                 var alertBox = '<div class="alert ' + messageAlert + ' alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button>' + messageText + '</div>';
                 if (messageAlert && messageText) {
                    $('#register').find('.messages').html(alertBox);
                    $('#register')[0].reset();
                 }
              }
           });
           return false;
        }
     });

     $('#top-contact').validator();
     $('#top-contact').on('submit', function (e) {
        if (!e.isDefaultPrevented()) {
           var url = "contact.php";
           $.ajax({
             type: "POST",
             url: url,
             data: $(this).serialize(),
             success: function (data) {
                 var messageAlert = 'alert-' + data.type;
                 var messageText = data.message;

                 var alertBox = '<div class="alert ' + messageAlert + ' alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button>' + messageText + '</div>';
                 if (messageAlert && messageText) {
                    $('#top-contact').find('.messages').html(alertBox);
                    $('#top-contact')[0].reset();
                 }
              }
           });
           return false;
        }
     });
      
      /*--------------------------
            SKILL BAR CIRCLE
       ---------------------------*/
   
      function animateElements() {
            $('.progressbar').each(function() {
               var elementPos = $(this).offset().top;
               var topOfWindow = $(window).scrollTop();
               var percent = $(this).find('.circle').attr('data-percent');
               var percentage = parseInt(percent, 10) / parseInt(100, 10);
               var animate = $(this).data('animate');
               if (elementPos < topOfWindow + $(window).height() - 30 && !animate) {
                  $(this).data('animate', true);
                  $(this).find('.circle').circleProgress({
                     startAngle: -Math.PI / 2,
                     value: percent / 100,
                     //thickness: 2,/*border radius*/
                     //size: 120,
                     emptyFill: 'rgba(0, 0, 0, 0)',
                     //fill: { color: "#fff" } 
                  }).on('circle-animation-progress', function(event, progress, stepValue) {
                     $(this).find('div').text((stepValue * 100).toFixed(0) + "%");
                  }).stop();
               }
            });
         }
         // Show animated elements
      animateElements();
      $(window).scroll(animateElements);
   
      /*--------------------------
               SKILL BAR
       ---------------------------*/
   
      jQuery('.skillbar').each(function() {
         jQuery(this).appear(function() {
            jQuery(this).find('.count-bar').animate({
               width: jQuery(this).attr('data-percent')
            }, 3000);
            var percent = jQuery(this).attr('data-percent');
            jQuery(this).find('.count').html('<span>' + percent + '</span>');
            var t = $(this);
   
            function perc() {
               var length = t.find('.count-bar').css('width'),
                  perc = Math.round(parseInt(length) / 8),
                  length2 = document.getElementById("skill-item").offsetWidth,
                  perc2 = Math.round(parseInt(length) / parseInt(length2) * 100);
               //t.find('.count').text(perc+'%');
               t.find('.count').text(parseInt(perc2) + '%');
            }
            perc();
            setInterval(perc, 0);
         });
      });
   
      /*--------------------------
                 COUNTER
       ---------------------------*/
     
     var $count = $(".counter");
         $count.counterUp({
         delay: 50,
         time: 3000
      });
   
      /*--------------------------
                COUNTDOWN
       --------------------------
   
     var $cdow = $(".countdown");
         $cdow.downCount({
            date: '09/03/2019 12:00:00',
            offset: +10
         },
         function() {
            alert('WOOT WOOT, done!');
         });
   
      /*--------------------------
             SRCOLL TO TOP
       ---------------------------*/
   
     var offset = 300,
         offset_opacity = 1200,
         scroll_top_duration = 700,
         $back_to_top = $('.cd-top');
   
      $(window).on('scroll',function() {
         ($(this).scrollTop() > offset) ?
         $back_to_top.addClass('cd-is-visible'): $back_to_top.removeClass('cd-is-visible cd-fade-out');
         if ($(this).scrollTop() > offset_opacity) {
            $back_to_top.addClass('cd-fade-out');
         }
      });
   
      $back_to_top.on('click', function(event) {
         event.preventDefault();
         $('body,html').animate({
            scrollTop: 0,
         }, scroll_top_duration);
      });
   
      /*--------------------------
             MAGNIFIC POPUP
       ---------------------------*/
   
     var $mpu1 = $(".zoom-gallery");
         $mpu1.magnificPopup({
         delegate: 'a',
         type: 'image',
         closeBtnInside: false,
         mainClass: 'mfp-with-zoom mfp-img-mobile',
         fixedContentPos: false, // fix scrollbar
         image: {
            titleSrc: function(item) {
               return item.el.attr('title') + '<small>by WGA | Umberto</small>';
            }
         },
         gallery: {
            enabled: true
         },
         zoom: {
            enabled: true,
            duration: 500, // don't foget to change the duration also in CSS
            easing: 'ease-in-out', // CSS transition easing function
            opener: function(element) {
               return element.find('img');
            }
         }
      });
   
     var $mpu2 = $(".flexslider-lightbox");
         $mpu2.magnificPopup({
         type: 'image',
         closeBtnInside: false,
         mainClass: 'mfp-with-zoom mfp-img-mobile',
         fixedContentPos: false, // fix scrollbar
         gallery: {
            enabled: true
         }, // this class is for CSS animation below
         zoom: {
            enabled: true,
            duration: 500,
            fixedContentPos: false, // fix scrollbar
            easing: 'ease-in-out',
            opener: function(openerElement) {
               return openerElement.is('img') ? openerElement : openerElement.find('img');
            }
         }
      });
   
     var $mpu3 = $(".image-link");
         $mpu3.magnificPopup({
         type: 'image',
         closeOnContentClick: true,
         mainClass: 'mfp-with-zoom', // this class is for CSS animation belowf
         fixedContentPos: false, // fix scrollbar
         zoom: {
            enabled: true,
            duration: 500,
            easing: 'ease-in-out',
            opener: function(openerElement) {
               return openerElement.is('img') ? openerElement : openerElement.find('img');
            }
         }
      });
   
     var $mpu4 = $(".image-link-2");
         $mpu4.magnificPopup({
         type: 'image',
         removalDelay: 300,
         mainClass: 'mfp-fade',
         fixedContentPos: false, // fix scrollbar
         opener: function(openerElement) {
            return openerElement.is('img') ? openerElement : openerElement.find('img');
         }
      });
   
     var $mpu5 = $(".popup-youtube, .popup-vimeo, .popup-gmaps");
         $mpu5.magnificPopup({
         disableOn: 700,
         type: 'iframe',
         mainClass: 'mfp-fade',
         removalDelay: 160,
         preloader: false,
         fixedContentPos: false // fix scrollbar
      });
   
      /*--------------------------
              FLEXSLIDER
       ---------------------------*/
       
     var $flex = $(".flexslider");
         $flex.flexslider({
         animation: "slide",
         controlNav: true,
         directionNav: false,
         slideshow: true,
         slideshowSpeed: 2000,
         pauseOnHover: true,
         start: function(slider) {
            $('.flexslider').resize();
         }
      });
   
      /*--------------------------
           SKROLLR / PARALLAX
       ---------------------------*/
   
      var s = skrollr.init({
         smoothScrolling: true,
         smoothScrollingDuration: 1500,
         forceHeight: false,
         mobileCheck: function() {
            if ((/Android|iPhone|iPad|iPod|BlackBerry|Windows Phone/i).test(navigator.userAgent || navigator.vendor || window.opera)) {}
         }
      });
   
      var $par = $(".parallax");
          $par.jarallax({
         speed: 0.2,
      });
   
      // for IE //
      if (document.documentMode || /Edge/.test(navigator.userAgent)) { // IE or Edge
         $('body').on("mousewheel", function() {
            // remove default behavior
            event.preventDefault();
            //scroll without smoothing
            var wheelDelta = event.wheelDelta;
            var currentScrollPosition = window.pageYOffset;
            window.scrollTo(0, currentScrollPosition - wheelDelta);
         });
      }

       /*--------------------------
                ANIMATED
       ---------------------------*/
   
         new WOW().init();
         
   
			    /*--------------------------
             CLOSED MENU TOUCH
       ---------------------------*/
   
      $(document).on("click touchend", function(){
								$(".dropdown-toggle").removeClass("open");
				  });

			   /*--------------------------
         ANIMATE SLIDER CAROUSEL
      ---------------------------*/
						
				/* Demo Scripts for Bootstrap Carousel and Animate.css article on SitePoint by Maria Antonietta Perna */
				
				function doAnimations(elems) {
								//Cache the animationend event in a variable
								var animEndEv = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
								elems.each(function () {
												var $this = $(this),
																$animationType = $this.data('animation');
												$this.addClass($animationType).one(animEndEv, function () {
																$this.removeClass($animationType);
												});
								});
				}
				//Variables on page load
				var $paradiseSlider = $('.carousel'),
								$firstAnimatingElems = $paradiseSlider.find('.item:first').find("[data-animation ^= 'animated']");
				//Initialize carousel
				$paradiseSlider.carousel();
				//Animate captions in first slide on page load
				doAnimations($firstAnimatingElems);
				//Other slides to be animated on carousel slide event
				$paradiseSlider.on('slide.bs.carousel', function (e) {
								var $animatingElems = $(e.relatedTarget).find("[data-animation ^= 'animated']");
								doAnimations($animatingElems);
				});

				/* CAROUSEL SLIDING DURATION */

				var slideDurationValue = $(".carousel").attr("data-duration");
				if (isNaN(slideDurationValue) || slideDurationValue <= 0){
											$.fn.carousel.Constructor.TRANSITION_DURATION = 1000;
					$(".carousel-inner > .item").css({
					'-webkit-transition-duration': slideDurationValue + '1000ms',
					'-moz-transition-duration': slideDurationValue + '1000ms',
					'transition-duration': slideDurationValue + '1000ms'
					});
							}else{
											$.fn.carousel.Constructor.TRANSITION_DURATION = slideDurationValue;
					$(".carousel-inner > .item").css({
					'-webkit-transition-duration': slideDurationValue + 'ms',
					'-moz-transition-duration': slideDurationValue + 'ms',
					'transition-duration': slideDurationValue + 'ms'
					});
					}
	
				/* CAROUSEL MOUSE WHEEL */
				
				var mouseWheelY = $(".carousel").find('[class=mouse_wheel_y]');
				var mouseWheelXY = $(".carousel").find('[class=mouse_wheel_xy]');
				if(mouseWheelXY){
								$('.mouse_wheel_xy').bind('mousewheel', function(e){
												if(e.originalEvent.wheelDelta /120 > 0) {
																$(this).carousel('prev');
												}else {
																$(this).carousel('next');
												}
								});
				}if(mouseWheelY){
								$('.mouse_wheel_y').bind('mousewheel', function(e){
												if(e.originalEvent.wheelDelta /120 > 0) {
																$(this).carousel('next');
												}
								});
				}

				/* MOBILE SWIPE */

				//Enable swiping...
				var verticalSwipe = $(".carousel").find('[class=swipe_y]');
				var horizontalSwipe = $(".carousel").find('[class=swipe_x]');
				if(verticalSwipe){
						$(".swipe_y .carousel-inner").swipe({
								//Generic swipe handler for vertical directions
								swipeUp: function (event, direction, distance, duration, fingerCount) {
										$(this).parent().carousel('next');
								},
								swipeDown: function () {
										$(this).parent().carousel('prev');
								},
								//Default is 75px, set to 0 for demo so any distance triggers swipe
								threshold: 0
						});
				}if(horizontalSwipe){
						$(".swipe_x .carousel-inner").swipe({
								//Generic swipe handler for horizontal directions
								swipeLeft: function (event, direction, distance, duration, fingerCount) {
										$(this).parent().carousel('next');
								},
								swipeRight: function () {
										$(this).parent().carousel('prev');
								},
								//Default is 75px, set to 0 for demo so any distance triggers swipe
								threshold: 0
						});
				}

				/* Thumbnails Indicators Scroll */

				var indicatorPositionY = 0;
				var indicatorPositionX = 0;
				var thumbnailScrollY = $(".carousel").find('[class=thumb_scroll_y]');
				var thumbnailScrollX = $(".carousel").find('[class=thumb_scroll_x]');

				if(thumbnailScrollY){
						$('.thumb_scroll_y').on('slid.bs.carousel', function(){
				var heightEstimate = -1 * $(".thumb_scroll_y .carousel-indicators li:first").position().top + $(".thumb_scroll_y .carousel-indicators li:last").position().top + $(".thumb_scroll_y .carousel-indicators li:last").height();
				var newIndicatorPositionY = $(".thumb_scroll_y .carousel-indicators li.active").position().top + $(".thumb_scroll_y .carousel-indicators li.active").height() / 1;
				var toScrollY = newIndicatorPositionY + indicatorPositionY;
				var adjustedScrollY = toScrollY - ($(".thumb_scroll_y .carousel-indicators").height() / 1);
				if (adjustedScrollY < 0)
								adjustedScrollY = 0;
				if (adjustedScrollY > heightEstimate - $(".thumb_scroll_y .carousel-indicators").height())
								adjustedScrollY = heightEstimate - $(".thumb_scroll_y .carousel-indicators").height();
							$('.thumb_scroll_y .carousel-indicators').animate({ scrollTop: adjustedScrollY }, 800);
									indicatorPositionY = adjustedScrollY;
						});
				} if(thumbnailScrollX){
						$('.thumb_scroll_x').on('slid.bs.carousel', function(){
				var widthEstimate = -1 * $(".thumb_scroll_x .carousel-indicators li:first").position().left + $(".thumb_scroll_x .carousel-indicators li:last").position().left + $(".thumb_scroll_x .carousel-indicators li:last").width();
				var newIndicatorPositionX = $(".thumb_scroll_x .carousel-indicators li.active").position().left + $(".thumb_scroll_x .carousel-indicators li.active").width() / 1;
				var toScrollX = newIndicatorPositionX + indicatorPositionX;
				var adjustedScrollX = toScrollX - ($(".thumb_scroll_x .carousel-indicators").width() / 1);
				if (adjustedScrollX < 0)
								adjustedScrollX = 0;
				if (adjustedScrollX > widthEstimate - $(".thumb_scroll_x .carousel-indicators").width())
							adjustedScrollX = widthEstimate - $(".thumb_scroll_x .carousel-indicators").width();
							$('.thumb_scroll_x .carousel-indicators').animate({ scrollLeft: adjustedScrollX }, 800);
									indicatorPositionX = adjustedScrollX;
				});
			}

				/* SIX SHOWS ONE MOVE */
				
				$('.six_coloumns .item').each(function(){
								var itemToClone = $(this);
								for (var i=1;i<6;i++) {
												itemToClone = itemToClone.next();
												// wrap around if at end of item collection
												if (!itemToClone.length) {
																itemToClone = $(this).siblings(':first');
												}
												// grab item, clone, add marker class, add to collection
												itemToClone.children(':first-child').clone()
												.addClass("cloneditem-"+(i))
												.appendTo($(this));
								}
				});

				/* FIVE SHOWS ONE MOVE */

				$('.five_coloumns .item').each(function(){
								var itemToClone = $(this);
								for (var i=1;i<5;i++) {
												itemToClone = itemToClone.next();
												// wrap around if at end of item collection
												if (!itemToClone.length) {
																itemToClone = $(this).siblings(':first');
												}
												// grab item, clone, add marker class, add to collection
												itemToClone.children(':first-child').clone()
												.addClass("cloneditem-"+(i))
												.appendTo($(this));
								}
				});

				/* FOUR SHOWS ONE MOVE */

				$('.four_coloumns .item').each(function(){
								var itemToClone = $(this);
								for (var i=1;i<4;i++) {
												itemToClone = itemToClone.next();
												// wrap around if at end of item collection
												if (!itemToClone.length) {
																itemToClone = $(this).siblings(':first');
												}
												// grab item, clone, add marker class, add to collection
												itemToClone.children(':first-child').clone()
												.addClass("cloneditem-"+(i))
												.appendTo($(this));
								}
				});

				/* THREE SHOWS ONE MOVE */

				$('.three_coloumns .item').each(function(){
								var itemToClone = $(this);
								for (var i=1;i<3;i++) {
												itemToClone = itemToClone.next();
												// wrap around if at end of item collection
												if (!itemToClone.length) {
																itemToClone = $(this).siblings(':first');
												}
												// grab item, clone, add marker class, add to collection
												itemToClone.children(':first-child').clone()
												.addClass("cloneditem-"+(i))
												.appendTo($(this));
								}
				});

				/* TWO SHOWS ONE MOVE */

				$('.two_coloumns .item').each(function(){
								var itemToClone = $(this);
								for (var i=1;i<2;i++) {
												itemToClone = itemToClone.next();
												// wrap around if at end of item collection
												if (!itemToClone.length) {
																itemToClone = $(this).siblings(':first');
												}
												// grab item, clone, add marker class, add to collection
												itemToClone.children(':first-child').clone()
												.addClass("cloneditem-"+(i))
												.appendTo($(this));
								}
				});
	
				/* VIDEO PAUSING ON SLIDE */

				//It will work on .pauseVideo class only
				$(".pauseVideo").on('slide.bs.carousel', function () {
						$("video").each(function(){
								this.pause();
						});
				});

				/* YOUTUBE, VIMEO VIDEO PAUSING ON SLIDE */

				//It will work on .onlinePauseVideo class only
				$(".onlinePauseVideo").on('slide.bs.carousel', function (e) {
						var $psiFrames = $(e.target).find("iframe");
						$psiFrames.each(function(index, iframe){
								$(iframe).attr("src", $(iframe).attr("src"));
						});
				});
				
				/* FULL SCREEN BOOTSTRAP CAROUSEL */
				
				var $item = $('.carousel.ps-full-screen > .carousel-inner > .item'); 
				var $wHeight = $(window).height();
				$item.eq(0).addClass('active');
				$item.height($wHeight); 
				$item.addClass('ps_full_s');
				$('.carousel.ps-full-screen > .carousel-inner > .item > img').each(function() {
						var $src = $(this).attr('src');
						$(this).parent().css({
								'background-image' : 'url(' + $src + ')'
						});
						$(this).remove();
				});
				$(window).on('resize', function (){
						$wHeight = $(window).height();
						$item.height($wHeight);
				});

  })(jQuery);

       /*--------------------------
            PARALLAX TEMPLATE
       ---------------------------*/
   
      $(document).on("scroll", onScroll);
   
      //smoothscroll
      $('.nav-dots-parallax a[href^="#"]').on('click', function(e) {
         e.preventDefault();
         $(document).off("scroll");
   
         $('a').each(function() {
            $(this).removeClass('active');
         });
         $(this).addClass('active');
         var target = this.hash,
            menu = target;
         $target = $(target);
         $('html, body').stop().animate({
            'scrollTop': $target.offset().top + 2
         }, 500, 'swing', function() {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
         });
      });
   
      function onScroll(event) {
         var scrollPos = $(document).scrollTop();
         $('.nav-dots-parallax a').each(function() {
            var currLink = $(this);
            var refElement = $(currLink.attr("href"));
            if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
               $('.nav-dots-parallax ul li a').removeClass("active");
               currLink.addClass("active");
            } else {
               currLink.removeClass("active");
            }
         });
      }
   
      /*--------------------------
                ISOTOPE
      ---------------------------*/
   
      // portfolio filter
      $(window).on('load', function() {
         'use strict';
         var $portfolio_selectors = $('.portfolio-filter > li > a');
         var $portfolio = $('.portfolio-container');
             $portfolio.isotope({
               itemSelector: '.portfolio-item',
               transitionDuration: '1s',
         });
             $portfolio_selectors.on('click', function() {
             $portfolio_selectors.removeClass('active');
             $(this).addClass('active');
         var selector = $(this).attr('data-filter');
             $portfolio.isotope({
               filter: selector
            });
            return false;
         });
         
         // blog masonry
         var $blog = $('.blog-masonry');
             $blog.isotope({
               itemSelector: '.blog-item',
               transitionDuration: '1s',
         });
      });
						