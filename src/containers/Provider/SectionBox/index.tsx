import { Box } from '@/components'
import { BoxProps } from '@/components/Box'
import styles from './styles.module.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

const SectionBox = ({ children, className, ...props }: BoxProps): JSX.Element => {
  return (
    <Box {...props} className={cx('section-box', className)}>
      {children}
    </Box>
  )
}

export default SectionBox
