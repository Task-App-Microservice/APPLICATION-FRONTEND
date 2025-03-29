"use client"
import TaskCard from '@/components/features/task/task-card'
import { Skeleton } from '@/components/global/ui/skeleton'
import { useProjectTasks } from '@/hooks/task/get-task.hook'
import Image from 'next/image'

interface Props {
  projectUuid: string
}
export const ProjectTasks = ({ projectUuid }: Props) => {
  const { data } = useProjectTasks(projectUuid);
  const { data: tasks, isLoading } = useProjectTasks(projectUuid);
  return (
    <div className='pt-8'>
      {isLoading && (
        <div className="grid grid-cols-4 gap-4">
          {[...Array(16)].map((_, index) => (
            <div className="h-[20vh] rounded-md">
              <Skeleton key={index} className='h-full bg-slate-800/10 w-full' />
            </div>
          ))}
        </div>)}

      {tasks?.results && !tasks?.results.length && <div className="flex items-center justify-center flex-col h-[77vh]">
        <div className="relative h-[50vh] w-full max-w-[450px]">
          <Image src={"/images/novelist-writing-animate.svg"} fill priority alt='fdfddf' />
        </div>
        <h2 className="text-4xl">Nao existem tarefas criadas, por favor crie uma.</h2>
      </div>}
      {tasks?.results && tasks?.results.length != 0
        && (<div className="grid grid-cols-4 gap-4">
          {tasks?.results.map((i, index) => (
            <TaskCard key={index} />
          ))}
        </div>)}
    </div>
  )
}

export default ProjectTasks
