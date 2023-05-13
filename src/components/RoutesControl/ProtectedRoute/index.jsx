import { ROUTES_NAME } from 'constant'
import React from 'react'
import { useSelector } from 'react-redux'
import { Redirect, Route } from 'react-router'

function ProtectedRoute({ component: Component, path, ...rest }) {
  const { authenticated } = useSelector((state) => state.userReducer)

  return (
    <Route
      {...rest}
      render={(props) => (
        authenticated
          ? <Component {...props} />
          : <Redirect to={{ pathname: ROUTES_NAME.LOGIN }} />
      )}
    />
  )
}

export default ProtectedRoute
