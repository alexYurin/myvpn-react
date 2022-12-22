import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type ThemeName = 'dark' | 'light'

export type SliceThemeType = {
  name: ThemeName
}

const initialState: SliceThemeType = {
  name: 'dark',
}

const nameSlice = 'theme'

const slice = createSlice({
  name: nameSlice,
  initialState,
  reducers: {
    changeTheme: (state, action: PayloadAction<ThemeName>) => ({
      name: action.payload,
    }),
  },
})

export const themeActions = {
  changeTheme: slice.actions.changeTheme,
}

export default slice
