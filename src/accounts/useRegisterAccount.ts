/* eslint-disable camelcase */
import { useCallback, useEffect } from 'react'
import { accountsActions } from './slice'
import { AccountNameType, AccountType } from './types'
import { useTypedSelector, useAppDispatch, RootState } from '@/store'
import { createSelector } from '@reduxjs/toolkit'

let isNotSubsribed = true

export default function useRegisterAccount(currentAccount: AccountType): [boolean, () => void] {
  const getAccounts = (state: RootState) => state.accounts

  const dispatch = useAppDispatch()

  const accountSelector = createSelector(getAccounts, accounts => {
    const [selectedAccount] = accounts.filter(
      account => account.provider === currentAccount.name
    )

    return selectedAccount
  })

  const registerAccount = useTypedSelector(accountSelector)

  const isRegisterAccount =  Boolean(
    registerAccount?.token && registerAccount?.provider === currentAccount.name
  )

  const onResponseAuthUrl = useCallback((
    event: unknown,
    responseUrl: string,
    accountName: AccountNameType
  ) => {
    const token = new URL(responseUrl)?.searchParams?.get('access_token')
    const isAccessDispatch = token && accountName === currentAccount.name

    if (isAccessDispatch) {
      dispatch(
        accountsActions.registerAccount({
          token,
          provider: currentAccount.name,
        }),
      )
    }
  }, [])

  const setRegisterProvider = useCallback(() => {
    if (!isRegisterAccount && currentAccount.oauth2) {
      const { authorize_url, ...urlParams } = currentAccount.oauth2.desktop

      try {
        window?.require('electron')?.ipcRenderer
          ?.invoke('open-auth-window', {
            authUrl: authorize_url,
            authParams: new URLSearchParams(urlParams).toString(),
            accountName: currentAccount.name
          },
        )
      } catch(error) {
        window.open(currentAccount.oauth2.web.authorize_url, '_blank')
      }
    }
  }, [isRegisterAccount, currentAccount.name])

  useEffect(() => {
    try {
      if (isNotSubsribed) {
        window?.require('electron')?.ipcRenderer
          .on('oauth2-response-url', onResponseAuthUrl)

        isNotSubsribed = false
      }
    } catch(error) {
      console.log()
    }
  }, [])

  return [isRegisterAccount, setRegisterProvider]
}
