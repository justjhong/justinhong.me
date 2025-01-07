import { css } from "@emotion/react"
import colors from "styles/colors"
import dimensions from "styles/dimensions"

const globalStyles = css`
  html,
  body,
  #root {
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    min-height: 100%;
  }

  body {
    width: 100%;
    margin: 0 auto;
    font-size: 16px;
    line-height: 1.5;
    color: var(--text-color);
    background-color: var(--bg-color);
    transition: background-color 0.3s ease, color 0.3s ease;
    -webkit-font-smoothing: antialiased;

    &[data-theme="light"] {
      --text-color: ${colors.grey900};
      --bg-color: #ffffff;
      --header-color: ${colors.grey900};
    }

    &[data-theme="dark"] {
      --text-color: #ffffff;
      --bg-color: ${colors.grey900};
      --header-color: #ffffff;
    }

    @media (max-width: ${dimensions.maxwidthMobile}px) {
      font-size: 14px;
    }

    * {
      box-sizing: border-box;

      &::selection {
        background: ${colors.orange500};
        color: white;
      }
    }

    h1 {
      font-size: 1.9em;
      font-weight: 700;
      color: var(--header-color);
    }
  }

  /*
    A workaround for forcing accessibility wrappers
    to have a 100% height.
    Reach Router issue here: https: //github.com/reach/router/issues/63
    */
  #___gatsby,
  div[role="group"][tabindex] {
    height: 100%;
    min-height: 100% !important;
  }
`

export default globalStyles
