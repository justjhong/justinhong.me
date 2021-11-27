import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"
import styled from "@emotion/styled"
import dimensions from "styles/dimensions"
import Layout from "components/Layout"
import MetaHelmet from "components/Helmet"
import PublicationsContent from "../content/PublicationsContent"
import BooksSvg from "assets/images/books.svg"

const IconContainer = styled("div")`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 4em 0 0 0;
  max-height: 200px;

  @media (max-width: ${dimensions.maxwidthMobile}px) {
    margin-top: 1em;
  }
`

const PublicationsContainer = styled("div")`
  display: grid;
  grid-template-columns: 16em 1fr;
  grid-gap: 3em;

  @media (max-width: ${dimensions.maxwidthMobile}px) {
    grid-template-columns: none;
    grid-template-rows: 16em 1fr;
    grid-gap: 2em;
  }
`

const PublicationsPage = ({ meta }) => (
  <>
    <MetaHelmet meta={meta} />
    <Layout>
      <PublicationsContainer>
        <IconContainer>
          <img src={BooksSvg} />
        </IconContainer>
        <div>
          <h2>Publications</h2>
          <PublicationsContent />
        </div>
      </PublicationsContainer>
    </Layout>
  </>
)

export default ({ data }) => {
  const meta = data.site.siteMetadata

  return <PublicationsPage meta={meta} />
}

PublicationsPage.propTypes = {
  meta: PropTypes.object.isRequired,
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
  }
`
