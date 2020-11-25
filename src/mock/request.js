/*
 * @Descripttion: 模拟炒股H5
 * @version: 1.0.0
 * @Author: Author
 * @Date: 2019-07-10 09:03:03
 * @LastEditors: konglingzhan
 * @LastEditTime: 2019-12-11 17:02:02
 */
import axios from 'axios'
// import { Toast } from 'vant'
import router from '@/router/index.js'
import store from '@/store/index.js'
const service = axios.create({
  // baseURL: process.env.VUE_APP_BASE_API,
  baseURL: '',
  timeout: 10000
  // withCredentials: true
})

// request interceptor
service.interceptors.request.use(function (config) {
  return config
}, function (error) {
  return Promise.reject(error)
})

// response interceptor
service.interceptors.response.use(function (response) {
  /**
   * 200      success
   */
  let condition = [200]
  let isPass = condition.findIndex(item => item === response.data.code)
  if (isPass !== -1) {
    return response
  } else {
    // test(response);
    // 接口code没有成功情况先关闭加载框再弹出异常提示
    store.commit('dialog/SET_LOADING_SHOW', 0)
    // Toast({
    //   type: 'fail',
    //   message: response.data.msg
    // })
  }
}, function (error) {
  // service error : 404,400,500 handler
  store.commit('dialog/SET_LOADING_SHOW', 0)
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
