import React from "react"
import styled from "styled-components"

const Container = styled.div`
  margin-top: 3rem;
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
