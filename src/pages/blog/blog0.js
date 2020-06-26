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
                  <h2>从省内游到跨省游，漫长的等待，你要准备些什么</h2>
                </div>
                <div className="blog-details-image">
                  <img src={require("../../assets/img/blog/blog.png")} data-rjs="2" alt="" />
                </div>
                <div className="blog-details-content">
                  <p>
                  最实在的回答莫过于：准备些钱！
                  </p>
                  <p>
                  我们可以乐观的猜测，这是为了即将到来的跨省游及出境游，届时可以尽兴于山水之间；也可以悲观的推理，或许只是为了疫情期的生活储备，挨过这一段特殊的日子。
                  </p>
                  <p>
                  纵观旅业，省内游的复苏，并没有抹去从业者额上的愁云，前日北京恢复二级响应，停止开放境内跨省区团队旅游业务（6月5日北京曾宣布将适时开放境内团队旅游业务），业者又添一丝惆怅，摆在大多数人面前的依然是心态上的改变或是改行的困境！
                  </p>
                  <p>
                  改变的心态，如精选旅游产品，酒店预售最为火爆，从云旅游一路高歌奔向直播间，上至旅业局长、上市总裁，下至小型商家、特约达人，都在尽力的发挥着各自的优势。单就13场“BOSS直播”而言，交易额突破5亿，平均一场4000万左右，业绩确实抢眼，带来的品牌形象更是直线上升，不亚于任何一次品牌营销。从整个生态来看，在某个特殊的时间，我们所在的环节终将被取代，只有积极的行动，才能有所斩获。
                  </p>
                  <p>
                  改行的困境是销售非旅游产品，透过现有微信渠道卖货，产品涉及防疫物品、生活用品、美妆、食品、水果、土特产等等，上游或商家供货，通过二级分销，分配一定比例的佣金，一夜之间变成推销员，在朋友圈内描绘一幅热闹的生活气象。然而这样的陌生领域，盈利是否足以保障生活？是否会出现相关税务法规问题？客户如何抉择现有与原有购买渠道？需要更多的时间来验证其中的答案。
                  </p>
                  <p>
                  自疫情爆发以来，一直都有先行者，积极的去尝试，线上、小程序、直播等等，你准备好了吗？在黎明前，旅点将陪你度过。
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
