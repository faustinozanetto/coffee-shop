import { Global } from '@emotion/react';

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
        scroll-behavior: smooth;
      }
    `}
    />
  );
};

export default GlobalStyles;
