import { Footer, Header } from 'components'
import { ROUTES_NAME } from 'constant'
import React from 'react'
import { useSelector } from 'react-redux'
import { Redirect, Route } from 'react-router'

function HomeLayoutProtected({ component: Component, path, ...rest }) {
  const { authenticated } = useSelector((state) => state.userReducer)
  return (
    <Route
      {...rest}
      render={(props) => (
        authenticated
          ? (
            <>
              <Header />
              <Component {...props} />
              <Footer />
            </>
          )
          : <Redirect to={{ pathname: ROUTES_NAME.LOGIN }} />
      )}
    />
  )
}

export default HomeLayoutProtected
