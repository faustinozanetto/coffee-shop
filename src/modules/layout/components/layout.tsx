import React from 'react';
import Navbar from '@modules/navbar/components/navbar';
import { Flex } from '@chakra-ui/react';
import Footer from '../../footer/components/footer';
import LayoutHead from './layout-head';

interface ILayout {
  children: React.ReactNode;
  headData?: React.ComponentPropsWithRef<typeof LayoutHead>;
}

const Layout: React.FC<ILayout> = (props) => {
  const { children, headData } = props;
  return (
    <Flex flexDir="column">
      {/* Head */}
      <LayoutHead seo={headData.seo} />

      {/* Navbar */}
      <Navbar />
      {children}

      {/* Footer */}
      <Footer />
    </Flex>
  );
};

export default Layout;
