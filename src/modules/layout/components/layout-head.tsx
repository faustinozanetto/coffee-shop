import React from 'react';
import type { ISeoData } from '../layout.types';

interface ILayoutHead {
  children: React.ReactNode;
  seo: ISeoData;
}

const LayoutHead: React.FC<ILayoutHead> = (props) => {
  const { children, seo } = props;
  return <div>{children}</div>;
};

export default LayoutHead;
