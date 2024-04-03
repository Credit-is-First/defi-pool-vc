import React from 'react'
import fiveireIconSrc from 'src/assets/icons/5ire-icon.png'

type Props = {
  percent: number
}

function FiveirePercentItem({ percent }: Props) {
  return (
    <div className='hover flex items-center justify-between h-[90px] bg-[#202326] px-[23px] rounded-[20px]'>
      <div className='flex items-center'>
        <img src={fiveireIconSrc} width={47} alt='5ire icon' />
        <div className='ul-text ml-[15px]'>5ire</div>
      </div>
      {percent >= 0 ? (
        <div className='text-accent'>+{percent}%</div>
      ) : (
        <div className='text-danger'>{percent}%</div>
      )}
    </div>
  )
}

export default FiveirePercentItem
