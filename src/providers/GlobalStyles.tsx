import { createGlobalStyle, css } from 'styled-components';
import ArabicProBold from '../fonts/ArabicPro-Bold.woff2';
import ArabicProMedium from '../fonts/ArabicPro-Medium.woff2';
import ArabicProRegular from '../fonts/ArabicPro-Regular.woff2';
import AmericaMonoRegular from '../fonts/AmericaMono-Regular.woff2';
import HelveticaRegular from '../fonts/HelveticaExtended-Regular.woff2';
import RobotoRegular from '../fonts/roboto-regular.woff2';
import OpenSansRegular from '../fonts/opensans-regular.woff2';
import OpenSansBold from '../fonts/opensans-bold.woff2';
import OpenSansSemibold from '../fonts/opensans-semibold.woff2';

const GlobalStyles = createGlobalStyle`

*,
*::before,
*::after{
  box-sizing: border-box;
}

html {
  font-size: 100%; /* 1rem = 100% = 16px */
}

body {
  font-size: 16px;
  box-sizing: border-box;
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
}

  .ant-select-dropdown {
    background-color: transparent;
    padding: 0;
    border-radius: 0;
  }
  .ui-notification{

    ${(props) =>
			props.theme.colorScheme === 'dark' &&
			css`
				box-shadow:
					0px 9px 28px 8px #ffffff0d,
					0px 6px 16px 0px #ffffff14,
					0px 3px 6px -4px #ffffff1f;
			`}
    .ant-notification-notice-content {
  
    ~.ant-notification-notice-close, ~.ant-notification-notice-close:hover,  .ant-notification-notice-with-icon div{
      color: ${(props) => props.theme.UI.texts.primary};
    }

  

  }
    background-color: ${(props) => props.theme.UI.notification};
    &.no-icon{
      .ant-notification-notice-message, .ant-notification-notice-description{
        margin-inline-start:24px;
  }
      padding:20px 0 !important;

      
    }

  }
`;

export default GlobalStyles;
