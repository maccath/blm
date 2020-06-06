import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const WhoCares = () => (
  <Layout>
    <SEO title="Who cares?" />
    <h1>Why should I take it from you?</h1>
    <p>Fair point.</p>
    <p>
      Would you take it from the ice cream manufacturer{" "}
      <a href="https://www.benjerry.com/about-us/media-center/dismantle-white-supremacy">
        Ben And Jerry's
      </a>
      ?
    </p>
    <div>
      <blockquote className="twitter-tweet">
        <p lang="en" dir="ltr">
          The murder of George Floyd was the result of inhumane police brutality
          that is perpetuated by a culture of white supremacy.{" "}
          <a href="https://t.co/YppGJKHkyN">https://t.co/YppGJKHkyN</a>{" "}
          <a href="https://t.co/YABzgQMf69">pic.twitter.com/YABzgQMf69</a>
        </p>
        &mdash; Ben &amp; Jerry&#39;s (@benandjerrys){" "}
        <a href="https://twitter.com/benandjerrys/status/1267875868673794048?ref_src=twsrc%5Etfw">
          June 2, 2020
        </a>
      </blockquote>
      <script
        async
        src="https://platform.twitter.com/widgets.js"
        charSet="utf-8"
      ></script>
    </div>
    <p>
      How about popular comedian{" "}
      <a href="https://www.youtube.com/watch?v=qUZIzYwmEDE">James Corden</a>?
    </p>
    <div>
      <iframe
        title="James Corden: It's Time for Change in the US"
        width="560"
        height="315"
        src="https://www.youtube.com/embed/qUZIzYwmEDE"
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen=""
      ></iframe>
    </div>
    <p>Netflix?</p>
    <div>
      <blockquote className="twitter-tweet">
        <p lang="en" dir="ltr">
          To be silent is to be complicit. <br />
          Black lives matter. <br />
          <br />
          We have a platform, and we have a duty to our Black members,
          employees, creators and talent to speak up.
        </p>
        &mdash; Netflix (@netflix){" "}
        <a href="https://twitter.com/netflix/status/1266829242353893376?ref_src=twsrc%5Etfw">
          May 30, 2020
        </a>
      </blockquote>
      <script
        async
        src="https://platform.twitter.com/widgets.js"
        charSet="utf-8"
      ></script>
    </div>
    <p>
      Or the company I work with,{" "}
      <a href="https://www.skillshare.com/blog/company/a-note-from-our-ceo-and-commitment-to-anti-racism?via=site-banner">
        Skillshare
      </a>
      ?
    </p>
    <div className="mt-6 flex space-x-4">
      <Link
        to="/what-to-do"
        class="flex-initial rounded-lg bg-white text-purple p-3 no-underline"
      >
        Yeah, OK, but what can I do about it?
      </Link>
    </div>
  </Layout>
)

export default WhoCares
