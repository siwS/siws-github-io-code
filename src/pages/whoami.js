import React from "react"

import "./vendor.css"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Experience from "../components/experience"
import Studies from "../components/studies"

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

const WhoAmIPage = () => (
  <Layout>
    <SEO title="Who Am I "/>

    <Tabs>
      <TabList>
        <Tab><i className="fas fa-briefcase"></i></Tab>
        <Tab><i className="fas fa-university"></i></Tab>
      </TabList>

      <TabPanel>
        <Experience/>
      </TabPanel>
      <TabPanel>
        <Studies/>
      </TabPanel>
    </Tabs>

  </Layout>
)

export default WhoAmIPage
