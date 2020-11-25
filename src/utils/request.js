/*
 * @Descripttion: DOP
 * @version: 1.0.0
 * @Author: Author
 * @Date: 2019-11-26 17:45:15
 * @LastEditors: konglingzhan
 * @LastEditTime: 2019-11-29 14:30:16
 */

import axios from 'axios'
import router from '@/router/index.js'
// import store from '@/store/index.js'
const VUE_APP_BASEURL = process.env.VUE_APP_BASEURL
const service = axios.create({
  baseURL: VUE_APP_BASEURL,
  timeout: 5000
  // withCredentials: false
})

// request interceptor
service.interceptors.request.use(function (config) {
  return config
}, function (error) {
  return Promise.reject(error)
})

// response interceptor
// service.interceptors.response.use(function (response) {
//   /**
//    * 0       success
//    * 100016  用户未报名参加任何比赛
//    * 100022  字段含有敏感词
//    * 100023  组合名称重复
//    * 10003   暂无数据
//    */
//   let condition = [0, 100016, 100022, 100023, 10003]
//   let isPass = condition.findIndex(item => item === response.data.code)
//   if (isPass !== -1) {
//     // 和后端约定需要返回前UI层面做不同处理的code
//     return response
//   } else {
//     // 统一处理不需要返回前端UI层面做不同处理的code
//     alert(response.data.msg)
//   }
// }, function (error) {
//   // service error : 404,400,500 handler
//   store.commit('dialog/SET_LOADING_SHOW', 0)
//   switch (error.response.status) {
//     case 404:
//       router.push('/404')
//       break
//     case 401:
//       router.push('/login')
//       break
//     case 500:
//     case 501:
//       router.push('/50X')
//       break
//     default:
//       break
//   }
//   return Promise.reject(error)
// })

service.interceptors.response.use(function (response) {
  if (response.status === 200) {
    if (!response.data.message) {
      return response.data
    } else {
      // 统一错误处理
      alert(response.data.message)
    }
  }
}, function (error) {
  // service error : 404,400,500 handler
  // store.commit('dialog/SET_LOADING_SHOW', 0)
  switch (error.response.status) {
    case 404:
      router.push('/404')
      break
    case 401:
      router.push('/login')
      break
    case 500:
    case 501:
      router.push('/50X')
      break
    default:
      break
  }
  return Promise.reject(error)
})

export default service
