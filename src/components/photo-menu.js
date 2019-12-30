import React from 'react';
import { Link } from "gatsby"
import "./menu.css"

const PhotoMenu = () => {
  return(
    <div id="photo_urls">
      <Link class="photo_url" to="photos/dublin" >#dublin</Link>
      <Link class="photo_url" to="photos/greece">#greece</Link>
      <Link class="photo_url" to="photos/ireland" >#ireland</Link>
      <Link class="photo_url" to="photos/sifnos" >#sifnos</Link>
      <Link class="photo_url" to="photos/bratislava" >#bratislava</Link>
      <Link class="photo_url" to="photos/lithuania" >#lithuania</Link>
      <Link class="photo_url" to="photos/romania" >#romania</Link>
      <Link class="photo_url" to="photos/paris" >#paris</Link>
      <Link class="photo_url" to="photos/bavaria" >#bavaria</Link>
      <Link class="photo_url" to="photos/puglia" >#puglia</Link>
      <Link class="photo_url" to="photos/netherlands" >#netherlands</Link>
      <Link class="photo_url" to="photos/mytilene">#mytilene</Link>
    </div>
  );
}

export default PhotoMenu
