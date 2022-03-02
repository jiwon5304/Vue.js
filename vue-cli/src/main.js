import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

// render vue 내부 함수이고, template를 정의했을 때 내부적으로 render 함수 실행
// new Vue({
//   el: '#app',
//   render: h => h(App),
// })