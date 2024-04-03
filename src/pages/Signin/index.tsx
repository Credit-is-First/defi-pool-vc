import React from 'react'
import BaseDialog, { BaseDialogProps } from 'src/components/BaseDialog'
import BaseButton from 'src/components/buttons/BaseButton'
import BaseCheckbox from 'src/components/inputs/BaseCheckbox'
import BaseRoundedInput from 'src/components/inputs/BaseRoundedInput'
import BaseLink from 'src/components/links/BaseLink'

function SigninDialog({ className, ...others }: BaseDialogProps) {
  return (
    <BaseDialog className={`w-[1000px] rounded-[50px] pt-[39px] ${className}`} {...others}>
      <h4 className='mx-[17px]'>Log in</h4>
      <div className='mt-[67px] rounded-[50px] bg-card py-[94.5px] pl-[54px]'>
        <div className='grid grid-cols-2 gap-[30px] w-[630px]'>
          <BaseRoundedInput
            className='col-span-2'
            inputClass='px-[30px] text-sm'
            placeholder='Your email address'
          />
          <BaseRoundedInput
            className='col-span-2'
            inputClass='px-[30px] text-sm'
            placeholder='Password ( 10 character minimum)'
          />
        </div>
        <BaseCheckbox label='Remember me' className='text-disactive text-sm mt-[20px]' />
        <BaseButton className='w-[186px] h-[53px] mt-[40px]'>Log in</BaseButton>
        <div className='text-sm text-disactive mt-[40px]'>
          <BaseLink to='#forget-password'>Forgot your password?</BaseLink> · Need to confirm your
          email?
        </div>
        <div className='text-sm text-disactive mt-[20px]'>
          Don&apos;t have a account? <BaseLink to='#signup'>Sign up</BaseLink>
        </div>
      </div>
    </BaseDialog>
  )
}

export default SigninDialog
