import React from 'react'
import patexSrc from 'src/assets/images/patex.jpg'
import BaseButton from 'src/components/buttons/BaseButton'
import { MarketType } from '..'

type Props = {
  type: MarketType
  onClick: () => void
}

function MarketplaceListItem({ type, onClick }: Props) {
  return (
    <div className='min-w-[358px] h-[412px] p-[26px] rounded-[30px] bg-card text-2xs text-subtitle2'>
      <img className='rounded-[25px]' src={patexSrc} alt='patex' />
      <div className='flex flex-col items-center'>
        <div className='mt-[26px] text-2xs font-medium gradient-text uppercase'>
          Vavilon Traders
        </div>
        <div className='mt-[26px] text-2xs'>Sberbank</div>
      </div>
      <div className='flex items-center justify-between mt-[20px]'>
        <div>Available</div>
        <div>
          2,017.7628 <span className='text-disactive'>LP</span>
        </div>
      </div>
      <div className='flex items-center justify-between mt-[5px]'>
        <div>Limit</div>
        <div>$500-$5000</div>
      </div>
      <div className='flex items-center justify-between mt-[5px]'>
        <div>Price per token</div>
        <div>
          50 <span className='text-disactive'>$</span>
        </div>
      </div>
      <div className='flex justify-center'>
        <BaseButton
          borderWidth={1}
          className='w-[107px] h-[29px] text-xs mt-[20px]'
          uppercase={false}
          onClick={onClick}
        >
          {type === 'buy' ? 'Buy' : 'Sell'} LP
        </BaseButton>
      </div>
    </div>
  )
}

export default MarketplaceListItem
