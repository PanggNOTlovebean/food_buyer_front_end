<template>
 <div>
    <el-menu
      :default-active="selected"
      class="el-menu-header"
      mode="horizontal"
      background-color="#333"
      active-text-color="#fff"
      text-color="#ccc"
      @select="handleSelect"
    >
      <el-menu-item index="1">菜谱</el-menu-item>
      <el-menu-item index="2">订单</el-menu-item>
    </el-menu>
    <component :is="comp"></component>
 </div>
</template>

<script type="text/ecmascript-6">
  import food from '@/components/food/food'
  import order from '@/components/order/order'
  export default {
   data () {
     return {
      selected:'1',
      comp:'food'
     }
   },
   components: {
    food,
    order,
   },
   methods: {
     handleSelect (key) {
       // eslint-disable-next-line
      if(key==='1'){
        this.comp='food'
      }
      else if(key==='2'){
        this.comp='order'
      }
      else{
        this.comp='money'
      }
     }
   },
 }
</script>

<style lang="stylus" scoped>

a {
  text-decoration:none
}
.el-menu{
  position:fixed;
  z-index:100;
  width:100%;
  top:0px;
  
}
</style>
