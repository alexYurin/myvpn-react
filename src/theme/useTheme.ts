import { RootState, useTypedSelector } from '@/store'

export default function () {
  const getTheme = (state: RootState) => state.theme
  const theme = useTypedSelector(getTheme)

  return theme.name
}
