import React from 'react'
import GradientWrraper from 'src/components/GradientWrapper'
import BaseButton from 'src/components/buttons/BaseButton'
import FiveirePercentItem from './components/FiveirePercentItem'
import ScrollView from 'src/components/ScrollView'
import TxHistoryItem from './components/TxHistoryItem'

import remainderChartSrc from 'src/assets/images/remainder_Chart.png'
import searchIconSrc from 'src/assets/icons/search-icon.svg'
import pnlChartSrc from 'src/assets/images/pnl_chart.png'
import fiveireChartSrc from 'src/assets/images/5ire_chart.png'

function AccountPage() {
  return (
    <>
      <div className='mt-[60px] flex items-center'>
        <h3 className='flex-auto'>Total PNL</h3>
        <div className='flex items-center'>
          <div className='flex items-center'>
            <input
              id='radio-500'
              type='radio'
              name='pnl-radio'
              value={500}
              checked
              className='w-[20px] h-[20px]'
            />
            <label htmlFor='radio-500' className='ml-[25px]'>
              $500
            </label>
          </div>
          <div className='flex items-center'>
            <input
              id='radio-5000'
              type='radio'
              name='pnl-radio'
              className='w-[20px] h-[20px] ml-[30px]'
              value={5000}
            />
            <label htmlFor='radio-5000' className='ml-[25px]'>
              $5000
            </label>
          </div>
        </div>
        <div className='gradient-text big-text ml-[100px]'>+ 437%</div>
      </div>

      <img className='mt-[80px]' src={pnlChartSrc} alt='pnl chart' />

      <div className='flex justify-between items-center mt-[120px]'>
        <h3>5ire</h3>
        <div className='gradient-text big-text'>+ 1000%</div>
      </div>

      <div className='mt-[80px] grid grid-cols-3 gap-[34px]'>
        <div className='col-span-2'>
          <div className='flex justify-end items-center mr-[50px]'>
            <div className='flex items-center'>
              <input
                id='fire_500'
                type='radio'
                name='fire-500'
                value={500}
                checked
                className='w-[20px] h-[20px]'
              />
              <label htmlFor='fire_500' className='ml-[25px]'>
                $500
              </label>
            </div>
            <div className='flex items-center'>
              <input
                id='fire_5000'
                type='radio'
                name='fire-500'
                className='w-[20px] h-[20px] ml-[30px]'
                value={5000}
              />
              <label htmlFor='fire_5000' className='ml-[25px]'>
                $5000
              </label>
            </div>
          </div>
          <div className='mr-[-55px]'>
            <img src={fiveireChartSrc} width='100%' alt='5ire chart' />
          </div>
          <h3 className='mt-[100px]'>Total tokens</h3>
          <div className='flex items-center'>
            <div>
              <img width={290} height={302} src={remainderChartSrc} alt='remainder chart' />
            </div>
            <div className='ml-[70px] grid grid-rows-4 gap-[30px]'>
              <div className='flex items-center'>
                <input
                  id='claim_1'
                  type='radio'
                  name='claim-1'
                  value={100}
                  className='w-[20px] h-[20px]'
                  checked
                />
                <label htmlFor='claim_1' className='ml-[25px] ul-text'>
                  10850 TK
                </label>
              </div>
              <div className='flex items-center'>
                <input
                  id='claim-2'
                  type='radio'
                  name='claim-2'
                  className='w-[20px] h-[20px]'
                  value={90}
                  checked
                />
                <label htmlFor='claim-2' className='ml-[25px] ul-text'>
                  90% 9000 TK
                </label>
              </div>
              <div className='flex items-center'>
                <input
                  id='claim-3'
                  type='radio'
                  name='claim-3'
                  className='w-[20px] h-[20px]'
                  value={10}
                />
                <label htmlFor='claim-3' className='ml-[25px] ul-text'>
                  10% 1000 TK
                </label>
              </div>
              <div className='flex justify-center'>
                <BaseButton className='w-[143px] h-[44px]'>CLAIM</BaseButton>
              </div>
            </div>
          </div>
        </div>
        <div className='col-span-1 flex flex-col'>
          <GradientWrraper
            borderWidth={1}
            className='rounded-[200px] mini-text px-[25px] flex items-center ml-1 mr-[41px] mb-[50px]'
          >
            <input
              type='text'
              placeholder='Search'
              className='border-none outline-none bg-transparent h-[42px] flex-auto placeholder-gray-500'
            />
            <img src={searchIconSrc} alt='search icon' />
          </GradientWrraper>
          <ScrollView className='h-[800px] flex-auto' contentClass='pl-1 pr-[30px] overflow-y-auto'>
            <div className='grid gap-[18px] py-1'>
              <FiveirePercentItem percent={537} />
              <FiveirePercentItem percent={423} />
              <FiveirePercentItem percent={-128} />
              <FiveirePercentItem percent={398} />
              <FiveirePercentItem percent={398} />
              <FiveirePercentItem percent={-128} />
              <FiveirePercentItem percent={398} />
              <FiveirePercentItem percent={139} />
              <FiveirePercentItem percent={128} />
              <FiveirePercentItem percent={-15} />
              <FiveirePercentItem percent={-69} />
              <FiveirePercentItem percent={239} />
              <FiveirePercentItem percent={-128} />
              <FiveirePercentItem percent={537} />
              <FiveirePercentItem percent={423} />
              <FiveirePercentItem percent={-128} />
              <FiveirePercentItem percent={398} />
              <FiveirePercentItem percent={398} />
              <FiveirePercentItem percent={-128} />
              <FiveirePercentItem percent={398} />
              <FiveirePercentItem percent={139} />
              <FiveirePercentItem percent={128} />
              <FiveirePercentItem percent={-15} />
              <FiveirePercentItem percent={-69} />
              <FiveirePercentItem percent={239} />
              <FiveirePercentItem percent={-128} />
            </div>
          </ScrollView>
        </div>
      </div>
      <div className='grid grid-cols-10 gap-[10px] h-[90px] mt-[120px] px-[26px] mr-[30px]'>
        <div className='col-span-3 flex items-center ul-text'>TXN hash</div>
        <div className='col-span-2 flex items-center ul-text'>Age</div>
        <div className='col-span-2 flex items-center ul-text'>From</div>
        <div className='col-span-2 col-start-9 flex items-center ul-text'>To</div>
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
    </>
  )
}

export default AccountPage
