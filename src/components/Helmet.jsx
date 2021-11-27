import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"

const MetaHelmet = ({ meta }) => (
  <Helmet
    title={meta.title}
    meta={[
      {
        name: `description`,
        content: meta.description,
      },
      {
        property: `og:title`,
        content: meta.title,
      },
      {
        property: `og:description`,
        content: meta.description,
      },
      {
        property: `og:type`,
        content: `website`,
      },
      {
        name: `twitter:card`,
        content: `summary`,
      },
      {
        name: `twitter:creator`,
        content: meta.author,
      },
      {
        name: `twitter:title`,
        content: meta.title,
      },
      {
        name: `twitter:description`,
        content: meta.description,
      },
    ].concat(meta)}
  />
)

MetaHelmet.propTypes = {
  meta: PropTypes.object.isRequired,
}

export default MetaHelmet
