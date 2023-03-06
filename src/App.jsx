import { createBrowserHistory } from 'history'
import React from 'react'
import { Router } from 'react-router'
import AppRoutes from 'routes'
import { Toast } from 'components'
import { GlobalStyles } from './globalStyles'
import './App.css'

export const history = createBrowserHistory()

function App() {
  return (
    <Router history={history}>
      <GlobalStyles />
      <Toast />
      <AppRoutes />
    </Router>
  )
}

export default App
