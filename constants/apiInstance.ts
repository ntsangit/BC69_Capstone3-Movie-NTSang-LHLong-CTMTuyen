import axios, { InternalAxiosRequestConfig } from 'axios'

export const apiInstance = {
    create: (setting?: Partial<InternalAxiosRequestConfig>) => {
        const axiosInstance = axios.create()

        axiosInstance.interceptors.request.use((config) => {
            return {
                ...config,
                ...setting,
                headers: {
                    ...(setting?.headers || {}),
                    TokenCyberSoft:
                        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA2OSIsIkhldEhhblN0cmluZyI6IjMxLzAxLzIwMjUiLCJIZXRIYW5UaW1lIjoiMTczODI4MTYwMDAwMCIsIm5iZiI6MTcxMDUyMjAwMCwiZXhwIjoxNzM4NDI5MjAwfQ.bsAaudu2iAsJe1QzbsWWy0HG7ofC_8rFKL-MG_jW1ig',
                },
            } as unknown as InternalAxiosRequestConfig
        })

        return axiosInstance
    },
}

