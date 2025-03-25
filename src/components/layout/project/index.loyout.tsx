import { Separator } from '@/components/global/ui/separator'
import React from 'react'
import ProjectHeader from './partials/project-header'

const ProjectLoyout = ({children}:{children:React.ReactNode}) => {
  return (
    <div>
        <ProjectHeader />
        <Separator />
        <div className="">
            {children}
        </div>
    </div>
  )
}

export default ProjectLoyout
