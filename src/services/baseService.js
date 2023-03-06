import axios from 'axios'
import { ACCESS_TOKEN, DOMAIN, TOKEN_CYBER } from 'constant'

export const get = (url) => axios({
  url: `${DOMAIN}/${url}`,
  method: 'GET',
  headers: {
    TokenCybersoft: TOKEN_CYBER
  }
})

export const put = (url, data) => axios({
  url: `${DOMAIN}/${url}`,
  method: 'PUT',
  data,
  headers: {
    Authorization: `Bearer ${localStorage.getItem(ACCESS_TOKEN)} `,
    TokenCybersoft: TOKEN_CYBER
  }
})

export const post = (url, data) => axios({
  url: `${DOMAIN}/${url}`,
  method: 'POST',
  data,
  headers: {
    Authorization: `Bearer ${localStorage.getItem(ACCESS_TOKEN)} `,
    TokenCybersoft: TOKEN_CYBER
  }
})

export const del = (url) => axios({
  url: `${DOMAIN}/${url}`,
  method: 'DELETE',
  headers: {
    Authorization: `Bearer ${localStorage.getItem(ACCESS_TOKEN)} `,
    TokenCybersoft: TOKEN_CYBER
  }
})
