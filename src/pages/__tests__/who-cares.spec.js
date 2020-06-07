import React from "react"
import renderer from "react-test-renderer"
import { useStaticQuery } from "gatsby"
import "jest-styled-components"
import baseData from "../../../__mocks__/baseData"

import WhoCares from "../who-cares"
import Layout from "../../components/layout"

beforeEach(() => {
  useStaticQuery.mockImplementation(() => baseData)
})

describe("Who Cares? page", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(
        <Layout>
          <WhoCares />
        </Layout>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
