import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type ProductType = {
  id: string,
  company: string,
  title: string,
  description: string,
  price: number,
  discount: number,
  quantity: number
};

interface CartState {
  value: ProductType[];
}

const initialState: CartState = {
  value: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<ProductType>) => {
      state.value.push(action.payload);
    },
    deleteCartItem: (state, action: PayloadAction<string>) => {
      // eslint-disable-next-line no-param-reassign
      state.value = state.value.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addToCart, deleteCartItem } = cartSlice.actions;

// export const selectCart = (state: RootState) => state.cart.value;

export default cartSlice.reducer;
