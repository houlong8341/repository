import React, { useState, useEffect } from "react"
import { navigate } from "gatsby"
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

export default function Retail() {
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
        <title>旅点科技 - 经营平台</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="旅点科技" />
        <meta name="keywords" content="旅点科技" />
      </Helmet>
      <div className="preloader w-100 h-100 position-fixed">
        <span className="loader">Loading…</span>
      </div>
      <Header />

      <section className="pt-140">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="mb-50 mb-lg-0">
                <img
                  src={require("../assets/img/feature/service-details-1.png")}
                  data-rjs="2"
                  alt=""
                />
              </div>
            </div>

            <div className="col-lg-6">
              <div className="section-title mb-3">
                <h2>为旅游零售而生的经营工具</h2>
              </div>

              <p>
                新零售新世代已到来，线下和线上全渠道经营已成常态
                <br />
                旅点帮您結合多年经营旅游零售的经验，转化到线上
                <br />
                突破时间和空间约束，创造属于您的新零售模式
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-140">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-title text-center">
                <h2>用旅点零售，让您的销售不再是难事</h2>
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
                    <a href="service-details.html">在线网站，线下门市</a>
                  </h3>
                  <p className="fs_16">
                    双渠道经营， 更多方式收客，更多营销可能性，更多营收
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
                    <a href="service-details.html">不再“离不开电脑”</a>
                  </h3>
                  <p className="fs_16">
                    微信上，电脑上，平板上，均可访问
                    <br />
                    不论您在外，还是在家，随时营业
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
                    <a href="service-details.html">自由定价，随时展示</a>
                  </h3>
                  <p className="fs_16">
                    分销产品自定义外卖价，网站随意浏览产品，无需担心结算价暴露
                  </p>
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
                    <a href="service-details.html">您的客户，还是您的客户</a>
                  </h3>
                  <p className="fs_16">
                    客户在您网站注册，即可开始管理，做各种优惠，营销回访，都由您控制
                  </p>
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
                    <a href="service-details.html">操作简单，轻松上手</a>
                  </h3>
                  <p className="fs_16">
                    和购物线上网站操作一致，您的客户在线操作超简单
                  </p>
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
                    <a href="service-details.html">交易支付多元化</a>
                  </h3>
                  <p className="fs_16">
                    不用POS机，不用手续费，在线支付均可使用支付宝，微信，信用卡等
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="pt-140">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-title mb-3">
                <h2 className="ta-c">旅点零售工具，您唾手可得</h2>
              </div>

              <div className="row w_80 m0a pt-20">
                <div className="col-lg-6">
                  <ul className="list-check mb-3 pb-1 mb-lg-0 pb-lg-0">
                    <li>属于您的网站及微信小程序</li>
                    <li>各类营销工具，提高推广效率</li>
                    <li>线上会员管理系统</li>
                    <li>数据分析报表</li>
                  </ul>
                </div>
                <div className="col-lg-6">
                  <ul className="list-check">
                    <li>自营上传产品管理</li>
                    <li>可分销旅点超过1000+合作伙伴的各类产品资源</li>
                    <li>自定义定价，外卖利润随时掌控</li>
                    <li>网站支持微信，支付宝，信用卡等第三方支付</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="pt-140 pb-100">
        <div className="container">
          <div className="row justify-content-between align-items-center pb-140">
            <div className="col-lg-5">
              <div className="mb-50 mb-lg-0">
                <img
                  src={require("../assets/img/feature/feature1.svg")}
                  alt=""
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="section-title style--two">
                <div className="title-border">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <h2>一站式工具，让您的零售如虎添翼</h2>
                <p>
                  您的
                  不仅可以量身定制专属您的自家官网，让远端客户更能将您列入首选
                  营销小工具更能让久久没有互动的粉丝从此活络
                  藉由数据分析，让您更加了解您的客户需求，带入丰厚的营收
                  零售满足的不只是顾客，更是商家营收获利新渠道
                </p>
              </div>
            </div>
          </div>

          <div className="row pb-140">
            <div className="col-lg-6">
              <div className="section-title style--two">
                <div className="title-border">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <h2>全渠道结合，很简单</h2>
                <p>
                  线下的客户，线上微信经营
                  <br />
                  线上的流量，线下门市服务
                  <br />
                  线下的订单，线上进行支付
                  <br />
                  线上的推广，线下拓展收益
                  <br />
                  本应如此，现在更简单
                </p>
              </div>
            </div>
            <div className="col-lg-6 order-first order-lg-last">
              <div className="mb-50 mb-lg-0">
                <img
                  src={require("../assets/img/feature/feature2.svg")}
                  alt=""
                />
              </div>
            </div>
          </div>

          <div className="row justify-content-between align-items-center">
            <div className="col-lg-5">
              <div className="mb-50 mb-lg-0">
                <img
                  src={require("../assets/img/feature/feature3.svg")}
                  alt=""
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="section-title style--two">
                <div className="title-border">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <h2></h2>
                <p>
                  无需每次开通OTA都要支付高额的保证金，不论产品种类多与少，不论多少个OTA。旅点已为您降低保证金的需求规模，让您用更少的钱。发票的负担也更轻松简单。{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="Signup"
        className="d-flex align-items-center justify-content-center signup_bg pt-5 pb-100 pt-lg-0"
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
                <h1 className="fs_34px fc_white">抢先体验旅点零售，体验版招募中</h1>
                <ul className="list-check fc_white mt-10 ">
                  <li>抢先市场体验30天</li>
                  <li>体验期间免费建站，免支付手续费</li>
                  <li>体验期间各类代金券进行中</li>
                  <li>前100名体验者可享受90天高级工具免费用</li>
                </ul>

                <div className="search-form mt-20">
                  <div className="theme-input-group">
                    <form onSubmit={onMobileSubmit}>
                      <input
                        className="service_inp"
                        type="text"
                        name="mobile"
                        placeholder="手机，微信或邮箱~"
                        onChange={onMobileChange}
                      />
                      <button className="red_btn" type="submit">
                        加入公测
                      </button>
                    </form>
                  </div>
                </div>
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
