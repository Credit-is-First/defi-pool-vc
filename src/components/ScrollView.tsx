import React, { DetailedHTMLProps, HTMLAttributes } from 'react'

type Props = { contentClass?: string } & DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>

function ScrollView({ className, children, contentClass = '' }: Props) {
  return (
    <div className={`relative ${className}`}>
      <div className={`custom-scrollbar h-full ${contentClass}`}>{children}</div>
      <div className='absolute top-0 right-[5px] bottom-0 w-[1px] bg-[#393940] -z-[1]' />
    </div>
  )
}

export default ScrollView
