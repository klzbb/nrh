/*
 * @Descripttion: 获取web运行客户端的系统类型：pc，ios，android；获取web运行的浏览器内核环境
 * @version: 1.0.0
 * @Author: Author
 * @Date: 2019-10-16 11:24:13
 * @LastEditors: konglingzhan
 * @LastEditTime: 2019-12-06 12:48:15
 */
import store from '@/store/index.js'

const ua = window.navigator

let sys = {
  type: '', // 系统型号 ios / Android / pc
  browser: {}
}

let appversion = ua.appVersion.toLocaleLowerCase()
if (appversion.indexOf('windows phone') !== -1) {
  sys.type = 'pc'
} else if (appversion.indexOf('iphone') !== -1) {
  sys.type = 'ios'
} else if (appversion.indexOf('android') !== -1) {
  sys.type = 'Android'
} else {
  sys.type = 'pc'
}

const browser = {
  versions: function () {
    let u = navigator.userAgent
    let ua = navigator.userAgent.toLowerCase()
    return { // 移动终端浏览器版本信息
      trident: u.indexOf('Trident') > -1, // IE内核
      presto: u.indexOf('Presto') > -1, // opera内核
      webKit: u.indexOf('AppleWebKit') > -1, // 苹果、谷歌内核
      gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') === -1, // 火狐内核
      mobile: !!u.match(/AppleWebKit.*Mobile.*/), // 是否为移动终端
      ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), // ios终端
      android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, // android终端或uc浏览器
      iPhone: u.indexOf('iPhone') > -1, // 是否为iPhone或者QQHD浏览器
      iPad: u.indexOf('iPad') > -1, // 是否iPad
      webApp: u.indexOf('Safari') === -1, // 是否web应该程序，没有头部与底部
      isQQ: ua.indexOf('qq/') !== -1, // 是否QQ
      isWX: ua.indexOf('micromessenger') !== -1, // 是否是微信
      isWB: ua.indexOf('weibo') !== -1, // 是否是微博
      isZZT: ua.indexOf('zztplatform') !== -1 // 是否是掌中投
    }
  }
}
sys.browser = browser.versions()
store.commit('sysType/SAVE_SYS_TYPE', sys)
