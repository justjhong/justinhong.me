import React from "react"
import styled from "@emotion/styled"
import colors from "styles/colors"
import dimensions from "styles/dimensions"

const FooterContainer = styled("div")`
  padding-top: 3.75em;
  padding-bottom: 3em;
  display: flex;
  max-width: ${dimensions.maxwidthDesktop}px;
  bottom: 0;
  flex-direction: column;
  align-items: center;
`

const FooterAuthor = styled("div")`
  font-size: 0.75em;
  color: ${colors.grey700};
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  margin-top: 1.5em;
`

const Footer = () => (
  <FooterContainer>
    <FooterAuthor>Justin Hong © 2025</FooterAuthor>
  </FooterContainer>
)

export default Footer
