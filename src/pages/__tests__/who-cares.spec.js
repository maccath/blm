import React from "react"
import renderer from "react-test-renderer"
import { useStaticQuery } from "gatsby"
import "jest-styled-components"
import baseData from "../../../__mocks__/baseData"

import WhoCares from "../who-cares"

beforeEach(() => {
  useStaticQuery.mockImplementation(() => baseData)
})

describe("Who Cares? page", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<WhoCares />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
