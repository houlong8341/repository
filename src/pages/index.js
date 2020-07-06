import React, { useState, useEffect } from "react"
import { Link, navigate } from "gatsby"
import Helmet from "react-helmet"
import lodashFp from "lodash/fp"

import Header from "../components/header"
import Footer from "../components/footer"
import { Main } from "../assets/js/main"
import { action_saveMobile_get } from "../action/airtable"

export default function Home({location}) {
  const [mobile, setMobile] = useState("")
  const [windowsWidth] = useState(100)
  useEffect(() => {
    Main(location)
  }, [windowsWidth])
  function onMobileChange(event) {
    setMobile(event.target.value)
  }
  function onMobileSubmit(e) {
    e.preventDefault()
    if (mobile) {
      action_saveMobile_get(mobile,'UGS and Retail')
      navigate("/comingsoon")
    }
  }
  return (
    <div>
      <Helmet>
        <title>旅点科技 Trip International</title>
      </Helmet>
      <div className="preloader w-100 h-100 position-fixed">
        <span className="loader">Loading…</span>
      </div>
      <Header index={0}/>

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
                      src={require("../assets/img/banner/search-icon.png")}
                      alt=""
                    />
                  </div>
                  <img
                    className="banner_img"
                    src={require("../assets/img/banner/banner.svg")}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="pt-120 pb-120">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-title text-center">
                <h3>超過1000+国内外合作伙伴</h3>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div
                className="brand-logo owl-carousel"
                data-owl-items="6"
                data-owl-autoplay="false"
                data-owl-nav="false"
                data-owl-dots="false"
                data-owl-responsive='{"0": {"items": "2"},"575":{"items": "3"},"768": {"items": "4"},"992": {"items": "5"}}'
              >
                <a href="#" className="single-brand-logo">
                  <img
                    src={require("../assets/img/brand/jinqiao.jpg")}
                    data-rjs="2"
                    alt=""
                  />
                  <img
                    src={require("../assets/img/brand/jinqiao.jpg")}
                    data-rjs="2"
                    alt=""
                  />
                </a>
                <a href="#" className="single-brand-logo">
                  <img
                    src={require("../assets/img/brand/ama2.png")}
                    data-rjs="2"
                    alt=""
                  />
                  <img
                    src={require("../assets/img/brand/ama2.png")}
                    data-rjs="2"
                    alt=""
                  />
                </a>
                <a href="#" className="single-brand-logo">
                  <img
                    src={require("../assets/img/brand/bd.png")}
                    data-rjs="2"
                    alt=""
                  />
                  <img
                    src={require("../assets/img/brand/bd.png")}
                    data-rjs="2"
                    alt=""
                  />
                </a>
                <a href="#" className="single-brand-logo">
                  <img
                    src={require("../assets/img/brand/dida.png")}
                    data-rjs="2"
                    alt=""
                  />
                  <img
                    src={require("../assets/img/brand/dida.png")}
                    data-rjs="2"
                    alt=""
                  />
                </a>
                <a href="#" className="single-brand-logo">
                  <img
                    src={require("../assets/img/brand/ws.png")}
                    data-rjs="2"
                    alt=""
                  />
                  <img
                    src={require("../assets/img/brand/ws.png")}
                    data-rjs="2"
                    alt=""
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-80 pb-80 light-bg">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-title text-center">
                <h2>产品服务</h2>
                <p>旅业的经营，不论是买还是卖，旅点都能赋能</p>
              </div>
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6">
              <div className="padding_none single-pricing-table text-center">
                <div className="pt-header">
                  <div className="icon">
                    <img src={require("../assets/img/icon/basic.png")} alt="" />
                  </div>
                  <h2 className="title">旅点采购</h2>
                </div>
                <div className="pt-body">
                  <ul className="list-unstyled list-check">
                    <li>全球旅游资源同业交易平台</li>
                    <li>超过700,000+全球酒店</li>
                    <li>实时价格和库存, 随时预定</li>
                    <li>网页手机版，微信小程序</li>
                    <li>支付宝，微信，额度支付</li>
                  </ul>
                </div>
                <a href="#" className="btn-inline mt-30 fc_red">
                  了解关于旅.采购
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="padding_none single-pricing-table text-center">
                <div className="pt-header">
                  <div className="icon">
                    <img src={require("../assets/img/icon/pro.png")} alt="" />
                  </div>
                  <h2 className="title">旅点UGS</h2>
                </div>
                <div className="pt-body">
                  <ul className="list-unstyled list-check">
                    <li>一站式对接多家OTA</li>
                    <li>投放当地玩乐，酒店等多种产品</li>
                    <li>旅点已开通多家OTA</li>
                    <li>一站式搞定全渠道库存</li>
                    <li>实时发布产品，实时更新库存</li>
                  </ul>
                </div>
                <a href="#" className="btn-inline mt-30 fc_red">
                  了解关于旅.UGS
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="padding_none single-pricing-table text-center">
                <div className="pt-header">
                  <div className="icon">
                    <img src={require("../assets/img/icon/pro.png")} alt="" />
                  </div>
                  <h2 className="title">旅点零售</h2>
                </div>
                <div className="pt-body">
                  <ul className="list-unstyled list-check">
                    <li>旅行社新零售经营工具</li>
                    <li>获得自己的网站和小程序</li>
                    <li>多种线上营销工具</li>
                    <li>各类经营工具提高效率</li>
                    <li>激活现有客户群体</li>
                  </ul>
                </div>
                <a href="#" className="btn-inline mt-30 fc_red">
                  了解关于旅.零售
                </a>
              </div>
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
                  <li>抢先体验30天</li>
                  <li>体验期间全部功能免费使用</li>
                  <li>前100名体验者，可享受90天免佣金、免手续费等高级功能</li>
                </ul>

                <div className="search-form mt-20">
                  {/* <p className="fc_white">提交联系方式，加入公测~</p> */}
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
                        加入体验
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-120 pb-80">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-title text-center">
                <h2>API及其他定制方案合作</h2>
              </div>
            </div>
          </div>
          <div className="row w_80 m0a">
            <div className="col-lg-6">
              <ul className="list-check mb-3 pb-1 mb-lg-0 pb-lg-0">
                <li>弹性极大且稳定的产品资源API</li>
                <li>量身定制开发方案</li>
                <li>自架服务器SaaS方案</li>
                <li>各类工具SDK合作方案</li>
              </ul>
            </div>
            <div className="col-lg-6">
              <ul className="list-check">
                <li>技术团队对接提供专属服务</li>
                <li>产品经理和客户沟通实际需求</li>
                <li>弹性合作模式，谁说技术开发一定很贵？</li>
                <li>完善的售后服务，迭代更新不停止</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-140 pb-60">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-title text-center">
                <h2>旅点.让旅业简单点</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div
                className="testimonial-slider owl-carousel"
                data-owl-animate-in="slideInDown"
                data-owl-animate-out="slideOutUp"
                data-owl-nav="false"
                data-owl-dots="true"
                data-owl-mouse-drag="false"
                data-owl-autoplay="false"
              >
                <div className="single-testimonial text-center">
                  <div className="single-testimonial-inner">
                    <h4>旅点使命</h4>
                    <div className="pt-20 content">
                      <p className="fs_16">
                        我们相信，您的买卖您最清楚。
                        <br />
                        专业知识和从业经验是不可代替的。
                        <br />
                        但是繁杂的工作可以。
                        <br />
                        旅点只是您的经营的另一半，让您的旅业经营简单点。
                      </p>
                    </div>
                    <div className="image">
                      <img
                        className="small_logo"
                        src={require("../assets/img/pure_logo.jpg")}
                        data-rjs="2"
                        alt=""
                      />
                    </div>
                  </div>
                </div>

                <div className="single-testimonial text-center">
                  <div className="single-testimonial-inner">
                    <h4>旅点小伙伴的旅游基因</h4>

                    <div className=" pt-20 content">
                      <p className="fs_16">
                        旅点团队中的很多小伙伴曾在旅业中担任很多不同角色。从地接社到品牌商到海外供应商。小伙伴们带着这些经验，希望为旅游人解决一些问题。
                      </p>
                    </div>
                    <div className="image">
                      <img
                        className="small_logo"
                        src={require("../assets/img/pure_logo.jpg")}
                        data-rjs="2"
                        alt=""
                      />
                    </div>
                  </div>
                </div>

                <div className="single-testimonial text-center">
                  <div className="single-testimonial-inner">
                    <h4>旅点团队的技术思维</h4>

                    <div className="pt-20 content">
                      <p className="fs_16">
                        技术小伙伴（俗称码农）有世界500强科技公司的海归，也有中国互联网公司的同学。他们都有共同天真的愿景，那就是用技术解决繁琐，用科技创新模式，用数据提高精准。
                      </p>
                    </div>
                    <div className="image">
                      <img
                        className="small_logo"
                        src={require("../assets/img/pure_logo.jpg")}
                        data-rjs="2"
                        alt=""
                      />
                    </div>
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
