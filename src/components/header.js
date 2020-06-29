import React, { useState, useEffect } from "react"
import $ from "jquery"
import "../assets/js/menu"

export default function Header() {
  const [header] = useState(1)
  useEffect(() => {
    $('ul.nav li a[href="#"]').on("click", function (event) {
      event.preventDefault()
    })

    /* Menu Maker */
    $(".nav-wrapper").menumaker({
      title: "<span></span>",
      format: "multitoggle",
    })
    if ($(window).width() > 974) {
      //$(".menu-trigger").toggleClass("d-none")
      $(".nav-wrapper").toggleClass("active")
      $(".main-menu").toggleClass("justify-content-between")
    } else {
      $(".main-menu").toggleClass("justify-content-end")
      $(".nav_signup").hide()
    }
    if($(window).width() < 1080){
      $(".nav_signup").hide()
    }
    $(window).on("resize", function (event) {
      if ($(window).width() > 974) {
        //$(".menu-trigger").addClass("d-none")
        $(".nav-wrapper").addClass("active")
        $(".main-menu").removeClass("justify-content-end")
        $(".main-menu").addClass("justify-content-between")
        $(".nav_signup").show()
      } else {
        //$(".menu-trigger").removeClass("d-none")
        $(".nav-wrapper").removeClass("active")
        $(".main-menu").removeClass("justify-content-between")
        $(".main-menu").addClass("justify-content-end")
        $(".nav_signup").hide()
      }
      if($(window).width() < 1080){
        $(".nav_signup").hide()
      }else{
        $(".nav_signup").show()
      }
    })

    $(window).on("scroll", function () {
      var scroll = $(window).scrollTop()
      if (scroll < 100) {
        $(".header-main").removeClass("sticky fadeInDown animated")
      } else {
        $(".header-main").addClass("sticky fadeInDown animated")
      }
    })
  }, [header])
  return (
    <header className="header">
      <div className="header-main">
        <div className="container-fluid">
          <div className="row align-items-center main-menu-wrapper justify-content-between">
            <div className="col logo-holder">
              <a href="index.html" className="logo">
                <img
                  className="logo_img"
                  src={require("../assets/img/logo.png")}
                  data-rjs="2"
                  alt=""
                />
              </a>
            </div>
            <div className="col order-last col_flex2">
              <div className="main-menu d-flex align-items-center">
                {/* <div className="menu-trigger">
                  <span></span>
                </div> */}
                <div className="nav-wrapper">
                  <ul className="nav align-items-center">
                    <li className="current-menu-item">
                      <a href="index.html">首页</a>
                    </li>
                    <li>
                      <a href="about.html">卖产品</a>
                    </li>

                    <li className="menu-item-has-children">
                      <a href="#">买产品</a>
                      <ul className="sub-menu">
                        <li>
                          <a href="service.html">service</a>
                        </li>
                        <li>
                          <a href="service-details.html">service details</a>
                        </li>
                      </ul>
                    </li>
                    <li className="menu-item-has-children">
                      <a href="#">经营零售</a>
                      <ul className="sub-menu">
                        <li>
                          <a href="coming-soon.html">Coming Soon</a>
                        </li>
                        <li>
                          <a href="404.html">404</a>
                        </li>
                      </ul>
                    </li>
                    <li className="menu-item-has-children">
                      <a href="#">旅点资讯</a>
                      <ul className="sub-menu">
                        <li>
                          <a href="blog.html">Blog</a>
                        </li>
                        <li>
                          <a href="blog-with-sidebar.html">Blog with Sidebar</a>
                        </li>
                        <li>
                          <a href="blog-details.html">blog details</a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
                <a className="nav_signup" href="contact.html">
                  加入公测
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
