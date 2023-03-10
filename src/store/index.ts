import { configureStore } from '@reduxjs/toolkit'
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux'
import { createLogger } from 'redux-logger'
import { rootReducer } from './rootReducer'
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import webStorage from 'redux-persist/lib/storage'

const logger = createLogger()

const getPlatformStorage = () => {
  try {
    return require('redux-persist-electron-storage')()
  } catch(error) {
    return webStorage
  }
}

const storage = getPlatformStorage()

const persistConfig = {
  storage,
  key: 'root',
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }).concat(logger),
})

export const persist = persistStore(store)

export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch

export type RootState = ReturnType<typeof store.getState>
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector
