import React from "react"
import renderer from "react-test-renderer"
import { useStaticQuery } from "gatsby"
import "jest-styled-components"
import baseData from "../../../__mocks__/baseData"

import Image from "../image"

beforeEach(() => {
  useStaticQuery.mockImplementation(() => baseData)
})

describe("Image", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<Image />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
