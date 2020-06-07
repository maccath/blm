import React from "react"
import renderer from "react-test-renderer"
import { useStaticQuery } from "gatsby"
import "jest-styled-components"
import baseData from "../../../__mocks__/baseData"

import WhitePrivilege from "../white-privilege"
import Layout from "../../components/layout"

beforeEach(() => {
  useStaticQuery.mockImplementation(() => baseData)
})

describe("White Privilege page", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(
        <Layout>
          <WhitePrivilege />
        </Layout>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
