import React from "react"
import renderer from "react-test-renderer"
import { useStaticQuery } from "gatsby"
import "jest-styled-components"
import baseData from "../../../__mocks__/baseData"

import WhatToDo from "../what-to-do"
import Layout from "../../components/layout"

beforeEach(() => {
  useStaticQuery.mockImplementation(() => baseData)
})

describe("What To Do page", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(
        <Layout>
          <WhatToDo />
        </Layout>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
