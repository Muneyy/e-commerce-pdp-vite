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
      if (state.value.find((item) => item.id === action.payload.id)) {
        // eslint-disable-next-line no-param-reassign
        state.value = state.value.map((item) => {
          if (item.id === action.payload.id) {
            return {
              ...item,
              quantity: item.quantity + action.payload.quantity,
            };
          }
          return item;
        });
      } else {
        state.value.push(action.payload);
      }
    },
    deleteCartItem: (state, action: PayloadAction<number>) => {
      // eslint-disable-next-line no-param-reassign
      state.value = state.value.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addToCart, deleteCartItem } = cartSlice.actions;

// export const selectCart = (state: RootState) => state.cart.value;

export default cartSlice.reducer;
