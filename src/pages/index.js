import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <h1>Black Lives Matter</h1>
    <p>
      <a href="https://edition.cnn.com/us/live-news/george-floyd-protests-06-03-20/index.html">
        Civil rights protests are occurring
      </a>{" "}
      across the US and the world in response to police brutality against Black
      people; most recently, the death of George Floyd. Racism is not a new idea
      - but society is at a tipping point, and if we act <strong>now</strong> we
      can collectively make real change.
    </p>
    <Link to="/page-2">Next</Link> <br />
  </Layout>
)

export default IndexPage
