import React from 'react';
import LayoutHead from './layout-head';

interface ILayout {
  children: React.ReactNode;
  headData?: React.ComponentPropsWithRef<typeof LayoutHead>;
}

const Layout: React.FC<ILayout> = (props) => {
  const { children, headData } = props;
  return (
    <main className="flex flex-col min-h-screen">
      {/* Head */}
      <LayoutHead {...headData} />
      {children}
    </main>
  );
};

export default Layout;
