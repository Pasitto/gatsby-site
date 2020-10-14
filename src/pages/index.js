import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <center><h1>Hello NCTzen </h1></center>
    <p>Welcome to Neo Culture Technology 2020.</p>
    <p>NCT in the house.</p>
    <div >
      <img src = "https://i1.wp.com/dudeplace.co/wp-content/uploads/2020/10/nct-dream-ot71.jpeg?resize=2048%2C1380&ssl=1" />
    </div>
    <Link to="/page-2/">Go to page 2</Link> <br />
  </Layout>
)

export default IndexPage
