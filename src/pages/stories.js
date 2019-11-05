import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const mediumUrl = "https://medium.com/@sofiatzima"
const intercomUrl = "https://www.intercom.com/blog"

const mediumPosts = [
  {
    url: mediumUrl + "/reflecting-on-4-years-abroad-9f673f44d166",
    title: "Reflecting on 4 years abroad\n",
  },
  {
    url: mediumUrl + "/why-everyone-should-try-psychotherapy-and-some-common-misconceptions-about-it-cd0be336af4",
    title: "Why everyone should try psychotherapy and some common misconceptions about it",
  },
  {
    url: mediumUrl + "/how-social-media-can-form-an-echo-chamber-1c0ff1422336",
    title: "How social media can form an echo chamber",
  },
  {
    url: mediumUrl + "/redefining-confidence-94656d3b2442",
    title: "Redefining confidence",
  },
  {
    ur: mediumUrl + "/lets-talk-about-rejection-c98553759ffd",
    title: "Let's talk about rejection",
  },
  {
    url: mediumUrl + "/the-kettle-a-dublin-story-3d7f9130bb8b",
    title: "The Kettle (a Dublin story)",
  },
]

const intercomPosts = [
  {
    url: intercomUrl + "/software-engineering-interview-questions/",
    title: "How to prepare for software engineering interview questions",
  },
  {
    url: intercomUrl + "/confidence-at-work/",
    title: "Overcoming uncertainty: Why we need to redefine confidence for the workplace",
  },
  {
    url: intercomUrl + "/how-we-used-dynamodb-streams/",
    title: "How we used DynamoDB Streams to visualize changes in frequently updated objects",
  },
  {
    url: intercomUrl + "/api-versioning/",
    title: "Growing a platform: Introducing API versioning in Intercom",
  },
  {
    url: intercomUrl + "/your-first-few-months-as-an-engineer/",
    title: "What to expect: your first few months as an Intercom engineer",
  },
]

const StoriesPage = () => (
  <Layout>
    <SEO title="Stories"/>
    <h2>Stories</h2>

    <p>Medium</p>

    <ul>
      {
        mediumPosts.map(post => {
         return <li>
            <a href={post.url} target="_blank" rel="noopener noreferrer">{post.title}</a>
          </li>
        })
      }
    </ul>

    <hr className="fading"/>

    <p>Intercom blog</p>

    <ul>
      {
        intercomPosts.map(post => {
          return <li>
            <a href={post.url} target="_blank" rel="noopener noreferrer">{post.title}</a>
          </li>
        })
      }
    </ul>
  </Layout>
)

export default StoriesPage
