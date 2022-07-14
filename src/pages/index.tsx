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
          url: 'https://www.klangs.com/',
          canonicalUrl: 'https://www.klangs.com/',
          imageUrl: '/assets/images/image.png',
          imageAlt: "Klang's Coffee Shop Logo",
          imageDimensions: {
            width: 600,
            height: 200,
          },
        },
      }}
    >
      <HomeView />
    </Layout>
  );
};

export default HomePage;
