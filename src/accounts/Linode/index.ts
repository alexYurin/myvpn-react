/* eslint-disable camelcase */
import { AccountType } from '@/accounts/types'

const account: AccountType = {
  pageHeader: 'login to create server',
  routeTitleLogo: '/images/linode.svg',
  name: 'linode',
  logo: '/images/linode.png',
  title: 'Linode',
  website: 'https://www.linode.com',
  faq: 'https://myvpn.run/faq/setup/linode',
  oauth2: {
    desktop: {
      client_id: '839b0a3d0ab64f6c8c2d',
      redirect_uri: 'https://localhost/',
      scope: 'linodes:read_write,stackscripts:read_write',
      authorize_url: 'https://login.linode.com/oauth/authorize',
      response_type: 'token',
    },
    web: {
      client_id: '434a211accf5a24afeef',
      redirect_uri: 'https://tool.myvpn.run',
      scope: 'linodes:read_write,stackscripts:read_write',
      authorize_url: 'https://login.linode.com/oauth/authorize',
      response_type: 'token',
    },
  },
}

export default account
