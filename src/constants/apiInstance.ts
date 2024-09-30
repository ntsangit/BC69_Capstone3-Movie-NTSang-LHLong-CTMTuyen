import axios, { InternalAxiosRequestConfig } from "axios";

export const apiInstance = {
  create: (setting?: Partial<InternalAxiosRequestConfig>) => {
    // Partial biến tất cả kiểu dữ liệu sau đó đều là optional, có thể có hoặc không
    const axiosInstance = axios.create();

    axiosInstance.interceptors.request.use((config) => {
      // interceptor giống như middleware, khi gọi api sẽ đi qua interceptor và thêm setting là headers là token cybersoft
      return {
        ...config,
        ...setting,
        headers: {
            ...(setting?.headers || {}),
          TokenCybersoft:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA2OSIsIkhldEhhblN0cmluZyI6IjMxLzAxLzIwMjUiLCJIZXRIYW5UaW1lIjoiMTczODI4MTYwMDAwMCIsIm5iZiI6MTcxMDUyMjAwMCwiZXhwIjoxNzM4NDI5MjAwfQ.bsAaudu2iAsJe1QzbsWWy0HG7ofC_8rFKL-MG_jW1ig",
        },
      } as unknown as InternalAxiosRequestConfig;
    });
    return axiosInstance
  },
};


// type Student = {
//   name: string
//   age: number
//   address?: string
// }

// type NewStudent = Partial<Student>
// Partial biến kiểu dữ liệu thành ?:
// type NewStudent2 = Required<Student>
//Required biến kiểu dữ liệu thành : bắt buộc
