import { combineReducers } from '@reduxjs/toolkit'
import theme from '@/theme/slice'
import locale from '@/locales/slice'

export const rootReducer = combineReducers({
  theme: theme.reducer,
  locale: locale.reducer,
})
