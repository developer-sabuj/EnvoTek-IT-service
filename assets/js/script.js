(function ($) {

    "use strict";

    $(document).ready(function () {

      // Header Style and Scroll to Top
        function headerStyle() {
            if ($('.main-header').length) {
                var windowpos = $(window).scrollTop();
                var siteHeader = $('.main-header');
                var scrollLink = $('.scroll-top');
                if (windowpos >= 250) {
                    siteHeader.addClass('fixed-header');
                    scrollLink.fadeIn(300);
                } else {
                    siteHeader.removeClass('fixed-header');
                    scrollLink.fadeOut(300);
                }
            }
        }
        headerStyle();

        // dropdown menu

        var mobileWidth = 992;
        var navcollapse = $('.navigation li.dropdown');

        navcollapse.hover(function () {
            if ($(window).innerWidth() >= mobileWidth) {
                $(this).children('ul').stop(true, false, true).slideToggle(300);
                $(this).children('.megamenu').stop(true, false, true).slideToggle(300);
            }
        });

        //Submenu Dropdown Toggle
        if ($('.main-header .navigation li.dropdown ul').length) {
            $('.main-header .navigation li.dropdown').append('<div class="dropdown-btn"><span class="fa fa-angle-down"></span></div>');

            //Dropdown Button
            $('.main-header .navigation li.dropdown .dropdown-btn').on('click', function () {
                $(this).prev('ul').slideToggle(500);
                $(this).prev('.megamenu').slideToggle(800);
            });

            //Disable dropdown parent link
            $('.navigation li.dropdown > a').on('click', function (e) {
                e.preventDefault();
            });
        }

        //Submenu Dropdown Toggle
        if ($('.main-header .main-menu').length) {
            $('.main-header .main-menu .navbar-toggle').click(function () {
                $(this).prev().prev().next().next().children('li.dropdown').hide();
            });

        }
        

        /* Testimonial Slider */
       if ($('.testimonial-wrap').length) {
           $('.testimonial-wrap').slick({
               infinite: true,
               autoplay: false,
               arrows: false,
               dots: true,
               pauseOnHover: false,
               autoplaySpeed: 2000,
               slidesToShow: 2,
               slidesToScroll: 1,
               responsive: [
                   {
                       breakpoint: 992,
                       settings: {
                           slidesToShow: 1
                       }
                   }
               ]
           });
       }

        // Scroll to a Specific Div
        if ($('.scroll-to-target').length) {
            $(".scroll-to-target").on('click', function () {
                var target = $(this).attr('data-target');
                // animate
                $('html, body').animate({
                    scrollTop: $(target).offset().top
                }, 2000);

            });
        }

        // Video Magnific Popup
        if ($('.video-play').length) {
            $('.video-play').magnificPopup({
                type: 'video',
            });
        }

        if ($("#map").length !== 0) {
            var map = L.map("map", {
              center: [23.810331, 90.412521],
              zoom: 10,
              zoomControl: false,
              scrollWheelZoom: true
            });
            
            L.tileLayer("https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png", {}).addTo(map);
        }


    });


    /* ==========================================================================
       When document is resize, do
       ========================================================================== */

      $(window).on('resize', function () {
          var mobileWidth = 992;
          var navcollapse = $('.navigation li.dropdown');
          navcollapse.children('ul').hide();
          navcollapse.children('.megamenu').hide();

      });


    /* ==========================================================================
       When document is scroll, do
       ========================================================================== */

      $(window).on('scroll', function () {

          // Header Style and Scroll to Top
          function headerStyle() {
              if ($('.main-header').length) {
                  var windowpos = $(window).scrollTop();
                  var siteHeader = $('.main-header');
                  var scrollLink = $('.scroll-top');
                  if (windowpos >= 100) {
                      siteHeader.addClass('fixed-header');
                      scrollLink.fadeIn(300);
                  } else {
                      siteHeader.removeClass('fixed-header');
                      scrollLink.fadeOut(300);
                  }
              }
          }

          headerStyle();

      });


    /* ==========================================================================
       When document is loaded, do
       ========================================================================== */

    $(window).on('load', function () {

        //Hide Loading Box (Preloader)
        function handlePreloader() {
            if ($('.preloader').length) {
                $('.preloader').delay(200).fadeOut(500);
            }
        }
        handlePreloader();
        
    });


})(window.jQuery);
