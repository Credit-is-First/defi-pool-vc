import React from 'react'
import GradientWrraper from '../GradientWrapper'
import { BaseProps } from 'src/types'

type Props = {
  hideBorder?: boolean
} & BaseProps

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
