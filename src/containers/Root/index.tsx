import { ScreenTools } from '@/components'
import { useState, useCallback } from 'react'
import { Outlet } from 'react-router-dom'
import { useTheme } from '@/theme'
import styles from './styles.module.scss'
import classNames from 'classnames/bind'
import ScreenTitle from './ScreenTitle'
import HomeButton from './HomeButton'
import SidePanel from './SidePanel'
import ModalSettings from './ModalSettings'

const cx = classNames.bind(styles)

const RootContainer = (): JSX.Element => {
  const themeName = useTheme()
  const [isOpenModal, setOpenModal] = useState(false)

  const openModal = useCallback(() => {
    setOpenModal(true)
  }, [])

  const closeModal = useCallback(() => {
    setOpenModal(false)
  }, [])

  return (
    <section className={cx('container', `container_theme_${themeName}`)}>
      <header className={cx('header')}>
        <HomeButton />
        <h1 className={cx('title')}>
          <ScreenTitle />
        </h1>
        <div className={cx('tools')}>
          <ScreenTools />
        </div>
      </header>
      <aside className={cx('panel')}>
        <SidePanel onPressSettings={openModal} />
      </aside>
      <main className={cx('content')}>
        <Outlet />
      </main>
      <ModalSettings
        isOpen={isOpenModal}
        modalHandlers={{
          open: openModal,
          close: closeModal,
        }}
      />
    </section>
  )
}

export default RootContainer
