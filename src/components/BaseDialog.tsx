import React, { useEffect } from 'react'
import { BaseProps } from 'src/types'
import closeIconSrc from 'src/assets/icons/close-icon.svg'

export type BaseDialogProps = { open?: boolean; onClose?: () => void } & BaseProps

function BaseDialog({ open, className, onClose, children }: BaseDialogProps) {
  useEffect(() => {
    if (open) {
      document.body.classList.add('overflow-hidden')
    } else {
      document.body.classList.remove('overflow-hidden')
    }
    return () => {
      document.body.classList.remove('overflow-hidden')
    }
  }, [open])

  return (
    <div
      className={`fixed z-50 inset-0 bg-black bg-opacity-90 overflow-y-auto h-full w-full px-4 ${open ? 'block' : 'hidden'}`}
    >
      <div
        className={`relative top-40 mx-auto bg-[#111112] shadow-xl rounded-md base-shadow p-[46px] ${className}`}
      >
        <img
          className='absolute cursor-pointer w-[30px] h-[30px] top-[24px] right-[17px]'
          src={closeIconSrc}
          alt='close icon'
          onClick={onClose}
        />

        <div className='p-6 pt-0'>{children}</div>
      </div>
    </div>
  )
}

export default BaseDialog
