import React, { useState, useEffect } from "react"
import Helmet from "react-helmet"
import lodashFp from "lodash/fp"
import $ from "jquery"
import Header from "../../components/header"
import Footer from "../../components/footer"
import { action_blog_getdetail } from "../../action/airtable"

export default function Blog({ location }) {
  const [windowsWidth] = useState(100)
  const [blogdetail, setBlogDetail] = useState({})
  //因为异步原因，将img路径绑定
  const [imgpath, setImgPath] = useState()

  useEffect(() => {
    if (location && location.state.id) {
      action_blog_getdetail(location.state.id).then(binfo => {
        if (!lodashFp.isNull(binfo)) {
          //console.log(binfo)
          setBlogDetail(binfo)
          setImgPath(require(`../../assets/img/blog/${binfo.imgpath}`))
          $(".preloader").fadeOut(1000)
        }
      })
    }
  }, [windowsWidth])
  return (
    <div>
      <Helmet>
        <title>旅点资讯</title>
      </Helmet>
      <div className="preloader w-100 h-100 position-fixed">
        <span className="loader">Loading…</span>
      </div>
      <Header />
      <section className="pt-120 pb-140">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="blog-details">
                <div className="post-meta">
                  <ul className="list-inline">
                    <li>
                      作者: {blogdetail.author}
                    </li>
                    <li>
                      发布日期: {blogdetail.date}
                    </li>
                  </ul>
                </div>
                <div className="post-title">
                  <h2>{blogdetail.title}</h2>
                </div>
                <div className="blog-details-image">
                  <img src={imgpath} data-rjs="2" alt="" />
                </div>
                <div
                  className="blog-details-content"
                  dangerouslySetInnerHTML={{ __html: blogdetail.notes }}
                ></div>
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
                          src={require("../../assets/img/icon/sw-1.svg")}
                          className="svg"
                          alt=""
                        />{" "}
                        旅点UGS
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img
                          src={require("../../assets/img/icon/sw-2.svg")}
                          className="svg"
                          alt=""
                        />{" "}
                        Link Building
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img
                          src={require("../../assets/img/icon/sw-3.svg")}
                          className="svg"
                          alt=""
                        />{" "}
                        Organize SEO
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img
                          src={require("../../assets/img/icon/sw-4.svg")}
                          className="svg"
                          alt=""
                        />{" "}
                        Competitor Analysis
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img
                          src={require("../../assets/img/icon/sw-5.svg")}
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
