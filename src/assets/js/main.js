/*---------------------------------------------
[Table of Content]

    01: Main Menu
    02: Sticky Nav
    03: Background Image
    04: Banner Slider
    05: Check Data
    06: Owl Carousel
    07: Changing svg color
    08: Google map
    09: Preloader
    10: Contact Form
    11: Back to top button
----------------------------------------------*/
import $ from "jquery"
import "./owlcarousel"

export function goSignUp() {
  $("html, body").animate(
    {
      scrollTop: $("#Signup").offset().top - 200,
    },
    { duration: 500 },
    { easing: "swing" },
    function () {
      return false
    }
  )
}

export function Main(location) {
  if (location && location.state && location.state.signUp) {
    goSignUp()
  }
  /*==================================
      05: Check Data
      ====================================*/
  var checkData = function (data, value) {
    return typeof data === "undefined" ? value : data
  }

  /*==================================
      06: Owl Carousel
      ====================================*/
  var $owlCarousel = $(".owl-carousel")
  $owlCarousel.each(function () {
    var $t = $(this)
    $t.owlCarousel({
      items: checkData($t.data("owl-items"), 1),
      margin: checkData($t.data("owl-margin"), 0),
      loop: checkData($t.data("owl-loop"), true),
      smartSpeed: 450,
      autoplay: checkData($t.data("owl-autoplay"), true),
      autoplayTimeout: checkData($t.data("owl-speed"), 8000),
      center: checkData($t.data("owl-center"), false),
      animateIn: checkData($t.data("owl-animate-in"), false),
      animateOut: checkData($t.data("owl-animate-out"), false),
      nav: checkData($t.data("owl-nav"), true),
      navText: [
        '<i class="fa fa-angle-left"></i>',
        '<i class="fa fa-angle-right"></i>',
      ],
      dots: checkData($t.data("owl-dots"), true),
      responsive: checkData($t.data("owl-responsive"), {}),
    })
  })

  Default()
}

export function Default() {
  /*==================================
    07: Changing svg color 
    ====================================*/
  $("img.svg").each(function () {
    var $img = $(this)
    var imgID = $img.attr("id")
    var imgClass = $img.attr("class")
    var imgURL = $img.attr("src")

    $.get(
      imgURL,
      function (data) {
        // Get the SVG tag, ignore the rest
        var $svg = $(data).find("svg")

        // Add replaced image's ID to the new SVG
        if (typeof imgID !== "undefined") {
          $svg = $svg.attr("id", imgID)
        }
        // Add replaced image's classes to the new SVG
        if (typeof imgClass !== "undefined") {
          $svg = $svg.attr("class", imgClass + " replaced-svg")
        }

        // Remove any invalid XML tags as per http://validator.w3.org
        $svg = $svg.removeAttr("xmlns:a")

        // Check if the viewport is set, else we gonna set it if we can.
        if (
          !$svg.attr("viewBox") &&
          $svg.attr("height") &&
          $svg.attr("width")
        ) {
          $svg.attr(
            "viewBox",
            "0 0 " + $svg.attr("height") + " " + $svg.attr("width")
          )
        }

        // Replace image with new SVG
        $img.replaceWith($svg)
      },
      "xml"
    )
  })

  /*==================================
      09: Preloader 
      ====================================*/
  $(".preloader").fadeOut(1000)

  /*============================================
      11: Back to top button
      ==============================================*/
  var $backToTopBtn = $(".back-to-top")

  if ($backToTopBtn.length) {
    var scrollTrigger = 400, // px
      backToTop = function () {
        var scrollTop = $(window).scrollTop()
        if (scrollTop > scrollTrigger) {
          $backToTopBtn.addClass("show")
        } else {
          $backToTopBtn.removeClass("show")
        }
      }

    backToTop()

    $(window).on("scroll", function () {
      backToTop()
    })

    $backToTopBtn.on("click", function (e) {
      e.preventDefault()
      $("html,body").animate(
        {
          scrollTop: 0,
        },
        700
      )
    })
  }
}
