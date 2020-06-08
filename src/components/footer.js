import React from "react"
import tw from "twin.macro"
import { Github } from "@icons-pack/react-simple-icons"

const Container = tw.footer`
  mt-10 text-sm text-center
`

export default function Footer() {
  return (
    <Container className={"flex justify-center space-x-5"}>
      <div>
        <a href="https://thenounproject.com/cesarreynoso562/">
          Fist icon by Cesar Reynoso
        </a>
      </div>
      <div>
        <a href="https://github.com/maccath/blm">
          <Github size={15} className={"inline mr-2"} />
          Contribute on GitHub
        </a>
      </div>
    </Container>
  )
}
