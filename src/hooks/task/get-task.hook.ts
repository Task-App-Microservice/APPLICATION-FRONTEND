import { createAxiosInstance } from "@/config/axios/axios.instance";
import { ApiResponse } from "@/core/api/response";
import { ResponsePagination } from "@/core/pagination/pagination.core";
import { Task } from "@/core/task/task.core";
import { useQuery } from "@tanstack/react-query";

const axios = createAxiosInstance();

export function useProjectTasks(projectCuid: string){
    return  useQuery({
        queryKey: ['project_tasks', projectCuid],
        queryFn: () => axios.get<ApiResponse<ResponsePagination<Task[]>>>(`/task/all/${projectCuid}`).then((res)=>res.data.data),
          enabled: !!projectCuid
      })
}