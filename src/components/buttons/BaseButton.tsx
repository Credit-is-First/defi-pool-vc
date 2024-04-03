import React from 'react'
import GradientWrraper from '../GradientWrapper'
import { BaseProps } from 'src/types'

export type BaseButtonProps = {
  hideBorder?: boolean
} & BaseProps

function BaseButton({ className, hideBorder, children, ...others }: BaseButtonProps) {
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
