import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Tab, TabList, TabPanel, Tabs } from "react-tabs"
import BlogPost from "../components/blog-posts"
import ShortStories from "../components/short-stories"

class StoriesPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = { tabIndex: this.props.location.search ? 1 : 0 };
  }

  render() {
    return(
      <Layout>
        <SEO title="Stories"/>

        <Tabs selectedIndex ={ this.state.tabIndex } onSelect = { tabIndex => { this.setState({ tabIndex })}}>
          <TabList>
            <Tab><i className="fas fa-blog"/></Tab>
            <Tab><i className="fas fa-feather"/></Tab>
          </TabList>

          <TabPanel>
            <BlogPost/>
          </TabPanel>
          <TabPanel>
            <ShortStories/>
          </TabPanel>
        </Tabs>
      </Layout>
    )
  }
}

export default StoriesPage
