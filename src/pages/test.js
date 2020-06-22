import React, { useState, useEffect } from "react"

import Helmet from "react-helmet"

export default function Test() {
  return (
    <div className="documentPage">
      <Helmet>
        <title>旅点科技 Trip International</title>
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta http-equiv="content-type" content="text/html; charset=utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="" />
        <meta name="keywords" content="" />
        <link rel="shortcut icon" href="../../static/favicon.ico"></link>
       
        <link rel="stylesheet" href="../assets/css/bootstrap.min.css" />

        <link rel="stylesheet" href="../assets/css/font-awesome.min.css" />

        <link
          rel="stylesheet"
          href="../assets/plugins/owlcarousel/owl.carousel.min.css"
        />

        <link rel="stylesheet" href="../assets/css/style.css" />

        <link rel="stylesheet" href="../assets/css/custom.css"></link>
      </Helmet>
      
    </div>
  )
}
