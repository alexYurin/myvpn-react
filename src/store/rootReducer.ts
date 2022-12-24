import { combineReducers } from '@reduxjs/toolkit'
import theme from '@/theme/slice'
import locale from '@/locales/slice'
import accounts from '@/accounts/slice'

export const rootReducer = combineReducers({
  theme: theme.reducer,
  locale: locale.reducer,
  accounts: accounts.reducer,
})
