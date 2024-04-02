import React, { DetailedHTMLProps, HTMLAttributes } from 'react'

type Props = {
  dotColor: string
  text: string
} & DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>

function LiItem({ dotColor, text, className, ...others }: Props) {
  return (
    <div className={`flex items-center ${className}`} {...others}>
      <span className={`${dotColor} w-[8px] h-[8px] rounded-[4px] inline-block mr-1`} />
      <span>{text}</span>
    </div>
  )
}

export default LiItem
