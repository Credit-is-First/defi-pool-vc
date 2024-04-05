import React, { useCallback, useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import ConnectWalletBtn from './components/ConnectWalletBtn'
import Logo from 'src/assets/images/logo.png'
import SignupDialog from 'src/pages/Signup'
import BaseLink from 'src/components/links/BaseLink'
import SigninDialog from 'src/pages/Signin'
import { ReactComponent as MoreIcon } from 'src/assets/icons/more-icon.svg'
import { BaseProps } from 'src/types'
import useScreen from 'src/hooks/useScreen'

function Header({ className }: BaseProps) {
  const { hash, pathname } = useLocation()
  const navigate = useNavigate()
  const moreThanLg = useScreen('lg')

  const [isOpenMenu, setOpenMenu] = useState(false)

  const toggleMenu = useCallback(() => setOpenMenu((prev) => !prev), [])
  const closeMenu = useCallback(() => setOpenMenu(false), [])

  const handleCloseDialog = useCallback(() => navigate(pathname), [pathname])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  useEffect(() => {
    if (moreThanLg) setOpenMenu(false)
  }, [moreThanLg])

  useEffect(() => {
    if (isOpenMenu) {
      document.body.classList.add('overflow-hidden')
    } else {
      document.body.classList.remove('overflow-hidden')
    }
    return () => {
      document.body.classList.remove('overflow-hidden')
    }
  }, [isOpenMenu])

  return (
    <div
      className={`select-none py-3 lg:py-[24px] sticky top-0 z-10 bg-mainBg shadow-lg ${className}`}
    >
      <div className='container m-auto max-w-[1241px] h-full flex items-center justify-between px-4 md:px-6 xl:px-0'>
        <img className='w-[55px] h-[55px]' src={Logo} alt='logo' />
        <div className='hidden flex-1 px-[10px] xl:px-[34px] lg:flex justify-evenly items-center whitespace-nowrap'>
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
          <BaseLink to={'/'} external>
            <nav className='px-1'>Documentation</nav>
          </BaseLink>
          <BaseLink to={'/account'}>
            <nav className='px-1'>Account</nav>
          </BaseLink>
          <BaseLink to={'/ambassador-program'}>
            <nav className='px-1'>Ambassador program</nav>
          </BaseLink>
          <BaseLink to={'/marketplace'}>
            <nav className='px-1'>Marketplace</nav>
          </BaseLink>
        </div>
        <div className='flex items-center'>
          <ConnectWalletBtn className='w-[200px] h-[40px] lg:w-[247px] lg:h-[44px]' />
          <MoreIcon
            onClick={toggleMenu}
            className='cursor-pointer hover:stroke-accent lg:hidden stroke-subtitle2 ml-5'
          />
        </div>
      </div>
      <SignupDialog open={hash === '#signup'} onClose={handleCloseDialog} />
      <SigninDialog open={hash === '#signin'} onClose={handleCloseDialog} />

      {isOpenMenu && (
        <div className='fixed top-[70px] left-0 right-0 bottom-0 flex flex-col lg:hidden'>
          <div
            className='bg-black bg-opacity-90 absolute top-0 right-0 bottom-0 left-0 z-[-1]'
            onClick={closeMenu}
          />
          <BaseLink to={'/'} onClick={closeMenu}>
            <nav className='px-5 py-4 bg-mainBg hover:bg-card'>Home</nav>
          </BaseLink>
          <BaseLink to={'/blog-article'} onClick={closeMenu}>
            <nav className='px-5 py-4 bg-mainBg hover:bg-card'>Blog</nav>
          </BaseLink>
          <BaseLink to={'/projects'} onClick={closeMenu}>
            <nav className='px-5 py-4 bg-mainBg hover:bg-card'>Projects</nav>
          </BaseLink>
          <BaseLink to={'/tier'} onClick={closeMenu}>
            <nav className='px-5 py-4 bg-mainBg hover:bg-card'>Tier</nav>
          </BaseLink>
          <BaseLink to={'/'} onClick={closeMenu} external>
            <nav className='px-5 py-4 bg-mainBg hover:bg-card'>Documentation</nav>
          </BaseLink>
          <BaseLink to={'/account'} onClick={closeMenu}>
            <nav className='px-5 py-4 bg-mainBg hover:bg-card'>Account</nav>
          </BaseLink>
          <BaseLink to={'/ambassador-program'} onClick={closeMenu}>
            <nav className='px-5 py-4 bg-mainBg hover:bg-card'>Ambassador program</nav>
          </BaseLink>
          <BaseLink to={'/marketplace'} onClick={closeMenu}>
            <nav className='px-5 py-4 bg-mainBg hover:bg-card'>Marketplace</nav>
          </BaseLink>
        </div>
      )}
    </div>
  )
}

export default Header
