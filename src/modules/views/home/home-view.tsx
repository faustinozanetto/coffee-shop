import React from 'react';
import HomeCustomers from './customers/home-customers';
import HomeHero from './hero/home-hero';
import HomePlace from './place/home-place';
import HomeProcess from './process/home-process';
import HomeProducts from './products/home-products';
import HomeTeam from './team/home-team';

interface IHomeViewProps {}

const HomeView: React.FC<IHomeViewProps> = (props) => {
  const {} = props;

  return (
    <div className="flex flex-col">
      <HomeHero />
      {/* <HomeProducts />
      <HomeTeam />
      <HomeProcess />
      <HomeCustomers />
      <HomePlace /> */}
    </div>
  );
};

export default HomeView;
