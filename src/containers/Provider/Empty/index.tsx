import { useTranslation } from 'react-i18next'
import { CloudOfflineOutline } from 'react-ionicons'
import { Button } from '@/components'
import SectionBox from '@/containers/Provider/SectionBox'
import styles from './styles.module.scss'
import classNames from 'classnames/bind'

export interface EmptyPropviderProps {
  isVisible: boolean
  onPressCreateButton: () => void
}

const cx = classNames.bind(styles)

const {
  iconServerSize,
  iconServerColor,
} = styles

const Empty = ({ isVisible, onPressCreateButton }: EmptyPropviderProps): JSX.Element | null => {
  const { t } = useTranslation()

  if (isVisible) {
    return (
      <SectionBox className={cx('empty')}>
        <CloudOfflineOutline
          color={iconServerColor}
          height={iconServerSize}
          width={iconServerSize}
        />
        <p className={cx('text')}>{t('empty servers')}</p>
        <Button onClick={onPressCreateButton}>
          {t('create server')}
        </Button>
      </SectionBox>
    )
  }

  return null
}

export default Empty
