import { Footer, Header } from 'components'
import React from 'react'

function HomeLayout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}

export default HomeLayout
