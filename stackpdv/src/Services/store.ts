import { configureStore } from '@reduxjs/toolkit'
import vendaSlice from '../Features/Venda/vendaSlice'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
  key: 'root',
  storage
}


export default configureStore({
  reducer: {
    venda: vendaSlice
  },
})