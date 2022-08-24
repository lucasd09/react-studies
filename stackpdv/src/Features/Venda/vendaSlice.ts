import { createSlice } from '@reduxjs/toolkit'

export const vendaSlice = createSlice({
  name: 'venda',
  initialState: {
    value: [],
  },
  reducers: {
    increment: (state) => {
      

    },
    decrement: (state) => {

    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
})

export const { increment, decrement, incrementByAmount } = vendaSlice.actions

export default vendaSlice.reducer