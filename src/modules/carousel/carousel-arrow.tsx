import React from 'react';

const baseArrowStyle: React.CSSProperties = {
  position: 'absolute',
  width: '50px',
  height: '50px',
  backgroundColor: 'rgba(0,0,0,0.5)',
  top: '50%',
  transform: 'translateY(-50%)',
  borderRadius: '50%',
  color: '#fff',
  fontSize: '20px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
};

interface ICarouselArrowProps {
  onClick: () => void;
  left?: boolean;
  children: React.ReactNode;
}

const CarouselArrow = ({ left = false, children, onClick }: ICarouselArrowProps) => (
  <div
    onClick={onClick}
    style={{
      ...baseArrowStyle,
      left: left ? '20px' : 'initial',
      right: !left ? '10px' : 'initial',
    }}
  >
    {children}
  </div>
);

export default CarouselArrow;
