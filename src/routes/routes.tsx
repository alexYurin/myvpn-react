import { createBrowserRouter } from 'react-router-dom'
import * as Containers from '@/containers'

export default createBrowserRouter([
  {
    path: '/',
    element: <Containers.RootContainer />,
    children: [
      {
        index: true,
        element: <Containers.MainContainer />,
      },
      {
        path: 'providers/:providerRoute',
        element: <Containers.ProviderContainer />,
      },
    ],
  },
])
