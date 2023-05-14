import { createBrowserHistory } from 'history'
import React, { Suspense, useLayoutEffect } from 'react'
import { Router } from 'react-router'
import AppRoutes from 'routes'
import { Loading, Toast } from 'components'
import { GlobalStyles } from 'assets/style/globalStyles'
import { useDispatch, useSelector } from 'react-redux'
import { getItem, requestAction } from 'utils'
import { ACCESS_TOKEN } from 'constant'
import { getInfoUserAction, STOP_LOADING_GLOBAL } from 'stores'

export const history = createBrowserHistory()

function App() {
  const dispatch = useDispatch()
  const { isLoading } = useSelector((state) => state.globalReducer)

  useLayoutEffect(() => {
    const accessTokenLocal = getItem(ACCESS_TOKEN)
    if (accessTokenLocal) {
      dispatch(getInfoUserAction({ isStopLoadingGlobal: true }))
    } else {
      dispatch({
        type: requestAction(STOP_LOADING_GLOBAL)
      })
    }
  }, [dispatch])

  if (isLoading) return <Loading />

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
