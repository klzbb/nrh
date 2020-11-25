import router from '@/router/index.js'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css'
// 简单配置
// NProgress.inc(100)
// NProgress.configure({ easing: 'ease', speed: 500, showSpinner: false })

router.beforeEach(async (to, from, next) => {
  NProgress.start()
  next()
})
router.afterEach(() => {
  NProgress.done()
})
