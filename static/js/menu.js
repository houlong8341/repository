import $ from "jquery"

$.fn.menumaker = function (options) {
  var cssmenu = $(this),
    settings = $.extend(
      {
        title: "Menu",
        format: "dropdown",
        sticky: false,
      },
      options
    )
  return this.each(function () {
    cssmenu.prepend('<div id="menu-button">' + settings.title + "</div>")
    $(this)
      .find("#menu-button")
      .on("click", function () {
        $(this).toggleClass("menu-opened")
        var mainmenu = $(this).next("ul")
        if (mainmenu.hasClass("open")) {
          mainmenu.slideUp("fast").removeClass("open")
        } else {
          mainmenu.slideDown("fast").addClass("open")
          if (settings.format === "dropdown") {
            mainmenu.find("ul").slideDown()
          }
        }
      })
    cssmenu.find("li ul").parent().addClass("has-sub-item")
    let multiTg = function () {
      cssmenu
        .find(".has-sub-item")
        .prepend('<span class="submenu-button"></span>')
      cssmenu.find(".submenu-button").on("click", function () {
        $(this).toggleClass("submenu-opened")
        if ($(this).siblings("ul").hasClass("open")) {
          $(this).siblings("ul").removeClass("open").slideUp("fast")
        } else {
          $(this).siblings("ul").addClass("open").slideDown("fast")
        }
      })
    }
    if (settings.format === "multitoggle") multiTg()
    else cssmenu.addClass("dropdown")
    if (settings.sticky === true) cssmenu.css("position", "fixed")
    let resizeFix = function () {
      if ($(window).width() > 992) {
        cssmenu.find("ul").show()
      }
      if ($(window).width() < 992) {
        cssmenu.find("ul").hide().removeClass("open")
      }
    }
    resizeFix()
    return $(window).on("resize", resizeFix)
  })
}

