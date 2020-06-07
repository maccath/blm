import React from "react"
import renderer from "react-test-renderer"
import { useStaticQuery } from "gatsby"
import "jest-styled-components"
import baseData from "../../../__mocks__/baseData"

import Donate from "../donate"
import Layout from "../../components/layout"

beforeEach(() => {
  useStaticQuery.mockImplementation(() => baseData)
})

describe("Donate page", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(
        <Layout>
          <Donate />
        </Layout>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
