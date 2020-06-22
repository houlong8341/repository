import React from "react"
import Helmet from "react-helmet"
import Header from '../../components/header'
import Footer from '../../components/footer'

export default function Blog() {
  return (
    <div>
      <Helmet>
        <title>旅点资讯</title>
      </Helmet>
      <Header/>
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
                  <h2>旅行社门市是否需要线上经营</h2>
                </div>
                <div className="blog-details-image">
                  <img src={require("../../assets/img/blog/blog2.png")} data-rjs="2" alt="" />
                </div>
                <div className="blog-details-content">
                  <p>
                  看到这样的标题，似乎没有什么可讨论的，如果您是实际的经营者，是否也会一笑而过呢？不会。
                  </p>
                  <p>
                  不会。
                  </p>
                  <p>
                  旅行社门市是一个庞大的群体，看一下生活的周围，小区下的底商，商场收银台的附近，写字楼的角落，还有半开放的公寓等等，这些地方随处可见的旅行社身影，有的时候旅行社门市互相就隔着一条街，有的时候就是门对门，甚至还有肩并肩的，更集中的还有旅游超市，一栋楼或者说一片区域都是旅行社，这样的画面是不是就容易想象了？
                  </p>
                  <p>
                  的确。
                  </p>
                  <p>
                  旅行社门市如此密集的分布，势必增加了旅客太多的过程抉择，前脚进入张三的门市咨询，出门看见李四的门市，过了一条街还有王五的门市，旅客多数会前往咨询，都是旅行社似乎没有什么区别？
                  </p>
                  <p>
                  神似。
                  </p>
                  <p>
                  这其实是对品牌的漠视。然而对产品却不含糊，我们经常看到旅客是这样选择产品的，在张三的门市了解了产品后，拿着张三介绍的产品，到李四的旅行社门市比较同样的产品，问李四能不能便宜？李四在看到产品后，随口给了一个便宜的价格，之后旅客用李四报出的价格要求张三优惠，作为张三要不要接受呢？
                  </p>
                  <p>
                  犹豫！
                  </p>
                  <p>
                  前期已经投入了时间和精力，不接受就成了无用功，好像损失了很多。接受的结果是勉为其难的成交，利润定是微乎其微。如果旅客在旅游体验中，出现些许的不满情况，回程后发生客诉，张三是否还要进行售后补偿呢？
                  </p>
                  <p>
                  肯定。
                  </p>
                  <p>
                  客诉问题事关服务能力，对后续复购有着决定性的作用，张三就算是自掏腰包也不愿因此失去千辛万苦积累的客户。旅行社门市作为一种旅游零售代理机构，很难参与到旅游体验的过程，曾有张三感慨：赚着卖白菜的钱，操着卖白粉的心。
                  </p>
                  <p>
                  可以看出，旅行社门市在经营中的困境：地域影响强，品牌价值弱、获客困难多，服务体现少，产品同质高，成交利润低，过程参与难，客诉补偿易。线上经营试图让旅行社门市从区域服务变成全域服务，多样性的获客工具，产品定制能力，参与过程监管等。有些公司提供免费旅行社门市线上经营的解决方案，如旅点科技等。
                  </p>
                  <p>
                  如果您是张三，是否需要呢？
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
      <Footer/>
    </div>
  )
}
