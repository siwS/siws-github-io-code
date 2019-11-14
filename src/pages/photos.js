import React from "react"
import ImageGallery from 'react-image-gallery';
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import withLocation from "../components/with-location"

import "./pages.css"

const imagesGreece = [
  {
    original: 'https://doc-0g-88-docs.googleusercontent.com/docs/securesc/ha0ro937gcuc7l7deffksulhg5h7mbp1/e92a884nplkfbbo9el8at9l0g8qm5tm3/1570046400000/11896988386299524184/*/1-1f4N-6voCYFH78MPjh7jPQRlgMKF0f3',
    thumbnail: 'https://picsum.photos/id/1015/250/150/',
  },
];

const imagesIreland = [
  {
    original: 'https://doc-0s-88-docs.googleusercontent.com/docs/securesc/ha0ro937gcuc7l7deffksulhg5h7mbp1/40v8m4h9jmfl05oha7pc316fg9q3l2mt/1570053600000/11896988386299524184/*/1B0zDu5wSEAW6G1d8Zcgv4vnDJqsOk75A',
    thumbnail: 'https://picsum.photos/id/1019/250/150/',
  },
]

const imagesItaly = [
  {
    original: 'https://doc-0c-88-docs.googleusercontent.com/docs/securesc/ha0ro937gcuc7l7deffksulhg5h7mbp1/ien1vnkuqr5mlf00pn4eomktngu30r2d/1570046400000/11896988386299524184/*/1xG5KOc1mzD7SKZTQp6O6F67spU9_K253',
    thumbnail: 'https://picsum.photos/id/1018/250/150/',
  },
]

const SecondPage = ({ search }) => {
  const { topic } = search

  return (
  <Layout>
    <SEO title="Photos"/>
    <h2>Photos</h2>

    <i className="fas fa-brush"/> <span style={{marginLeft: '10px'}}> Coming soon... </span>

    {/*<div id="hash_urls">*/}
    {/*  <Link to="photos?topic=greece">#greece</Link> <t/>*/}
    {/*  <Link to="photos?topic=ireland">#ireland</Link> <t/>*/}
    {/*  <Link to="photos?topic=italy">#italy</Link> <t/>*/}
    {/*</div>*/}

    {/*{(() => {*/}
      {/*switch (topic) {*/}
        {/*case "greece":*/}
          {/*return <ImageGallery items={imagesGreece}/>*/}
        {/*case "ireland":*/}
          {/*return <ImageGallery items={imagesIreland}/>*/}
        {/*case "italy":*/}
          {/*return <ImageGallery items={imagesItaly}/>*/}
        {/*default:*/}
          {/*return <ImageGallery items={imagesGreece}/>*/}
      {/*}*/}
    {/*})()}*/}

  </Layout>)
}

export default withLocation(SecondPage)
