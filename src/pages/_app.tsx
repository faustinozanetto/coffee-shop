import '@styles/globals.scss';
import React from 'react';
import { AppProps } from 'next/app';

type ICoffeeShop = AppProps & {};

const CoffeeSgop: React.FC<ICoffeeShop> = (props) => {
  const { Component, pageProps } = props;

  return <Component {...pageProps} />;
};

export default CoffeeSgop;
