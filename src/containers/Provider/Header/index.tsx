import { useTranslation } from 'react-i18next'
import { PersonOutline, KeyOutline, ExitOutline } from 'react-ionicons'
import { Button } from '@/components'
import styles from './styles.module.scss'
import classNames from 'classnames/bind'

export interface ProviderTitleProps {
  title: string
  isRegisterProvider: boolean
  isVisibleAuthButtons: boolean
  isOnlyAuthVuaKey?: boolean
  onPressAccountButton: () => void
  onPressAccountKey: () => void
  onPressLogout: () => void
}

const cx = classNames.bind(styles)

const {
  iconLoginSize,
  iconLoginColor,
} = styles

const ProviderHeader = ({
  title,
  isRegisterProvider,
  isVisibleAuthButtons,
  isOnlyAuthVuaKey,
  onPressAccountButton,
  onPressAccountKey,
  onPressLogout,
}: ProviderTitleProps): JSX.Element | null => {
  const { t } = useTranslation()

  const isVisibleAccountButton = !isOnlyAuthVuaKey

  return (
    <div className={cx('header')}>
      <h2 className={cx('title')}>{title}</h2>
      <div className={cx('auth-buttons')}>
        {isVisibleAuthButtons && (
        <>
          {isVisibleAccountButton && (
            <Button
              className={cx('button')}
              onClick={onPressAccountButton}
            >
              <span className={cx('button-inner')}>
                <PersonOutline
                  color={iconLoginColor}
                  height={iconLoginSize}
                  width={iconLoginSize}
                />
                An account
              </span>
            </Button>
          )}
          <Button
            className={cx('button')}
            onClick={onPressAccountKey}
          >
            <span className={cx('button-inner')}>
              <KeyOutline
                color={iconLoginColor}
                height={iconLoginSize}
                width={iconLoginSize}
              />
              Via key
            </span>
          </Button>
        </>
      )}
      {isRegisterProvider && (
        <Button
          className={cx('button')}
          onClick={onPressLogout}
        >
          <span className={cx('button-inner')}>
            <ExitOutline
              color={iconLoginColor}
              height={iconLoginSize}
              width={iconLoginSize}
            />
            Log out
          </span>
        </Button>
      )}
      </div>
    </div>
  )

}

export default ProviderHeader
