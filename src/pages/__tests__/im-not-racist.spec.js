import React from "react"
import renderer from "react-test-renderer"
import { useStaticQuery } from "gatsby"
import "jest-styled-components"
import baseData from "../../../__mocks__/baseData"

import ImNotRacist from "../im-not-racist"
import Layout from "../../components/layout"

beforeEach(() => {
  useStaticQuery.mockImplementation(() => baseData)
})

describe("I'm Not Racist page", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(
        <Layout>
          <ImNotRacist />
        </Layout>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
