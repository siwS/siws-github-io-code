import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import App from "../components/app"

const IndexPage = () => (
  <div>
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h2>Hello!</h2>

    <p>I am Sofia. Originally from Greece living in Dublin and working for Intercom as a Software Engineer.</p>

    <p>I like to explore Ireland and the rest of the world, while documenting my findings. <br/>
    I love discussing the peculiarity of our existence, brainstorming and pretending to be a psychologist.</p>

    <div style={{ maxWidth: `500px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>

    <p>This is the home of my thoughts, creativity, and side-projects.</p>

  </Layout>

    <App/>

  </div>
)

export default IndexPage
