import React from "react"
import LogoSvg from "assets/images/icon.svg"
import styled from "@emotion/styled"

const StyledLogoImg = styled("img")`
  height: 48px;
`

const Logo = () => <StyledLogoImg src={LogoSvg} alt={"Justin Hong Logo"}/>

export default Logo
