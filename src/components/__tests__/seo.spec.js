import React from "react"
import renderer from "react-test-renderer"
import { useStaticQuery } from "gatsby"
import "jest-styled-components"
import baseData from "../../../__mocks__/baseData"

import SEO from "../seo"

beforeEach(() => {
  useStaticQuery.mockImplementation(() => baseData)
})

describe("SEO", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<SEO title="Some Title" />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
