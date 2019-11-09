import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import changexlogo from "../images/changexlogo.png"
import intercomlogo from "../images/intercomlogo.png"
import workdaylogo from "../images/workdaylogo.png"
import vermantialogo from "../images/vermantialogo.png"
import { Link } from "gatsby"

const WhoAmIPage = () => (
  <Layout>
    <SEO title="Who Am I "/>
    <h2>Experience</h2>

    <p>
      During my career I have worked with multiple organisations of different size and styles. <p>I love building
      products
      that have an impact on people's lives, and learning about different domains.</p>
    </p>
    <p>
      I also do freelancing so if you have an interesting project, feel free to
      <Link to="/contact"
            title="Contact">contact</Link> me.
    </p>
    <br/>
    <a href="https://www.changex.org/ie/" target="_blank" rel="noopener noreferrer">
      <img src={changexlogo}
           width={"120px"}
           style={{ marginBottom: 0 }}
           alt={"changeX"}/></a>
    <p>Currently helping social innovators, funders and community builders to make the world a better place at ChangeX.
      If
      it sounds interesting let's talk! </p>

    <hr className="fading"/>

    <a href="https://www.intercom.com/" target="_blank" rel="noopener noreferrer">
      <img src={intercomlogo} width={"50px"}
           style={{ marginBottom: 0 }}
           alt={"intercom"}/></a>

    <p>During my time in Intercom, some of the projects I worked on were:</p>
    <ul>
      <li>
        <a href="https://developers.intercom.com/" target="_blank" rel="noopener noreferrer">Developer Hub</a>
      </li>
      <li>
        <a href="https://www.intercom.com/app-store" target="_blank" rel="noopener noreferrer">App Store</a>
      </li>
      <li>
        <a href="https://www.intercom.com/integrations/salesforce" target="_blank" rel="noopener noreferrer">Salesforce
          integration</a>
      </li>
      <li>
        <a href="https://www.intercom.com/integrations/slack" target="_blank" rel="noopener noreferrer">Slack
          integration</a>
      </li>
      <li>
        <a href="https://developers.intercom.com/intercom-api-reference/reference" target="_blank"
           rel="noopener noreferrer">REST API</a>
      </li>
      <li>
        <a href="https://www.intercom.com/changes/en/combine-and--or-rules-for-easier-message-targeting--11"
           target="_blank" rel="noopener noreferrer">Advanced targeting</a>
      </li>
      <li>
        <a href="https://www.intercom.com/changes/en/manually-add-new-leads-and-users-without-needing-to-import-"
           target="_blank" rel="noopener noreferrer">Manual lead and user creation</a>
      </li>
    </ul>

    <hr className="fading"/>

    <a href="https://www.workday.com/" target="_blank" rel="noopener noreferrer">
      <img src={workdaylogo} width={"45px"}
           style={{ marginBottom: 0 }}
           alt={"workday"}/></a>

    <p>
      In Workday I was part of the <a
      herd="https://www.workday.com/content/dam/web/en-us/documents/datasheets/datasheet-workday-procurement.pdf"
      target="_blank" rel="noopener noreferrer">Procurement</a> team.
    </p>
    <ul>
      <li>
        <a href="https://marketplace.workday.com/provider/Workday/listing/GHXForEDISupplierIntegrations" target="_blank"
           rel="noopener noreferrer">Workday EDI Supplier Integrations</a>
      </li>
    </ul>

    <hr className="fading"/>

    <a href="https://www.vermantia.com" target="_blank" rel="noopener noreferrer">
      <img src={vermantialogo}
           width={"100px"}
           style={{ marginBottom: 0 }}
           alt={"vermantia"}/></a>
  </Layout>
)

export default WhoAmIPage
