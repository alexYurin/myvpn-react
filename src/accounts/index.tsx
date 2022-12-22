import cryptoServersAccount from './CryptoServers'
import digitalOceanAccount from './DigitalOcean'
import linodeAccount from './Linode'
import hetznerCloudAccount from './HetznerCloud'
import customAccount from './Custom'
import { AccountType } from './types'

const accounts: AccountType[] = [
  cryptoServersAccount,
  digitalOceanAccount,
  linodeAccount,
  hetznerCloudAccount,
  customAccount,
]

export default accounts
