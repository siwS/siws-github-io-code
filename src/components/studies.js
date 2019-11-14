import React from 'react';
import { Link } from "gatsby"
import "./menu.css"
import ntualogo from "../images/ntua.png"
import ucdlogo from "../images/ucd.png"

const Studies = () => {
  return(
    <div>
      <h2>Studies</h2>
      <br/>

      <a href="https://www.ucd.ie/" target="_blank" rel="noopener noreferrer">
        <img src={ucdlogo}
             width={"70px"}
             style={{ marginBottom: 0 }}
             alt={"University College Dublin"}/></a>
      <p>MSc in <i>Computer Forensics & Digital Investigations</i>, 2016-2018</p>

      <hr className="fading"/>

      <a href="https://www.ntua.gr/en/" target="_blank" rel="noopener noreferrer">
        <img src={ntualogo} width={"100px"}
             style={{ marginBottom: 0 }}
             alt={"National Technical University of Athens"}/></a>

      <p>MSc in <i>Electrical & Computer Engineering</i>, 2018-2015</p>


    </div>

  );
}

export default Studies
