import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const mediumUrl = "https://medium.com/@sofiatzima"
const intercomUrl = "https://www.intercom.com/blog"

const SecondPage = () => (
  <Layout>
    <SEO title="Stories" />
    <h2>Stories</h2>

    <p>On Medium</p>

    <ul>
      <li>
        <a href={mediumUrl + "/why-everyone-should-try-psychotherapy-and-some-common-misconceptions-about-it-cd0be336af4"} target="_blank" rel="noopener noreferrer">
        Why everyone should try psychotherapy and some common misconceptions about it
        </a>
      </li>

      <li>
        <a href={mediumUrl + "/how-social-media-can-form-an-echo-chamber-1c0ff1422336"} target="_blank" rel="noopener noreferrer">
          How social media can form an echo chamber
        </a>
      </li>

      <li>
        <a href={mediumUrl + "/redefining-confidence-94656d3b2442"} target="_blank" rel="noopener noreferrer">
          Redefining confidence
        </a>
      </li>

      <li>
        <a href={mediumUrl + "/lets-talk-about-rejection-c98553759ffd"} target="_blank" rel="noopener noreferrer">
          Let's talk about rejection
        </a>
      </li>

      <li>
        <a href={mediumUrl + "/the-kettle-a-dublin-story-3d7f9130bb8b"} target="_blank" rel="noopener noreferrer">
          The Kettle (a Dublin story)
        </a>
      </li>

    </ul>

    <p>
      On Intercom blog
    </p>

    <ul>
      <li>
        <a href={intercomUrl + "/software-engineering-interview-questions/"} target="_blank" rel="noopener noreferrer">
          How to prepare for software engineering interview questions
        </a>
      </li>

      <li>
        <a href={intercomUrl + "/confidence-at-work/"} target="_blank" rel="noopener noreferrer">
          Overcoming uncertainty: Why we need to redefine confidence for the workplace
        </a>
      </li>


      <li>
        <a href={intercomUrl + "/how-we-used-dynamodb-streams/"} target="_blank" rel="noopener noreferrer">
          How we used DynamoDB Streams to visualize changes in frequently updated objects
        </a>
      </li>


      <li>
        <a href={intercomUrl + "/api-versioning/"} target="_blank" rel="noopener noreferrer">
          Growing a platform: Introducing API versioning in Intercom
        </a>
      </li>

      <li>
        <a href={intercomUrl + "/your-first-few-months-as-an-engineer/"} target="_blank" rel="noopener noreferrer">
          What to expect: your first few months as an Intercom engineer
        </a>
      </li>

    </ul>

  </Layout>
)

export default SecondPage
