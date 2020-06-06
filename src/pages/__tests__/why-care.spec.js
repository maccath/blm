import React from "react"
import renderer from "react-test-renderer"
import { useStaticQuery } from "gatsby"
import "jest-styled-components"
import baseData from "../../../__mocks__/baseData"

import WhyCare from "../why-care"

beforeEach(() => {
  useStaticQuery.mockImplementation(() => baseData)
})

describe("Why Care? page", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<WhyCare />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
