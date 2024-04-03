import React from 'react'
import BaseDialog, { BaseDialogProps } from 'src/components/BaseDialog'
import BaseInput from 'src/components/inputs/BaseInput'
import infoIconSrc from 'src/assets/icons/info-icon.svg'
import BaseSlider from 'src/components/BaseSlider'
import BaseButton from 'src/components/buttons/BaseButton'

type Props = BaseDialogProps

function InvestDialog({ className, open = false, onClose, ...others }: Props) {
  return (
    <BaseDialog
      className={`w-[1000px] h-[648px] rounded-[50px] ${className}`}
      open={open}
      onClose={onClose}
      {...others}
    >
      <h4 className='ml-[17px] mr-[43px]'>
        Specify the amount in USDT you want to invest in this project
      </h4>
      <div className='rounded-[50px] bg-[#1c1c1e] p-11 flex justify-between mt-[15px]'>
        <div>
          <div className='custom-text-md text-[#5A5A5A]'>Enter the amount $</div>
          <BaseInput type='text' placeholder='1000' inputMode='numeric' className='h-[42px]' />
          <div className='flex custom-text-md text-[#5A5A5A] mt-[12px]'>
            <img className='mr-[10x]' src={infoIconSrc} alt='info icon' />
            <span>
              The commission amount is 10%
              <br />
              Amount including commission: $1100
            </span>
          </div>
          <div className='text-right mini-text mt-[145px]'>50%</div>
          <BaseSlider value={50} className='h-[22px] w-[328px] mt-[10px]' />
          <div className='text-[#5A5A5A] mt-[33px]'>Allocation 250K</div>
        </div>
        <div className='w-[328px]'>
          <nav className='mt-[18px]'>$1000 000</nav>
          <div className='mini-text gradient-text mt-[5px]'>
            Allocation according to your tier Octopus
          </div>
          <div className='custom-text-sm text-[#9E9E9E] mt-[10px]'>
            You have a maximum allocation of $500 in accordance with your dash, if you need an
            allocation for a large amount, take another tir
          </div>
          <div className='flex custom-text-md text-[#5A5A5A] mt-[121px]'>
            <img className='mr-[10x]' src={infoIconSrc} alt='info icon' />
            <span>You get: 3000 TK</span>
          </div>
          <BaseButton className='w-[186px] h-[53px] mt-[20px]'>invest</BaseButton>
          <div className='custom-text-md text-[#5A5A5A] mt-[18px]'>
            LP tokens will be credited to your wallet to confirm your share in this pool
          </div>
        </div>
      </div>
    </BaseDialog>
  )
}

export default InvestDialog
