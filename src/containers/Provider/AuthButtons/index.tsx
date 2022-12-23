import { useTranslation, withTranslation } from 'react-i18next'
import { PersonOutline, KeyOutline } from 'react-ionicons'
import { Button } from '@/components'
import SectionBox from '@/containers/Provider/SectionBox'
import styles from './styles.module.scss'
import classNames from 'classnames/bind'

export interface AuthButtonsProps {
  isVisible: boolean
  isOnlyAuthVuaKey?: boolean
  onPressAccountButton: () => void
  onPressAccountKey: () => void
}

const cx = classNames.bind(styles)

const {
  iconLoginSize,
  iconLoginColor,
} = styles

const AuthButtons = ({
  isVisible,
  isOnlyAuthVuaKey,
  onPressAccountButton,
  onPressAccountKey,
}: AuthButtonsProps): JSX.Element | null => {
  const { t } = useTranslation()

  const isVisibleAccountButton = !isOnlyAuthVuaKey

  if (isVisible) {
    return (
      <SectionBox>
        <div className={cx('auth-buttons')}>
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
        </div>
      </SectionBox>
    )
  }

  return null
}

export default withTranslation()(AuthButtons)
