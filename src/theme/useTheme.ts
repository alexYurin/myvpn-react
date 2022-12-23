import { RootState, useTypedSelector } from '@/store'
import { createSelector } from '@reduxjs/toolkit'

export default function () {
  const getTheme = (state: RootState) => state.theme

  const themeSelector = createSelector(getTheme, theme => theme.name)
  const themeName = useTypedSelector(themeSelector)

  return themeName
}
