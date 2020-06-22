import React from "react"

export default function Footer() {
  return (
    <footer className="footer c1-bg">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-sm-6">
            <div className="widget widget_about">
              <div className="widget-logo">
                <img
                  className="big_logo"
                  src={require("../assets/img/logo_white.png")}
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
                  src={require("../assets/img/mpqr.png")}
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
  )
}
