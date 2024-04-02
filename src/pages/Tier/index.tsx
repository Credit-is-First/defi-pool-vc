import React from 'react'
import './index.css'
import TierCarousel from './components/TierCarousel'

function TierPage() {
  return (
    <>
      <h2 className='mt-[51px]'>Tier</h2>
      <h4 className='mt-[100px]'>Choose a tier based on the number of POOL tokens you have.</h4>

      <TierCarousel className='mt-[100px]' />

      <div className='tier-disactive-text mt-[100px]'>
        {`While your tokens are frozen in the dash, you will be able to invest in projects based on
        the allocation of your shooting gallery, as well as receive a reward from the profitability
        of the fund's venture portfolio.`}
      </div>
      <div className='tier-disactive-text mt-[30px] mb-[36px]'>
        After replenishing the shooting gallery, you will receive GT (Governance Token), the
        presence of which will allow you to take part in voting for the selection of future projects
      </div>
    </>
  )
}

export default TierPage
