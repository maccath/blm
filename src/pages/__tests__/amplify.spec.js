import React from "react"
import renderer from "react-test-renderer"
import { useStaticQuery } from "gatsby"
import "jest-styled-components"
import baseData from "../../../__mocks__/baseData"

import Amplify from "../amplify"

beforeEach(() => {
  useStaticQuery.mockImplementation(() => baseData)
})

describe("Amplify page", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<Amplify />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
