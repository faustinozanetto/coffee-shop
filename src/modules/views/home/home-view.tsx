import React from 'react';
import { Box } from '@chakra-ui/react';
import HomeAboutUs from './about-us/home-about-us';
import HomeCustomers from './customers/home-customers';
import HomeHero from './hero/home-hero';
import HomePlace from './place/home-place';
import HomeProcess from './process/home-process';
import HomeProducts from './products/home-products';
import HomeTeam from './team/home-team';
import HomeCTA from './home-cta/home-cta';
import HomeBuy from './home-buy/home-buy';

interface IHomeViewProps {}

const HomeView: React.FC<IHomeViewProps> = (props) => {
  const {} = props;

  return (
    <Box>
      <HomeHero />
      <HomeAboutUs />
      <HomeProducts />
      <HomePlace />
      <HomeBuy />
      <HomeTeam />
      <HomeCustomers />
      <HomeProcess />
      <HomeCTA />
    </Box>
  );
};

export default HomeView;
