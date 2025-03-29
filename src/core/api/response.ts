export interface ApiResponse<T>{
    data: T;
    error: unknown;
    status: number;
}