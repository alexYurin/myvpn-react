import { withTranslation, useTranslation } from 'react-i18next'
import { NavLink, useParams } from 'react-router-dom'
import { SettingsOutline } from 'react-ionicons'
import classNames from 'classnames/bind'
import pkg from '@/../package.json'
import styles from './styles.module.scss'
import accounts from '@/accounts'

interface SidePanelProps {
  onPressSettings: () => void
}

const cx = classNames.bind(styles)

const { iconSettingsColor } = styles

const SidePanel = ({ onPressSettings }: SidePanelProps): JSX.Element => {
  const { providerRoute } = useParams()
  const { t } = useTranslation()

  return (
    <section className={cx('side-panel')}>
      <div className={cx('head')}>
        <img className={cx('logo')} src="/images/icon.png" alt="My" />
        <div className={cx('title')}>
          <img className={cx('title__image')} src="/images/logo-vpn.png" alt="VPN" />
          <span className={cx('version')}>v.{pkg.version}</span>
        </div>
      </div>
      <nav className={cx('nav')}>
        {accounts.map(account => (
          <NavLink
            to={`/providers/${account.route}`}
            key={account.route}
            state={{
              titleLogo: account.routeTitleLogo,
              titleText: account.routeTitleText,
            }}
            className={cx('nav__item', {
              'nav__item_active': providerRoute === account.route,
            })}
          >
            <img
              className={cx('nav__item-image', `${account.route}-logo`)}
              src={account.logo}
              alt={account.title}
            />
            <span className={cx('nav__item-title')}>{t(account.title)}</span>
          </NavLink>
        ))}
        <div className={cx('nav__item', 'nav__item_bottom')} onClick={onPressSettings}>
          <SettingsOutline color={iconSettingsColor} />
          <span className={cx('nav__item-title')}>{t('settings')}</span>
        </div>
      </nav>
    </section>
  )
}

export default withTranslation()(SidePanel)
