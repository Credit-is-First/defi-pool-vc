import React, { DetailedHTMLProps, HTMLAttributes } from 'react'
import GradientWrraper from '../GradientWrapper'

type Props = {
  hideBorder?: boolean
} & DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>

function BaseButton({ className, hideBorder, children, ...others }: Props) {
  return (
    <GradientWrraper
      hideBorder={hideBorder}
      className={
        'cursor-pointer hover rounded-[200px] flex items-center justify-center ' + className
      }
      {...others}
    >
      <div className='gradient-text flex items-center justify-center uppercase'>{children}</div>
    </GradientWrraper>
  )
}

export default BaseButton
