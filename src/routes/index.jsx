import React from 'react'
import { Switch } from 'react-router'
import { HomeLayout } from 'layouts'
import {
  Blog, CategoryCourse, Course, Detail, Event, Home, Info, Login
} from 'pages'
import { ROUTES_NAME } from 'constant'

function AppRoutes() {
  return (
    <Switch>
      <HomeLayout path={ROUTES_NAME.HOME} exact component={Home} />
      <HomeLayout path={`${ROUTES_NAME.CATEGORY}/:name`} exact component={CategoryCourse} />
      <HomeLayout path={`${ROUTES_NAME.DETAIL}/:id`} exact component={Detail} />
      <HomeLayout path={ROUTES_NAME.COURSE} exact component={Course} />
      <HomeLayout path={ROUTES_NAME.BLOG} exact component={Blog} />
      <HomeLayout path={ROUTES_NAME.EVENT} exact component={Event} />
      <HomeLayout path={ROUTES_NAME.INFO} exact component={Info} />

      <Login path={ROUTES_NAME.LOGIN} exact component={Login} />

      <HomeLayout path="/" exact component={Home} />
    </Switch>
  )
}

export default AppRoutes
