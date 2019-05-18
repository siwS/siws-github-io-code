import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import MenuItem from "../components/menu-item"

import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Welcome!</h1>
    <p>I am Sofia, a Greek living in Dublin and working for Intercom.</p>

    <p>I like to explore Ireland and the rest of the world, while documenting my findings. <br/>
    I love discussing the peculiarity of our existence and how complicated human beings are</p>

    <div style={{ maxWidth: `500px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>

    <p>This is the home of my thoughts, creativity, and side-projects.</p>

    <MenuItem color="blue" text="Photos"/>
    <MenuItem color="thistle" text="Greece"/>
    <MenuItem color="blue" text="Ireland"/>
    <MenuItem color="thistle" text="Stories"/>
    <MenuItem color="blue" text="Projects"/>
  </Layout>
)

export default IndexPage
