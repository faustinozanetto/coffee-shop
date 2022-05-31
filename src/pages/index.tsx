import Layout from '@modules/layout/components/layout';
import React from 'react';

interface IHomePage {}

const HomePage: React.FC<IHomePage> = (props) => {
  const {} = props;

  return (
    <Layout>
      <h1 className="text-5xl font-extrabold">Welcome</h1>
    </Layout>
  );
};

export default HomePage;
