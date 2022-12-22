import { useState, ChangeEvent } from 'react'
import { useTheme } from '@/theme'
import styles from './styles.module.scss'
import classNames from 'classnames/bind'

export interface SwitcherProps {
  type?: 'radio' | 'checkbox'
  name?: string
  slotOn?: React.ReactNode
  slotOff?: React.ReactNode
  children?: React.ReactNode
  isChecked?: boolean
  onChange?: (isChecked: boolean) => void
}

const cx = classNames.bind(styles)

const Switcher = ({
  type,
  isChecked,
  name,
  slotOn,
  slotOff,
  onChange,
  children,
}: SwitcherProps): JSX.Element => {
  const [checked, setChecked] = useState(isChecked)

  const themeName = useTheme()

  const onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const currentChecked = event.target.checked

    setChecked(currentChecked)

    if (typeof onChange === 'function') {
      onChange(currentChecked)
    }
  }

  return (
    <label className={cx('container', `container_theme_${themeName}`)}>
      {children && <span className={cx('content')}>{children}</span>}
      <span className={cx('switcher')}>
        <input
          className={cx('trigger')}
          name={name}
          checked={Boolean(checked)}
          onChange={onInputChange}
          type={type || 'checkbox'}
        />
        <i className={cx('overlay')} />
        <i className={cx('slot', 'slot_off')}>{slotOff}</i>
        <i className={cx('slot', 'slot_on')}>{slotOn}</i>
      </span>
    </label>
  )
}

export default Switcher
