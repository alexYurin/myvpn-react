/* eslint-disable camelcase */
import { useState, useCallback } from 'react'
import { useParams, useLocation } from 'react-router-dom'
import { useTranslation, withTranslation } from 'react-i18next'
import { ProviderLinkProps } from '@/containers/types'
import useRegisterProvider from './useRegisterProvider'
import AuthModal from './AuthModal'
import AuthButtons from './AuthButtons'
import Empty from './Empty'
import FAQ from './FAQ'
import styles from './styles.module.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

const ProviderContainer = () => {
  const [isOpenAuthModal, setOpenAuthModal] = useState(false)
  const { providerRoute } = useParams()
  const { state } = useLocation() as ProviderLinkProps
  const { t } = useTranslation()

  const { account } = state || {}

  const [isRegisterProvider, setRegisterProvider] = useRegisterProvider(account)

  console.log('isRegisterProvider', isRegisterProvider)

  const onCreateServer = useCallback(() => {
    console.log(`Start create server ${providerRoute}`)
  }, [])

  const onPressAuthKey = useCallback(() => {
    setOpenAuthModal(true)
  }, [])

  const onCheckAuthKey = useCallback(() => {
    console.log(`Start check auth key ${providerRoute}`)
  }, [])

  const isVisibleAuthButtons = Boolean(
    !isRegisterProvider &&
    (account?.oauth2 || account?.isOnlyAuthViaKey)
  )

  return (
    <div className={cx('provider')}>
      <h2 className={cx('head')}>{t(account?.pageHeader)}</h2>
      <AuthButtons
        isVisible={isVisibleAuthButtons}
        isOnlyAuthVuaKey={account?.isOnlyAuthViaKey}
        onPressAccountButton={setRegisterProvider}
        onPressAccountKey={onPressAuthKey}
      />
      <Empty isVisible={false} onPressCreateButton={onCreateServer} />
      <FAQ urlWebsite={account?.website} urlFAQ={account?.faq} />
      <AuthModal
        isOpen={isOpenAuthModal}
        setVisible={setOpenAuthModal}
        onCheckAuthKey={onCheckAuthKey}
      />
    </div>
  )
}

export default withTranslation()(ProviderContainer)
