import {css} from "styled-components";

export const fontface = css`
  @font-face {
    font-family: 'Roboto', sans-serif;
    src: url('/fonts/Roboto-Light.ttf') format("truetype");
    font-weight: 300;
    font-display: swap;
  }

  @font-face {
    font-family: 'Roboto', sans-serif;
    src: url('/fonts/Roboto-Regular.ttf') format("truetype");
    font-weight: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Roboto', sans-serif;
    src: url('/fonts/Roboto-Medium.ttf') format("truetype");
    font-weight: 500;
    font-display: swap;
  }

  @font-face {
    font-family: 'Roboto', sans-serif;
    src: url('/fonts/Roboto-Bold.ttf') format("truetype");
    font-weight: 700;
    font-display: swap;
  }
`