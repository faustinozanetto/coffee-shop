// import '@fontsource/poppins';
import '@fontsource/montserrat';
import React from 'react';
import type { AppProps } from 'next/app';
import { store } from '@state/store';
import { Provider } from 'react-redux';
import { ChakraProvider } from '@chakra-ui/react';
import theme from '@theme/theme';
import GlobalStyles from '@theme/global-styles';

type ICoffeeShop = AppProps;

const CoffeeSgop: React.FC<ICoffeeShop> = (props) => {
  const { Component, pageProps } = props;

  return (
    <React.StrictMode>
      <ChakraProvider theme={theme}>
        <Provider store={store}>
          <GlobalStyles />
          <Component {...pageProps} />
        </Provider>
      </ChakraProvider>
    </React.StrictMode>
  );
};

export default CoffeeSgop;
