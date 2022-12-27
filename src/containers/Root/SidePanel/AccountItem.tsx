import { NavLink, useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { AccountType } from '@/accounts/types'
import { PersonOutline } from 'react-ionicons'
import useRegisterAccount from '@/accounts/useRegisterAccount'
import classNames from 'classnames/bind'
import styles from './styles.module.scss'

export interface AccountItemProps {
  account: AccountType
}

const cx = classNames.bind(styles)

const {
  iconRegisterColor,
  iconRegisterSize,
} = styles

const AccountItem = ({ account }: AccountItemProps): JSX.Element => {
  const [isRegisterAccount] = useRegisterAccount(account, 'AccountItem')
  const { providerRoute } = useParams()
  const { t } = useTranslation()

  return (
    <NavLink
      to={`/providers/${account.name}`}
      key={account.name}
      state={{ account }}
      className={cx('nav__item', {
        'nav__item_active': providerRoute === account.name,
      })}
    >
      <img
        className={cx('nav__item-image', `${account.name}-logo`)}
        src={account.logo}
        alt={account.title}
      />
      <span className={cx('nav__item-title')}>
        {t(account.title)}
      </span>
      {isRegisterAccount && (
        <span className={cx('nav__item-register-icon')}>
          <PersonOutline
            color={iconRegisterColor}
            height={iconRegisterSize}
            width={iconRegisterSize}
          />
        </span>
      )}
    </NavLink>
  )
}

export default AccountItem
