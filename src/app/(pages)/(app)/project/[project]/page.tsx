import ProjectLoyout from '@/components/features/layout/project/index.loyout'
import React from 'react'
interface Params{
  params:Promise<{
      project: string
  }>
} 
const Page = async({params}:Params) => {
  return (
    <ProjectLoyout projectUuid={(await params).project}>
      <ProjectTasks />
    </ProjectLoyout>
  )
}

export default Page
