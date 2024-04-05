import React from 'react'
import BaseDialog, { BaseDialogProps } from 'src/components/BaseDialog'
import BaseButton from 'src/components/buttons/BaseButton'
import BaseRoundedInput from 'src/components/inputs/BaseRoundedInput'
import BaseTextarea from 'src/components/inputs/BaseTextarea'
import BaseLink from 'src/components/links/BaseLink'

function AmbassadorProgramPopup({ className, ...others }: BaseDialogProps) {
  return (
    <BaseDialog className={`max-w-[1000px] rounded-[50px] ${className}`} {...others}>
      <h4 className='ml-[17px]'>Ambassador program</h4>
      <div className='mt-[67px] pt-[56px] px-4 sm:px-6 lg:px-[54px] pb-[45px] rounded-[50px] bg-card'>
        <div className='grid grid-flow-row gap-[20px] max-w-[630px]'>
          <div className='grid grid-cols-1 xs:grid-cols-2 gap-[20px] xs:gap-[30px]'>
            <BaseRoundedInput inputClass='px-[30px] text-sm' placeholder='First name' />
            <BaseRoundedInput inputClass='px-[30px] text-sm' placeholder='Email' />
          </div>
          <div className='grid grid-cols-1 xs:grid-cols-2 gap-[20px] xs:gap-[30px]'>
            <BaseRoundedInput inputClass='px-[30px] text-sm' placeholder='Last name' />
            <BaseRoundedInput inputClass='px-[30px] text-sm' placeholder='Country / city' />
          </div>
          <div className='grid grid-cols-1 xs:grid-cols-2 gap-[20px] xs:gap-[30px]'>
            <BaseRoundedInput inputClass='px-[30px] text-sm' placeholder='Twitter' />
            <BaseRoundedInput inputClass='px-[30px] text-sm' placeholder='Telegram' />
          </div>
          <div className='grid grid-cols-1 xs:grid-cols-2 gap-[20px] xs:gap-[30px]'>
            <BaseRoundedInput inputClass='px-[30px] text-sm' placeholder='Discord' />
            <BaseRoundedInput inputClass='px-[30px] text-sm' placeholder='Instagram' />
          </div>
          <div className='grid grid-cols-1 xs:grid-cols-2 gap-[20px] xs:gap-[30px]'>
            <BaseRoundedInput inputClass='px-[30px] text-sm' placeholder='Tik tok' />
            <BaseRoundedInput inputClass='px-[30px] text-sm' placeholder='Youtube' />
          </div>
          <BaseTextarea
            textareaClass='text-sm px-[30px]'
            placeholder='Do you have experience in the ambassador program?'
          />
          <BaseTextarea textareaClass='text-sm px-[30px]' placeholder='Tell us about yourself' />
          <BaseTextarea textareaClass='text-sm px-[30px]' placeholder='How can you help us?' />
        </div>
        <BaseButton className='w-[186px] h-[53px] mt-[50px]'>Send</BaseButton>
        <div className='mt-[20px] text-sm text-disactive mb-[20px]'>
          I agree to the{' '}
          <BaseLink to={'https://coinlist.co/terms'} underline external>
            Terms of Service
          </BaseLink>{' '}
          and{' '}
          <BaseLink to={'https://coinlist.co/privacy'} underline external>
            Privacy Policy
          </BaseLink>
          .
        </div>
      </div>
    </BaseDialog>
  )
}

export default AmbassadorProgramPopup
