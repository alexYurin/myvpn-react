import { useLocation } from 'react-router-dom'
import { useTranslation, withTranslation } from 'react-i18next'
import { ProviderLinkProps } from '@/containers/types'
import styles from './styles.module.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

const ScreenTitle = (): JSX.Element => {
  const { t } = useTranslation()
  const { state } = useLocation() as ProviderLinkProps

  const logo = state?.account.routeTitleLogo
  const text = state?.account.routeTitleText

  return state ? (
    <div className={cx('screen-title')}>
      {
        typeof logo === 'string' && (
          <img src={logo} className={cx('screen-title__logo')} alt="Title Logo" />
        )
      }
      {text && <span className={cx('screen-title__text')}>{t(text)}</span>}
    </div>
  ) : (
    <span className={cx('screen-title__text', 'screen-title__text_main')}>
      {t('main header')}
    </span>
  )
}

export default withTranslation()(ScreenTitle)
