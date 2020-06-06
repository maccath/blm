import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Learn = () => (
  <Layout>
    <SEO title="Learn Anti-Racism" />
    <h1>Learn</h1>
    <p>
      There are a number of books and documentaries that explain white supremacy
      and focus on anti-racist education.
    </p>
    <h2>Watch and listen</h2>
    <div>
      <iframe
        title="What happens when I try to talk race with white people"
        width="560"
        height="315"
        src="https://www.youtube.com/embed/1SynR1NYcpo"
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen=""
      ></iframe>
    </div>
    <div>
      <iframe
        title="13TH | official trailer (2016) Netflix"
        width="560"
        height="315"
        src="https://www.youtube.com/embed/K6IXQbXPO3I"
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen=""
      ></iframe>
    </div>
    <p>
      <a href="https://www.netflix.com/gb/title/80091741">
        Watch 13TH on Netflix
      </a>
    </p>
    <div>
      <iframe
        title="Explained | Racial Wealth Gap | FULL EPISODE"
        width="560"
        height="315"
        src="https://www.youtube.com/embed/Mqrhn8khGLM"
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen=""
      ></iframe>
    </div>
    <p>
      <a href="http://laylafsaad.com/good-ancestor-podcast">
        The Good Ancestor Podcast
      </a>
    </p>
    <h2>Articles &amp; Opinions</h2>
    <ul>
      <li>
        <p>
          <a href="https://www.theguardian.com/commentisfree/2020/jun/03/racism-george-floyd-britain-america-uk-black-people#maincontent">
            The racism that killed George Floyd was built in Britain
          </a>{" "}
          - Afua Hirsch
        </p>
      </li>
      <li>
        <p>
          <a href="https://www.vogue.co.uk/arts-and-lifestyle/article/non-optical-ally-guide">
            If You Are White And Anti-Racist, This Non-Optical Allyship Guide Is
            Required Reading
          </a>{" "}
          - Mireille Cassandra Harper
        </p>
      </li>
    </ul>
    <h2>Anti-racist Book Club</h2>
    <ul>
      <li>
        <p>
          <a href="https://www.hive.co.uk/Product/Robin-DiAngelo/White-Fragility--Why-Its-So-Hard-for-White-People-to-Talk-About-Racism/23286943">
            White Fragility - Why It's So Hard For White People To Talk About
            Racism
          </a>{" "}
          by Robin DiAngelo
        </p>
      </li>
      <li>
        <p>
          <a href="https://www.hive.co.uk/Product/Layla-Saad/Me-and-White-Supremacy--How-to-Recognise-Your-Privilege-C/24440368">
            Me and White Supremacy: How to Recognise Your Privilege, Combat
            Racism and Change the World
          </a>{" "}
          by Layla F Saad
        </p>
      </li>
      <li>
        <p>
          <a href="https://www.hive.co.uk/Product/Ibram-X-Kendi/How-To-Be-an-Antiracist/23804402">
            How To Be An Antiracist
          </a>{" "}
          by Ibram X Kendi
        </p>
      </li>
      <li>
        <p>
          <a href="https://www.hive.co.uk/Product/Ijeoma-Oluo/So-You-Want-to-Talk-About-Race/24581698">
            So You Want To Talk About Race
          </a>{" "}
          by Ijeoma Oluo
        </p>
      </li>
      <li>
        <p>
          <a href="https://www.hive.co.uk/Product/Reni-Eddo-Lodge/Why-Im-No-Longer-Talking-to-White-People-About-Race--The-/21140288">
            Why I'm No Longer Talking To White People About Race
          </a>{" "}
          by Reni Eddo-Lodge
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
        to="/amplify"
        class="flex-initial rounded-lg bg-white text-purple p-3 no-underline"
      >
        I'd like to show solidarity.
      </Link>
    </div>
  </Layout>
)

export default Learn
