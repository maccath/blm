import React from "react"
import tw from "twin.macro"

const Container = tw.nav`
  flex space-x-5
`

export default function ButtonBar(props) {
  const children = props.children

  return (
    <Container className={props.className}>
      {React.Children.map(children, (child, i) => {
        return React.cloneElement(child, {
          className:
            "flex-initial rounded-lg bg-white text-purple p-3 no-underline",
        })
      })}
    </Container>
  )
}
