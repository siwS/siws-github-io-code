import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import IntercomApp from "../components/intercom-app"
import greekFlag from "../images/greek-flag.ico"
import irishFlag from "../images/irish-flag.png"

const IndexPage = () => (
  <div>
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />

    <h2>About</h2>

    <p>Hello! Welcome to the home of my thoughts, creativity, and side-projects.</p>

    <p>I am Sofia. Originally from <img src={greekFlag} width={"15px"} style={{marginBottom: 0}}/> living in <img src={irishFlag} width={"20px"}/> and working for Intercom as a Software Engineer.</p>

    <p>I like to explore Ireland and the rest of the world, while documenting my findings. </p>
    <p>I love discussing the peculiarity of our existence, brainstorming and pretending to be a psychologist.</p>

    <div style={{ maxWidth: `500px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>


  </Layout>

  </div>
)

export default IndexPage
