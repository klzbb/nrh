import { setSesStorage, getSesStorage } from '@/utils/storageUtil.js'
export default {
  namespaced: true,
  state: {
    localType: getSesStorage('MELEE_LIST', 'json') || {} // 客户端系统类型（ios，pc，android）；web浏览器类型
  },
  mutations: {
    'SAVE_SYS_TYPE' (state, data) {
      state.localType = data
      setSesStorage('LOCAL_TYPE', data)
    }
  },
  actions: {

  }
}
