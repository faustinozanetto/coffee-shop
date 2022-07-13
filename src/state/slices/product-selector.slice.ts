import { createSlice } from '@reduxjs/toolkit';
import type { ProductSelectorState } from '@state/state.types';
import { RootState } from '@state/store';

const initialState: ProductSelectorState = {
  id: 1,
};

const productSelectorSlice = createSlice({
  initialState,
  name: 'product-selector',
  reducers: {
    setSelectedProduct: (state, action) => {
      state.id = action.payload;
    },
  },
});
export const { setSelectedProduct } = productSelectorSlice.actions;

export const selectProductSelectorState = (state: RootState) => state.carousels.id;

export default productSelectorSlice;
