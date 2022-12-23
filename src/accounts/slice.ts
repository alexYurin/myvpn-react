import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AccountType } from './types'

export type SliceAccountType = {
  token: string
  provider: AccountType
}

export const initialState: SliceAccountType[] = []

const nameSlice = 'accounts'

const slice = createSlice({
  name: nameSlice,
  initialState,
  reducers: {
    addAccount: (state, action: PayloadAction<SliceAccountType>) => ([
      ...state,
      action.payload
    ]),
    removeAccount: (state, action: PayloadAction<SliceAccountType>) => ([
      ...state,
      action.payload
    ]),
  },
})

export const accountsActions = {
  changeLocale: slice.actions.addAccount,
}

export default slice
