import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Donate = () => (
  <Layout>
    <SEO title="Donate" />
    <h1>Donate</h1>
    <p>
      There are many ways to use our financial privilege to combat the current
      injustices faced by Black people in America, as well as dismantling white
      supremacy and race inequality at home.
    </p>
    <p>
      <strong>
        <a href="https://www.joincampaignzero.org/">Campaign Zero</a>
      </strong>{" "}
      - to limit police interventions, improve community interactions, and
      ensure accountability; leading to fewer deaths at the hands of US police.
    </p>
    <p>
      <strong>
        <a href="https://secure.actblue.com/donate/bail_funds_george_floyd">
          Bail Funds
        </a>
      </strong>{" "}
      - to secure the release of nonviolent protestors placed in jail pre-trial,
      to get them fed, and to a place of safety during the US protests.
    </p>
    <p>
      <strong>
        <a href="https://blacklivesmatter.com/">Black Lives Matter</a>
      </strong>{" "}
      and{" "}
      <strong>
        <a href="https://www.gofundme.com/f/ukblm-fund">UK BLM</a>
      </strong>{" "}
      - to fight for Freedom, Liberation and Justice.
    </p>
    <p>
      <strong>
        <a href="https://www.runnymedetrust.org/">Runnymede</a>
      </strong>{" "}
      - to fund an independent think tank challenging race inequality in
      Britain.
    </p>
    <p>
      <strong>
        <a href="https://www.gofundme.com/f/exist-loudly-fund-to-support-queer-black-yp">
          Exist Loudly
        </a>
      </strong>{" "}
      - to support queer Black young people.
    </p>
    <p>
      <strong>
        <a href="https://www.gofundme.com/f/black-minds-matter-uk">
          Black Minds Matter
        </a>
      </strong>{" "}
      - to help Black people access appropriate mental health services in the
      UK.
    </p>
    <p>
      <strong>
        <a href="https://www.ukblackpride.org.uk/">UK Black Pride</a>
      </strong>{" "}
      - to celebrate African, Asian, Middle Eastern, Latin American and
      Caribbean-heritage LGBTQ people.
    </p>
    <p>
      <strong>
        <a href="https://www.theblackcurriculum.com/">The Black Curriculum</a>
      </strong>{" "}
      - to address the lack of Black British history in the UK Curriculum.
    </p>

    <Link to="/learn">I care and want to learn more.</Link>
    <br />
    <Link to="/amplify">I'd like to show solidarity.</Link>
  </Layout>
)

export default Donate
