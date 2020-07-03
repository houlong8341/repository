import React, { useState, useEffect } from "react"
import { Link, navigate } from "gatsby"
import lodashFp from "lodash/fp"
import Helmet from "react-helmet"
import $ from "jquery"
import Header from "../../components/header"
import Footer from "../../components/footer"
import { action_blog_page, action_blog_count } from "../../action/airtable"

export default function List() {
  const [windowsWidth] = useState(100)
  const [blogList, setBlogList] = useState([])
  const [pageSum, setPageSum] = useState(0)
  const [pageIndex, setPageIndex] = useState(1)
  const [eachStart, setEachStart] = useState(0)
  const [eachEnd, setEachEnd] = useState(0)
  const [eachPage, setEachPage] = useState([])
  const pageSize = 3

  useEffect(() => {
    action_blog_count().then(data => {
      if (data.sum) {
        let sum = Math.ceil(data.sum/ pageSize)
        setPageSum(sum)
        setEachValue(sum,pageIndex)
      }
    })
  }, [windowsWidth])
  useEffect(() => {
    action_blog_page(pageIndex).then(blist => {
      if (!lodashFp.isNull(blist)) {
        setBlogList(blist)
      }
      $(".preloader").fadeOut(1000)
    })
  }, [pageIndex])
  function setEachValue(sum,pindex) {
    let start = pindex <= 2 ? 1 : pindex - 2
    let end = pindex + 2 > sum ? sum : pindex + 2
    let array = []
    for (let index = start; index <= end; index++) {
      array.push(index)
    }
    setEachPage(array)
    setEachStart(start)
    setEachEnd(end)
  }
  function selectPage(pindex){
    $(".preloader").fadeIn(1000)
    setPageIndex(pindex)
    setEachValue(pageSum,pindex)
  }
  return (
    <div>
      <Helmet>
        <title>旅点资讯</title>
      </Helmet>
      <div className="preloader w-100 h-100 position-fixed">
        <span className="loader">Loading…</span>
      </div>
      <Header index={4}/>
      <section className="pt-140 pb-100">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="page-title">
                <h2>旅点资讯</h2>
                <p>承载我们旅游信息的最新动态</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="pt-40 pb-140">
        <div className="container">
          <div className="row justify-content-center">
            {blogList.map(function (blogitem) {
              return (
                <div className="col-lg-4 col-sm-6" key={blogitem.id}>
                  <div className="single-blog-item">
                    <div className="blog-image">
                      <Link to="/blog/blog" state={{ id: blogitem.id }}>
                        <img
                          src={require(`../../assets/img/blog/${blogitem.imgpath}`)}
                          data-rjs="2"
                          alt=""
                          className="news_logo"
                        />
                      </Link>
                    </div>

                    <div className="blog-content">
                      <span className="posted">12 Feb 2019</span>

                      <h3>
                        <Link to="/blog/blog" state={{ id: blogitem.id }}>
                          {blogitem.title}
                        </Link>
                      </h3>

                      <Link
                        to="/blog/blog"
                        state={{ id: blogitem.id }}
                        className="btn-inline"
                      >
                        阅读全文
                      </Link>
                    </div>
                  </div>
                </div>
              )
            })}
            
          </div>

          <div className="row">
            <div className="col-12">
              <div className="pagination justify-content-center">
                <ul className="nav align-items-center">
                  <li className="nav-btn prev">
                    {pageIndex === 1 ? (
                      <span className="disabled">
                        <i className="fa fa-angle-left"></i>
                      </span>
                    ) : (
                      <span onClick={()=>selectPage(pageIndex-1)}>
                        <i className="fa fa-angle-left"></i>
                      </span>
                    )}
                  </li>
                  {eachStart > 1 ? (
                    <li>
                      <span>...</span>
                    </li>
                  ) : (
                    ''
                  )}
                  {eachPage.map(each => {
                    if (each === pageIndex) {
                      return (
                        <li key={each}>
                          <span className="active">{each}</span>
                        </li>
                      )
                    } else {
                      return (
                        <li key={each}>
                          <span onClick={()=>selectPage(each)}>{each}</span>
                        </li>
                      )
                    }
                  })}   
                  {eachEnd<pageSum ? (
                    <li>
                      <span>...</span>
                    </li>
                  ) : (
                    ''
                  )}               
                  <li className="nav-btn next">
                    {pageIndex === pageSum ? (
                      <span className="disabled">
                        <i className="fa fa-angle-right"></i>
                      </span>
                    ) : (
                      <span onClick={()=>selectPage(pageIndex+1)}>
                        <i className="fa fa-angle-right"></i>
                      </span>
                    )}                    
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
