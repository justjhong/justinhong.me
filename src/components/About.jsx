import React from "react"
import styled from "@emotion/styled"
import dimensions from "styles/dimensions"
import Img from "gatsby-image"
import PropTypes from "prop-types"
import { library } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faTwitter,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons"

library.add(faTwitter, faLinkedin, faGithub)

const AboutContainer = styled("div")`
  display: grid;
  grid-template-columns: 16em 1fr;
  grid-gap: 3em;

  @media (max-width: ${dimensions.maxwidthMobile}px) {
    grid-template-columns: none;
    grid-template-rows: 16em 1fr;
    grid-gap: 2em;
  }
`

const AboutImgContainer = styled("div")`
  display: flex;
  padding-top: 4em;
  align-items: flex-start;
  justify-content: center;
  flex-direction: row;

  @media (max-width: ${dimensions.maxwidthMobile}px) {
    padding-top: 0;
    grid-row: 1;
  }
`

const AboutImg = styled(Img)`
  border-radius: 50%;
`

const AboutLinkContainer = styled("div")`
  padding-top: 3em;
  padding-bottom: 1em;
  display: flex;
  flex-direction: column;
`

const AboutLink = styled("a")`
  margin-bottom: 1.5em;
  font-weight: 600;
  line-height: 1.9;
  text-decoration: none;
  color: currentColor;
  border: none !important;

  span {
    margin-left: 1em;
    transform: translateX(-8px);
    display: inline-block;
    opacity: 0;
    transition: all 400ms ease-in-out;
  }

  &:hover {
    span {
      transform: translateX(0px);
      opacity: 1;
      transition: all 150ms ease-in-out;
    }
  }
`

const AboutBio = styled("div")`
  padding-bottom: 3em;
  max-width: 560px;

  @media (max-width: ${dimensions.maxwidthMobile}px) {
    grid-row: 2;
  }
`

const About = ({ bio, socialLinks, bioImg }) => (
  <AboutContainer>
    <AboutImgContainer>
      <AboutImg fixed={bioImg} />
      <AboutLinkContainer>
        {socialLinks.map((social, i) => (
          <AboutLink
            key={i}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={social.icon} />
            <span>&#8594;</span>
          </AboutLink>
        ))}
      </AboutLinkContainer>
    </AboutImgContainer>
    <AboutBio>{bio}</AboutBio>
  </AboutContainer>
)

export default About

About.propTypes = {
  bio: PropTypes.object.isRequired,
  socialLinks: PropTypes.array.isRequired,
  bioImg: PropTypes.object.isRequired,
}
