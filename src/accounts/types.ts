export type AccountNameType =
  | 'cryptoservers'
  | 'digitalocean'
  | 'linode'
  | 'hetznerCloud'
  | 'custom'

export type OAuth2Type = {
  client_id: string
  redirect_uri: string
  scope: string
  authorize_url: string
  response_type: string
}

export type Oath2ConfigType = {
  desktop: OAuth2Type
  web: OAuth2Type
}

export type AccountType = {
  routeTitleLogo: React.ReactNode
  routeTitleText?: string
  pageHeader: string
  name: AccountNameType
  logo: string
  title: string
  website?: string
  faq?: string
  isOnlyAuthViaKey?: boolean
  oauth2?: Oath2ConfigType
}
