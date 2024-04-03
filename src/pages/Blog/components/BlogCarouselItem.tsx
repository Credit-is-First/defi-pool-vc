import React from 'react'
import GradientWrraper from 'src/components/GradientWrapper'

function BlogCarouselItem() {
  return (
    <GradientWrraper
      borderWidth={1}
      className='px-[13px] pt-[28px] w-[284px] h-[273px] bg-[#1c1c1e] rounded-[11px] flex flex-col items-center justify-center'
    >
      <nav className='primary'>
        Introducing Vault – cryptobanking white label and API B2B solution powered by DeFi pool
      </nav>
      <div className='text-[13px] leading-[15.51px] font-medium text-[#191919]'>
        Vault is part of the Choise.com group. Over the past six years, more than $60M has been
        invested in the infrastructure of Choise.com. Building on this robust infrastructure, Vault
        is now crafting the leading cryptobanking white label B2B2C product.
      </div>
    </GradientWrraper>
  )
}

export default BlogCarouselItem
