import React from "react"
import ReactHtmlParser from "react-html-parser"

import Layout from "../components/layout"
import SEO from "../components/seo"
import withLocation from "../components/with-location"
import "./story.css"
import { Link } from "gatsby"

const Story = ({ search }) => {
  let file = require(`../stories/${search}.json`);
  let image = require(`../images/${file.image}`);

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
}

export default withLocation(Story)
