import React from "react"
import tw from "twin.macro"

const Container = tw.footer`
  mt-10 text-sm text-center
`

export default function Footer() {
  return (
    <Container>
      <p>
        Compiled by <a href="http://katy-ereira.co.uk">Katy Ereira</a> /{" "}
        <a href="http://twitter.com/maccath">@maccath</a> | Fist icon by{" "}
        <a href="https://thenounproject.com/cesarreynoso562/">Cesar Reynoso</a>
      </p>
    </Container>
  )
}
