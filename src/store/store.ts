import { configureStore } from '@reduxjs/toolkit';

import requestReducer from 'store/requestFormSlice';

export const store = configureStore({
  reducer: {
    request: requestReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type NullableType<T> = null | T;
