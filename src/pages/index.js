import React, { useState, useEffect } from "react"
import "font-awesome/css/font-awesome.min.css"
import "react-fontawesome"
import "../../static/css/bootstrap.min.css"
import "../../static/css/style.css"
import "../../static/css/custom.css"
import "owl.carousel/dist/assets/owl.carousel.css"
//import Header from "../components/header"
import { action_saveMobile_get } from "../action/mobile"
//import { Link } from "gatsby"
import { Main } from "../../static/js/main"

export default function Home1() {
  const [mobile, setMobile] = useState("");
  const [windowsWidth]=useState(100);
  useEffect(() => {
    document.title = `旅点科技 Trip International`;
    Main();
  },[windowsWidth]);
  function onMobileChange(event){
    setMobile(event.target.value);
  }
  function onMobileSubmit(e) {
    e.preventDefault();
    console.log(mobile);
    action_saveMobile_get(mobile);
  }
  return (
    <div>
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
                data-owl-responsive='{"0": {"items": "2"},"575":{"items": "3"},"768": {"items": "4"},"992": {"items": "5"}}'
              >
                <a href="#" className="single-brand-logo">
                  <img
                    src={require("../../static/img/brand/jinqiao.jpg")}
                    data-rjs="2"
                    alt=""
                  />
                  <img
                    src={require("../../static/img/brand/jinqiao.jpg")}
                    data-rjs="2"
                    alt=""
                  />
                </a>
                <a href="#" className="single-brand-logo">
                  <img
                    src={require("../../static/img/brand/ama2.png")}
                    data-rjs="2"
                    alt=""
                  />
                  <img
                    src={require("../../static/img/brand/ama2.png")}
                    data-rjs="2"
                    alt=""
                  />
                </a>
                <a href="#" className="single-brand-logo">
                  <img
                    src={require("../../static/img/brand/bd.png")}
                    data-rjs="2"
                    alt=""
                  />
                  <img
                    src={require("../../static/img/brand/bd.png")}
                    data-rjs="2"
                    alt=""
                  />
                </a>
                <a href="#" className="single-brand-logo">
                  <img
                    src={require("../../static/img/brand/dida.png")}
                    data-rjs="2"
                    alt=""
                  />
                  <img
                    src={require("../../static/img/brand/dida.png")}
                    data-rjs="2"
                    alt=""
                  />
                </a>
                <a href="#" className="single-brand-logo">
                  <img
                    src={require("../../static/img/brand/ws.png")}
                    data-rjs="2"
                    alt=""
                  />
                  <img
                    src={require("../../static/img/brand/ws.png")}
                    data-rjs="2"
                    alt=""
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-title text-center">
                <h2>产品服务</h2>
                <p>旅业的经营，不论是买还是卖，旅点都能赋能</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4">
              <a href="service-details.html">
                <div className="index-single-service single-service">
                  <div className="icon index_ss_icon">
                    <img
                      src={require("../../static/img/icon/service-1.svg")}
                      className="svg"
                      alt=""
                    />
                  </div>
                  <div className="content">
                    <h3 className="fs_20">旅点UGS</h3>
                    <p className="fs_16 fc_gt">一站式对接多家 OTA 投放产品</p>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-lg-4">
              <a href="service-details.html">
                <div className="index-single-service single-service">
                  <div className="icon index_ss_icon">
                    <img
                      src={require("../../static/img/icon/service-2.svg")}
                      className="svg"
                      alt=""
                    />
                  </div>

                  <div className="content">
                    <h3 className="fs_20">旅.采购</h3>
                    <p className="fs_16 fc_gt">全球旅游资源同业交易平台</p>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-lg-4">
              <a href="service-details.html">
                <div className="index-single-service single-service">
                  <div className="icon index_ss_icon">
                    <img
                      src={require("../../static/img/icon/service-3.svg")}
                      className="svg"
                      alt=""
                    />
                  </div>

                  <div className="content">
                    <h3 className="fs_20">旅.零售</h3>
                    <p className="fs_16 fc_gt">为旅游门市提供线上经营工具</p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="pt_100px pb-140">
        <div className="container">
          <div className="row justify-content-between align-items-center pb-140">
            <div className="col-lg-5">
              <div className="mb-50 mb-lg-0">
                <img
                  src={require("../../static/img/feature/feature1.svg")}
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
                <h2>您卖产品，旅点准备渠道</h2>
              </div>
              <ul className="pb-30 list-check">
                <li>可售卖当地玩乐，机票，酒店等多种旅游产品</li>
                <li>无需您开通对接OTA，旅点已开通多家OTA</li>
                <li>旅点后台，全部搞定，无需单独更新每一个OTA</li>
                <li>全技术对接，实时发布产品，实时更新库存</li>
              </ul>
              <a href="#" className="btn-inline mt-30 fc_red">
                了解关于旅点UGS
              </a>
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
                <h2>您带上需求，旅点为您找资源</h2>
                <ul className="pb-30 list-check">
                  <li></li>
                  <li>
                    超过700,000+全球酒店，350+航空公司，1200个目的地的产品资源
                  </li>
                  <li>客户需求不等人，1秒获取实时价格和库存</li>
                  <li>网页，手机版，微信小程序，随时随地预定</li>
                  <li>便捷支付方式，支持支付宝，微信，额度支付</li>
                </ul>
              </div>

              <a href="#" className="btn-inline mt-30 fc_red">
                了解关于旅.采购
              </a>
            </div>
            <div className="col-lg-6 order-first order-lg-last">
              <div className="mb-50 mb-lg-0">
                <img
                  src={require("../../static/img/feature/feature2.svg")}
                  alt=""
                />
              </div>
            </div>
          </div>

          <div className="row justify-content-between align-items-center">
            <div className="col-lg-5">
              <div className="mb-50 mb-lg-0">
                <img
                  src={require("../../static/img/feature/feature3.svg")}
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
                <h2>您经营线下，旅点为您做线上，</h2>
              </div>

              <ul className="list-check">
                <li>获得自己的网站和小程序</li>
                <li>多种线上营销工具</li>
                <li>各类经营工具提高效率</li>
              </ul>
              <a href="#" className="btn-inline mt-30 fc_red">
                了解关于旅.零售
              </a>
            </div>
          </div>
          <div className="row pt-140">
            <div className="col-lg-6">
              <div className="section-title style--two">
                <div className="title-border">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <h2>API及其他定制方案</h2>
                <p>
                  已经有自己的网站，只想要产品资源对接？希望通过API供应产品给旅点的渠道？想要SDK合作？有特殊需求希望旅点为您开发？OK.没问题.
                  旅点提供弹性极大且稳定的API，有专属的技术对接团队提供专属服务，不论您的需求是技术还是产品，我们都将尽力为您解决.
                </p>
              </div>

              <a href="#" className="btn-inline mt-10">
                联系我们
              </a>
            </div>
            <div className="col-lg-6 order-first order-lg-last">
              <div className="mb-50 mb-lg-0">
                <img
                  src={require("../../static/img/feature/feature2.svg")}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="Signup"
        className="d-flex align-items-center justify-content-center pt-5 pb-5 pb-lg-0 pt-lg-0"
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="mb-50 mb-lg-0">
                <img
                  className="su_img"
                  src={require("../../static/img/feature/beta.svg")}
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
      <section className="pt-140 ">
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
                        src={require("../../static/img/pure_logo.jpg")}
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
                        src={require("../../static/img/pure_logo.jpg")}
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
                        src={require("../../static/img/pure_logo.jpg")}
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
      <section className="pt-140 pb-90 light-bg">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-title text-center">
                <h2>旅典信息</h2>
              </div>
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-4 col-sm-6">
              <div className="single-blog-item">
                <div className="blog-image">
                  <a href="#">
                    <img
                      src={require("../../static/img/blog/blog-1.png")}
                      alt=""
                    />
                  </a>
                </div>

                <div className="blog-content">
                  <a href="#" className="posted">
                    2020/06/06
                  </a>

                  <h3>
                    <a href="#">杭天祥与小丽结婚公告！</a>
                  </h3>

                  <a href="#" className="btn-inline">
                    阅读全文
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="single-blog-item">
                <div className="blog-image">
                  <a href="#">
                    <img
                      src={require("../../static/img/blog/blog-2.png")}
                      alt=""
                    />
                  </a>
                </div>

                <div className="blog-content">
                  <a href="#" className="posted">
                    2020/06/06
                  </a>

                  <h3>
                    <a href="#">龙龙小三成群</a>
                  </h3>

                  <a href="#" className="btn-inline">
                    阅读全文
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="single-blog-item">
                <div className="blog-image">
                  <a href="#">
                    <img
                      src={require("../../static/img/blog/blog-3.png")}
                      alt=""
                    />
                  </a>
                </div>
                <div className="blog-content">
                  <a href="#" className="posted">
                    2020/06/06
                  </a>

                  <h3>
                    <a href="#">磊磊修成正果，无敌幸福</a>
                  </h3>

                  <a href="#" className="btn-inline">
                    阅读全文
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="footer c1-bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-sm-6">
              <div className="widget widget_about">
                <div className="widget-logo">
                  <img
                    className="big_logo"
                    src={require("../../static/img/logo_white.png")}
                    data-rjs="2"
                    alt=""
                  />
                </div>
                <div className="about-text">
                  <p>
                    上海临行网络科技有限公司
                    <br />
                    沪ICP备18018917号 <br />
                    © 2020 tripintl.com <br />
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="widget widget_newsletter">
                <div className="widget-title">
                  <h3>关注我们</h3>

                  <div className="title-border">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>

                <div className="newsletter-content">
                  <img
                    className="footer_qr"
                    src={require("../../static/img/mpqr.png")}
                  />
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="widget widget_contact">
                <div className="widget-title">
                  <h3>联系我们</h3>

                  <div className="title-border">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
                <div className="contact-content">
                  <ul className="list-unstyled">
                    <li>
                      <i className="fa fa-map-marker"></i>
                      北京市朝阳区光华路9号天阶大厦24层
                    </li>
                    <li>
                      <i className="fa fa-phone"></i>{" "}
                      <a href="callto:+8613810248624">
                        +86 13810248624 | +1 3476039297
                      </a>
                    </li>
                    <li>
                      <i className="fa fa-envelope"></i>
                      <a href="mailto:tripintl@tripintl.com">
                        tripintl@tripintl.com
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <a href="#" class="back-to-top">
        <i class="fa fa-angle-up"></i>
      </a>
    </div>
  )
}
