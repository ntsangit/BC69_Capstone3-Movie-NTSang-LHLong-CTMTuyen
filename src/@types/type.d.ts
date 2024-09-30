//Generic <T> là kiểu dữ liệu mình chưa biết, dữ liệu này sẽ dựa theo API trong trường hợp này là LoginAPIResponse trong QuanLyNguoiDung.ts
type HttpResponse<T> = {
    statusCode: number
    message: string
    content: T
}