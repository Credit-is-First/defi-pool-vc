import React from 'react'
import GradientWrraper from 'src/components/GradientWrapper'

function BlogCarouselItem() {
  return (
    <GradientWrraper
      borderWidth={1}
      className='px-[12px] py-[30px] w-[284px] h-[273px] bg-card rounded-[11px]'
    >
      <nav className='mb-[45px]'>
        Introducing Vault – cryptobanking white label and API B2B solution powered by DeFi pool
      </nav>
      <div className='text-xs font-medium opacity-80'>
        Vault is part of the Choise.com group. Over the past six years, more than $60M has been
        invested in the infrastructure of Choise.com. Building on this robust infrastructure, Vault
        is now crafting the leading cryptobanking white label B2B2C product.
      </div>
    </GradientWrraper>
  )
}

export default BlogCarouselItem
