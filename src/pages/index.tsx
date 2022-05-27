import React from 'react';

interface IHomePage {}

const HomePage: React.FC<IHomePage> = (props) => {
  const {} = props;

  return (
    <div>
      <h1>Welcome</h1>
    </div>
  );
};

export default HomePage;
