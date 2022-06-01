import React from 'react';

interface ICarouselTrackProps {
  children: React.ReactNode;
}

const CarouselTrack: React.FC<ICarouselTrackProps> = (props) => {
  const { children } = props;

  return <div className="flex items-center justify-center">{children}</div>;
};

export default CarouselTrack;
