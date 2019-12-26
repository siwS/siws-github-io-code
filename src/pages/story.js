import React from "react"
import ReactHtmlParser from "react-html-parser"

import Layout from "../components/layout"
import SEO from "../components/seo"
import withLocation from "../components/with-location"
import "./story.css"
import { Link } from "gatsby"

const Story = ({ search }) => {

  let searchParamPresent = Object.keys(search).length > 0
  let file
  let image

  try {
    file = searchParamPresent ? require(`../stories/${search}.json`) : ""
    image = searchParamPresent ? require(`../images/${file.image}`) : ""
  } catch(ex) {
    console.log(ex);
    searchParamPresent = false
  }

  if (searchParamPresent) {
    return (
      <Layout>
        <SEO title="Story"/>
        <Link to="stories?back=true"><i className="fa fa-arrow-left" aria-hidden="true"/></Link>

        <div class="content">
          <div class="title">{file.title}</div>
          <div className="date">{file.date}</div>

          <div class="image">
            <img src={image} width={500} alt='Image for story'/>
          </div>

          { ReactHtmlParser (file.content) }
        </div>
      </Layout>
    )
  } else {
    return (
      <Layout>
        <SEO title="Story"/>
        <Link to="stories?back=true"><i className="fa fa-arrow-left" aria-hidden="true"/></Link>

        <div class="image">

          <p><i className="far fa-frown"></i> The story you are looking for is not found here...</p>
        </div>
      </Layout>
    )
  }

}

export default withLocation(Story)
