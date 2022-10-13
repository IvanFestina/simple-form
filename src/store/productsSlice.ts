import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

export type ProductState = {
  products: Array<ItemTypes>;
  appMessage: string;
};

const initialState: ProductState = {
  products: [
    {
      id: uuidv4(),
      title: 'Cheap car',
      price: '2000',
      description: "this is the best cheap car we've got",
      image: 'https://s3-us-west-2.amazonaws.com/usedphotosuk/108342480_614.jpg',
      inCart: false,
    },
    {
      id: uuidv4(),
      title: 'Expensive car',
      price: '30000',
      description: "this is the best and expensive car we've got",
      image:
        'https://daxstreet.com/wp-content/uploads/2022/03/0d2m0qkg_car_625x300_12_January_22.jpg',
      inCart: false,
    },
  ],
  appMessage: '',
};

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    deleteProduct(state, action: PayloadAction<{ id: string }>) {
      state.products = state.products.filter(product => product.id !== action.payload.id);
    },
    toggleInCartState(state, action: PayloadAction<{ id: string; inCart: boolean }>) {
      state.products = state.products.map(product =>
        product.id === action.payload.id
          ? { ...product, inCart: action.payload.inCart }
          : product,
      );
    },
    createItem(
      state,
      action: PayloadAction<{
        title: string;
        price: string;
        image: string;
        description: string;
      }>,
    ) {
      const newProduct = {
        id: uuidv4(),
        title: action.payload.title,
        price: action.payload.price,
        description: action.payload.description,
        image: action.payload.image,
        inCart: false,
      };

      state.products.unshift(newProduct);
    },
    buyProducts(state) {
      state.products.map(p => (p.inCart = false));
    },
    setAppMessage(state, action: PayloadAction<{ appMessage: string }>) {
      state.appMessage = action.payload.appMessage;
    },
  },
});

export const {
  deleteProduct,
  toggleInCartState,
  createItem,
  buyProducts,
  setAppMessage,
} = productsSlice.actions;

export default productsSlice.reducer;
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
