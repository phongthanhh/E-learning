import ReactDOM from 'react-dom/client'
import React from 'react'

// Setup Redux
import { Provider } from 'react-redux'
import { store } from 'stores'

// Antd
import 'antd/dist/reset.css'

import 'swiper/swiper.css'

import 'bootstrap/dist/css/bootstrap.css'

// Toastify
import 'react-toastify/dist/ReactToastify.css'

import { ColorContextProvider, ErrorBoundary } from 'components'
import './index.css'

import App from './App'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <ColorContextProvider>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </ColorContextProvider>
  </Provider>
)
