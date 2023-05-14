import React, { lazy, useEffect } from 'react'
import { Switch } from 'react-router'
import { ROUTES_NAME } from 'constant'
import { useLocation } from 'react-router-dom'
import { ProtectedRoute, PublicRoute } from 'components'
import { HomeLayout, HomeLayoutProtected } from 'layouts'
import { RequestSignOut } from 'pages'

const Home = lazy(() => import('../pages/home'))
const CategoryCourse = lazy(() => import('../pages/categoryCourse'))
const Detail = lazy(() => import('../pages/detail'))
const Course = lazy(() => import('../pages/course'))
const Blog = lazy(() => import('../pages/blog'))
const Event = lazy(() => import('../pages/event'))
const Info = lazy(() => import('../pages/info'))
const Login = lazy(() => import('../pages/login'))

function AppRoutes() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  }, [pathname])

  return (
    <Switch>
      <PublicRoute path={ROUTES_NAME.LOGIN} exact component={Login} />
      <HomeLayout path={`${ROUTES_NAME.CATEGORY}/:name`} exact component={CategoryCourse} />
      <HomeLayout path={`${ROUTES_NAME.DETAIL}/:name`} exact component={Detail} />
      <HomeLayout path={ROUTES_NAME.COURSE} exact component={Course} />
      <HomeLayout path={ROUTES_NAME.BLOG} exact component={Blog} />
      <HomeLayout path={ROUTES_NAME.EVENT} exact component={Event} />
      <HomeLayoutProtected path={ROUTES_NAME.INFO} exact component={Info} />
      <HomeLayout path="/" exact component={Home} />
      <ProtectedRoute path={ROUTES_NAME.REQUEST_SIGN_OUT} exact component={RequestSignOut} />
    </Switch>
  )
}

export default AppRoutes
