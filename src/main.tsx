import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { store, persist } from '@/store'
import { Router } from '@/routes'
import '@/locales'

import 'styles/reset.scss'
import 'styles/fonts.scss'
import 'styles/globals.scss'

export const HTMLRoot = document.getElementById('root') as HTMLElement

ReactDOM.createRoot(HTMLRoot).render(
    <Provider store={store}>
      <PersistGate loading={null} persistor={persist}>
        <Router />
      </PersistGate>
    </Provider>
)

postMessage({ payload: 'removeLoading' }, '*')
