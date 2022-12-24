import { AccountNameType } from '@/accounts/types'
import { useTypedSelector, RootState } from '@/store'
import { createSelector } from '@reduxjs/toolkit'

export default function isRegisterPrivider(accountName: AccountNameType): boolean {
  const getAccounts = (state: RootState) => state.accounts

  const accountSelector = createSelector(getAccounts, accounts => {
    const [currentAccount] = accounts.filter(account => account.provider == accountName)

    return currentAccount
  })

  const account = useTypedSelector(accountSelector)

  return Boolean(account?.token && account?.provider === accountName)
}
