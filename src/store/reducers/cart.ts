import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { CardapioItem } from '../../pages/Home'

type CartState = {
  items: CardapioItem[]
  isOpen: boolean
  isCheckoutOpen: boolean
}

const initialState: CartState = {
  items: [],
  isOpen: false,
  isCheckoutOpen: false
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<CardapioItem>) => {
      const cardapio = state.items.find((item) => item.id === action.payload.id)
      if (!cardapio) {
        state.items.push(action.payload)
      } else {
        alert('O jogo já está no carrinho')
      }
    },
    remove: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
    },
    open: (state) => {
      state.isOpen = true
      state.isCheckoutOpen = false
    },
    close: (state) => {
      state.isOpen = false
    },
    openCheckout: (state) => {
      state.isCheckoutOpen = true
      state.isOpen = false
    },
    closeCheckout: (state) => {
      state.isCheckoutOpen = false
    }
  }
})

export const { add, remove, open, close, openCheckout, closeCheckout } =
  cartSlice.actions
export default cartSlice.reducer
