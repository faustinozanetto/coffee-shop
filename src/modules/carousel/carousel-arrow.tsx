import React from 'react';

interface ICarouselArrowProps {
  onClick: () => void;
  leftButton?: boolean;
  children: React.ReactNode;
}

const CarouselArrow: React.FC<ICarouselArrowProps> = (props) => {
  const { onClick, leftButton, children } = props;

  return (
    <button
      className="absolute px-4 py-3 top-2/4 text-base rounded-none font-medium text-center text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 "
      type="button"
      onClick={onClick}
      style={{
        left: leftButton ? '10rem' : 'auto',
        right: leftButton ? 'auto' : '10rem',
      }}
    >
      {children}
    </button>
  );
};

export default CarouselArrow;
