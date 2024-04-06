import React, { useCallback, useState } from 'react'
import BaseButton from 'src/components/buttons/BaseButton'
import { ReactComponent as RightImage } from 'src/assets/images/ambassador_pg_backgroud.svg'
import AmbassadorProgramPopup from './components/AmbassadorProgramPopup'

function AmbassadorProgramPage() {
  const [open, setOpen] = useState(false)

  const openPopup = useCallback(() => {
    setOpen(true)
  }, [])

  const closePopup = useCallback(() => {
    setOpen(false)
  }, [])

  return (
    <div className='flex justify-between items-center mb-[150px]'>
      <div className='max-w-[729px] m-auto'>
        <h3 className='mt-[67px] text-center xs:text-left'>DeFi Pool ambassador program</h3>
        <div className='mt-[20px]'>Join the Ambassador program and earn rewards</div>
        <div className='mt-[50px]'>Ambassador rewards</div>
        <div className='mt-[20px]'>
          For each new project, we will send you a unique promo code, which your followers can use
          to get a 3% discount on pool deposits. In return, you will receive $15 worth of POOL
          tokens for each activation of your promo code
        </div>
        <div className='mt-[50px]'>Ambassador program objective</div>
        <div className='mt-[20px]'>
          This program is designed to attract new users to the project and increase brand visibility
          on social media through the creation of unique content.
        </div>
        <div className='mt-[15px]'>
          To become a DeFi Pool Ambassador, please fill out an application, and we will review it
          within 72 hours!
        </div>
        <div className='mt-[90px]'>
          <BaseButton className='w-[186px] h-[53px] m-auto xs:mx-0' onClick={openPopup}>
            Start
          </BaseButton>
        </div>
      </div>
      <div className='hidden lg:block ml-10'>
        <RightImage />
      </div>

      <AmbassadorProgramPopup open={open} onClose={closePopup} />
    </div>
  )
}

export default AmbassadorProgramPage
