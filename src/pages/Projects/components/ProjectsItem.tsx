import React, { DetailedHTMLProps, HTMLAttributes, useCallback } from 'react'
import { useNavigate } from 'react-router'
import partexSrc from 'src/assets/images/patex.jpg'

type Props = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>

function ProjectsItem({ className }: Props) {
  const navigate = useNavigate()

  const gotoDetailPage = useCallback(() => {
    navigate('/project/1234')
  }, [])

  return (
    <div
      className={`rounded-[30px] overflow-hidden p-[26px] bg-[#1c1c1e] cursor-pointer hover ${className}`}
      onClick={gotoDetailPage}
    >
      <div>
        <img className='rounded-[25px] overflow-hidden' src={partexSrc} alt='patex image' />
      </div>
      <div className='text-[12px] primary my-[26px] text-center'>
        <span className='uppercase gradient-text'>completed</span>
        <span className='uppercase gradient-text'> / profit 400%</span>
      </div>
      <div className='text-[12px] px-[13px] text-[#e3dfdf]'>
        The first blockchain ecosystem targeting Latin America, a region with 670M+ people and a
        $5.5 trillion GDP
      </div>

      <div className='grid gap-[5px] mt-[20px] px-[26px] text-[#e3dfdf]'>
        <span className='flex justify-between items-center'>
          <span className='text-[12px]'>Fundraise goal</span>
          <span className='text-[11px] font-inter'>
            20,000 <span className='opacity-40 font-light'>USDT</span>
          </span>
        </span>
        <span className='flex justify-between items-center'>
          <span className='text-[12px]'>Price per token</span>
          <span className='text-[11px] font-inter'>
            0.95 <span className='opacity-40 font-light'>USDT</span>
          </span>
        </span>
        <span className='flex justify-between items-center'>
          <span className='text-[12px]'>Fundraise goal</span>
          <span className='text-[11px]'>SOON</span>
        </span>
      </div>
    </div>
  )
}

export default ProjectsItem
