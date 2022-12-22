import styles from './styles.module.scss'
import classNames from 'classnames/bind'
import { IconProps } from './types'
import { Close } from 'react-ionicons'

const cx = classNames.bind(styles)
const { iconSize, iconColor } = styles

const CloseButton = ({ type, onPress }: IconProps): JSX.Element | null => {
  const iconParams = {
    width: iconSize,
    height: iconSize,
    color: iconColor,
  }

  return (
    <span
      className={cx('icon', 'icon_close', `icon_${type}`)}
      onClick={onPress}
    >
      <Close {...iconParams} />
    </span>
  )
}

export default CloseButton
