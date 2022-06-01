import React, { useEffect } from 'react';
import type { AnimationOptions, PanInfo } from 'framer-motion';
import { animate, useMotionValue } from 'framer-motion';
import useCarousel from '@hooks/carousel/use-carousel.hook';
import CarouselSlider from './carousel-slider';
import CarouselArrow from './carousel-arrow';

const transition: AnimationOptions<any> = {
  type: 'spring',
  bounce: 0,
};

const containerStyle: React.CSSProperties = {
  position: 'relative',
  width: '100%',
  height: '100%',
  overflowX: 'hidden',
  display: 'flex',
};

const Contaier = React.forwardRef<HTMLDivElement, { children: React.ReactNode }>((props, ref) => (
  <div ref={ref} style={containerStyle}>
    {props.children}
  </div>
));

interface ICarouselProps {
  children: React.ReactNode;
  interval?: number;
}

const Carousel: React.FC<ICarouselProps> = (props) => {
  const { children, interval = 2000 } = props;
  const x = useMotionValue(0);
  const containerRef = React.useRef<HTMLDivElement>(null);
  const childrens = React.Children.toArray(children);
  const { current, incrementIndex, decrementIndex } = useCarousel('', childrens.length);

  const calculateNewX = () => -current * (containerRef.current?.clientWidth || 0);

  const handleEndDrag = (e: Event, dragProps: PanInfo) => {
    const clientWidth = containerRef.current?.clientWidth || 0;

    const { offset } = dragProps;

    if (offset.x > clientWidth / 4) {
      decrementIndex();
    } else if (offset.x < -clientWidth / 4) {
      incrementIndex();
    } else {
      animate(x, calculateNewX(), transition);
    }
  };

  useEffect(() => {
    const controls = animate(x, calculateNewX(), transition);
    return controls.stop;
  }, [current]);

  return (
    <Contaier ref={containerRef}>
      {childrens.map((child, i) => (
        <CarouselSlider onDragEnd={handleEndDrag} x={x} i={i} key={i}>
          {child}
        </CarouselSlider>
      ))}
      <CarouselArrow left onClick={() => decrementIndex()}>
        &larr;
      </CarouselArrow>
      <CarouselArrow onClick={() => incrementIndex()}>&rarr;</CarouselArrow>
    </Contaier>
  );
};

export default Carousel;
