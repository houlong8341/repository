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

import Header from "../components/header"
import Footer from "../components/footer"
import { action_saveMobile_get } from "../action/airtable"

export default function UGS() {
  const [mobile, setMobile] = useState("")
  const [windowsWidth] = useState(100)
  useEffect(() => {
    $(".preloader").fadeOut(1000)
    if ($(window).width() < 1080) {
      console.log($(window).width())
      $(".service_inpt_cont_web").addClass("service_inpt_cont_mobile")
    }
    $(window).on("resize", function (event) {
      if ($(window).width() < 1080) {
        $(".service_inpt_cont_web").addClass("service_inpt_cont_mobile")
      } else {
        $(".service_inpt_cont_web").removeClass("service_inpt_cont_mobile")
      }
    })
  }, [windowsWidth])
  function onMobileChange(event) {
    setMobile(event.target.value)
  }
  function onMobileSubmit(e) {
    e.preventDefault()
    action_saveMobile_get(mobile)
    navigate("/comingsoon")
  }
  return (
    <div>
      <Helmet>
        <title>旅点科技 - 旅点UGS</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="旅点科技" />
        <meta name="keywords" content="旅点科技" />
      </Helmet>
      <div className="preloader w-100 h-100 position-fixed">
        <span className="loader">Loading…</span>
      </div>
      <Header />

      <section>
        <div className="pt_100px container">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <div className="row">
                <div className="col-12">
                  <div className="section-title mb-3">
                    <h2>全球旅游资源同业采购平台</h2>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-lg-10">
                  <p>
                    旅点整合国内外各类票务代理，地接社，批发商及直连资源，提供同业一个一站式采购平台
                    <br />
                  </p>
                </div>
              </div>
              <a href="http://www.b2b.intltrip.com" className="b2b_btn red_btn">开始体验</a>
            </div>

            <div className="col-lg-5">
              <div className="mt-50 mt-lg-0">
                <img
                  src={require("../assets/img/feature/agg.svg")}
                  data-rjs="2"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="pt-100 pb-110">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-title text-center">
                <h2>用旅点采购，超省心</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4">
              <div className="single-service">
                <div className="icon">
                  <img
                    src={require("../assets/img/icon/service-1.svg")}
                    className="svg"
                    alt=""
                  />
                </div>
                <div className="content">
                  <h3>
                    <a href="service-details.html">一站式，应有尽有</a>
                  </h3>
                  <p className="fs_16">
                    无需分开平台采购，一站式搞定所有客户需求
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="single-service">
                <div className="icon">
                  <img
                    src={require("../assets/img/icon/service-2.svg")}
                    className="svg"
                    alt=""
                  />
                </div>
                <div className="content">
                  <h3>
                    <a href="service-details.html">随时报价，随时预定</a>
                  </h3>
                  <p className="fs_16">
                    客户需求不等人，实时价格，实时库存，随时预定
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="single-service">
                <div className="icon">
                  <img
                    src={require("../assets/img/icon/service-3.svg")}
                    className="svg"
                    alt=""
                  />
                </div>

                <div className="content">
                  <h3>
                    <a href="service-details.html">随地查询，不分场合</a>
                  </h3>
                  <p className="fs_16">网页，手机，微信小程序，随时随地操作</p>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="single-service">
                <div className="icon">
                  <img
                    src={require("../assets/img/icon/service-4.svg")}
                    className="svg"
                    alt=""
                  />
                </div>
                <div className="content">
                  <h3>
                    <a href="service-details.html">外卖结算，一目了然</a>
                  </h3>
                  <p>提供建议外卖价，可隐藏结算价截图</p>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="single-service">
                <div className="icon">
                  <img
                    src={require("../assets/img/icon/service-5.svg")}
                    className="svg"
                    alt=""
                  />
                </div>

                <div className="content">
                  <h3>
                    <a href="service-details.html">24/7专业售后客服</a>
                  </h3>
                  <p>售后问题无需担心，旅点专业客服团队全程保驾护航</p>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="single-service">
                <div className="icon">
                  <img
                    src={require("../assets/img/icon/service-6.svg")}
                    className="svg"
                    alt=""
                  />
                </div>

                <div className="content">
                  <h3>
                    <a href="service-details.html">定期促销，交叉优惠</a>
                  </h3>
                  <p>多产品类型交叉累计购买均有优惠，提高利润和竞争力</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="pb-80">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-title text-center">
                <h2>旅点采购产品</h2>
              </div>
            </div>
          </div>
          <div className="row w_80 m0a">
            <div className="col-lg-6">
              <ul className="list-check mb-3 pb-1 mb-lg-0 pb-lg-0">
                <li>700,000+ 全球酒店及名宿</li>
                <li>320+全球航空公司</li>
                <li>1200+ 全球目的地资源</li>
                <li>1000+ 全球合作伙伴</li>
              </ul>
            </div>
            <div className="col-lg-6">
              <ul className="list-check">
                <li>可API技术对接，分销</li>
                <li>一手资源，直连价格</li>
                <li>超便捷支付方式，支付宝，微信，信用卡，额度支付</li>
                <li>专属商务经理，了解您的习惯，为您提供服务</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section
        id="Signup"
        className="d-flex align-items-center justify-content-center signup_bg pt-5 pb-5 pb-lg-0 pt-lg-0"
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="mb-50 mb-lg-0">
                <img
                  className="su_img"
                  src={require("../assets/img/feature/beta.svg")}
                  data-rjs="2"
                  alt=""
                />
              </div>
            </div>

            <div className="col-lg-6">
              <div className="content-coming-soon">
                <h1 className="fs_34px fc_white">抢先体验，公测招募中</h1>
                <ul className="list-check fc_white">
                  <li>抢先预订国内酒店</li>
                  <li>价格更低更有优势</li>
                  <li>各类活动进行中</li>
                  <li>体验版参与者均获得无门槛100元抵用金</li>
                </ul>
                <a href="http://www.b2b.intltrip.com" className="b2b_btn red_btn">开始体验</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <a href="#" className="back-to-top">
        <i className="fa fa-angle-up"></i>
      </a>
    </div>
  )
}
