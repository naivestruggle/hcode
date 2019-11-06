// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

//引入jquery
import $ from 'jquery'

//引入bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min'
import 'bootstrap/dist/fonts/glyphicons-halflings-regular.eot'
import 'bootstrap/dist/fonts/glyphicons-halflings-regular.svg'
import 'bootstrap/dist/fonts/glyphicons-halflings-regular.ttf'
import 'bootstrap/dist/fonts/glyphicons-halflings-regular.woff'
import 'bootstrap/dist/fonts/glyphicons-halflings-regular.woff2'

//引入element-ui
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/fonts/element-icons.ttf'
import 'element-ui/lib/theme-chalk/fonts/element-icons.woff'
import 'element-ui/lib/index.js'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(Element)

//引入 video.js
import Video from 'video.js'
import 'video.js/dist/video-js.css'
Vue.prototype.$video = Video

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
