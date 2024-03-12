import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import {Seo} from "../components/seo"

const AboutPage = () => (
  <Layout>
    <div className="container  my-5">
      <div className="container">        
        <p>Created by <a href="https://hoynose.com" target="_blank" rel="noopener noreferrer">Ismael</a></p>
      </div>
      <Link to="/">Go back to the homepage</Link>
    </div>
  </Layout>
)

export default AboutPage

export const Head = () => (
    <Seo title=" " />
)