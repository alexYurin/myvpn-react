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
  desktop: OAuth2Type | null
  web: OAuth2Type | null
}

export type AccountType = {
  routeTitleLogo: React.ReactNode
  routeTitleText?: string
  route: AccountNameType
  logo: string
  title: string
  website?: string
  faq?: string
  viaKey?: boolean
  oauth2?: Oath2ConfigType
}
