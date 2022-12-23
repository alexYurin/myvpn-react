/* eslint-disable camelcase */
import { useState, useCallback, useEffect } from 'react'
import { useParams, useLocation } from 'react-router-dom'
import { ProviderLinkProps } from '@/containers/types'
import AuthModal from './AuthModal'
import AuthButtons from './AuthButtons'
import Empty from './Empty'
import FAQ from './FAQ'
import styles from './styles.module.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)
const ipcRenderer = window?.require('electron')?.ipcRenderer

const ProviderContainer = () => {
  const [isOpenAuthModal, setOpenAuthModal] = useState(false)
  const { providerRoute } = useParams()
  const { state } = useLocation() as ProviderLinkProps

  const { account } = state || {}

  useEffect(() => {
    ipcRenderer.on('oauth2-response-url', (event, responseUrl) => {
      const token = new URL(responseUrl)?.searchParams?.get('access_token')

      if (token) {

      }
    })
  }, [])

  const onCreateServer = useCallback(() => {
    console.log(`Start create server ${providerRoute}`)
  }, [])

  const onPressAuthAccount = useCallback(() => {
    if (account.oauth2) {
      if (account.oauth2.desktop) {
        const { authorize_url, ...urlParams } = account.oauth2.desktop

        ipcRenderer?.invoke('open-auth-window', {
          authUrl: authorize_url,
          authParams: new URLSearchParams(urlParams).toString(),
        })
      }
    }
  }, [])

  const onPressAuthKey = useCallback(() => {
    setOpenAuthModal(true)
  }, [])

  const onCheckAuthKey = useCallback(() => {
    console.log(`Start check auth key ${providerRoute}`)
  }, [])

  const isVisibleAuthButtons = Boolean(account?.oauth2 || account?.isOnlyAuthViaKey)

  const title = isVisibleAuthButtons
    ? 'Login to create a server'
    : 'Create custom server'

  return (
    <div className={cx('provider')}>
      <h2 className={cx('head')}>{title}</h2>
      <AuthButtons
        isVisible={isVisibleAuthButtons}
        isOnlyAuthVuaKey={account?.isOnlyAuthViaKey}
        onPressAccountButton={onPressAuthAccount}
        onPressAccountKey={onPressAuthKey}
      />
      <Empty
        isVisible={false}
        onPressCreateButton={onCreateServer}
      />
      <FAQ
        urlWebsite={account?.website}
        urlFAQ={account?.faq}
      />
      <AuthModal
        isOpen={isOpenAuthModal}
        setVisible={setOpenAuthModal}
        onCheckAuthKey={onCheckAuthKey}
      />
    </div>
  )
}

export default ProviderContainer
