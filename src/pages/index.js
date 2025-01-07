import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"
import styled from "@emotion/styled"
import colors from "styles/colors"
import dimensions from "styles/dimensions"
import Layout from "components/Layout"
import BioContent from "content/BioContent"
import About from "components/About"
import links from "assets/text/links.json"
import MetaHelmet from "../components/Helmet"

const Hero = styled("div")`
  padding-bottom: 3em;
  margin-bottom: 6em;
  max-width: 1032px;

  @media (max-width: ${dimensions.maxwidthMobile}px) {
    padding-top: 0;
    margin-bottom: 3em;
  }

  a {
    text-decoration: none;
    border-bottom: 2px dotted ${colors.grey600};
    transition: all 100ms ease-in-out;
    color: inherit;

    &:hover {
      cursor: pointer;
      transition: all 100ms ease-in-out;
      border-color: ${colors.grey900};
    }
  }
`

const RenderBody = ({ meta, bio, socialLinks, bioImg }) => (
  <>
    <MetaHelmet meta={meta} />
    <Hero>
      <About bio={bio} socialLinks={socialLinks} bioImg={bioImg}></About>
    </Hero>
  </>
)

export default ({ data }) => {
  const meta = data.site.siteMetadata
  const bioImg = data.file.childImageSharp.fixed

  return (
    <Layout>
      <RenderBody
        meta={meta}
        bio={<BioContent />}
        socialLinks={links}
        bioImg={bioImg}
      />
    </Layout>
  )
}

RenderBody.propTypes = {
  meta: PropTypes.object.isRequired,
  bio: PropTypes.object.isRequired,
  socialLinks: PropTypes.array.isRequired,
  bioImg: PropTypes.object.isRequired,
}

export const query = graphql`
  {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
    file(relativePath: { eq: "biopic.jpg" }) {
      childImageSharp {
        fixed(width: 200, height: 225) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
