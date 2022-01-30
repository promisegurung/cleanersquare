import * as React from "react"
// import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Hero from "../components/hero"
import Reviews from "../components/reviews"
import Expertise from "../components/expertise"
const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Hero />
    <Reviews />
    <Expertise />
    <h1>contact us</h1>
  </Layout>
)

export default IndexPage
