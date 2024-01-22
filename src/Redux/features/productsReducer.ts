import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type ProductType = {
  id: number,
  company: string,
  title: string,
  description: string,
  price: number,
  discount: number,
};

interface ProductsState {
  value: ProductType[];
}

const initialState: ProductsState = {
  value: [],
};

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<ProductType>) => {
      state.value.push(action.payload);
    },
  },
});

export const { setProducts } = productsSlice.actions;
