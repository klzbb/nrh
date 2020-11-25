/*
 * @Descripttion: DOP
 * @version: 1.0.0
 * @Author: Author
 * @Date: 2019-11-13 13:59:12
 * @LastEditors: konglingzhan
 * @LastEditTime: 2019-12-05 09:23:35
 */

import axios from './request.js'
// you do not need `import app from './modules/app'`
// it will auto require all vuex module from modules file
let mockFiles = require.context('./service', false, /\.js$/)
mockFiles.keys().forEach(mockFile => {
  let fileName = mockFile.split('/')[1]
  let mockFilePath = `./service/${fileName}`
  require(`${mockFilePath}`)
})

// 首页列表数据
export const M100100 = (params) => axios.post('/mock/M100100', params)

// 登录
export const M100102 = (params) => axios.post('/mock/M100102', params)
