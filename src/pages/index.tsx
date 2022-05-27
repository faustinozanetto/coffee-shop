import React from 'react';

interface IHomePage {}

const HomePage: React.FC<IHomePage> = (props) => {
  const {} = props;

  return (
    <div>
      <h1 className="text-5xl font-extrabold">Welcome</h1>
    </div>
  );
};

export default HomePage;
