import styles from './styles.module.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

export interface FormFooterProps {
  children?: React.ReactNode
}

const Field = ({ children }: FormFooterProps): JSX.Element => {
  return (
    <div className={cx('footer')}>
      {children}
    </div>
  )
}

export default Field
