import { createSlice } from '@reduxjs/toolkit';
import { CarouselsState } from '@state/state.types';
import { RootState } from '@state/store';

const initialState: CarouselsState = {
  data: [],
};

const carouselSlice = createSlice({
  initialState,
  name: 'carousels',
  reducers: {
    addCarousel: (state, action) => {
      state.data.push(action.payload);
    },
    setCarouselIndex: (state, action) => {
      if (state.data.find((carousel) => carousel.id === action.payload.id)) {
        Object.assign(
          state.data.find((carousel) => carousel.id === action.payload.id),
          { current: action.payload.current }
        );
      } else {
        state.data.push(action.payload);
      }
    },
  },
});
export const { addCarousel, setCarouselIndex } = carouselSlice.actions;

export const selectCarouselsState = (state: RootState) => state.carousels.data;

export default carouselSlice;
