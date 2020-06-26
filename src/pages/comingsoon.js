import React from "react"
import Helmet from "react-helmet"
import Header from "../components/header"
import Footer from "../components/footer"
import {Link} from "gatsby"

export default function Comingsoon() {
  return (
    <div>
      <Helmet>
        <title>旅点科技 Trip International</title>
      </Helmet>
      <Header />
      <section className="d-flex align-items-center justify-content-center min-vh-100 pt_100px pb-5 pb-lg-0 pt-lg-0">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="mb-50 mb-lg-0">
                <img
                  src={require("../assets/img/feature/beta.svg")}
                  data-rjs="2"
                  alt=""
                />
              </div>
            </div>

            <div className="col-lg-6">
              <div className="content-coming-soon">
                <h1>申请提交成功~</h1>

                <p>
                  感谢您的申请~
                  旅点运营人员将尽快与您联系~旅点UGS很快就到您碗里了~~
                </p>

                <div className="fl_l row">
                  <div className="col-12">
                    <div className="text-center mt-20">
                      <Link to="/" className="btn-inline service-btn">
                        返回首页
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
