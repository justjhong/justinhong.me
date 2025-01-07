import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"
import colors from "styles/colors"
import dimensions from "styles/dimensions"
import { useTheme } from "../context/ThemeContext"
import Logo from "components/Logo"
import SunIcon from "assets/images/sun-icon.svg"
import MoonIcon from "assets/images/moon-icon.svg"
import CV from "assets/docs/cv.pdf"

const HeaderContainer = styled("div")`
  padding-top: 3.75em;
  padding-bottom: 3em;
`

const HeaderContent = styled("div")`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const HeaderLinks = styled("div")`
  display: grid;
  grid-template-columns: repeat(3, auto);
  grid-gap: 7em;
  justify-content: flex-end;
  width: 100%;
  max-width: 200px;

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    grid-gap: 5.5em;
  }

  @media (max-width: ${dimensions.maxwidthMobile}px) {
    grid-gap: 2.5em;
  }

  a {
    color: var(--text-color);
    text-decoration: none;
    border-bottom: 3px solid transparent;
    font-weight: 600;
    font-size: 0.95em;
    height: 100%;
    display: block;
    position: relative;

    &:after {
      position: absolute;
      content: "";
      left: 0;
      bottom: 0;
      width: 100%;
      height: 3px;
      background: transparent;
      bottom: -3px;
      transition: 100ms ease-in-out background;
    }

    &:hover {
      &:after {
        background: ${colors.blue500};
        transition: 100ms ease-in-out background;
      }
    }

    &.Link--is-active {
      &:after {
        background: ${colors.blue500};
        transition: 100ms ease-in-out background;
      }
    }
  }
`

const ThemeToggle = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  color: var(--text-color);
  font-size: 1em;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  margin-top: -2px;

  &:hover {
    color: ${colors.blue500};
  }

  img {
    width: 20px;
    height: 20px;
    filter: ${props => props.isDark ? 'invert(1)' : 'none'};
  }
`

const Header = () => {
  const { isDark, toggleTheme } = useTheme();

  React.useEffect(() => {
    document.body.setAttribute('data-theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  return (
    <HeaderContainer>
      <HeaderContent>
        <Link to="/">
          <Logo />
        </Link>
        <HeaderLinks>
          <Link
            activeClassName="Link--is-active"
            to="/publications">
            Publications
          </Link>
          <a href={CV}>CV</a>
          <ThemeToggle onClick={toggleTheme} aria-label="Toggle dark mode" isDark={isDark}>
            <img src={isDark ? SunIcon : MoonIcon} alt={isDark ? "Switch to light mode" : "Switch to dark mode"} />
          </ThemeToggle>
        </HeaderLinks>
      </HeaderContent>
    </HeaderContainer>
  )
}

export default Header
