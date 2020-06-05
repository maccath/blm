import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const WhatToDo = () => (
  <Layout>
    <SEO title="What Can I Do?" />
    <h1>But what can I do about it?</h1>
    <p>
      If you've read this far; you've already done some valuable work.
      Acknowledging your white privilege and the existence of white supremacist
      culture is the first step on the journey to being actively anti-racist as
      opposed to just not being racist.
    </p>
    <p>
      Standing in solidarity with those who are experiencing oppression does not
      need to be at the expense of other causes. There are many things we can do
      to stand on the right side of history as it unfolds.
    </p>
    <p>
      I encourage you to keep this in mind as you navigate the world from now
      on. You may leave here, or stay for some more ideas and resources to put
      anti-racism into action.
    </p>
    <Link to="/donate">I have some spare cash.</Link>
    <br />
    <Link to="/learn">I care and want to learn more.</Link>
    <br />
    <Link to="/amplify">I'd like to show solidarity.</Link>
  </Layout>
)

export default WhatToDo
