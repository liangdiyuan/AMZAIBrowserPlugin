import Axios, {
  type AxiosInstance,
  type AxiosRequestConfig,
  type CreateAxiosDefaults
} from "axios"

class Request {
  public request: AxiosInstance

  constructor(config: CreateAxiosDefaults) {
    this.request = Axios.create(config)
    this.request.interceptors.request.use((config) => {
      return config
    })
  }

  async post<T = any, R = T | any, D = any>(
    url: string,
    data?: D,
    config?: AxiosRequestConfig<D>
  ): Promise<R> {
    return this.request.post(url, data, config).then((res) => res.data)
  }

  async postForm<T = any, R = T | any, D = object>(
    url: string,
    data: D,
    config?: AxiosRequestConfig<D>
  ): Promise<R> {
    return this.request.post(url, data, config).then((res) => res.data)
  }

  async get<T = any, R = T | any, D = any>(
    url: string,
    config?: AxiosRequestConfig<D>
  ): Promise<R> {
    return this.request.get(url, config).then((res) => res.data)
  }

  async put<T = any, R = T | any, D = any>(
    url: string,
    data?: D,
    config?: AxiosRequestConfig<D>
  ): Promise<R> {
    return this.request.put(url, data, config).then((res) => res.data)
  }

  async delete<T = any, R = T | any, D = any>(
    url: string,
    config?: AxiosRequestConfig<D>
  ): Promise<R> {
    return this.request.delete(url, config).then((res) => res.data)
  }
}

export default new Request({ })
