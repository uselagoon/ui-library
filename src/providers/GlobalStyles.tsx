import { createGlobalStyle } from "styled-components";
import ArabicProBold from "../fonts/ArabicPro-Bold.woff2";
import ArabicProMedium from "../fonts/ArabicPro-Medium.woff2";
import ArabicProRegular from "../fonts/ArabicPro-Regular.woff2";
import AmericaMonoRegular from "../fonts/AmericaMono-Regular.woff2";
import HelveticaRegular from "../fonts/HelveticaExtended-Regular.woff2";
import RobotoRegular from "../fonts/roboto-regular.woff2";

const GlobalStyles = createGlobalStyle`

html {
  font-size: 100%; /* 1rem = 100% = 16px */
}

body {
  font-size: 16px;
}

@font-face {
    font-family: 'ArabicPro-Regular';
    src: url('${ArabicProRegular}') format('woff2');
    font-style: normal;
    font-display: block;
  }

  @font-face {
    font-family: 'ArabicPro-Medium';
    src: url('${ArabicProMedium}') format('woff2');
    font-style: normal;
    font-display: block;
  }

  @font-face {
    font-family: 'ArabicPro-Bold';
    src: url('${ArabicProBold}') format('woff2');
    font-style: normal;
    font-display: block;
  }
  @font-face {
    font-family: 'AmericaMono-Regular';
    src: url('${AmericaMonoRegular}') format('woff2');
    font-style: normal;
    font-display: block;
  }
  @font-face {
    font-family: 'Helvetica-Regular';
    src: url('${HelveticaRegular}') format('woff2');
    font-style: normal;
    font-display: block;
  }
  @font-face {
    font-family: 'Roboto';
    src: url('${RobotoRegular}') format('woff2');
    font-style: normal;
    font-display: block;
  }
  
  .ant-select-dropdown {
    background-color: transparent;
    padding: 0;
    border-radius: 0;
  }
`;

export default GlobalStyles;
