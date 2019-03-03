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
      <el-menu-item index="3">退出</el-menu-item>
      <el-menu-item index="2">订单</el-menu-item>
      <el-menu-item index="1">菜谱</el-menu-item>
      
      
    </el-menu>
    <login v-if="noLogin"></login>
    <component :is="comp"></component>
  </div>  
</template>

<script type="text/ecmascript-6">
import food from '@/components/food/food'
import order from '@/components/order/order'
import login from '@/components/login/login'
export default {
  data () {
    return {
      selected: '1',
      comp: 'food',
      noLogin: true
    }
  },
  components: {
    food,
    order,
    login
  },
  created(){
    if(sessionStorage.getItem("roomNum")==null){
      this.noLogin=true;
     
    }
    else{
      this.noLogin=false;
      this.$store.commit('loginStateChanged',true)
  }

  },  
  methods: {
    handleSelect (key) {
      // eslint-disable-next-line
      if (key === '1') {
        this.comp = 'food'
      }
      else if (key === '2') {
        this.comp = 'order'
      }
      else {
        this.selected='1';
        this.comp='food';
        this.noLogin=true;

        sessionStorage.clear()
        this.$store.commit('loginStateChanged',false)
      }
    }
  },
}
</script>

<style lang="stylus" scoped>
a {
  text-decoration: none;
}

.el-menu {
  position: fixed;
  z-index: 100;
  width: 100%;
  top: 0px;
}
.el-menu-item{
    float:right !important;
}

</style>
