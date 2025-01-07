import React from "react"
import LogoSvg from "assets/images/icon.svg"
import styled from "@emotion/styled"
import { useTheme } from "../context/ThemeContext"

const StyledLogoImg = styled("img")`
  height: 48px;
  filter: ${props => props.isDark ? 'invert(1)' : 'none'};
  transition: filter 0.3s ease;
`

const Logo = () => {
  const { isDark } = useTheme();
  return <StyledLogoImg src={LogoSvg} alt="Justin Hong Logo" isDark={isDark} />
}

export default Logo
