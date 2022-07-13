import React from 'react';
import Navbar from '@modules/navbar/components/navbar';
import Footer from '../../footer/components/footer';
import LayoutHead from './layout-head';
import { Flex } from '@chakra-ui/react';

interface ILayout {
  children: React.ReactNode;
  headData?: React.ComponentPropsWithRef<typeof LayoutHead>;
}

const Layout: React.FC<ILayout> = (props) => {
  const { children, headData } = props;
  return (
    <Flex flexDir="column">
      {/* Head */}
      <LayoutHead {...Object.assign(headData.seo)} />

      {/* Navbar */}
      <Navbar />
      {children}

      {/* Footer */}
      <Footer />
    </Flex>
  );
};

export default Layout;
