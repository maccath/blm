import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const WhitePrivilege = () => (
  <Layout>
    <SEO title="White Privilege" />
    <h1>White privilege?</h1>
    <ul>
      <li>
        <a href="https://everydayfeminism.com/2014/09/white-privilege-explained/">
          White Privilege Explained - in Comic Form
        </a>
      </li>
      <li>
        <a href="http://www.raceconscious.org/2017/07/race-matters-story-white-privilege/">
          Race Matters - A Story About White Privilege
        </a>
      </li>
      <li>
        <a href="https://www.tolerance.org/magazine/fall-2018/what-is-white-privilege-really">
          What is White Privilege?
        </a>
      </li>
      <li>
        <a href="https://goodmenproject.com/featured-content/white-fragility-why-its-so-hard-to-talk-to-white-people-about-racism-twlm/">
          Why it's so hard to talk to white people about racism
        </a>
      </li>
      <li>
        <a href="https://www.theatlantic.com/politics/archive/2017/10/the-language-of-white-supremacy/542148/">
          The Language of White Supremacy
        </a>
      </li>
    </ul>
    <Link to="/why-care">Ok, next.</Link> <br />
  </Layout>
)

export default WhitePrivilege
