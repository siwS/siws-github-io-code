/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql, Link } from "gatsby"

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

        <nav className="menu">
          <input type="checkbox" href="#" className="menu-open" name="menu-open" id="menu-open"/>
          <label className="menu-open-button" htmlFor="menu-open">
            <span className="lines line-1"></span>
            <span className="lines line-2"></span>
            <span className="lines line-3"></span>
          </label>

          <Link to="/" className="menu-item purple" title="About">
            <i className="fas fa-female"></i>
          </Link>
          <Link to="/stories" className="menu-item blue" title="Stories">
            <i className="fas fa-book"></i>
          </Link>
          <Link to="/projects" className="menu-item lightblue" title="Projects">
            <i className="fa fa-diamond"></i>
          </Link>
          <Link to="/" className="menu-item orange" title="">
            <i className="fa fa-star"></i>
          </Link>
          <Link to="/contact" className="menu-item green" title="Contact">
            <i className="fa fa-coffee"></i>
          </Link>
          <Link to="/photos" className="menu-item red" title="Pictures">
            <i className="fa fa-images"></i>
          </Link>
        </nav>

        <div id="page-wrapper">
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
