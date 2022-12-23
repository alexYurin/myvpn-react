import { HTMLAttributes } from 'react'
import styles from './styles.module.scss'
import classNames from 'classnames/bind'

export interface BoxProps extends HTMLAttributes<HTMLElement> {
  children: React.ReactNode
}

const cx = classNames.bind(styles)

const Box = ({ children, className, ...props }: BoxProps): JSX.Element => {
  return (
    <section className={cx('box', className)} {...props}>
      {children}
    </section>
  )
}

export default Box
