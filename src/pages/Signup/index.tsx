import React from 'react'
import BaseDialog, { BaseDialogProps } from 'src/components/BaseDialog'
import BaseButton from 'src/components/buttons/BaseButton'
import BaseRoundedInput from 'src/components/inputs/BaseRoundedInput'
import BaseLink from 'src/components/links/BaseLink'

function SignupDialog({ className, ...others }: BaseDialogProps) {
  return (
    <BaseDialog className={`max-w-[1000px] rounded-[50px] ${className}`} {...others}>
      <h4 className='mx-[17px]'>Create a new account</h4>
      <div className='mt-[67px] rounded-[50px] bg-card py-[46px] px-4 sm:px-6 lg:px-[54px]'>
        <div className='grid grid-cols-2 gap-[30px] max-w-[630px]'>
          <BaseRoundedInput
            className='col-span-1'
            inputClass='px-[30px] text-sm'
            placeholder='First name'
          />
          <BaseRoundedInput
            className='col-span-1'
            inputClass='px-[30px] text-sm'
            placeholder='Last name'
          />
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
          <BaseRoundedInput
            className='col-span-2'
            inputClass='px-[30px] text-sm'
            placeholder='Repeat password'
          />
        </div>
        <BaseButton className='w-[186px] h-[53px] mt-[40px] text-[16px] font-bold mx-auto sm:mx-0'>
          Create Account
        </BaseButton>
        <div className='text-sm mt-[40px] text-disactive mb-[20px]'>
          By creating an account, I agree to the{' '}
          <BaseLink to={'https://coinlist.co/terms'} underline external>
            Terms of Service
          </BaseLink>{' '}
          and{' '}
          <BaseLink to={'https://coinlist.co/privacy'} underline external>
            Privacy Policy
          </BaseLink>
          .
        </div>
        <div className='text-sm text-disactive'>
          Already have a account?{' '}
          <BaseLink to={'#signin'} underline>
            Sign in
          </BaseLink>
        </div>
      </div>
    </BaseDialog>
  )
}

export default SignupDialog
