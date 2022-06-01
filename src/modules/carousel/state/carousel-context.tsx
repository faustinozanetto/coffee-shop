import React, { useMemo, useReducer } from 'react';
import type { CarouselActions, CarouselContextState } from '../types/carousel.types';
import { ACTION_TYPES } from '../types/carousel.types';

const initialState: CarouselContextState = {
  currentIndex: 1,
  isTransitioning: false,
};

const CarouselContext = React.createContext<{ state: CarouselContextState; dispatch: React.Dispatch<CarouselActions> }>(
  {
    dispatch: () => null,
    state: initialState,
  }
);

const carouselReducer = (state: CarouselContextState, action: CarouselActions) => {
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

interface ICarouselProvidersProps {
  children: React.ReactNode;
}

const CarouselProvider: React.FC<ICarouselProvidersProps> = ({ children }) => {
  const [state, dispatch] = useReducer(carouselReducer, initialState);

  const providerValue = useMemo(() => ({ state, dispatch }), [state, dispatch]);

  return <CarouselContext.Provider value={providerValue}>{children}</CarouselContext.Provider>;
};

export { CarouselContext, CarouselProvider, carouselReducer, initialState };
