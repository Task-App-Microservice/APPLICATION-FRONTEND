import { createAxiosInstance } from "@/config/axios/axios.instance";
import { ApiResponse } from "@/core/api/response";
import { ResponsePagination } from "@/core/pagination/pagination.core";
import { Project } from "@/core/project/project.core";
import { useQuery } from "@tanstack/react-query";

const axios = createAxiosInstance();

export function useGetProjects(cuid: string){
    return  useQuery({
        queryKey: ['projects', cuid],
        queryFn: () => axios.get<ApiResponse<ResponsePagination<Project[]>>>(`/task/project/all/${cuid}`)
        .then((res)=>res.data.data).catch((e)=>{console.log(e)}),
          enabled: !!cuid
      })
}

export function useGetProject(cuid: string){
    return  useQuery({
        queryKey: ['project', cuid],
        queryFn: () => axios.get<ApiResponse<{project: Project}>>(`/task/project/single/${cuid}`)
        .then((res)=>res.data.data).catch((e)=>{console.log(e)}),
          enabled: !!cuid
      })
}