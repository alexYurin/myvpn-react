import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type LocaleName = 'ru' | 'en'

export type SliceLocaleType = {
  name: LocaleName
}

export const initialState: SliceLocaleType = {
  name: 'en',
}

const nameSlice = 'locale'

const slice = createSlice({
  name: nameSlice,
  initialState,
  reducers: {
    changeLocale: (state, action: PayloadAction<LocaleName>) => ({
      name: action.payload,
    }),
  },
})

export const localeActions = {
  changeLocale: slice.actions.changeLocale,
}

export default slice
