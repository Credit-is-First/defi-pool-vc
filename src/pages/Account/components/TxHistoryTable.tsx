import React from 'react'
import ScrollView from 'src/components/ScrollView'
import { BaseProps } from 'src/types'
import TxHistoryItem from './TxHistoryItem'

function TxHistoryTable({ className = '', ...others }: BaseProps) {
  return (
    <div className={`mt-[120px] ${className}`} {...others}>
      <div className='hidden 2md:grid grid-cols-10 gap-[10px] h-[90px] px-[26px] mr-[30px] ul-text'>
        <div className='col-span-3 flex items-center'>TXN hash</div>
        <div className='col-span-2 flex items-center'>Age</div>
        <div className='col-span-2 flex items-center'>From</div>
        <div className='col-span-2 col-start-9 flex items-center'>To</div>
      </div>
      <ScrollView
        className='h-[500px] mb-[36px]'
        contentClass='relative pr-[30px] overflow-y-scroll py-1'
      >
        <div className='grid gap-[10px]'>
          <TxHistoryItem />
          <TxHistoryItem />
          <TxHistoryItem />
          <TxHistoryItem />
          <TxHistoryItem />
          <TxHistoryItem />
          <TxHistoryItem />
          <TxHistoryItem />
          <TxHistoryItem />
        </div>
      </ScrollView>
    </div>
  )
}

export default TxHistoryTable
