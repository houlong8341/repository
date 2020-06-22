import React from "react"
import Helmet from "react-helmet"
import Header from "../../components/header"
import Footer from "../../components/footer"

export default function Blog() {
  return (
    <div>
      <Helmet>
        <title>旅点资讯</title>
      </Helmet>
      <Header />
      <section className="pt-120 pb-140">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="blog-details">
                <div className="post-meta">
                  <ul className="list-inline">
                    <li>
                      作者: <a href="#">圆润小胖子</a>
                    </li>
                    <li>
                      发布日期: <a href="#">2020-02-18</a>
                    </li>
                  </ul>
                </div>
                <div className="post-title">
                  <h2>旅行社融合之路</h2>
                </div>
                <div className="blog-details-image">
                  <img
                    src={require("../../assets/img/blog/blog1.png")}
                    data-rjs="2"
                    alt=""
                  />
                </div>
                <div className="blog-details-content">
                  <p>
                    新冠疫情冲击着每一个行业，对于旅游业来说无疑是一场灾难，同时也看到了旅行社线上和线下的新形态，大家在互相竞争的同时，也在互相学习着，互相融合着。
                  </p>
                  <p>
                    线下旅行社人们眼中的传统行业，主要经营“跟团游”产品，加之人性化的服务。线上旅行社人们眼中的新兴行业，主要经营“自由行”产品，加之平台化的服务。跟团游产品是在无限吸收旅客的共性，自由行产品是在无限放大旅客的个性。人性化的服务是让旅客感觉更舒心，平台化的服务让旅客感觉更标准，线上线下似乎是两条平行线，没有相交的可能，真的是这样吗？
                  </p>
                  <p>
                    常年以来，线下旅行社一直是以连锁的方式服务着广大旅客，在地上（底商）种植品牌，按地理距离分布。线上旅行社一直是以独立的方式服务着广泛的旅客，在天上（互联网）投放品牌，选择令人耳熟详域名（网址）优先注册。近年以来线上旅行社开始转变，学习线下旅行社的连锁方式，依靠之前的互联网品牌积淀，开始大规模发展线下连锁，携程，途牛，驴妈妈，同程等，如果你是一家旅行社可以看看你周围是否有其中的一家？如果你在思考，答案已经显而易见。
                  </p>
                  <p>
                    当线上旅行社在学习线下旅行社连锁的时候，线下旅行社是否可以考虑学习线上旅行社打通线上经营呢？大家不妨分析一下，如何打通线上经营。简单的说目前打通线上经营也就那么几种方式：首先是入驻线上平台，我们的常见的线上平台如去哪儿，飞猪、马蜂窝、美团等，平台的选择要根据自家的产品去匹配相应的平台，产品的不同会造成费用的千差万别。其次是自建线上平台，我们常见的也就是PC端（电脑网页），移动端（手机网页），微信端（微信网页），APP（手机软件）,微信小程序，当然这些如果全部建立，除了技术上瓶颈，还会是一笔巨大的开销。最后就是第三方合作平台，如“旅点科技”等，免费入驻注册，线下旅行社成为线上旅行社。
                  </p>
                  <p>
                    如今的旅游业依然在面临的严峻的考验，大家在自救、互助的同时，也在积极的应对和承担责任，我们可以看到旅游业开始出现“云旅游”、“微商、电商”等新形态的服务，相信疫情结束将会是一个新的局面。
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <aside className="blog-sidebar mt-80 mt-lg-0">
                <div className="widget widget_service">
                  <div className="widget-title">
                    <h4>相关产品</h4>
                  </div>
                  <ul className="service-list">
                    <li>
                      <a href="#">
                        <img
                          src="assets/img/icon/sw-1.svg"
                          className="svg"
                          alt=""
                        />{" "}
                        旅点UGS
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img
                          src="assets/img/icon/sw-2.svg"
                          className="svg"
                          alt=""
                        />{" "}
                        Link Building
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img
                          src="assets/img/icon/sw-3.svg"
                          className="svg"
                          alt=""
                        />{" "}
                        Organize SEO
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img
                          src="assets/img/icon/sw-4.svg"
                          className="svg"
                          alt=""
                        />{" "}
                        Competitor Analysis
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img
                          src="assets/img/icon/sw-5.svg"
                          className="svg"
                          alt=""
                        />{" "}
                        Link Organization
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="widget widget_tag_cloud">
                  <div className="widget-title">
                    <h4>标签</h4>
                  </div>

                  <div className="tagcloud">
                    <a href="#">#Fashion</a>
                    <a href="#">#Art</a>
                    <a href="#">#Lifestyle</a>
                    <a href="#">#SEO</a>
                    <a href="#">#Marketting</a>
                    <a href="#">#Trading</a>
                    <a href="#">#Travel</a>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
