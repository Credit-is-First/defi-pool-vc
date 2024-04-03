import React, { useCallback } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import ConnectWalletBtn from './components/ConnectWalletBtn'
import Logo from 'src/assets/images/logo.png'
import SignupDialog from 'src/pages/Signup'
import BaseLink from 'src/components/links/BaseLink'

function Header() {
  const { hash, pathname } = useLocation()
  const navigate = useNavigate()

  const handleCloseDialog = useCallback(() => {
    navigate(pathname)
  }, [])

  return (
    <div className='header py-[24px] sticky top-0 z-10'>
      <div className='container m-auto max-w-[1241px] flex items-center'>
        <div className='w-[55px] h-[55px]'>
          <img src={Logo} alt='logo' />
        </div>
        <div className='flex-1 px-[34px] flex justify-evenly items-center'>
          <BaseLink to={'/'}>
            <nav className='px-1'>Home</nav>
          </BaseLink>
          <BaseLink to={'/blog-article'}>
            <nav className='px-1'>Blog</nav>
          </BaseLink>
          <BaseLink to={'/projects'}>
            <nav className='px-1'>Projects</nav>
          </BaseLink>
          <BaseLink to={'/tier'}>
            <nav className='px-1'>Tier</nav>
          </BaseLink>
          <BaseLink to={'/'}>
            <nav className='px-1'>Documentation</nav>
          </BaseLink>
          <BaseLink to={'/account'}>
            <nav className='px-1'>Account</nav>
          </BaseLink>
          <BaseLink to={'/'}>
            <nav className='px-1'>Ambassador program</nav>
          </BaseLink>
          <BaseLink to={'/'}>
            <nav className='px-1'>Marketplace</nav>
          </BaseLink>
        </div>
        <div>
          <ConnectWalletBtn />
        </div>
      </div>
      <SignupDialog open={hash === '#signup'} onClose={handleCloseDialog} />
    </div>
  )
}

export default Header
