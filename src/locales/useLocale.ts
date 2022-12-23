import { RootState, useTypedSelector } from '@/store'
import { createSelector } from '@reduxjs/toolkit'

export default function () {
  const getLocale = (state: RootState) => state.locale

  const localeSelector = createSelector(getLocale, locale => locale.name)
  const localeName = useTypedSelector(localeSelector)

  return localeName
}
