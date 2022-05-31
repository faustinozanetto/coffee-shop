import '@styles/globals.scss';
import '@fontsource/poppins';
import React from 'react';
import type { AppProps } from 'next/app';

type ICoffeeShop = AppProps;

const CoffeeSgop: React.FC<ICoffeeShop> = (props) => {
  const { Component, pageProps } = props;

  return <Component {...pageProps} />;
};

export default CoffeeSgop;
