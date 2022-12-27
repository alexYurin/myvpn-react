import { useCallback } from 'react'
import { ModeType } from '@/types'
import styles from './styles.module.scss'
import classNames from 'classnames/bind'
import CloseButton from './CloseButton'
import MaximizeButton from './MaximizeButton'
import MinimizeButton from './MinimizeButton'

const DEFAULT_SCREEN_TOOL_MODE: ModeType = 'linux'

const envMode = import.meta.env.MODE as ModeType
const mode =
  envMode === 'development' || envMode === 'production'
    ? DEFAULT_SCREEN_TOOL_MODE
    : envMode

const cx = classNames.bind(styles)

const getInvoker = (command: string) => {
  return useCallback(() => {
    try {
      window?.require('electron')?.ipcRenderer?.invoke(command)
    } catch(error) {
      console.log()
    }
  }, [])
}

const ScreenTools = (): JSX.Element | null => {
  const isVisible = mode !== 'web'

  const buttons = [
    {
      label: 'minimize',
      ToolButton: MinimizeButton,
      handler: getInvoker('minimize-window'),
    },
    {
      label: 'maximize',
      ToolButton: MaximizeButton,
      handler: getInvoker('maximize-window'),
    },
    {
      label: 'close',
      ToolButton: CloseButton,
      handler: getInvoker('close'),
    },
  ]

  if (isVisible) {
    return (
      <div className={cx('screen-tools')}>
        {buttons.map(({ ToolButton, label, handler }) => (
          <ToolButton key={label} type={mode} onPress={handler} />
        ))}
      </div>
    )
  }

  return null
}

export default ScreenTools
