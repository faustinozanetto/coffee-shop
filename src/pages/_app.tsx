import '@styles/globals.scss';
import '@fontsource/poppins';
import React from 'react';
import type { AppProps } from 'next/app';
import { store } from '@state/store';
import { Provider } from 'react-redux';

type ICoffeeShop = AppProps;

const CoffeeSgop: React.FC<ICoffeeShop> = (props) => {
  const { Component, pageProps } = props;

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
};

export default CoffeeSgop;
