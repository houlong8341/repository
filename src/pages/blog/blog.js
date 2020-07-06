import React, { useState, useEffect } from "react"
import Helmet from "react-helmet"
import lodashFp from "lodash/fp"
import $ from "jquery"

import Header from "../../components/header"
import Footer from "../../components/footer"
import {
  action_blog_getdetail,
  action_blog_gettop,
} from "../../action/airtable"

export default function Blog({ location }) {
  let id = null
  if (location && location.search) {
    id = location.search.replace("?", "")
  }
  const [blogid,setBlogId] = useState(id)
  const [blogdetail, setBlogDetail] = useState({})
  const [blogList, setBlogList] = useState([])
  //因为异步原因，将img路径绑定
  const [imgpath, setImgPath] = useState()

  useEffect(() => {
    $(".preloader").fadeIn(1000)
    if (blogid) {
      action_blog_getdetail(blogid).then(binfo => {
        if (!lodashFp.isNull(binfo)) {
          setBlogDetail(binfo)
          setImgPath(require(`../../assets/img/blog/${binfo.imgpath}`))
          $(".preloader").fadeOut(1000)
        }
      })
      action_blog_gettop(6).then(blist => {
        if (!lodashFp.isNull(blist)) {
          setBlogList(blist)
        }
      })
    }
  }, [blogid])
  function changeBlogId(id){
    setBlogId(id)
  }
  return (
    <div>
      <Helmet>
        <title>旅点资讯</title>
      </Helmet>
      <div className="preloader w-100 h-100 position-fixed">
        <span className="loader">Loading…</span>
      </div>
      <Header index={4} />
      <section className="pt-120 pb-140">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="blog-details">
                <div className="post-meta">
                  <ul className="list-inline">
                    <li>作者: {blogdetail.author}</li>
                    <li>发布日期: {blogdetail.date}</li>
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
                    <h4>相关资讯</h4>
                  </div>
                  <ul className="service-list">
                    {blogList.map((bitem, index) => {
                      if (index < 5 && bitem.id != blogdetail.id) {
                        return (
                          <li key={bitem.id}>
                            <a onClick={()=>changeBlogId(bitem.id)} className='blogtitle-list'>
                              <img
                                src={require(`../../assets/img/icon/sw-${
                                  index + 1
                                }.svg`)}
                                className="svg"
                                alt=""
                              />
                              {bitem.title}
                            </a>
                          </li>
                        )
                      }
                    })}
                    
                  </ul>
                </div>

                {/* <div className="widget widget_tag_cloud">
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
                </div> */}
              </aside>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
