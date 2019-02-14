<template>
  <div id="app">
    <!-- <b-header></b-header> -->
    <router-view></router-view>
  </div>
</template>

<script>
import  BHeader from '@/components/b-header/b-header'
export default {
  name: 'app',
  components: {
    BHeader
  }
}
</script>

<style>
#app {
  margin-top: 0px;
}   
body{
  margin:0px;
  border-top: 20px;
  text-align:center;
}
</style>
