/*
 * @Descripttion: 后端接口标准相关
 * @version: 1.0.0
 * @Author: Author
 * @Date: 2019-11-29 15:01:35
 * @LastEditors: konglingzhan
 * @LastEditTime: 2019-11-29 16:36:44
 */
import servicePath from './servicePath.js'
import serviceCode from './serviceCode.js'

/**
 * 生成接口服务唯一路径
 * @param {String} path
 * @return {String}
 */
export const createServicePath = (path) => {
  if (servicePath[path] === undefined) {
    throw new Error('请在servicePath.js文件定义你要mock的接口路径')
  } else {
    return `/mock/${servicePath[path]}`
  }
}
/**
 * 生成唯一code值
 * @param {String} code
 * @return {Number}
 */
export const createServiceCode = (code) => {
  if (serviceCode[code] === undefined) {
    throw new Error('请在serviceCode.js文件定义你的response code')
  } else {
    return serviceCode[code]
  }
}
