import type { CarouselActions, CarouselState } from '../types/carousel.types';
import { ACTION_TYPES } from '../types/carousel.types';

const initialState: CarouselState = {
  currentIndex: 1,
  isTransitioning: false,
};

const carouselReducer = (state: CarouselState, action: CarouselActions) => {
  switch (action.type) {
    case ACTION_TYPES.SetIndex: {
      console.log({ state, action });
      return { ...state, currentIndex: action.payload.index };
    }
    case ACTION_TYPES.SetTransitioning:
      return { ...state, isTransitioning: action.payload.transitioning };
    default:
      return state;
  }
};

export { carouselReducer, initialState };
