import React from 'react'
import GradientWrraper from 'src/components/GradientWrapper'
import BaseButton from 'src/components/buttons/BaseButton'
import { BaseProps } from 'src/types'

type Props = {
  name: string
  allocation: number
  poolSize: number
} & BaseProps

function TierItem({ name, allocation, poolSize, className = '' }: Props) {
  return (
    <GradientWrraper
      borderWidth={1}
      className={`px-[12px] py-[30px] w-[280px] h-[321px] bg-card rounded-[11px] flex flex-col items-center justify-center ${className}`}
    >
      <h4>{name}</h4>
      <div className='mt-[44px]'>Allocation ${allocation}</div>
      <div className='mt-[11px]'>{poolSize} POOL</div>
      <BaseButton className='w-[186px] h-[42px] mt-[40px]'>TOP UP</BaseButton>
    </GradientWrraper>
  )
}

export default TierItem
