import React from 'react'
import { BaseProps } from 'src/types'

type Props = { contentClass?: string } & BaseProps

function ScrollView({ className, children, contentClass = '' }: Props) {
  return (
    <div className={`relative ${className}`}>
      <div className={`custom-scrollbar h-full ${contentClass}`}>{children}</div>
      <div className='absolute top-0 right-[5px] bottom-0 w-[1px] bg-[#393940] -z-[1]' />
    </div>
  )
}

export default ScrollView
