/*
 * @Descripttion: vuex
 * @version: 1.0.0
 * @Author: Author
 * @Date: 2019-06-24 15:48:31
 * @LastEditors  : konglingzhan
 * @LastEditTime : 2019-12-31 13:38:07
 */
import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'

Vue.use(Vuex)
const modulesFiles = require.context('./modules', true, /\.js$/)
const modules = modulesFiles.keys().reduce((modules, modulePath) => {
  const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1')
  const value = modulesFiles(modulePath)
  modules[moduleName] = value.default
  return modules
}, {})
const store = new Vuex.Store({
  modules,
  getters
})
export default store
