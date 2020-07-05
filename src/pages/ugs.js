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

import { Default } from "../assets/js/main"
import Header from "../components/header"
import Footer from "../components/footer"
import { action_saveMobile_get } from "../action/airtable"

export default function UGS() {
  const [mobile, setMobile] = useState("")
  const [windowsWidth] = useState(100)
  useEffect(() => {
    Default()
    if ($(window).width() < 1080) {
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
    if (mobile) {
      action_saveMobile_get(mobile,'UGS')
      navigate("/comingsoon")
    }
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
      <Header index={1}/>
      <section>
        <div className="pt_100px container">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <div className="row">
                <div className="col-12">
                  <div className="section-title mb-3">
                    <h2>立即在OTA上售卖产品</h2>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-lg-10">
                  <p>
                    旅点UGS，帮您一站式对接多个OTA，立即开始卖产品.
                    <br />
                    无需开通OTA账户，无需技术开发，只要有产品，就能卖
                    <br />
                  </p>
                </div>
              </div>
              <div className="service_inpt_cont_web">
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

            <div className="col-lg-5">
              <div className="mt-50 mt-lg-0">
                <img
                  src={require("../assets/img/feature/ugs_banner.png")}
                  data-rjs="2"
                  alt=""
                />
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
                  src={require("../assets/img/feature/ugs1.svg")}
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
                <h2>崭新的模式，解决您投放OTA的痛点</h2>
                <p>
                  繁琐的开通流程，递增的保证金，更新不完的后台系统。
                  <br />
                  <span className="fw_b">这些，在旅点，都不需要。</span>
                  <br />
                  旅点已经都帮您搞定了，您只需对接一个旅点，就等于多家OTA。
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
                <h2>有福共享，有难同当</h2>
                <p>
                全渠道在线开通，立即开始投放。无需系统使用费，只有在产品卖出去后，成功结算，旅点才收取佣金。<br/>开通和投放产品，更新库存，数据统计等功能，均没有系统使用费，只收成交后的佣金。
                </p>
              </div>
            </div>
            <div className="col-lg-6 order-first order-lg-last">
              <div className="mb-50 mb-lg-0">
                <img
                  src={require("../assets/img/feature/ugs2.svg")}
                  alt=""
                />
              </div>
            </div>
          </div>

          <div className="row justify-content-between align-items-center">
            <div className="col-lg-5">
              <div className="mb-50 mb-lg-0">
                <img
                  src={require("../assets/img/feature/ugs3.svg")}
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
                <h2>更少的钱，对接更多的个OTA</h2>
                <p>
                  无需每次开通OTA都要支付高额的保证金，不论产品种类多与少，不论多少个OTA。旅点已为您降低保证金的需求规模，让您用更少的钱。发票的负担也更轻松简单。
                </p>
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
                <h2>用旅.UGS，超省心</h2>
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
                    <a href="service-details.html">一站式对接多个OTA</a>
                  </h3>
                  <p className="fs_16">
                    飞猪，携程，去哪儿网，以及更多，旅点现成渠道以开通。一个旅点等于对接多个OTA
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
                    <a href="service-details.html">旅点负责对外客服</a>
                  </h3>
                  <p className="fs_16">
                    旅点的专业24小时客服做您的第一道防线。选择好您的工作时间，其他交给我们。
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
                    <a href="service-details.html">无需技术门槛</a>
                  </h3>
                  <p className="fs_16">
                    无需技术开发，无需服务器。旅点使用K8s等前卫技术，但这不重要因为您只需思考卖产品，技术问题交给旅点
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
                    <a href="service-details.html">弹性超高，想上就上</a>
                  </h3>
                  <p>
                    随时在线开通新渠道，随时暂停投放，全流程自动化，无需人工审核
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
                    <a href="service-details.html">各种产品类型，各种上</a>
                  </h3>
                  <p>
                    适配各OTA的各种产品类型，不论您是机票，酒店，当地玩乐还是跟团游，旅点都将适配
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
                    <a href="service-details.html">始于OTA但不止于OTA</a>
                  </h3>
                  <p>
                    旅点除了为您对接各大OTA以外，还有能为您对接至上千名同业旅行社，提高您的同业品牌知名度
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        id="Signup"
        className="d-flex align-items-center justify-content-center pt-5 pb-100 pt-lg-0"
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
                <h1 className="fs_34px">抢先体验，公测招募中</h1>

                <p>旅点正在积极寻求您的体验反馈~ </p>
                <ul className="list-check">
                  <li>抢先体验30天</li>
                  <li>公测期间免佣金，免服务费</li>
                  <li>前100名公测后90天可享受免佣金，免手续费</li>
                </ul>

                <div className="search-form mt-20">
                  <p>提交联系方式，加入公测~</p>
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
