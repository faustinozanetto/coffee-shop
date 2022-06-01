import React from 'react';
import type { MotionStyle, MotionValue, PanInfo } from 'framer-motion';
import { motion } from 'framer-motion';

const pageStyle: MotionStyle = {
  width: '100%',
  height: '100%',
  display: 'inline-block',
  flex: 'none',
};

interface ICarouselSliderProps {
  x: MotionValue<number>;
  i: number;
  children: React.ReactNode;
  onDragEnd: (e: Event, dragProps: PanInfo) => void;
}

const CarouselSlider: React.FC<ICarouselSliderProps> = (props) => {
  const { x, i, children, onDragEnd } = props;

  return (
    <motion.div
      style={{
        ...pageStyle,
        x,
        left: `${i * 100}%`,
        right: `${i * 100}%`,
      }}
      drag="x"
      dragElastic={0.3}
      onDragEnd={onDragEnd}
    >
      {children}
    </motion.div>
  );
};

export default CarouselSlider;
