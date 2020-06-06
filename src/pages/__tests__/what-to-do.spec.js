import React from "react"
import renderer from "react-test-renderer"
import { useStaticQuery } from "gatsby"
import "jest-styled-components"
import baseData from "../../../__mocks__/baseData"

import WhatToDo from "../what-to-do"

beforeEach(() => {
  useStaticQuery.mockImplementation(() => baseData)
})

describe("What To Do page", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<WhatToDo />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
