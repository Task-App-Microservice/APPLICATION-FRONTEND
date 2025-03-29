import ProjectLoyout from '@/components/features/layout/project/index.loyout'
import ProjectTasks from '@/components/features/layout/project/task/project-tasks'
import React from 'react'
interface Params{
  params:Promise<{
      project: string
  }>
} 
const Page = async({params}:Params) => {
  return (
    <ProjectLoyout projectUuid={(await params).project}>
      <ProjectTasks projectUuid={(await params).project} />
    </ProjectLoyout>
  )
}

export default Page
