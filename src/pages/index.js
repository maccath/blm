import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import tw from "twin.macro"

const Heading = styled.h1`
  letter-spacing: 0.45rem;
  text-transform: uppercase;
  font-size: 3.375em;
  text-align: center;
`

const Logo = styled.div`
  max-width: 200px;
  margin: 0 auto 1.45rem auto;
`

const Cta = tw.p`
    text-3xl
`

const IndexPage = () => (
  <Layout>
    <SEO title="Black Lives Matter" />
    <header>
      <Logo>
        <Image />
      </Logo>
      <Heading>Black Lives Matter</Heading>
    </header>
    <Cta>
      <a href="https://edition.cnn.com/us/live-news/george-floyd-protests-06-03-20/index.html">
        Civil rights protests are occurring
      </a>{" "}
      across the US and the world in response to police brutality against Black
      people; most recently, the death of George Floyd. Racism is not a new idea
      - but society is at a tipping point, and if we act <strong>now</strong> we
      can collectively make real change.
    </Cta>
    <div className="mt-6 flex space-x-4 justify-center">
      <Link
        to="/im-not-racist"
        className="flex-initial rounded-lg bg-white text-purple p-3 no-underline"
      >
        Get Started &raquo;
      </Link>
    </div>
  </Layout>
)

export default IndexPage
