import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Outlet } from 'react-router'

function Default() {
  return (
    <>
      <Header className='h-header lg:h-header-lg' />
      <div className='container m-auto max-w-[1241px] px-4 md:px-6 xl:px-0'>
        <div className='content min-h-content lg:min-h-content-lg'>
          <Outlet />
        </div>
        <Footer />
      </div>
    </>
  )
}

export default Default
