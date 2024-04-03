import React from 'react'
import LogoSrc from 'src/assets/images/logo.png'
import GradientWrraper from 'src/components/GradientWrapper'
import InvestorChartSrc from 'src/assets/images/investor_chart.png'
import BlogCarouselItem from '../../components/BlogCarouselItem'
import BaseCarousel from 'src/components/BaseCarousel'
import BaseLinkButton from 'src/components/buttons/BaseLinkButton'

function HomePage() {
  return (
    <div>
      <div className='flex justify-between items-center'>
        <div className='max-w-[568px]'>
          <h2>Invest in the best global early-stage project</h2>
          <div className='flex mt-[78px]'>
            <BaseLinkButton to='#signup' className='h-[44px] px-0 w-[143px] text-[15px] mr-[30px]'>
              SIGN UP
            </BaseLinkButton>
            <BaseLinkButton to='#signin' className='h-[44px] px-0 w-[143px] text-[15px]'>
              LOG IN
            </BaseLinkButton>
          </div>
        </div>
        <img src={LogoSrc} alt='logo image' />
      </div>

      <h3 className='mt-[120px]'>
        <span className='text-accent'>DeFi pool</span> - decentralize venture fund in web 3, which,
        thanks to smart contracts, unites a large number of private investors for joint investments
        at an early stage
      </h3>

      <h2 className='mt-[137px]'>
        Just <span className='text-accent'>4</span> steps to start investing
      </h2>

      <div className='grid grid-cols-4 gap-[15px] mt-[100px]'>
        <GradientWrraper
          borderWidth={1}
          className='bg-[#1c1c1e] flex items-center rounded-[30px] py-[33px]'
        >
          <h1 className='text-accent ml-[33px] mr-[25px]'>1</h1>
          <div className='ul-text text-center mr-[33px]'>Register an account</div>
        </GradientWrraper>
        <GradientWrraper
          borderWidth={1}
          className='bg-[#1c1c1e] flex items-center rounded-[30px] py-[33px]'
        >
          <h1 className='text-accent ml-[33px] mr-[25px]'>2</h1>
          <div className='ul-text text-center w-[143px]'>Undergo KYC verification</div>
        </GradientWrraper>
        <GradientWrraper
          borderWidth={1}
          className='bg-[#1c1c1e] flex items-center rounded-[30px] py-[33px]'
        >
          <h1 className='text-accent ml-[33px] mr-[25px]'>3</h1>
          <div className='ul-text text-center w-[168px]'>Enter info an agreement with the fund</div>
        </GradientWrraper>
        <GradientWrraper
          borderWidth={1}
          className='bg-[#1c1c1e] flex items-center rounded-[30px] py-[33px]'
        >
          <h1 className='text-accent ml-[33px] mr-[25px]'>4</h1>
          <div className='ul-text text-center w-[194px]'>
            Choose a their based on desired allocation
          </div>
        </GradientWrraper>
      </div>

      <div className='flex mt-[100px] justify-center'>
        <BaseLinkButton to='#signup' className='h-[44px] px-0 w-[143px] text-[15px] mr-[30px]'>
          SIGN UP
        </BaseLinkButton>
        <BaseLinkButton to='#signin' className='h-[44px] px-0 w-[143px] text-[15px]'>
          LOG IN
        </BaseLinkButton>
      </div>

      <h2 className='mt-[150px]'>Convenient functionality for investors</h2>
      <div className='mt-[100px] flex items-center justify-between'>
        <div className='primary-ul grid grid-rows-3 gap-[30px]'>
          <h5>Total portfolio ROI</h5>
          <h5>ROI for each project</h5>
          <h5>Unblock schedule</h5>
        </div>
        <div>
          <img src={InvestorChartSrc} width={698} className='mt-[-5px] mb-[-39px]' />
        </div>
      </div>

      <h2 className='mt-[142px]'>Blog</h2>
      <BaseCarousel className='mt-[100px]'>
        <BlogCarouselItem />
        <BlogCarouselItem />
        <BlogCarouselItem />
        <BlogCarouselItem />
        <BlogCarouselItem />
        <BlogCarouselItem />
        <BlogCarouselItem />
        <BlogCarouselItem />
        <BlogCarouselItem />
        <BlogCarouselItem />
      </BaseCarousel>
    </div>
  )
}

export default HomePage
