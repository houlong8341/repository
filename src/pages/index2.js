import React, { useState, useEffect } from "react"

import Helmet from "react-helmet"

export default function Home() {
  return (
    <div className="documentPage">
      <Helmet>
        <title>旅点科技 Trip International</title>
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta http-equiv="content-type" content="text/html; charset=utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="" />
        <meta name="keywords" content="" />
        <link rel="shortcut icon" href="../../static/favicon.ico"></link>
        {/* <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Alegreya:400,500,700%7CSource+Sans+Pro:400,600,700&display=swap"
        /> */}

        <link rel="stylesheet" href="../assets/css/bootstrap.min.css" />

        <link rel="stylesheet" href="../assets/css/font-awesome.min.css" />

        <link
          rel="stylesheet"
          href="../assets/plugins/owlcarousel/owl.carousel.min.css"
        />

        <link rel="stylesheet" href="../assets/css/style.css" />

        <link rel="stylesheet" href="../assets/css/custom.css"></link>
      </Helmet>
      <div className="preloader w-100 h-100 position-fixed">
        <span className="loader">Loading…</span>
      </div>
      <header className="header">
        <div className="header-main">
          <div className="container-fluid">
            <div className="row align-items-center main-menu-wrapper justify-content-between">
              <div className="col order-last order-sm-first">
                <div className="main-menu d-flex align-items-center justify-content-end justify-content-sm-start">
                  <div className="menu-trigger">
                    <span></span>
                  </div>
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
                            <a href="blog-with-sidebar.html">
                              Blog with Sidebar
                            </a>
                          </li>
                          <li>
                            <a href="blog-details.html">blog details</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a className="nav_signup" href="contact.html">
                          加入公测
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="col text-sm-center logo-holder">
                <a href="index.html" className="logo">
                  <img
                    className="logo_img"
                    src={require("../../static/img/logo.png")}
                    data-rjs="2"
                    alt=""
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="banner">
        <div className="banner_slider">
          <div className="single_slide">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="banner_content text-center">
                    <h1 className="banner_h1">旅点. 您旅业经营的另一半</h1>
                    <p>旅业经营本不易，让旅点帮您分忧~</p>
                  </div>
                </div>
              </div>
              <div className="banner-images row justify-content-between align-items-end">
                <div className="m0a single-banner-image text-center col-sm-6 d-none d-sm-block">
                  <div className="search-icon-box position-absolute">
                    <img
                      src={require("../../static/img/banner/search-icon.png")}
                      alt=""
                    />
                  </div>
                  <img
                    className="banner_img"
                    src={require("../../static/img/banner/banner1.svg")}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Helmet>
        <script src="../../static/js/menu.js"></script>
        {/*<script src="../assets/js/jquery.min.js"></script>

         <script src="../assets/js/bootstrap.bundle.min.js"></script>

        <script src="../assets/js/menu.min.js"></script>

        <script src="../assets/plugins/owlcarousel/owl.carousel.min.js"></script> */}
        {/* <script src="assets/plugins/owlcarousel/owl.carousel.js"></script> */}

        {/* <script src="../assets/plugins/retinajs/retina.min.js"></script>

        <script src="../assets/js/main.js"></script>

        <script src="../assets/js/custom.js"></script> */}
      </Helmet>
    </div>
  )
}
