import { Footer, Header } from 'components'
import React from 'react'
import { Route } from 'react-router'

function HomeLayout(props) {
  return (
    <Route
      path={props.path}
      render={(propsRoute) => (
        <>
          <Header {...propsRoute} />
          <props.component {...propsRoute} />
          <Footer />
        </>
      )}
    />
  )
}

export default HomeLayout
