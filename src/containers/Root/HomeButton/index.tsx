import { Link, useMatch } from 'react-router-dom'
import { ChevronBackOutline, HomeOutline } from 'react-ionicons'
import { useTheme } from '@/theme'
import styles from './styles.module.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

const {
  homeButtonIconSize,
  homeButtonIconColorDark,
  homeButtonIconColorLight,
} = styles

const HomeButton = (): JSX.Element | null => {
  const themeName = useTheme()
  const isMatchPath = useMatch('/')
  const isNotHomePathname = !isMatchPath?.pathname
  const iconColor = themeName === 'dark'
    ? homeButtonIconColorDark
    : homeButtonIconColorLight

  if (isNotHomePathname) {
    return (
      <Link to="/" className={cx('home-button')}>
        <ChevronBackOutline
          color={iconColor}
          height={homeButtonIconSize}
          width={homeButtonIconSize}
        />
        <HomeOutline
          color={iconColor}
          height={homeButtonIconSize}
          width={homeButtonIconSize}
        />
      </Link>
    )
  }

  return null
}

export default HomeButton
