/* eslint-disable camelcase */
import { useState, useCallback } from 'react'
import { useParams, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { accountsActions } from '@/accounts/slice'
import { useAppDispatch } from '@/store'
import { ProviderLinkProps } from '@/containers/types'
import useRegisterAccount from '@/accounts/useRegisterAccount'
import AuthModal from './AuthModal'
import Header from './Header'
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

  const [isRegisterProvider, setRegisterProvider] = useRegisterAccount(account)

  const dispatch = useAppDispatch()

  const onCreateServer = useCallback(() => {
    console.log(`Start create server ${providerRoute}`)
  }, [])

  const onPressAuthKey = useCallback(() => {
    setOpenAuthModal(true)
  }, [])

  const onCheckAuthKey = useCallback(() => {
    console.log(`Start check auth key ${providerRoute}`)
  }, [])

  const onPressLogout = useCallback(() => {
    dispatch(accountsActions.logoutAccount(account.name))
  }, [account])

  const isVisibleAuthButtons = Boolean(
    !isRegisterProvider &&
    (account?.oauth2 || account?.isOnlyAuthViaKey)
  )

  const header = isRegisterProvider
    ? t('logined')
    : t(account?.pageHeader)

  return (
    <div className={cx('provider')}>
      <Header
        title={header}
        isRegisterProvider={isRegisterProvider}
        isVisibleAuthButtons={isVisibleAuthButtons}
        isOnlyAuthVuaKey={account?.isOnlyAuthViaKey}
        onPressAccountButton={setRegisterProvider}
        onPressAccountKey={onPressAuthKey}
        onPressLogout={onPressLogout}
      />
      <FAQ urlWebsite={account?.website} urlFAQ={account?.faq} />
      <Empty
        isVisible={isRegisterProvider}
        onPressCreateButton={onCreateServer}
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
