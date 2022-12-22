import styles from './styles.module.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

export interface FormFieldProps {
  children?: React.ReactNode
}

const Field = ({ children }: FormFieldProps): JSX.Element => {
  return (
    <div className={cx('field')}>
      {children}
    </div>
  )
}

export default Field
