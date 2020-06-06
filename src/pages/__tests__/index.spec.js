import React from "react"
import renderer from "react-test-renderer"
import { useStaticQuery } from "gatsby"
import "jest-styled-components"
import baseData from "../../../__mocks__/baseData"

import Index from "../index"

beforeEach(() => {
  useStaticQuery.mockImplementation(() => baseData)
})

describe("Index page", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<Index />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
