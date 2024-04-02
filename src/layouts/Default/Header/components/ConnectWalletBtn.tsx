import React from 'react'
import { ReactComponent as WalletIcon } from 'src/assets/icons/wallet-icon.svg'
import BaseButton from 'src/components/buttons/BaseButton'

function ConnectWalletBtn() {
  return (
    <BaseButton className='py-[10px] px-[45px] flex items-center'>
      <div className='pr-[10px]'>
        <WalletIcon />
      </div>
      <div className='gradient-text'>CONNECT WALLET</div>
    </BaseButton>
  )
}

export default ConnectWalletBtn
