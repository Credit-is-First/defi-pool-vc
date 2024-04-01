import React, { DetailedHTMLProps, HTMLAttributes } from 'react'

type Props = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>

function BaseButton({ onClick, ...others }: Props) {
  return (
    <div className='primary-btn' onClick={onClick}>
      <div className='m-[-6px]'>
        <div {...others}></div>
      </div>
    </div>
  )
}

export default BaseButton
