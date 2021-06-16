/*
 * Copyright (c) 2021 fuzzy
 * 项目名称：vue3-vite-demo
 * 文件名称：viteBuild.js
 * 创建日期：2021年06月16日
 * 创建作者：fuzzy
 */

// vite 打包相关
import dotenv from 'dotenv'

export function loadEnv () {
  const env = process.env.NODE_ENV
  const ret = {}
  const envList = [`.env.${env}.local`, `.env.${env}`, '.env.local', '.env']
  envList.forEach((e) => {
    dotenv.config({ path: e })
  })
  for (const envName of Object.keys(process.env)) {
    let realName = (process.env)[envName].replace(/\\n/g, '\n')
    realName = realName === 'true' ? true : realName === 'false' ? false : realName
    if (envName === 'VITE_PORT') realName = Number(realName)
    if (envName === 'VITE_OPEN') realName = Boolean(realName)
    ret[envName] = realName
    process.env[envName] = realName
  }
  return ret
}
