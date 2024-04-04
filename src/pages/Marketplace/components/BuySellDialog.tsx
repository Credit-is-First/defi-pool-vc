import React from 'react'
import BaseDialog, { BaseDialogProps } from 'src/components/BaseDialog'
import { MarketType } from '..'
import BaseRoundedInput from 'src/components/inputs/BaseRoundedInput'
import BaseButton from 'src/components/buttons/BaseButton'
import { ReactComponent as ArrowRight } from 'src/assets/icons/arrow-right-mac.svg'

interface Props extends BaseDialogProps {
  type: MarketType
}

function BuySellDialog({ type, className, ...others }: Props) {
  return (
    <BaseDialog
      className={`max-w-[1000px] h-[736px] rounded-[50px] bg-mainBg ${className}`}
      {...others}
    >
      <h4 className='uppercase ml-[17px]'>{type}</h4>
      <div className='mt-[67px] bg-card px-4 sm:px-6 lg:px-[54px] py-[82.5px] rounded-[50px]'>
        <div className='max-w-[630px] text-sm text-disactive'>
          <BaseRoundedInput
            className='col-span-2 text-title'
            inputClass='px-[30px] text-sm'
            placeholder='LP'
            startItem={<ArrowRight />}
          />

          <div className='mt-[30px]'>Amount</div>

          <BaseRoundedInput
            className='col-span-2 text-title mt-[10px]'
            inputClass='px-[30px] text-sm'
            placeholder='0.2385644'
            startItem='LP'
          />
          <div className='mt-[10px]'>Available 0.23107453 LP</div>

          <div className='mt-[30px]'>Amount</div>

          <BaseRoundedInput
            className='col-span-2 text-title mt-[10px]'
            inputClass='px-[30px] text-sm'
            placeholder='234'
            startItem='$'
          />
        </div>
        <BaseButton className='w-[186px] h-[53px] mt-[40px]'>{type}</BaseButton>
      </div>
    </BaseDialog>
  )
}

export default BuySellDialog
