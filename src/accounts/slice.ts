import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AccountNameType } from './types'

export type SliceAccountType = {
  token?: string
  provider: AccountNameType
}

export const initialState: SliceAccountType[] = []

const nameSlice = 'accounts'

const slice = createSlice({
  name: nameSlice,
  initialState,
  reducers: {
    registerAccount: (state, action: PayloadAction<SliceAccountType>) => [
      ...state,
      action.payload,
    ],
    logoutAccount: (state, action: PayloadAction<AccountNameType>) => [
      ...state.filter(account => account.provider !== action.payload),
    ],
  },
})

export const accountsActions = {
  registerAccount: slice.actions.registerAccount,
  logoutAccount: slice.actions.logoutAccount,
}

export default slice
