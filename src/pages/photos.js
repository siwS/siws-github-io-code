import React from "react"

import Layout from "../components/layout"
import { Link } from "gatsby"
import SEO from "../components/seo"
import withLocation from "../components/with-location"


const PhotoPage = ({ search }) => {
  return (
  <Layout>
    <SEO title="Photos"/>
    <h2>Photos</h2>

    <i className="fas fa-brush"/> <span style={{marginLeft: '10px'}}> Coming soon... </span>

    <div id="hash_urls">
      <Link to="photos?search=greece">#greece</Link> <t/>
      <Link to="photos?search=ireland">#ireland</Link> <t/>
      <Link to="photos?search=italy">#italy</Link> <t/>
    </div>

    {/*<div>*/}
    {/*  {(() => {*/}
    {/*    switch (search) {*/}
    {/*      case "greece":*/}
    {/*        return <div></div>*/}
    {/*      case "ireland":*/}
    {/*        return <div></div>*/}
    {/*      case "italy":*/}
    {/*        return <div></div>*/}
    {/*      default:*/}
    {/*        return <div></div>*/}
    {/*    }*/}
    {/*  })()}*/}
    {/*</div>*/}

  </Layout>)
}

export default withLocation(PhotoPage)
