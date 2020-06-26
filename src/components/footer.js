import React, { useState, useEffect } from "react"
import $ from "jquery"

export default function Footer() {
  const [footer] = useState(1)
  useEffect(() => {
    if ($(window).width() < 1080) {
      $(".footer_logo").toggle()
    }
    if ($(window).width() < 974) {
      $(".footer_row").toggle()
      $(".companyName").toggle()      
      $(".icp_content").addClass("justify-content-center")
    } else {
      $(".footer_column").toggle()
    }
    $(window).on("resize", function (event) {
      console.log($(window).width())
      if ($(window).width() < 1080) {
        $(".footer_logo").hide()
      } else {
        $(".footer_logo").show()
      }
      if ($(window).width() < 974) {
        $(".footer_row").hide()
        $(".footer_column").show()
        $(".companyName").hide()  
        $(".icp_content").addClass("justify-content-center")
      } else {
        $(".footer_row").show()
        $(".footer_column").hide()
        $(".companyName").show()  
        $(".icp_content").removeClass("justify-content-center")
      }
    })
  }, [footer])
  return (
    <footer className="footer c1-bg footer_style">
      <div className="container">
        <div className="row footer_row">
          <div className="col-lg-3 col-sm-6 footer_logo">
            <div className="widget widget_about">
              <div className="widget-logo">
                <img
                  className="big_logo"
                  src={require("../assets/img/logo_white.png")}
                  data-rjs="2"
                  alt=""
                />
              </div>
              {/* <div className="about-text">
                <p>
                  上海临行网络科技有限公司
                  <br />
                  沪ICP备18018917号 <br />
                  © 2020 tripintl.com <br />
                </p>
              </div> */}
            </div>
          </div>

          <div className="col-lg-6">
            <div className="widget widget_contact">
              <div className="widget-title">
                <h3>联系我们</h3>

                {/* <div className="title-border">
                  <span></span>
                  <span></span>
                  <span></span>
                </div> */}
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
                      +86 13810248624 | 13476039297
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

          <div className="col-lg-3 col-sm-6">
            <div className="widget widget_newsletter">
              <div className="widget-title">
                <h3>关注我们</h3>

                {/* <div className="title-border">
                  <span></span>
                  <span></span>
                  <span></span>
                </div> */}
              </div>

              <div className="newsletter-content">
                <img
                  className="footer_qr"
                  src={require("../assets/img/mpqr.png")}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="footer_column">
          <div className="widget widget_newsletter column_flex">
            <div className="widget-title">
              <h3>关注我们</h3>
            </div>

            <img
              className="footer_qr"
              src={require("../assets/img/mpqr.png")}
            />
            <div className="column_contact">
              <i className="fa fa-phone"></i>{" "}
              <a href="callto:+8613810248624">+86 13810248624 | 13476039297</a>
            </div>
          </div>
        </div>
      </div>
      <div className="container icp_content">
        © 2020 tripintl.com 沪ICP备18018917号 <spsn className="companyName">上海临行网络科技有限公司</spsn>
      </div>
    </footer>
  )
}
