type HttpResponse<T> = {
    statusCode: number
    message: string
    content: T
}
