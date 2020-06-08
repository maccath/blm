import React from "react"
import renderer from "react-test-renderer"
import "jest-styled-components"

import ButtonBar from "../ButtonBar"

describe("Button Bar", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<ButtonBar />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
