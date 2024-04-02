import React from 'react'
import copyTextSrc from 'src/assets/icons/copy-text-icon.svg'
import arrowRightSrc from 'src/assets/icons/arrow-right-circle.svg'

function TxHistoryItem() {
  return (
    <div className='grid grid-cols-10 gap-[10px] h-[90px] bg-[#202326] px-[26px] rounded-[20px]'>
      <div className='col-span-3 flex items-center ul-text'>
        <div className='overflow-hidden text-ellipsis'>
          0x33652f5a2cAB49421d72f12bca53B011E7e2645c
        </div>
      </div>
      <div className='col-span-2 flex items-center ul-text'>1 day 8 mins ago</div>
      <div className='col-span-2 flex items-center ul-text'>
        <div className='flex items-start'>
          0x3365...e2645c
          <img src={copyTextSrc} alt='copy text' />
        </div>
      </div>
      <div className='col-span-1 flex items-center justify-center ul-text'>
        <img src={arrowRightSrc} alt='arrow right' />
      </div>
      <div className='col-span-2 flex items-center ul-text'>0x3365...e2645c</div>
    </div>
  )
}

export default TxHistoryItem
