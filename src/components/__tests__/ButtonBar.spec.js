import React from "react"
import renderer from "react-test-renderer"
import "jest-styled-components"
import { Link } from "gatsby"

import ButtonBar from "../ButtonBar"

describe("Button Bar", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<ButtonBar />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it("gives child elements the correct classes", () => {
    const tree = renderer
      .create(
        <ButtonBar>
          <Link to={"/test"}></Link>
        </ButtonBar>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
