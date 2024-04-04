import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Outlet } from 'react-router'

function Default() {
  return (
    <>
      <Header />
      <div className='container m-auto max-w-[1241px] p-4 md:p-6 lg:p-10 xl:p-0'>
        <div className='content' style={{ minHeight: 'calc(100vh - 103px - 289px)' }}>
          <Outlet />
        </div>
        <Footer />
      </div>
    </>
  )
}

export default Default
