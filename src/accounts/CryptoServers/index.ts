/* eslint-disable camelcase */
import { AccountType } from '@/accounts/types'

const account: AccountType = {
  name: 'cryptoservers',
  pageHeader: 'login to create server',
  routeTitleLogo: '/images/cryptoservers.svg',
  logo: '/images/cryptoservers.png',
  title: 'CryptoServers',
  website: 'https://cryptoservers.net',
  faq: 'https://myvpn.run/faq/setup/cryptoservers',
  oauth2: {
    desktop: {
      client_id: '173',
      redirect_uri: 'http://localhost',
      scope: '*',
      authorize_url: 'https://cryptoservers.net/oauth/authorize',
      response_type: 'token',
    },
    web: {
      client_id: '199',
      redirect_uri: 'https://tool.myvpn.run',
      scope: '*',
      authorize_url: 'https://cryptoservers.net/oauth/authorize',
      response_type: 'token',
    },
  },
}

export default account
