/*
 * @Descripttion: 首页
 * @version: 1.0.0
 * @Author: Author
 * @Date: 2019-11-29 11:39:39
 * @LastEditors: konglingzhan
 * @LastEditTime: 2019-12-05 09:19:08
 */
import mockService from '../mock.js'
import { Random } from 'mockjs'
import { createServicePath, createServiceCode } from './config/serviceBase.js'

mockService.onPost(createServicePath('M100100')).reply(config => {
  console.dir(config)
  return new Promise((resolve, reject) => {
    resolve([200, { code: createServiceCode('200'), msg: 'success', data: { name: Random.cname() }}])
  })
})
