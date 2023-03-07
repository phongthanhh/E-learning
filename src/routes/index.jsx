import React from 'react'
import { Switch } from 'react-router'
import { HomeLayout } from 'layouts'
import { CategoryCourse, Home } from 'pages'
import { ROUTES_NAME } from 'constant'

function AppRoutes() {
  return (
    <Switch>
      <HomeLayout path={ROUTES_NAME.HOME} exact component={Home} />
      <HomeLayout path={`${ROUTES_NAME.CATEGORY}/:name`} exact component={CategoryCourse} />
      <HomeLayout path="/" exact component={Home} />
    </Switch>
  )
}

export default AppRoutes
