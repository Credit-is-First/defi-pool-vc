import React, { MouseEvent, useCallback, useState } from 'react'
import ScrollView from 'src/components/ScrollView'
import BaseButton from 'src/components/buttons/BaseButton'
import MarketplaceListItem from './components/MarketplaceListItem'
import BuySellDialog from './components/BuySellDialog'

export type MarketType = 'buy' | 'sell'

function MarketplacePage() {
  const [type, setType] = useState<MarketType>('buy')
  const [open, setOpen] = useState(false)

  const changeType = useCallback((e: MouseEvent<HTMLButtonElement>) => {
    console.log(e.currentTarget.name)
    setType(e.currentTarget.name as MarketType)
  }, [])

  const openDialog = useCallback(() => setOpen(true), [])
  const closeDialog = useCallback(() => setOpen(false), [])

  return (
    <>
      <h2 className='mt-[15px]'>Marketplace</h2>
      <div className='mt-[100px] grid auto-cols-min grid-flow-col gap-[20px] text-2xs'>
        <BaseButton
          className='w-[120px] h-[34px]'
          name='buy'
          hideBorder={type !== 'buy'}
          onClick={changeType}
        >
          Buy
        </BaseButton>
        <BaseButton
          className='w-[120px] h-[34px]'
          name='sell'
          hideBorder={type !== 'sell'}
          onClick={changeType}
        >
          Sell
        </BaseButton>
      </div>

      <ScrollView
        className='mt-[70px] h-[724px]'
        contentClass='overflow-y-auto pr-[10px] lg:pr-[57px] py-[17px] px-1'
      >
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[50px] place-content-center'>
          <MarketplaceListItem type={type} onClick={openDialog} />
          <MarketplaceListItem type={type} onClick={openDialog} />
          <MarketplaceListItem type={type} onClick={openDialog} />
          <MarketplaceListItem type={type} onClick={openDialog} />
          <MarketplaceListItem type={type} onClick={openDialog} />
          <MarketplaceListItem type={type} onClick={openDialog} />
          <MarketplaceListItem type={type} onClick={openDialog} />
          <MarketplaceListItem type={type} onClick={openDialog} />
          <MarketplaceListItem type={type} onClick={openDialog} />
        </div>
      </ScrollView>

      <div className='mt-[120px] text-2xl text-disactive'>
        While your tokens are frozen in the dash, you will be able to invest in projects based on
        the allocation of your shooting gallery, as well as receive a reward from the profitability
        of the fund&apos;s venture portfolio.
      </div>
      <div className='mt-[30px] mb-[120px] text-2xl text-disactive'>
        After replenishing the shooting gallery, you will receive GT (Governance Token), the
        presence of which will allow you to take part in voting for the selection of future projects
      </div>

      <BuySellDialog type={type} open={open} onClose={closeDialog} />
    </>
  )
}

export default MarketplacePage
