import React from "react"
import renderer from "react-test-renderer"
import { useStaticQuery } from "gatsby"
import "jest-styled-components"
import baseData from "../../../__mocks__/baseData"

import WhitePrivilege from "../white-privilege"

beforeEach(() => {
  useStaticQuery.mockImplementation(() => baseData)
})

describe("White Privilege page", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<WhitePrivilege />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
