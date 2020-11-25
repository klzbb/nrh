/*
 * @Descripttion: 登录模块
 * @version: 1.0.0
 * @Author: Author
 * @Date: 2019-11-29 11:39:39
 * @LastEditors: konglingzhan
 * @LastEditTime: 2019-12-05 09:21:20
 */
import mockService from '../mock.js'
import { Random } from 'mockjs'
import { createServicePath, createServiceCode } from './config/serviceBase.js'

mockService.onPost(createServicePath('M100102')).reply(config => {
  let reqParams = JSON.parse(config.data)
  return new Promise((resolve, reject) => {
    if (!reqParams.account) {
      // 账号为空
      resolve([200, { code: createServiceCode('100'), msg: 'params empty' }])
    } else if (!reqParams.pwd) {
      // 密码为空
      resolve([200, { code: createServiceCode('100'), msg: 'params empty' }])
    } else {
      resolve([200, { code: createServiceCode('200'), msg: 'success', data: { name: Random.cname() }}])
    }
  })
})
