import React, { useState, useEffect } from "react"
import { Link, navigate } from "gatsby"
import Helmet from "react-helmet"
import $ from "jquery"

import "owl.carousel/dist/assets/owl.carousel.css"
import "font-awesome/css/font-awesome.min.css"
import "react-fontawesome"
import "../assets/css/bootstrap.min.css"
import "../assets/css/style.css"
import "../assets/css/custom.css"

import "../assets/js/menu"
import { goSignUp } from "../assets/js/main"

export default function Header(props) {
  const [header] = useState(1)
  useEffect(() => {
    $($("ul.nav li")[props.index]).addClass("current-menu-item")
    $($("ul.nav li")[props.index]).siblings().removeClass("current-menu-item")

    /* Menu Maker */
    $(".nav-wrapper").menumaker({
      title: "<span></span>",
      format: "multitoggle",
    })
    if ($(window).width() > 974) {
      $(".nav-wrapper").toggleClass("active")
      $(".main-menu").toggleClass("justify-content-between")
    } else {
      $(".main-menu").toggleClass("justify-content-end")
      $(".nav_signup").hide()
    }
    if ($(window).width() < 1080) {
      $(".nav_signup").hide()
    }
    $(window).on("resize", function (event) {
      if ($(window).width() > 974) {
        $(".nav-wrapper").addClass("active")
        $(".main-menu").removeClass("justify-content-end")
        $(".main-menu").addClass("justify-content-between")
        $(".nav_signup").show()
      } else {
        $(".nav-wrapper").removeClass("active")
        $(".main-menu").removeClass("justify-content-between")
        $(".main-menu").addClass("justify-content-end")
        $(".nav_signup").hide()
      }
      if ($(window).width() < 1080) {
        $(".nav_signup").hide()
      } else {
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
  function onJoin() {
    let signUp = document.getElementById("Signup")
    if (signUp) {
      goSignUp()
    } else {
      //关键：将a标签不能有href，替换为事件处理机制
      navigate("/", { state: { signUp: true } })
    }
  }
  return (
    <header className="header">
      <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="旅点科技" />
        <meta name="keywords" content="旅点科技" />
      </Helmet>
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
                <div className="nav-wrapper">
                  <ul className="nav align-items-center">
                    <li className="current-menu-item">
                      <Link to="/">首页</Link>
                    </li>
                    <li>
                      <Link to="/ugs">UGS</Link>
                    </li>

                    <li>
                      <Link to="/aggregator">采购</Link>
                    </li>
                    <li>
                      <Link to="/retail">零售</Link>
                    </li>
                    <li>
                      <Link to="/blog/list">旅点资讯</Link>
                    </li>
                  </ul>
                </div>
                <a                  
                  className="nav_signup"
                  onClick={() => onJoin()}
                >
                  加入体验
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
