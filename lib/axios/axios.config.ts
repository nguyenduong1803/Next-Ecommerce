/*
 * Created Date: 28-04-2023, 9:45 pm
 * Author: Nguyễn Hữu Dương
 * Email: duonghd1803@gmail.com
 * -----
 * Last Modified:
 * Modified By:
 * -----
 * Copyright (c) ...
 * -----
 * HISTORY:
 * Date      	By	Comments
 * ----------	---	----------------------------------------------------------
 */
import axios, { InternalAxiosRequestConfig } from "axios";

const createInstance = (
  baseUrl: string,
  middleware: (
    requestConfig: InternalAxiosRequestConfig
  ) => InternalAxiosRequestConfig[]
) => {
  const options = {
    baseURL: baseUrl,
    headers: {
      "X-Requested-With": "XMLHttpRequest",
    },
    // paramsSerializer: {
    //   serializer: (params) => {
    //     return queryString.stringify(params);
    //   }
    // },
  };

  const instance = axios.create(options);

  instance.interceptors.request.use(
    async (requestConfig: InternalAxiosRequestConfig) => {
      await Promise.all(middleware(requestConfig));
      return requestConfig;
    },
    (requestError) => {
      return Promise.reject(requestError);
    }
  );

  // Add a response interceptor
  instance.interceptors.response.use(
    (response) => {
      const { data } = response;
      if (data.errors) {
        // hideLoadingPage()
        return Promise.reject(data);
      }
      if (data.error_msg) {
        // hideLoadingPage()
        return Promise.reject(data);
      }
      if (data?.data) {
        return data?.data;
      }
      return data;
    },
    (error) => {
      // hideLoadingPage()
      return Promise.reject(error);
    }
  );

  return instance;
};

export default createInstance;
