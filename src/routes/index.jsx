import React from 'react'
import { Switch } from 'react-router'
import { HomeLayout } from 'layouts'
import { Home } from 'pages'

function AppRoutes() {
  return (
    <Switch>
      <HomeLayout path="/home" exact component={Home} />
      <HomeLayout path="/" exact component={Home} />
    </Switch>
  )
}

export default AppRoutes
