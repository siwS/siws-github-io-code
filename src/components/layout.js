/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Header siteTitle={data.site.siteMetadata.title} />

        <div id="page-wrapper">
          <div id="sub-menu"></div>

          <div id="page-container">
            <main>{children}</main>
          </div>
        </div>

        <footer>
          © {new Date().getFullYear()}, Built by <a href="https://github.com/siwS">me</a> with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a> and <a href="https://pages.github.com/">Github pages</a>
        </footer>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
