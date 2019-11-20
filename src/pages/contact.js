import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import IntercomApp from "../components/intercom-app.js"

import linkedin from "../images/linkedin.png"
import twitter from "../images/twitter.png"
import email from "../images/email.png"
import arrow from "../images/arrow.png"

const ContactPage = () => (
  <div>
    <Layout>
      <SEO title="Contact"/>
      <h2>Contact</h2>
      <p>
        If you want to chat about work, or grab a coffee, you can reach out to me by:
      </p>

      <ul style={{ listStyle: `none` }}>
        <li><a href="mail-to:tzi.sof@gmail.com" target="_blank" rel="noopener noreferrer">
          <img src={email}
               width={"20px"}
               style={{ marginBottom: 0 }}
               alt={"email"}/></a></li>
        <li><a href="https://twitter.com/SophieSiw" target="_blank" rel="noopener noreferrer">
          <img
            src={twitter}
            width={"20px"}
            style={{ marginBottom: 0 }}
            alt={"twitter"}/></a>
        </li>
        <li><a href="https://www.linkedin.com/in/sofiatzima" target="_blank" rel="noopener noreferrer">
          <img
            src={linkedin} width={"20px"} style={{ marginBottom: 0 }} alt={"linkedin"}/></a>
        </li>
      </ul>

      ....or you can write to me in Intercom <img src={arrow} alt="right down arrow" width={"25px"} style={{ marginBottom: 0 }}/>
    </Layout>
    <IntercomApp/>
  </div>
)

export default ContactPage
