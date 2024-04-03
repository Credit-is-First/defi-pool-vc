import React, { InputHTMLAttributes } from 'react'
import GradientWrraper from '../GradientWrapper'

interface BaseInputProps extends InputHTMLAttributes<HTMLInputElement> {
  height?: string | number
}

const BaseRoundedInput: React.FC<BaseInputProps> = ({ height = 47, style, className, ...rest }) => {
  return (
    <GradientWrraper borderWidth={2} className='rounded-[10px]'>
      <input
        className={`border-0 outline-0 bg-transparent placeholder-gray-500 px-2 py-1 ${className}`}
        style={{
          ...style,
          height,
        }}
        {...rest}
      />
    </GradientWrraper>
  )
}

export default BaseRoundedInput
