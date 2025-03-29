export interface ResponsePagination<T> {
    results: T,
    meta: {
        total: number,
        page: number,
    }
}