import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h2>Photos</h2>

    <i className="fas fa-brush"/> <span style={{marginLeft: '10px'}}> Coming soon... </span>
  </Layout>
)

export default SecondPage
