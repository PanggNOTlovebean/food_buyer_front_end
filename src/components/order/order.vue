<template>
  <div class="order-container">
    <el-table :data="tableData" position:relative border show-summary style="width: 100%">
      <el-table-column prop="name" label="名称" width="150"></el-table-column>
      <el-table-column prop="price"  sortable label="价格"></el-table-column>
      <el-table-column fixed="right" label="操作" width="150">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small">取消</el-button>
        </template>
      </el-table-column>
    </el-table>
     <el-button class="btn-buy" type="success" @click="buy">结算</el-button>
    <el-dialog title="扫码支付全凭自觉" :visible.sync="dialogVisible" width="30%" :before-close="handleClose">     
      <img src="./2dma.jpg" width="400px" height="600px">
    </el-dialog>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data () {
    return {
      dialogVisible:false,
      tableData: [{
        name: '黑椒牛肉粒',
        price: 38
      }, {
        name: '田园小炒皇',
        price: 18
      }, {
        name: '油门大黄鱼',
        price: 46
      }, {
        name: '干锅笋尖',
        price: 25
      }, {
        name: '蓝莓山药',
        price: 15
      }, {
        name: '溜肥肠',
        price: 30
      },]
    }
  },
  components: {

  },
  methods: {
    handleClick (row) {
      console.log(row);
    },
    buy(){
      this.dialogVisible=true;
    }
  },
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.order-container {
  width: 50%;
  margin-top: 60px;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
}

.btn-buy {
  float:right;
}
</style>
