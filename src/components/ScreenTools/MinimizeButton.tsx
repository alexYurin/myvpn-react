import styles from './styles.module.scss'
import classNames from 'classnames/bind'
import { IconProps } from './types'
import { ChevronDownOutline, RemoveOutline } from 'react-ionicons'

const cx = classNames.bind(styles)
const { iconSize, iconColor } = styles

const MinimizeButton = ({ type, onPress }: IconProps): JSX.Element => {
  const getIconPlatform = () => {
    switch (type) {
      case 'linux':
        return ChevronDownOutline

      default:
        return RemoveOutline
    }
  }

  const iconParams = {
    width: iconSize,
    height: iconSize,
    color: iconColor,
  }

  const Icon = getIconPlatform()

  return (
    <span
      className={cx('icon', 'icon_minimize', `icon_${type}`)}
      onClick={onPress}
    >
      <Icon {...iconParams} />
    </span>
  )
}

export default MinimizeButton
