import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type ProductType = {
  id: number,
  company: string,
  title: string,
  description: string,
  price: number,
  discount: number,
  quantity: number
};

interface ProductsState {
  value: ProductType[];
}

const initialState: ProductsState = {
  value: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<ProductType>) => {
      state.value.push(action.payload);
    },
  },
});

export const { addToCart } = cartSlice.actions;
