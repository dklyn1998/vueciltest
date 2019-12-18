<template>
  <div class="tab-bat-item" @click="itemClick">
      <div  v-if="!isActive"><slot name='item-icon'></slot></div>
      <div v-else><slot name='item-icon-active' ></slot></div>
      <div :style="activeStyle"><slot name='item-text'></slot></div>
     
  </div>
</template>

<script>
export default {
    props:{
        path:String,
        activeColor:{
            type:String,
            default:'red'
        }
    },
    data(){
        return{
            // isActive:true
        }
    },
    computed:{
        isActive(){
            return this.$route.path.indexOf(this.path) !== -1
        },
        activeStyle(){
            return this.isActive?{color:this.activeColor}:{}
        }
    },
    methods:{
        itemClick(){
            // console.log('itemClick');
            this.$router.push(this.path)
            
        }
    }
}
</script>

<style>
.tab-bat-item{
 flex: 1;
 text-align: center;
 height: 49px;
 font-size: 14px;
}
.tab-bat-item img{
    width: 24px;
    height: 24px;
    margin-top: 3px;
    vertical-align: middle;
    margin-bottom: 2px;
}
.active{
    color: red;
}
</style>