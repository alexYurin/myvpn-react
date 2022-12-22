import styles from './styles.module.scss'
import classNames from 'classnames/bind'
import { IconProps } from './types'
import { ResizeOutline, ChevronUpOutline, TabletLandscapeOutline } from 'react-ionicons'

const cx = classNames.bind(styles)
const { iconSize, iconColor } = styles

const MaximizeButton = ({ type, onPress }: IconProps): JSX.Element => {
  const getIconPlatform = () => {
    switch (type) {
      case 'windows':
        return TabletLandscapeOutline

      case 'linux':
        return ChevronUpOutline

      default:
        return ResizeOutline
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
      className={cx('icon', 'icon_maximize', `icon_${type}`)}
      onClick={onPress}
    >
      <Icon {...iconParams} />
    </span>
  )
}

export default MaximizeButton
