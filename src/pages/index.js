import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <center><h1>Hello NCTzen</h1></center>
    <h2>Welcome to NEO CULTURE TECHNOLOGY 2020.</h2>
    <p>NCT in the house.</p>
    <div>
      <img src = "https://i1.wp.com/dudeplace.co/wp-content/uploads/2020/10/nct-dream-ot71.jpeg?resize=1024%2C690&ssl=1"/>
    <h1>Music Videos</h1>
    <iframe width="840" height="472.5" src="https://www.youtube.com/embed/QyKe4VXDx5I" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
    <Link to="/page-2/">Go to Profile</Link> <br />
  </Layout>
)

export default IndexPage
