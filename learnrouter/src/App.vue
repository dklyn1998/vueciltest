<template>
  <div id="app">
    <router-link to='/home' tag='button' replace>首页</router-link>
    <router-link to='/about' replace>关于</router-link>
    <router-link to='/user/1' replace>用户</router-link>
    <router-view></router-view>
  </div>
</template>

<script> 
export default {
  name: 'App'
}
</script>
 
<style>
.active{
  color: red
}
</style>
