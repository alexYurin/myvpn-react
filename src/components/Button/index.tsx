import { ButtonHTMLAttributes } from 'react'
import styles from './styles.module.scss'
import classNames from 'classnames/bind'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode
}

const cx = classNames.bind(styles)

const Button = ({ children, className, ...props }: ButtonProps): JSX.Element => {
  return (
    <button {...props} className={cx('button', className)}>
      {children}
    </button>
  )
}

export default Button
