/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import { MDXProvider } from "@mdx-js/react"

import Footer from "./footer"
import SEO from "./seo"
import { Link } from "gatsby"
import PageTransition from "gatsby-plugin-page-transitions"

const shortcodes = { Link, SEO }

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <PageTransition transitionTime={500}>
        <MDXProvider components={shortcodes}>
          <div
            style={{
              margin: `0 auto`,
              maxWidth: 960,
              padding: `0 1.0875rem 1.45rem`,
            }}
          >
            <main>{children}</main>
            <Footer></Footer>
          </div>
        </MDXProvider>
      </PageTransition>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
