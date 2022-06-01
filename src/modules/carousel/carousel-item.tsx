import classNames from 'classnames';
import React from 'react';

interface ICarouselItemProps {
  children: React.ReactNode;
  style: React.CSSProperties;
}

const CarouselItem: React.FC<ICarouselItemProps> = (props) => {
  const { children, style } = props;

  return (
    <div className=" transition-opacity ease-out  delay-100 opacity-0" style={style}>
      {children}
    </div>
  );
};
export default CarouselItem;
