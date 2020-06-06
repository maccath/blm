import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Amplify = () => (
  <Layout>
    <SEO title="Amplify" />
    <h1>Amplify</h1>
    <p>We can combine our voices to enact social change.</p>
    <ul>
      <li>
        <p>
          <a href="https://www.writetothem.com/">Write to your MP</a> demanding
          the fair treatment of our Black citizens, to publicly condemn the
          actions of Donald Trump and the police in America, the development of
          a strategy to fix race inequality, and the suspension of riot gear
          export (see{" "}
          <a href="https://www.caat.org.uk/resources/export-licences/dashboard?region=United+States+of+America&amp;item=anti-riot%2Fballistic+shields,components+for+anti-riot%2Fballistic+shields,anti-riot+shields,tear+gas%2Friot+control+agents,components+for+anti-riot+guns,components+for+civil+riot+control+agent+protection+equipment,acoustic+devices+for+riot+control,anti-riot+guns,civil+riot+control+agent+protection+equipment,maintenance+equipment+for+anti-riot+guns,technology+for+anti-riot%2Fballistic+shields,technology+for+the+use+of+anti-riot+guns,anti-riot+helmets,civil+riot-control+agent+protection+equipment,portable+incapacitating+substance+riot+control+devices,components+for+acoustic+devices+for+riot+control,portable+anti-riot+devices,portable+riot+control+electric-shock+devices,Tear+Gas+Group,components+for+civil+riot-control+agent+protection+equipment,components+for+portable+anti-riot+devices,components+for+portable+riot+control+electric-shock+devices,equipment+for+the+use+of+anti-riot+guns">
            CAAT
          </a>{" "}
          for a list of riot gear export license holders).
        </p>
      </li>
      <li>
        <p>
          Answer{" "}
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSc5AzoKpB904HmXAXlzJxKAt41YJ0cQ1zRlhMNe7PyfqEdxWA/viewform">
            The Impact of Omission
          </a>{" "}
          survey to investigate the extent to which British Imperial history is
          explored in the curriculum of compulsory education in the U.K.
        </p>
      </li>
      <li>
        <p>
          Sign the petition to{" "}
          <a href="https://www.change.org/p/uk-parliament-suspend-uk-export-of-tear-gas-rubber-bullets-and-riot-shields-to-usa">
            suspend riot gear export to the USA
          </a>
        </p>
      </li>
      <li>
        <p>
          Sign the petition to demand{" "}
          <a href="https://www.change.org/p/uk-government-bame-leadership-a-demand-for-a-covid-19-race-equality-strategy">
            a COVID19 race equality strategy
          </a>
        </p>
      </li>
      <li>
        <p>
          Sign the petition to{" "}
          <a href="https://www.change.org/p/department-of-education-battle-racism-by-updating-reading-lists-at-gcse">
            battle racism by updating GCSE reading lists
          </a>
        </p>
      </li>
      <li>
        <p>
          Send your friends a link to this page -{" "}
          <a href="http://blm.katy-ereira.co.uk">
            http://blm.katy-ereira.co.uk
          </a>
        </p>
      </li>
    </ul>
    <div className="mt-6 flex space-x-4">
      <Link
        to="/donate"
        class="flex-initial rounded-lg bg-white text-purple p-3 no-underline"
      >
        I have some spare cash.
      </Link>
      <Link
        to="/learn"
        class="flex-initial rounded-lg bg-white text-purple p-3 no-underline"
      >
        I care and want to learn more.
      </Link>
    </div>
  </Layout>
)

export default Amplify
