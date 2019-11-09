import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import greekFlag from "../images/greek-flag.ico"
import irishFlag from "../images/irish-flag.png"
import { Link } from "gatsby"

const IndexPage = () => (
  <div>
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]}/>

      <h2>About</h2>

      <p>Hello! Welcome to my e-home.</p>

      <p>I am Sofia. I write <Link to="/whoami" title="Work">code</Link> and <Link to="/stories"
                                                                                   title="Stories">stories</Link>.</p>

      <p>Originally from <img src={greekFlag} width={"15px"} style={{ marginBottom: 0 }} alt={"greek flag"}/> living and
        working in <img src={irishFlag} width={"20px"} alt={"irish flag"}/> as a Software Engineer.</p>

      <p>I like exploring the world and pretending to be a psychologist. </p>

      <div style={{ maxWidth: `500px`, marginBottom: `1.45rem` }}>
        <Image/>
      </div>


    </Layout>

  </div>
)

export default IndexPage
