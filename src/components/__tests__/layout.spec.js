import React from "react"
import renderer from "react-test-renderer"
import { useStaticQuery } from "gatsby"
import "jest-styled-components"
import baseData from "../../../__mocks__/baseData"

import Layout from "../layout"

beforeEach(() => {
  useStaticQuery.mockImplementation(() => baseData)
})

describe("Layout", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<Layout children="Some content" />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
