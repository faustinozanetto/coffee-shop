import type { Action, ThunkAction } from '@reduxjs/toolkit';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import carouselSlice from './slices/carousels.slice';
import productSelectorSlice from './slices/product-selector.slice';

const reducers = combineReducers({
  carousels: carouselSlice.reducer,
  productSelector: productSelectorSlice.reducer,
});

export const store = configureStore({
  reducer: reducers,
});
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
