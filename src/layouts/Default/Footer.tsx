import React from 'react'
import Logo from 'src/assets/images/logo.png'
import Socials from 'src/components/Socials'

function Footer() {
  return (
    <div className='h-[289px] relative'>
      <div className='absolute top-[27px] left-0'>
        <div className='w-[55px] h-[55px]'>
          <img src={Logo} alt='logo' />
        </div>
        <nav className='mt-[10px]'>DeFi pool LLC</nav>
        <Socials className='mt-[20px]' />
        <div>
          <nav className='mt-[20px]'>Prpopose a progect:</nav>
          <nav className='font-normal mt-[10px]'>support@defipool.com</nav>
        </div>
        <nav className='mt-[20px] text-secondary'>2023</nav>
      </div>
      <div className='absolute top-[92px] right-0'>
        <nav>Legal documentation</nav>
        <nav className='font-medium mt-[30px] text-secondary'>Privacy Notice</nav>
        <nav className='font-medium mt-[10px] text-secondary'>Terms of Services</nav>
        <nav className='font-medium mt-[10px] text-secondary'>Risks disklosure statement</nav>
      </div>
    </div>
  )
}

export default Footer
