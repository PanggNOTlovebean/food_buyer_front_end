<template>
  <div class="login-container">
    <el-dialog title="提示" :visible.sync="visible" width="30%"  :close-on-press-escape="canClosed" :close-on-click-modal="canClosed" :show-close="canClosed">
      <el-form ref="form" :model="form" label-width="80px" label-position="top">
        <el-form-item label="请输入房间号">
          <el-input v-model="form.number" type="number"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">开始点单</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data () {
    return {
      canClosed:false,
      visible:true,
      form: {
        number: '',
      }
    }
  },
  components: {

  },
  methods:{
    onSubmit(){
      this.visible=false;
      sessionStorage.setItem("roomNum",this.form.number)
    }
  },
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.el-input {
  width: 200px;
}

.login-container {
  text-align: center;
}
</style>
