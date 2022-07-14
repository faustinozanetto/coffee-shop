import Head from 'next/head';
import React from 'react';
import type { ISeoData } from '../layout.types';

interface ILayoutHead {
  /** SEO Data to fill up on every page. */
  seo: ISeoData;
}

const LayoutHead: React.FC<ILayoutHead> = (props) => {
  const { seo } = props;
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

      {/* Favicons */}
      <link rel="apple-touch-icon" sizes="57x57" href="/assets/assets/images/favicon/apple-icon-57x57.png" />
      <link rel="apple-touch-icon" sizes="60x60" href="/assets/images/favicon/apple-icon-60x60.png" />
      <link rel="apple-touch-icon" sizes="72x72" href="/assets/images/favicon/apple-icon-72x72.png" />
      <link rel="apple-touch-icon" sizes="76x76" href="/assets/images/favicon/apple-icon-76x76.png" />
      <link rel="apple-touch-icon" sizes="114x114" href="/assets/images/favicon/apple-icon-114x114.png" />
      <link rel="apple-touch-icon" sizes="120x120" href="/assets/images/favicon/apple-icon-120x120.png" />
      <link rel="apple-touch-icon" sizes="144x144" href="/assets/images/favicon/apple-icon-144x144.png" />
      <link rel="apple-touch-icon" sizes="152x152" href="/assets/images/favicon/apple-icon-152x152.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/assets/images/favicon/apple-icon-180x180.png" />
      <link rel="icon" type="image/png" sizes="192x192" href="/assets/images/favicon/android-icon-192x192.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/assets/images/favicon/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="96x96" href="/assets/images/favicon/favicon-96x96.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/assets/images/favicon/favicon-16x16.png" />

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
