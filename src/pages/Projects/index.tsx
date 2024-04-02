import React from 'react'
import BaseButton from 'src/components/buttons/BaseButton'
import './index.css'
import ProjectsItem from './components/ProjectsItem'
import ScrollView from 'src/components/ScrollView'

function ProjectsPage() {
  return (
    <>
      <h2>Projects</h2>
      <div className='grid grid-flow-col auto-cols-max gap-1 mt-[100px]'>
        <BaseButton hideBorder className='h-[34px] w-[144px] projects-tab-item'>
          ALL
        </BaseButton>
        <BaseButton hideBorder className='h-[34px] w-[144px] projects-tab-item'>
          Collection is open
        </BaseButton>
        <BaseButton hideBorder className='h-[34px] w-[144px] projects-tab-item'>
          Upcoming projects
        </BaseButton>
        <BaseButton className='h-[34px] w-[144px] projects-tab-item'>Completed</BaseButton>
        <BaseButton hideBorder className='h-[34px] w-[144px] projects-tab-item'>
          voting
        </BaseButton>
      </div>

      <ScrollView
        className='mt-[70px] h-[707px]'
        contentClass='overflow-y-auto pr-[57px] mb-[17px]'
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
