import { useParams } from 'react-router-dom'

const ProviderContainer = () => {
  const { providerRoute } = useParams()

  return <div>Provider - {providerRoute}</div>
}

export default ProviderContainer
