import Navbar from '@modules/navbar/components/navbar';
import React from 'react';
import Footer from '../../footer/components/footer';
import LayoutHead from './layout-head';

interface ILayout {
  children: React.ReactNode;
  headData?: React.ComponentPropsWithRef<typeof LayoutHead>;
}

const Layout: React.FC<ILayout> = (props) => {
  const { children, headData } = props;
  return (
    <main className="flex flex-col ">
      {/* Head */}
      <LayoutHead {...Object.assign(headData.seo)} />

      {/* Navbar */}
      <Navbar />
      {children}

      {/* Footer */}
      <Footer />
    </main>
  );
};

export default Layout;
