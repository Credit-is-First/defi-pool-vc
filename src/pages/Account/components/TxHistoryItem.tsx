import React from 'react'
import copyTextSrc from 'src/assets/icons/copy-text-icon.svg'
import arrowRightSrc from 'src/assets/icons/arrow-right-circle.svg'

function TxHistoryItem() {
  return (
    <>
      <div className='grid grid-cols-1 2md:grid-cols-10 gap-[10px] min-h-[90px] bg-listBg px-[26px] rounded-[20px] text-xl whitespace-nowrap py-5'>
        <div className='grid grid-cols-subgrid col-span-1 2md:col-span-5 order-2'>
          <div className='col-span-1 2md:col-span-3 flex items-center justify-between 2md:justify-center order-2 py-1'>
            <span className='2md:hidden mr-2 text-subtitle2'>TXN: </span>
            <div className='overflow-hidden text-ellipsis'>
              0x33652f5a2cAB49421d72f12bca53B011E7e2645c
            </div>
          </div>
          <div className='col-span-1 2md:col-span-2 flex items-center justify-between 2md:justify-center order-1 py-1'>
            <span className='2md:hidden mr-2 text-subtitle2'>Age: </span>1 day 8 mins ago
          </div>
        </div>
        <div className='grid grid-cols-subgrid col-span-1 2md:col-span-5 order-1'>
          <div className='col-span-1 2md:col-span-2 flex items-center justify-between 2md:justify-center py-1'>
            <span className='2md:hidden mr-2 text-subtitle2'>From: </span>
            <div className='flex items-start'>
              0x3365...e2645c
              <img src={copyTextSrc} alt='copy text' />
            </div>
          </div>
          <div className='hidden col-span-1 2md:flex items-center justify-between 2md:justify-center'>
            <img src={arrowRightSrc} alt='arrow right' />
          </div>
          <div className='col-span-1 2md:col-span-2 flex items-center justify-between 2md:justify-center py-1'>
            <span className='2md:hidden mr-2 text-subtitle2'>To: </span>
            0x3365...e2645c
          </div>
        </div>
      </div>
    </>
  )
}

export default TxHistoryItem
