import { configureStore } from '@reduxjs/toolkit'
import { authApi } from './auth/authApi'
import userReuducer from './userInfo'


export const store = configureStore({
  reducer: {
    userInfo: userReuducer,
    [authApi.reducerPath]: authApi.reducer,

  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      authApi.middleware,

    ]),
})