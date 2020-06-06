import React from "react"
import renderer from "react-test-renderer"
import { useStaticQuery } from "gatsby"
import "jest-styled-components"
import baseData from "../../../__mocks__/baseData"

import Learn from "../learn"

beforeEach(() => {
  useStaticQuery.mockImplementation(() => baseData)
})

describe("Learn page", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<Learn />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
