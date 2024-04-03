import React, { InputHTMLAttributes } from 'react'
import GradientWrraper from '../GradientWrapper'

interface BaseInputProps extends InputHTMLAttributes<HTMLInputElement> {
  height?: string | number
  inputClass?: string
}

const BaseRoundedInput: React.FC<BaseInputProps> = ({
  height = 47,
  style,
  className,
  inputClass,
  ...rest
}) => {
  return (
    <GradientWrraper borderWidth={2} className={`rounded-[10px] ${className}`}>
      <input
        className={`border-0 outline-0 bg-transparent placeholder-gray-500 px-2 py-1 w-full ${inputClass}`}
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
