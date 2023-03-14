import { createBrowserHistory } from 'history'
import React, { Suspense } from 'react'
import { Router } from 'react-router'
import AppRoutes from 'routes'
import { Loading, Toast } from 'components'
import { GlobalStyles } from 'assets/style/globalStyles'

export const history = createBrowserHistory()

function App() {
  return (
    <Router history={history}>
      <Toast />
      <GlobalStyles />
      <Suspense fallback={<Loading />}>
        <AppRoutes />
      </Suspense>
    </Router>
  )
}

export default App
