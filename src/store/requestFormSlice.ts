import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type ProductState = {
  products: Array<ItemTypes>;
  appMessage: string;
};

const initialState = {};

export const RequestSlice = createSlice({
  name: 'request',
  initialState,
  reducers: {},
});

// export const {} = RequestSlice.actions;

export default RequestSlice.reducer;
//
// // T Y P E S
type ItemTypes = {
  id: string;
  title: string;
  image?: string;
  description?: string;
  price: string;
  inCart: boolean;
};
