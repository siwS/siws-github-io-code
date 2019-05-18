import React from "react"
import { Link } from "gatsby"

const MenuItem = (props) => {
    return(
      <Link to="/page-2/">
        <div class={"sphere " + props.color}>
          <div class="text">
            {props.text}
          </div>
        </div>
      </Link>
    );
  }
export default MenuItem
