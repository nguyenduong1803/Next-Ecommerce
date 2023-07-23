/*
 * Created Date: 22-04-2023, 9:45 pm
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

import AppConfig from "@/configs/app.config";
import LocalStorage from "@/utils/LocalStorage";
import { InternalAxiosRequestConfig } from "axios";

const excludeApi: string[] = [];

const withAuthToken = (requestConfig: InternalAxiosRequestConfig) => {
  const { url } = requestConfig;

  if (url && !excludeApi.includes(url)) {
    const authToken = LocalStorage.get(AppConfig.accessTokenName);
    if (authToken) {
      requestConfig.headers.Authorization = `Bearer ${authToken}`;
      // requestConfig.headers.Authorization = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c`;
      return requestConfig;
    }

    return requestConfig;
  }

  return requestConfig;
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  auth: withAuthToken,
};
