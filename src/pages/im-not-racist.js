import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ImNotRacist = () => (
  <Layout>
    <SEO title="I'm Not Racist!" />
    <h1>I'm not racist!</h1>
    <p>
      Few people are actively racist. I'm assuming that you're not a member of
      the KKK or a supporter of any far-right political parties.
    </p>
    <p>
      The problem is that we live within a white supremacist system; it is
      comfortable for us, because it meets our needs. No matter what obstacles
      we have had to overcome in order to make it through life; the colour of
      our skin has never hindered us in any material way. That's not to say that
      white people never suffer; clearly, we do - but we do not suffer because
      we are white.
    </p>
    <p>
      This means that we have 'privilege'. Just like how those of us in the
      upper classes have 'financial privilege' when compared to those in
      poverty, we can also have the privilege of white skin, the privilege of
      ability, or the privilege of being male.
    </p>
    <p>
      This privilege does not make us bad people - after all, we didn't choose
      the hand we were dealt in life. It just means that we have an advantage.
      We are able to use this advantage for social good.
    </p>
    <div className="mt-6 flex space-x-4">
      <Link
        to="/white-privilege"
        class="flex-initial rounded-lg bg-white text-purple p-3 no-underline"
      >
        Not convinced. Can I learn more?
      </Link>
      <Link
        to="/why-care"
        class="flex-initial rounded-lg bg-white text-purple p-3 no-underline"
      >
        I get it.
      </Link>
    </div>
  </Layout>
)

export default ImNotRacist
