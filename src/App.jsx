import { createBrowserHistory } from 'history'
import { HomeLayout } from 'layouts'
import { Home } from 'pages'
import React from 'react'
import { Router, Switch } from 'react-router'
import { ToastContainer } from 'react-toastify'
import { GlobalStyles } from './globalStyles'
import './App.css'

export const history = createBrowserHistory()

function App() {
  return (
    <Router history={history}>
      <GlobalStyles />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <Switch>
        <HomeLayout path="/home" exact component={Home} />
        <HomeLayout path="/" exact component={Home} />
      </Switch>
    </Router>
  )
}

export default App
