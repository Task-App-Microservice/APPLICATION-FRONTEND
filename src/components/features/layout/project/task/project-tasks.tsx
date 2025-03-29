import TaskCard from '@/components/features/task/task-card'

interface Props{
  projectUuid: string
}
export const ProjectTasks =({projectUuid}:Props)=>{
    return(
        <div className='pt-8'>
        <div className="grid grid-cols-4 gap-4">
          {Array.from({ length: 10 }).map((i, index) => (
            <TaskCard key={index} />
          ))}
        </div>
      </div>
    )
}

export default ProjectTasks
