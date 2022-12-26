/* eslint-disable camelcase */
import { useCallback, useEffect } from 'react'
import { accountsActions } from '@/accounts/slice'
import { AccountType } from '@/accounts/types'
import { useTypedSelector, useAppDispatch, RootState } from '@/store'
import { ModeType } from '@/types'
import { createSelector } from '@reduxjs/toolkit'

const mode = import.meta.env.MODE as ModeType

export default function useRegisterPrivider(currentAccount: AccountType): [boolean, () => void] {
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

  const onResponseAuthUrl = useCallback(
    (event: any, responseUrl: string) => {
      const token = new URL(responseUrl)?.searchParams?.get('access_token')

      if (token) {
        dispatch(
          accountsActions.registerAccount({
            token,
            provider: currentAccount.name,
          }),
        )
      }
    },
    [dispatch, currentAccount.name],
  )

  const setRegisterProvider = useCallback(() => {
    if (!isRegisterAccount && currentAccount.oauth2) {
      if (mode === 'web') {
        window.open(currentAccount.oauth2.web.authorize_url, '_blank')
      } else {
        const { authorize_url, ...urlParams } = currentAccount.oauth2.desktop

        try {
          window?.require('electron')?.ipcRenderer
            ?.invoke('open-auth-window', {
              authUrl: authorize_url,
              authParams: new URLSearchParams(urlParams).toString(),
            }
          )
        } catch(error) {
          console.log()
        }
      }
    }
  }, [isRegisterAccount, currentAccount])

  useEffect(() => {
    try {
      window?.require('electron')?.ipcRenderer
        .on('oauth2-response-url', onResponseAuthUrl)
    } catch(error) {
      console.log()
    }

  }, [])

  return [isRegisterAccount, setRegisterProvider]
}
