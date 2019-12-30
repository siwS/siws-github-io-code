import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import greekFlag from "../images/greek-flag.ico"
import irishFlag from "../images/irish-flag.png"
import { Link } from "gatsby"
import MainBanner from "../components/main_banner"

const IndexPage = () => {

  return (
  <div>
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]}/>

      <h2>About</h2>

      <p>Hello! Welcome to my e-home.</p>

      <p>I am Sofia. I write <Link to="/whoami" title="Work" class="zigzag">code</Link> and <Link to="/stories"
                                                                                                  title="Stories"
                                                                                                  class="zigzag">stories</Link>.
      </p>

      <p>Originally from <img src={greekFlag} width={"15px"} alt={"greek flag"}/> living and
        working in <img src={irishFlag} width={"20px"} alt={"irish flag"}/> as a Software Engineer.</p>

      <p>I like <Link to="/photos" title="photos" class="zigzag">exploring the world</Link> and pretending to be a
        psychologist. </p>

      <div style={{ maxWidth: `1200px`, marginBottom: `1.45rem`, paddingTop: `50px`}}>
        <MainBanner/>
      </div>
    </Layout>
  </div>
  )
}


export default IndexPage
