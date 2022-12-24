/* eslint-disable camelcase */
import { AccountType } from '@/accounts/types'

const account: AccountType = {
  pageHeader: 'login to create server',
  routeTitleLogo: '/images/digitalocean.svg',
  name: 'digitalocean',
  logo: '/images/digitalocean.png',
  title: 'DigitalOcean',
  website: 'https://www.digitalocean.com',
  faq: 'https://myvpn.run/faq/setup/digitalocean',
  oauth2: {
    desktop: {
      client_id: 'a018284aebda94528eb1fdb00e5f53803590f3dd050a1da64a9e549e2eb1c309',
      redirect_uri: 'https://localhost/',
      scope: 'read write',
      authorize_url: 'https://cloud.digitalocean.com/v1/oauth/authorize',
      response_type: 'token',
    },
    web: {
      client_id: '72deece066d4413e9c776189616d340ed0997c3f108425b1d19dc2194f8e2393',
      redirect_uri: 'https://tool.myvpn.run',
      scope: 'read write',
      authorize_url: 'https://cloud.digitalocean.com/v1/oauth/authorize',
      response_type: 'token',
    },
  },
}

export default account
