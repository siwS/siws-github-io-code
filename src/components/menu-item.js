import React from "react"
import { Link } from "gatsby"

const MenuItem = (props) => {
    return(
      <Link to={"/"+ props.url +"/"}>
        <div className={"sphere " + props.color}>
          <div className="text">
            {props.text}
          </div>
        </div>
      </Link>
    );
  }
export default MenuItem
