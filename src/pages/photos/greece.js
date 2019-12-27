import React from "react"
import Gallery from '@browniebroke/gatsby-image-gallery'
import { graphql } from 'gatsby'

import '@browniebroke/gatsby-image-gallery/dist/style.css'

import SEO from "../../components/seo"
import Layout from "../../components/layout"
import PhotoMenu from "../../components/photo-menu"

const PhotoPage = ({ data }) => {
  const fullSize = data.images.edges.map(edge => edge.node.full.fluid.src)
  const thumbs = data.images.edges.map(edge => edge.node.thumb.fluid)

  return (
  <Layout>
    <SEO title="Photos"/>
    <h2>Greece</h2>

    <PhotoMenu/>

    <Gallery images={fullSize} thumbs={thumbs} />
  </Layout>)
}

export const query = graphql`
  query ImagesForGreece {
    images: allFile(
      filter: { relativeDirectory: { eq: "greece" } }
      sort: { fields: name }
    ) {
      edges {
        node {
          id
          thumb: childImageSharp {
            fluid(maxWidth: 270, maxHeight: 270) {
              ...GatsbyImageSharpFluid
            }
          }
          full: childImageSharp {
            fluid(
              maxWidth: 1024
              quality: 85
              srcSetBreakpoints: [576, 768, 992, 1200]
            ) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

export default PhotoPage
