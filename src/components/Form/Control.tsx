import styles from './styles.module.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

export interface FormControlProps {
  label?: React.ReactNode
  children?: React.ReactNode
}

const Control = ({ label, children }: FormControlProps): JSX.Element => {
  return (
    <fieldset className={cx('control')}>
      {label && <label className={cx('control__label')}>{label}</label>}
      <div className={cx('control__content')}>
        {children}
      </div>
    </fieldset>
  )
}

export default Control
