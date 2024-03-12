import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import {Seo} from "../components/seo"

const SecondPage = () => (
  <Layout>
    <div className="container text-center my-5">
      <Link to="/"> Intro </Link>
    </div>
  </Layout>
)

export default SecondPage

export const Head = () => (
    <Seo title=" Informacion " />
)
