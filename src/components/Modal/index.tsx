// @docs https://reactcommunity.org/react-modal/

import ReactModal from 'react-modal'
import { useState, useCallback, useEffect } from 'react'
import { HTMLRoot } from '@/main'
import CloseButton from '@/components/ScreenTools/CloseButton'
import styles from './styles.module.scss'
import classNames from 'classnames/bind'
import { ModeType } from '@/types'

const mode = import.meta.env.MODE as ModeType

const cx = classNames.bind(styles)

const {
  border,
  borderRadius,
  contentWidth,
  contentMargin,
  contentPadding,
  backgroundColor,
} = styles

export interface ModalProps extends ReactModal.Props {
  title?: React.ReactNode
  setVisible: (isVisible: boolean) => void
  children?: React.ReactNode
}

const getThemeModalStyles = (): ReactModal.Styles => {
  return {
    overlay: {
      backgroundColor,
    },
    content: {
      transform: 'translate(50%, 50%)',
      inset: 'unset',
      border,
      borderRadius,
      background: backgroundColor,
      width: contentWidth,
      margin: contentMargin,
      padding: contentPadding,
    },
  }
}

const Modal =  ({ title, setVisible, children, ...props }: ModalProps) => {
  const [overlayRef, setOverlayRef] = useState<HTMLDivElement | null>(null)
  const themeStyles = getThemeModalStyles()

  const closeModal = useCallback(() => {
    setVisible(false)
  }, [])

  const setOverlayNodeRef = (node: HTMLDivElement) => {
    setOverlayRef(node)
  }

  function onPressOverlay(this: typeof overlayRef, event: Event) {
    if (this === event.target) {
      closeModal()
    }
  }

  useEffect(() => {
    if (overlayRef) {
      overlayRef.addEventListener('click', onPressOverlay)
    }
  }, [overlayRef])

  return (
    <ReactModal
      {...props}
      style={themeStyles}
      appElement={HTMLRoot}
      overlayRef={setOverlayNodeRef}
    >
      <header className={cx('header')}>
        <span className={cx('header__title')}>
          {title}
        </span>
        <div className={cx('header__close-icon')}>
          <CloseButton type={mode} onPress={closeModal} />
        </div>
      </header>
      <section className={cx('content')}>
        {children}
      </section>
    </ReactModal>
  )
}

export default Modal
