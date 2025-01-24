import { createGlobalStyle, css } from 'styled-components';
import ArabicProBold from '../fonts/ArabicPro-Bold.woff2';
import ArabicProMedium from '../fonts/ArabicPro-Medium.woff2';
import ArabicProRegular from '../fonts/ArabicPro-Regular.woff2';
import AmericaMonoRegular from '../fonts/AmericaMono-Regular.woff2';
import HelveticaRegular from '../fonts/HelveticaExtended-Regular.woff2';
import RobotoRegular from '../fonts/roboto-regular.woff2';
import RobotoMedium from '../fonts/Roboto-Medium.woff2';
import RobotoBold from '../fonts/Roboto-Bold.woff2';
import OpenSansRegular from '../fonts/opensans-regular.woff2';
import OpenSansBold from '../fonts/opensans-bold.woff2';
import OpenSansSemibold from '../fonts/opensans-semibold.woff2';

const GlobalStyles = createGlobalStyle`

:root {
  color-scheme: ${(props) => props.theme.colorScheme};
}

*,
*::before,
*::after{
  box-sizing: border-box;
}

// use antD fonts for everything
* {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 
      'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji' !important;
  }

html {
  font-size: 100%; /* 1rem = 100% = 16px */
}

body {
  font-size: 16px;
  box-sizing: border-box;
  /* background-color:${(props) => (props.theme.colorScheme === 'dark' ? '#0c0c0c' : '#f2f2f2')}; */
}

html,body{
  scroll-behavior: smooth;
}
.ant-select-dropdown{
  background-color: transparent;
}
/* 
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
    font-weight: 400;
    font-display: block;
  }
  @font-face {
    font-family: 'Roboto-medium';
    src: url('${RobotoMedium}') format('woff2');
    font-style: normal;
    font-weight: 500;
    font-display: block;
  }
  @font-face {
    font-family: 'Roboto-bold';
    src: url('${RobotoBold}') format('woff2');
    font-style: normal;
    font-weight: 700;
    font-display: block;
  }

  
@font-face {
  font-family: 'Open Sans';
  src:  url('${OpenSansRegular}')  format("woff2");
  font-weight: 300;
  font-style: normal;
  font-display: block;
}

@font-face {
  font-family: 'Open Sans';
  src:  url('${OpenSansBold}')  format("woff2");
  font-weight: bold;
  font-style: normal;
  font-display: block;
}

@font-face {
  font-family: 'Open Sans';
  src:  url('${OpenSansSemibold}')  format("woff2");
  font-weight: 600;
  font-style: normal;
  font-display: block;
} */


`;

export default GlobalStyles;
