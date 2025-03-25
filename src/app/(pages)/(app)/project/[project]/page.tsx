import TaskCard from '@/components/features/task/task-card'
import React from 'react'

const Page = () => {
  return (
    <div className='pt-8'>
      <div className="grid grid-cols-4 gap-4">
        {Array.from({length: 10}).map((i,index)=>(
            <TaskCard />
        ))}
      </div>
    </div>
  )
}

export default Page
