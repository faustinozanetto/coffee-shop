import React from 'react';
import HomeAboutUs from './about-us/home-about-us';
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
      <HomeAboutUs />
      <HomeProducts />
      {/* <HomeProducts />
      <HomeTeam />
      <HomeProcess />
      <HomeCustomers />
      <HomePlace /> */}
    </div>
  );
};

export default HomeView;
