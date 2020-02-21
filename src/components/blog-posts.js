import React from 'react';
import "./menu.css"

import intercomlogo from "../images/intercomlogo.png"
import mediumlogo from "../images/medium.png"

const mediumUrl = "https://medium.com/@sofiatzima"
const intercomUrl = "https://www.intercom.com/blog"

const mediumPosts = [
  {
    url: mediumUrl + "/directness-lessons-for-indirect-people-b8b9713405fc",
    title: "Directness lessons for indirect people\n",
  },
  {
    url: mediumUrl + "/yet-another-imposter-syndrome-analysis-5eab4434877c",
    title: "Yet another impostor syndrome analysis\n",
  },
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

const BlogPost = () => {
  return(
    <div>
      <h2>Blog posts</h2>

      <a href={mediumUrl} target="_blank" rel="noopener noreferrer">
        <img src={mediumlogo}
             width={"80px"}
             style={{ marginBottom: 0 }}
             alt={"intercom"}/></a>

      <ul>
        {
          mediumPosts.map(post => {
            return <li key={post.title}>
              <a href={post.url} target="_blank" rel="noopener noreferrer">{post.title}</a>
            </li>
          })
        }
      </ul>

      <hr className="fading"/>

      <a href={intercomUrl} target="_blank" rel="noopener noreferrer">
        <img src={intercomlogo} width={"20px"}
             style={{ marginBottom: 0 }}
             alt={"intercom"}/><b> Inside
        Intercom</b></a>

      <ul>
        {
          intercomPosts.map(post => {
            return <li key={post.title}>
              <a href={post.url} target="_blank" rel="noopener noreferrer">{post.title}</a>
            </li>
          })
        }
      </ul>
    </div>
  );
}

export default BlogPost
