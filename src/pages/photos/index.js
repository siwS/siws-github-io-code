import React from "react"

import '@browniebroke/gatsby-image-gallery/dist/style.css'

import SEO from "../../components/seo"
import Layout from "../../components/layout"
import PhotoMenu from "../../components/photo-menu"

const PhotoPage = () => {
  return (
  <Layout>
    <SEO title="Photos"/>
    <h2>Photos</h2>

    <PhotoMenu/>

  </Layout>)
}



export default PhotoPage
