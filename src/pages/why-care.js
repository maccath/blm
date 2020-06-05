import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const WhyCare = () => (
  <Layout>
    <SEO title="Why should I care?" />
    <h1>Why should I care?</h1>
    <p>
      Although the resources I've posted so far reference racism in the USA - it
      is not a problem exclusive to America. The white supremacist culture
      exists in the UK too. We can see this in the following ways:
    </p>
    <ul>
      <li>
        <p>
          Black males were 3.9 times more likely to die from COVID19 than the
          White group. Among females, death rates were 3.3 times higher in the
          Black ethnic group than the White group - according to{" "}
          <a href="https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/889195/disparities_review.pdf">
            Public Health England review
          </a>
        </p>
      </li>
      <li>
        <p>
          There were 4 stop and searches for every 1,000 White people, compared
          with 38 for every 1,000 Black people - according to{" "}
          <a href="https://www.ethnicity-facts-figures.service.gov.uk/crime-justice-and-the-law/policing/stop-and-search/latest#by-ethnicity">
            Government statistics
          </a>
        </p>
      </li>
      <li>
        <p>
          Black people were most likely to be detained under the Mental Health
          Act in the year to March 2019, with 306.8 detentions per 100,000
          people. White people had the lowest rate of detention – 72.9
          detentions per 100,000 people - according to{" "}
          <a href="https://www.ethnicity-facts-figures.service.gov.uk/health/mental-health/detentions-under-the-mental-health-act/latest#by-ethnicity-5-ethnic-groups">
            Government statistics
          </a>
        </p>
      </li>
    </ul>
    <p>
      In reference to the current issues facing America, the{" "}
      <a href="https://www.amnesty.org.uk/press-releases/usa-protests-uk-should-review-exports-security-equipment-us-police-forces">
        UK government could be unwittingly supporting police violence by
        exporting riot gear including rubber bullets
      </a>
      . Such export of items likely to be used for internal repression is
      against UK policy. The UK has{" "}
      <a href="https://www.independent.co.uk/news/world/americas/america-is-running-out-of-lethal-injection-drugs-because-of-a-european-embargo-to-end-the-death-10106933.html">
        refused to supply chemicals for execution of prisoners in the USA which
        has derailed capital punishment in the US
      </a>
      .
    </p>
    <p>
      <strong>
        Our policies and actions can and do make a difference around the world.
      </strong>
    </p>
    <Link to="/who-cares">Why should I take it from you?</Link> <br />
    <Link to="/what-to-do">That's pretty damning.</Link>
  </Layout>
)

export default WhyCare
