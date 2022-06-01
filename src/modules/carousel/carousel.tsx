import React, { useContext, useEffect, useReducer } from 'react';
import CarouselArrow from './carousel-arrow';
import CarouselItem from './carousel-item';
import CarouselTrack from './carousel-track';
import { CarouselContext, CarouselProvider, carouselReducer, initialState } from './state/carousel-context';
import { ACTION_TYPES } from './types/carousel.types';

interface ICarouselProps {
  children: React.ReactNode[];
}

const Carousel: React.FC<ICarouselProps> = (props) => {
  const { children } = props;
  const [state, dispatch] = useReducer(carouselReducer, initialState);
  // const { state, dispatch } = useContext(CarouselContext);

  const handlePrevSlide = () => {
    if (state.currentIndex !== 1) {
      dispatch({
        type: ACTION_TYPES.SetIndex,
        payload: { index: state.currentIndex - 1 },
      });
    } else if (state.currentIndex === 1) {
      dispatch({
        type: ACTION_TYPES.SetIndex,
        payload: { index: children.length },
      });
    }
  };

  const handleNextSlide = async () => {
    if (state.currentIndex !== children.length) {
      await dispatch({
        type: ACTION_TYPES.SetIndex,
        payload: { index: state.currentIndex + 1 },
      });
    } else if (state.currentIndex === children.length) {
      await dispatch({
        type: ACTION_TYPES.SetIndex,
        payload: { index: 1 },
      });
    }
  };

  return (
    <CarouselProvider>
      <div className="block w-full">
        <CarouselArrow leftButton onClick={async () => handlePrevSlide()}>
          &larr;
        </CarouselArrow>
        <CarouselArrow onClick={async () => handleNextSlide()}>&rarr;</CarouselArrow>
        <CarouselTrack>
          {children.map((child, i) => (
            <CarouselItem style={{ opacity: state.currentIndex === i + 1 ? 1 : 0 }}>
              {state.currentIndex === i + 1 && child}
            </CarouselItem>
          ))}
        </CarouselTrack>
      </div>
    </CarouselProvider>
  );
};

export default Carousel;
