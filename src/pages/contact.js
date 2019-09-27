import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import IntercomApp from "../components/intercom-app.js"

const ContactPage = () => (
  <div>
    <Layout>
      <SEO title="Contact" />
      <h2>Contact</h2>
      <p>
        Hey! If you wanna chat about work, or grab a coffee, you can reach out:
      </p>

      <ul>
        <li>email: <a href="mail-to:tzi.sof@gmail.com">tzi.sof-at-gmail.com</a></li>
        <li>twitter: <a href="https://twitter.com/SophieSiw">SophieSiw</a></li>
        <li>LinkedIn: <a href="https://www.linkedin.com/in/sofiatzima/">Sofia Tzima</a></li>
        <li>or you can write to me in Intercom</li>
      </ul>



    </Layout>
    <IntercomApp/>
  </div>
)

export default ContactPage
