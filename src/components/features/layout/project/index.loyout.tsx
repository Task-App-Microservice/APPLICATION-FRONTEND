import { Separator } from '@/components/global/ui/separator'
import React from 'react'
import ProjectHeader from './partials/project-header'
interface Props{
  children: React.ReactNode,
  projectUuid: string
}
const ProjectLoyout = ({children,projectUuid}:Props) => {
  return (
    <div>
        <ProjectHeader projectUuid={projectUuid} />
        <Separator />
        <div className="">
            {children}
        </div>
    </div>
  )
}

export default ProjectLoyout
