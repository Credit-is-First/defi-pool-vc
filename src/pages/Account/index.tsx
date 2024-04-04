import React from 'react'
import GradientWrraper from 'src/components/GradientWrapper'
import BaseButton from 'src/components/buttons/BaseButton'
import FiveirePercentItem from './components/FiveirePercentItem'
import ScrollView from 'src/components/ScrollView'

import remainderChartSrc from 'src/assets/images/remainder_Chart.png'
import searchIconSrc from 'src/assets/icons/search-icon.svg'
import pnlChartSrc from 'src/assets/images/pnl_chart.png'
import fiveireChartSrc from 'src/assets/images/5ire_chart.png'
import TxHistoryTable from './components/TxHistoryTable'

function AccountPage() {
  return (
    <>
      <div className='mt-[60px] mb-0 md:mb-[80px] flex items-start md:items-center flex-col md:flex-row  whitespace-nowrap'>
        <h3 className='flex-auto mb-[60px] md:mb-0 text-center w-full sm:text-left'>Total PNL</h3>
        <div className='flex items-center w-full md:w-[434px] mb-[20px] md:mb-0 justify-end'>
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
          <h5 className='gradient-text flex-auto text-right'>+ 437%</h5>
        </div>
      </div>

      <img className='mt-0' src={pnlChartSrc} alt='pnl chart' />

      <div className='flex justify-between items-center mt-[120px]'>
        <h3>5ire</h3>
        <h5 className='gradient-text'>+ 1000%</h5>
      </div>

      <div className='mt-[80px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[34px]'>
        <div className='md:col-span-1 lg:col-span-2'>
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
          <h3 className='mt-[100px] text-center lg:text-left'>Total tokens</h3>
          <div className='mt-[56px] flex items-center justify-between max-w-[560px] flex-col sm:flex-row md:flex-col lg:flex-row'>
            <div>
              <img width={290} height={302} src={remainderChartSrc} alt='remainder chart' />
            </div>
            <div className='grid grid-rows-4 gap-[30px] mt-5 sm:mt-0 md:mt-5 lg:mt-0'>
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
        <div className='lg:col-span-1 flex flex-col mt-10 md:mt-0'>
          <GradientWrraper
            borderWidth={1}
            className='rounded-[200px] text-sm px-[25px] flex items-center ml-1 mr-[41px] mb-[50px]'
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
      <TxHistoryTable />
    </>
  )
}

export default AccountPage
