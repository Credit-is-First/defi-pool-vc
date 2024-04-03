import React from 'react'
import BaseButton from 'src/components/buttons/BaseButton'
import ProjectsItem from './components/ProjectsItem'
import ScrollView from 'src/components/ScrollView'

function ProjectsPage() {
  return (
    <>
      <h2>Projects</h2>
      <div className='grid grid-flow-col auto-cols-max gap-1 mt-[100px]'>
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
        className='mt-[70px] h-[707px]'
        contentClass='overflow-y-auto pr-[57px] mb-[17px] py-1 px-1'
      >
        <div className='grid grid-cols-3 gap-[50px]'>
          <ProjectsItem className='col-span-1' />
          <ProjectsItem className='col-span-1' />
          <ProjectsItem className='col-span-1' />
          <ProjectsItem className='col-span-1' />
          <ProjectsItem className='col-span-1' />
          <ProjectsItem className='col-span-1' />
          <ProjectsItem className='col-span-1' />
          <ProjectsItem className='col-span-1' />
          <ProjectsItem className='col-span-1' />
          <ProjectsItem className='col-span-1' />
          <ProjectsItem className='col-span-1' />
          <ProjectsItem className='col-span-1' />
        </div>
      </ScrollView>
    </>
  )
}

export default ProjectsPage
