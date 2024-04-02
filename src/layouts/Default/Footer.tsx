import React from 'react'
import Logo from 'src/assets/images/logo.png'
import { ReactComponent as TelegramIcon } from 'src/assets/icons/telegram-icon.svg'
import { ReactComponent as TwitterIcon } from 'src/assets/icons/twitter-icon.svg'
import { ReactComponent as InstagramIcon } from 'src/assets/icons/instagram-icon.svg'
import { ReactComponent as GithubIcon } from 'src/assets/icons/github-icon.svg'
import { ReactComponent as DiscordIcon } from 'src/assets/icons/discord-icon.svg'

function Footer() {
  return (
    <div className='h-[289px] relative'>
      <div className='absolute top-[27px] left-0'>
        <div className='w-[55px] h-[55px]'>
          <img src={Logo} alt='logo' />
        </div>
        <nav className='mt-[10px]'>DeFi pool LLC</nav>
        <div className='flex mt-[20px]'>
          <TelegramIcon className='mr-[10px]' />
          <TwitterIcon className='mr-[10px]' />
          <InstagramIcon className='mr-[10px]' />
          <GithubIcon className='mr-[10px]' />
          <DiscordIcon className='mr-[10px]' />
        </div>
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
