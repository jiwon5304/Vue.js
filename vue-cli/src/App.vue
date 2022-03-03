<template>
<div>
  <!-- <app-header v-bind: 프롭스 속성 이름="상위 컴포넌트의 데이터 이름"></app-header> -->
  <app-header 
    v-bind:propsdata="str"
    v-on:renew="renewStr"></app-header>
  </div> 
</template>

<script>
//  컴포넌트의 내용을 정의해서 AppHeader라는 변수로 받아옴
import AppHeader from './components/AppHeader.vue';

// 컴포넌트에 있는 것을 가져다 사용할 확률이 높음
export default {
  data: function() {
    return {
      str: 'Header'
    }
  },
  components: {
    'app-header': AppHeader
  },
  methods: {
    renewStr: function() {
      this.str = 'hi';
    }
  }
}
</script>

<style>

</style>