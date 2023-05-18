import { Footer, Header } from 'components'
import React from 'react'
import { Route } from 'react-router'

function HomeLayout({ path, component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      path={path}
      render={(propsRoute) => (
        <>
          <Header />
          <Component {...propsRoute} />
          <Footer />
        </>
      )}
    />
  )
}

export default HomeLayout
