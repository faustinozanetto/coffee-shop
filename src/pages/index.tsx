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
          title: 'Home | Coffee Shop',
        },
      }}
    >
      <HomeView />
    </Layout>
  );
};

export default HomePage;
