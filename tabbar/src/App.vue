<template>
<div>
  <router-view></router-view>
  <tab-bar>
    <tab-bar-item path='/home' activeColor='blue'>
      <img src="./assets/img/tabbar/logo.png" alt="" slot="item-icon">
      <img src="./assets/img/tabbar/heima.b5a855ee.png" alt="" slot="item-icon-active">
      <div slot='item-text'>首页</div>
    </tab-bar-item>
    <tab-bar-item path='/category' activeColor='blue'>
      <img src="./assets/img/tabbar/logo.png" alt="" slot="item-icon">
      <img src="./assets/img/tabbar/heima.b5a855ee.png" alt="" slot="item-icon-active">
      <div slot='item-text'>分类</div>
    </tab-bar-item>
    <tab-bar-item path='/cart' activeColor='yellow'>
      <img src="./assets/img/tabbar/logo.png" alt="" slot="item-icon">
      <img src="./assets/img/tabbar/heima.b5a855ee.png" alt="" slot="item-icon-active">
      <div slot='item-text'>购物车</div>
    </tab-bar-item>
    <tab-bar-item path='/profile' activeColor='red'>
      <img src="./assets/img/tabbar/logo.png" alt="" slot="item-icon">
      <img src="./assets/img/tabbar/heima.b5a855ee.png" alt="" slot="item-icon-active">
      <div slot='item-text'>我的</div>
    </tab-bar-item>
  </tab-bar>
  </div>
</template>

<script>
import TabBar from "./components/tabbar/Tabbar";
import TabBarItem from "./components/tabbar/TabBarItem";
export default {
  name: 'App',
  components:{
    TabBar,
    TabBarItem
  }
}
</script>

<style>
@import './assets/css/base.css';

</style>
