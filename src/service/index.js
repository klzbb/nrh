import axios from '@/utils/request.js'

// 获取首页默认地址
export const F100100 = (params = { type: 'guess' }) => axios.get('/v1/cities', { params })

// 获取首页热门城市
export const F100101 = (params = { type: 'hot' }) => axios.get('/v1/cities', { params })

// 获取首页城市列表
export const F100102 = (params = { type: 'group' }) => axios.get('/v1/cities', { params })
