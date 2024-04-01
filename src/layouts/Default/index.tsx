import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Outlet } from 'react-router'

function Default() {
  return (
    <div className='container m-auto max-w-[1241px]'>
      <Header />
      <div className='content' style={{ minHeight: 'calc(100vh - 103px - 289px)' }}>
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default Default
