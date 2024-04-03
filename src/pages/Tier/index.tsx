import React from 'react'
import './index.css'
import BaseCarousel from 'src/components/BaseCarousel'
import TierItem from './components/TierItem'

function TierPage() {
  return (
    <>
      <h2 className='mt-[51px]'>Tier</h2>
      <h4 className='mt-[100px]'>Choose a tier based on the number of POOL tokens you have.</h4>

      <BaseCarousel className='mt-[100px]'>
        <TierItem name='Shrimp' allocation={100} poolSize={500} />
        <TierItem name='Crab' allocation={500} poolSize={2500} />
        <TierItem name='Octopus' allocation={1000} poolSize={5000} />
        <TierItem name='Fish' allocation={2500} poolSize={12500} />
        <TierItem name='Dolphin' allocation={5000} poolSize={25000} />
        <TierItem name='Shark' allocation={10000} poolSize={50000} />
        <TierItem name='Whale' allocation={25000} poolSize={125000} />
      </BaseCarousel>

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
