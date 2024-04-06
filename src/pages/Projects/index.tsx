import React from 'react'
import BaseButton from 'src/components/buttons/BaseButton'
import ProjectsItem from './components/ProjectsItem'
import ScrollView from 'src/components/ScrollView'

function ProjectsPage() {
  return (
    <>
      <h2 className='text-center sm:text-left'>Projects</h2>
      <div className='grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 max-w-[740px] gap-2 mt-[100px]'>
        <BaseButton hideBorder className='h-[34px] w-[144px] text-2xs font-inter font-medium'>
          ALL
        </BaseButton>
        <BaseButton hideBorder className='h-[34px] w-[144px] text-2xs font-inter font-medium'>
          Collection is open
        </BaseButton>
        <BaseButton hideBorder className='h-[34px] w-[144px] text-2xs font-inter font-medium'>
          Upcoming projects
        </BaseButton>
        <BaseButton className='h-[34px] w-[144px] text-2xs font-inter font-medium'>
          Completed
        </BaseButton>
        <BaseButton hideBorder className='h-[34px] w-[144px] text-2xs font-inter font-medium'>
          voting
        </BaseButton>
      </div>

      <ScrollView
        className='mt-[70px] h-[707px] mb-[17px]'
        contentClass='overflow-y-auto pr-[10px] lg:pr-[57px] py-1 px-1'
      >
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[50px] place-content-center'>
          <ProjectsItem className='col-span-1 m-auto' />
          <ProjectsItem className='col-span-1 m-auto' />
          <ProjectsItem className='col-span-1 m-auto' />
          <ProjectsItem className='col-span-1 m-auto' />
          <ProjectsItem className='col-span-1 m-auto' />
          <ProjectsItem className='col-span-1 m-auto' />
          <ProjectsItem className='col-span-1 m-auto' />
          <ProjectsItem className='col-span-1 m-auto' />
          <ProjectsItem className='col-span-1 m-auto' />
          <ProjectsItem className='col-span-1 m-auto' />
          <ProjectsItem className='col-span-1 m-auto' />
          <ProjectsItem className='col-span-1 m-auto' />
        </div>
      </ScrollView>
    </>
  )
}

export default ProjectsPage
