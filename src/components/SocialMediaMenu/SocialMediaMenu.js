import React from "react"
import styled from "styled-components"
import { FacebookSquare } from "styled-icons/boxicons-logos/FacebookSquare"
import { Instagram } from "styled-icons/boxicons-logos/Instagram"
import { LinkedinSquare } from "styled-icons/boxicons-logos/LinkedinSquare"
import { Github } from "styled-icons/boxicons-logos/Github"

const SocialMediaMenuWrapper = styled.div``

const StyledFacebookSquare = styled(FacebookSquare)`
  color: #aafbdc;
`
const StyledInstagram = styled(Instagram)`
  color: #aafbdc;
`
const StyledLinkedinSquare = styled(LinkedinSquare)`
  color: #aafbdc;
`
const StyledGithub = styled(Github)`
  color: #aafbdc;
`

export const SocialMediaMenu = () => (
  <SocialMediaMenuWrapper>
    <StyledLinkedinSquare size={40} />
    <StyledGithub size={40} />
    <StyledFacebookSquare size={40} />
    <StyledInstagram size={40} />
  </SocialMediaMenuWrapper>
)
