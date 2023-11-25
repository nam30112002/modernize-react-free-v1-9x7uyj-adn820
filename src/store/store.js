import { configureStore } from '@reduxjs/toolkit'
import { default as CheckAdminReducer}  from './CheckAdminSlice.js'


export const store = configureStore({
  reducer: {
    isAdmin : CheckAdminReducer
  },
})