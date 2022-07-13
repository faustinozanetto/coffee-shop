import { Global } from '@emotion/react';
import { fontConfigurations, injectFontFamily } from '@modules/fonts/fonts';

const GlobalStyles = () => {
  return (
    <Global
      styles={`
      * {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }

      html {
        text-rendering: optimizeLegibility;
        font-feature-settings: "kern";
      }
    `}
    />
  );
};

export default GlobalStyles;
