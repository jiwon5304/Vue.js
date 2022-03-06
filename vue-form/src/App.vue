<template>
<form v-on:submit.prevent="submitForm">
  <!-- v-model을 연결하면 개발자 도구 data에서 입력값을 들고옴 -->
  <div>
    <label for="username">id: </label>
    <input id="username" type="text" v-model="username">
  </div>
  <div>
    <label for="password">pw:</label>
    <input id="password" type="password" v-model="password">
  </div>

  <button type="submit">login</button>
</form>
</template>

<script>
import axios from 'axios';

export default {
  data: function(){
    return{
      username: '',
      password: ''
    }
  },
    methods: {  
      // preventDefalut 는 새로고침을 하지 않음
      submitForm: function() {
        // event.preventDefault();
        console.log(this.username, this.password);
        var url = 'https://jsonplaceholder.typicode.com/users';
        var data= {
          username: this.username,
          password: this.password
        }
        axios.post(url, data)
        .then(function(response){
          console.log(response);
        })
        .catch(function(error){
          console.log(error);
        })
    }
  }
}
</script>

<style>

</style>
