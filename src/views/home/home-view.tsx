import React from 'react';
import HomeHero from './home-hero';
import HomePlace from './home-place';

interface IHomeViewProps {}

const HomeView: React.FC<IHomeViewProps> = (props) => {
  const {} = props;

  return (
    <div className="flex flex-col">
      <HomeHero />
      <HomePlace />
    </div>
  );
};

export default HomeView;
