import React, { DetailedHTMLProps, HTMLAttributes } from 'react'
import GradientWrraper from '../GradientWrapper'

type Props = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>

function BaseButton({ className, children, ...others }: Props) {
  return (
    <GradientWrraper
      className={
        'cursor-pointer hover rounded-[200px] flex items-center justify-center ' + className
      }
      {...others}
    >
      <div className='gradient-text flex items-center justify-center'>{children}</div>
    </GradientWrraper>
  )
}

export default BaseButton
