import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const Heading = styled.h1`
  letter-spacing: 0.45rem;
  text-transform: uppercase;
  font-size: 3.375em;
  text-align: center;
`

const IndexPage = () => (
  <Layout>
    <SEO title="Black Lives Matter" />
    <div
      style={{
        maxWidth: `200px`,
        margin: `0 auto 1.45rem auto`,
      }}
    >
      <Image />
    </div>
    <Heading>Black Lives Matter</Heading>
    <p>
      <a href="https://edition.cnn.com/us/live-news/george-floyd-protests-06-03-20/index.html">
        Civil rights protests are occurring
      </a>{" "}
      across the US and the world in response to police brutality against Black
      people; most recently, the death of George Floyd. Racism is not a new idea
      - but society is at a tipping point, and if we act <strong>now</strong> we
      can collectively make real change.
    </p>
    <Link to="/im-not-racist">Next</Link> <br />
  </Layout>
)

export default IndexPage
