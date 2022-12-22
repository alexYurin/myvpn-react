import { useCallback } from 'react'
import { ModeType } from '@/types'
import styles from './styles.module.scss'
import classNames from 'classnames/bind'
import CloseButton from './CloseButton'
import MaximizeButton from './MaximizeButton'
import MinimizeButton from './MinimizeButton'

const mode = import.meta.env.MODE as ModeType
const cx = classNames.bind(styles)
const ipcRenderer = window?.require('electron')?.ipcRenderer

const getInvoker = (command: string) => {
  return useCallback(() => {
    ipcRenderer?.invoke(command)
  }, [])
}

const ScreenTools = (): JSX.Element | null => {
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

  if (mode !== 'web') {
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
