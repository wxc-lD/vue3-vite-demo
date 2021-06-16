/*
 * Copyright (c) 2021 fuzzy
 * 项目名称：vue3-vite-demo
 * 文件名称：index.js
 * 创建日期：2021年06月16日
 * 创建作者：fuzzy
 */

import request from "@/utils/request"

/**
 * 商户员工用户注册
 * @param params
 * @returns {AxiosPromise}
 */
export const regist = (params) => {
  return request({
    url: '/vender/regist',
    method: 'POST',
    data: params
  })
}
