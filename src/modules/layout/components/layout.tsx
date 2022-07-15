import React from 'react';
import Navbar from '@modules/navbar/components/navbar';
import { Flex } from '@chakra-ui/react';
import Footer from '../../footer/components/footer';
import LayoutHead from './layout-head';

interface ILayoutProps {
  /* Childrne */
  children: React.ReactNode;
  /* Head Component Props, used to tweak seo and other things. */
  headData?: React.ComponentPropsWithRef<typeof LayoutHead>;
}

const Layout: React.FC<ILayoutProps> = (props) => {
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
