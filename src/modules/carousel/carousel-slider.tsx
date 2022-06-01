import React from 'react';
import type { MotionValue, PanInfo } from 'framer-motion';
import { motion } from 'framer-motion';

interface ICarouselSliderProps {
  x: MotionValue<number>;
  i: number;
  children: React.ReactNode;
  onDragEnd: (e: Event, dragProps: PanInfo) => void;
}

const CarouselSlider: React.FC<ICarouselSliderProps> = (props) => {
  const { x, i, children, onDragEnd } = props;

  return (
    <div className="flex-none h-full">
      <motion.div
        style={{
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
    </div>
  );
};

export default CarouselSlider;
