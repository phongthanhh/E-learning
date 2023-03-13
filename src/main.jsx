import React from 'react'
import ReactDOM from 'react-dom/client'

// Setup Redux
import { Provider } from 'react-redux'
import { store } from 'stores'

// Antd
import 'antd/dist/reset.css'

import 'swiper/swiper.css'

import 'bootstrap/dist/css/bootstrap.css'

// Toastify
import 'react-toastify/dist/ReactToastify.css'

import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
)
