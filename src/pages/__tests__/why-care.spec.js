import React from "react"
import renderer from "react-test-renderer"
import { useStaticQuery } from "gatsby"
import "jest-styled-components"
import baseData from "../../../__mocks__/baseData"

import WhyCare from "../why-care"
import Layout from "../../components/layout"

beforeEach(() => {
  useStaticQuery.mockImplementation(() => baseData)
})

describe("Why Care? page", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(
        <Layout>
          <WhyCare />
        </Layout>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
