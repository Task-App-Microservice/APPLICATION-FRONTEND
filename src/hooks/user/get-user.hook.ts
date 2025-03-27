import { createAxiosInstance } from "@/config/axios/axios.instance";
import { ApiResponse } from "@/core/api/response";
import { User } from "@/core/user/user.core";
import { useQuery } from "@tanstack/react-query";

const axios = createAxiosInstance();

export function useGetUser(cuid: string){
    return  useQuery({
        queryKey: ['user'],
        queryFn: () => axios.get<ApiResponse<{user: User}>>(`/users/${cuid}`).then((res)=>res.data.data),
          enabled: !!cuid
      })
}