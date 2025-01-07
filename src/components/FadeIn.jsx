import React, { useEffect, useState } from "react"
import styled from "@emotion/styled"
import PropTypes from "prop-types"

const FadeInContainer = styled.div`
  opacity: ${props => (props.visible ? 1 : 0)};
  transition: opacity 0.3s ease;
`

const FadeIn = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false)
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    // Only animate if it hasn't animated before
    if (!hasAnimated) {
      const timer = setTimeout(() => {
        setIsVisible(true)
        setHasAnimated(true)
      }, 50)
      return () => clearTimeout(timer)
    }
  }, [hasAnimated])

  return (
    <FadeInContainer visible={isVisible || hasAnimated}>
      {children}
    </FadeInContainer>
  )
}

FadeIn.propTypes = {
  children: PropTypes.node.isRequired,
}

export default FadeIn
