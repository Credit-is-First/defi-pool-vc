import React from 'react'
import { Link } from 'react-router-dom'
import ConnectWalletBtn from './components/ConnectWalletBtn'
import Logo from 'src/assets/images/logo.png'

function Header() {
  return (
    <div className='header py-[24px] sticky top-0 z-10'>
      <div className='container m-auto max-w-[1241px] flex items-center'>
        <div className='w-[55px] h-[55px]'>
          <img src={Logo} alt='logo' />
        </div>
        <div className='flex-1 px-[34px] flex justify-evenly items-center'>
          <Link to={'/'}>
            <nav className='px-1'>Home</nav>
          </Link>
          <Link to={'/blog'}>
            <nav className='px-1'>Blog</nav>
          </Link>
          <Link to={'/projects'}>
            <nav className='px-1'>Projects</nav>
          </Link>
          <Link to={'/tier'}>
            <nav className='px-1'>Tier</nav>
          </Link>
          <Link to={'/'}>
            <nav className='px-1'>Documentation</nav>
          </Link>
          <Link to={'/account'}>
            <nav className='px-1'>Account</nav>
          </Link>
          <Link to={'/'}>
            <nav className='px-1'>Ambassador program</nav>
          </Link>
          <Link to={'/'}>
            <nav className='px-1'>Marketplace</nav>
          </Link>
        </div>
        <div>
          <ConnectWalletBtn />
        </div>
      </div>
    </div>
  )
}

export default Header
