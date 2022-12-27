import { useTranslation } from 'react-i18next'
import { SettingsOutline } from 'react-ionicons'
import { AccountType } from '@/accounts/types'
import AccountItem from './AccountItem'
import pkg from '@/../package.json'
import classNames from 'classnames/bind'
import styles from './styles.module.scss'
import accounts from '@/accounts'

interface SidePanelProps {
  onPressSettings: () => void
}

const cx = classNames.bind(styles)

const { iconSettingsColor } = styles

const SidePanel = ({ onPressSettings }: SidePanelProps): JSX.Element => {
  const { t } = useTranslation()

  const renderAccount = (account: AccountType) => {
    return <AccountItem key={account.name} account={account} />
  }

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
        {accounts.map(renderAccount)}
        <div className={cx('nav__item', 'nav__item_bottom')} onClick={onPressSettings}>
          <SettingsOutline color={iconSettingsColor} />
          <span className={cx('nav__item-title')}>{t('settings')}</span>
        </div>
      </nav>
    </section>
  )
}

export default SidePanel
