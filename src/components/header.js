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
      $("#web_signup").show()
      $("#mobile_signup").hide()
    } else {
      $(".main-menu").toggleClass("justify-content-end")
      $("#web_signup").hide()
      $("#mobile_signup").show()
    }
    if ($(window).width() < 1080) {
      $(".nav_signup").hide()
    }
    $(window).on("resize", function (event) {
      if ($(window).width() > 974) {
        $(".nav-wrapper").addClass("active")
        $(".main-menu").removeClass("justify-content-end")
        $(".main-menu").addClass("justify-content-between")
      } else {
        $(".nav-wrapper").removeClass("active")
        $(".main-menu").removeClass("justify-content-between")
        $(".main-menu").addClass("justify-content-end")
      }
      if ($(window).width() < 1080) {
        $("#web_signup").hide()
        $("#mobile_signup").show()
      } else {
        $("#web_signup").show()
        $("#mobile_signup").hide()
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
    //baidu accout
    let hm = document.createElement("script")
    hm.src = "https://hm.baidu.com/hm.js?51bbcb5d2f48ba73e4de0443509ccf3b"
    var s = document.getElementsByTagName("script")[0]
    s.parentNode.insertBefore(hm, s)
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
        <meta name="description" content="旅点、旅点科技致力于旅业经营" />
        <meta name="keywords" content="旅点、旅点科技" />
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
                      <Link to="/ugs">卖产品</Link>
                    </li>

                    <li>
                      <Link to="/aggregator">买产品</Link>
                    </li>
                    <li>
                      <Link to="/retail">经营</Link>
                    </li>
                    <li>
                      <Link to="/blog/list">旅点资讯</Link>
                    </li>
                    <li id="mobile_signup">
                      <a onClick={() => onJoin()}>加入体验</a>
                    </li>
                  </ul>
                </div>
                <a
                  id="web_signup"
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
