import Head from 'next/head';
import React from 'react';
import type { ISeoData } from '../layout.types';

interface ILayoutHead {
  /** SEO Data to fill up on every page. */
  seo: ISeoData;
}

const LayoutHead: React.FC<ILayoutHead> = (props) => {
  const {
    seo = {
      title: 'Home | Coffee Shop',
      description: 'Coffee Shop',
      url: 'https://coffeeshop.com',
      canonicalUrl: 'https://coffeeshop.com',
      imageUrl: 'https://coffeeshop.com/static/images/logo.png',
      imageAlt: 'Coffee Shop Logo',
      imageDimensions: {
        width: '200',
        height: '200',
      },
    },
  } = props;
  return (
    <Head>
      {/* Title */}
      <title>{seo.title}</title>
      {/* Manifest */}
      <link rel="manifest" href="/manifest.json" />
      {/* Base */}
      <meta charSet="UTF-8" />
      <meta name="robots" content="index" />
      <meta name="description" content={seo.description} />

      <meta content="snippet, code, editor, snappy" name="keywords" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="manifest" href="/images/favicon/site.webmanifest" />
      <link rel="canonical" href={seo.canonicalUrl} />
      <meta content="#4f46e5" name="theme-color" />

      {/* Open grahp */}
      <meta property="og:url" content={seo.url} />
      <meta property="og:image" content={seo.imageUrl} />
      <meta property="og:image:width" content={seo.imageDimensions.width.toString()} />
      <meta property="og:image:height" content={seo.imageDimensions.height.toString()} />
      <meta property="og:image:alt" content={seo.imageAlt} />
      <meta property="og:locale" content="en" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Coffee Shop" />
      <meta property="og:description" content={seo.description} />
    </Head>
  );
};

export default LayoutHead;
