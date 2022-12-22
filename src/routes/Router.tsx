import { useEffect } from 'react'
import { RouterProvider, RouterProviderProps } from 'react-router-dom'
import i18next, { useLocale } from '@/locales'
import { useTheme } from '@/theme'
import routes from './routes'

export type RouterPropsType = Omit<RouterProviderProps, 'router'>

const Router = (props: RouterPropsType): JSX.Element => {
  const themeName = useTheme()
  const localeName = useLocale()

  useEffect(() => {
    document.querySelector('html')
      ?.setAttribute('class', `theme-${themeName}`)
  }, [themeName])

  useEffect(() => {
    i18next.changeLanguage(localeName)
  }, [localeName])

  return <RouterProvider {...props} router={routes} />
}

export default Router
