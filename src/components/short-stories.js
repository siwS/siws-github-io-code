import React from 'react';
import "./menu.css"
import { Link } from "gatsby"

const short_stories = [
  {
    name: "vilnius",
    title: "Not all those who wonder are lost."
  },
  {
    name: "derry",
    title: "Stuck in the snow in the north"
  }
]

const ShortStories = () => {
  return(
    <div>
      <h2>Short Stories</h2>
      <ul>
        {
          short_stories.map(post => {
            let url = "story?search="+post.name;
            return <li key={post.title}>
              <Link to={url}>{post.title}</Link>
            </li>
          })
        }
      </ul>

      <hr className="fading"/>
    </div>
  );
}

export default ShortStories
