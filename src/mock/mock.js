/*
 * @Descripttion: DOP
 * @version: 1.0.0
 * @Author: Author
 * @Date: 2019-11-29 11:36:16
 * @LastEditors: konglingzhan
 * @LastEditTime: 2019-12-05 09:24:46
 */
// 导入模块
import axios from './request.js'
import MockAdapter from 'axios-mock-adapter'
// 设置模拟调试器实例
var mock = new MockAdapter(axios)
export default mock
