import React from 'react';
import Layout from '@modules/layout/components/layout';
import HomeView from '@modules/views/home/home-view';

interface IHomePage {}

const HomePage: React.FC<IHomePage> = (props) => {
  const {} = props;

  return (
    <Layout
      headData={{
        seo: {
          title: 'Home | Klangs Coffee',
          description:
            "Klang's Coffee Shop is a coffee shop located in Kuala Lumpur, Malaysia. We are a coffee shop that specializes in coffee, tea, and pastries.",
          url: 'https://www.klangscoffee.com/',
          canonicalUrl: 'https://www.klangscoffee.com/',
          imageUrl: '/assets/images/logo.png',
          imageAlt: "Klang's Coffee Shop Logo",
          imageDimensions: {
            width: 1000,
            height: 1000,
          },
        },
      }}
    >
      <HomeView />
    </Layout>
  );
};

export default HomePage;
