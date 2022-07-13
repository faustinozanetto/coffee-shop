import '@fontsource/poppins';
import React from 'react';
import type { AppProps } from 'next/app';
import { store } from '@state/store';
import { Provider } from 'react-redux';
import { ChakraProvider } from '@chakra-ui/react';
import theme from '@theme/theme';

type ICoffeeShop = AppProps;

const CoffeeSgop: React.FC<ICoffeeShop> = (props) => {
  const { Component, pageProps } = props;

  return (
    <ChakraProvider theme={theme}>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </ChakraProvider>
  );
};

export default CoffeeSgop;
