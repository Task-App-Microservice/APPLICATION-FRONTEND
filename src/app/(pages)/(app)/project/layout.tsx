import ProjectLoyout from '@/components/layout/project/index.loyout'
import React from 'react'

const ProjectRootLayout = ({children}:{children:React.ReactNode}) => {
  return (
    <ProjectLoyout>
      {children}
    </ProjectLoyout>
  )
}

export default ProjectRootLayout
