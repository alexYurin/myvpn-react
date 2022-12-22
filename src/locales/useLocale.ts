import { RootState, useTypedSelector } from '@/store'

export default function () {
  const getLocale = (state: RootState) => state.locale
  const locale = useTypedSelector(getLocale)

  return locale.name
}
