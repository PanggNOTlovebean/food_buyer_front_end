<template>
  <div class="order-container">
    <el-table :data="tableData" position:relative border show-summary style="width: 100%">
      <el-table-column prop="name" label="名称" width="150"></el-table-column>
      <el-table-column prop="price" sortable label="价格"></el-table-column>
      <el-table-column fixed="right" label="操作" width="150">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small">取消</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-button class="btn-buy" type="success" @click="buy">结算</el-button>
    <el-dialog title="扫码支付全凭自觉" :visible.sync="dialogVisible" width="30%">
      <img src="./2dma.jpg" width="400px" height="500px">
      <el-button class="btn-buy" type="success" @click="finish" size="mini">完成</el-button>
    </el-dialog>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data () {
    return {
      dialogVisible: false,
      tableData: null,
    }
  },
  components: {

  },
  created () {
    let that = this
    this.$axios.post('http://127.0.0.1:8080/api/list', {
      buyerId: sessionStorage.getItem("roomNum")
    })
      .then(function (response) {
        if (response.data.code == 200) {
          that.tableData = response.data.data
        }
        else
          that.$message({
            message: '查询失败',
            type: 'fail',
            duration: 1000
          });
      })
      .catch(function () {
      });
  },
  methods: {
    handleClick (row) {
      let that = this
      this.$axios.post('http://127.0.0.1:8080/api/cancel', {
        id: row.id
      })
        .then(function (response) {
          if (response.data.code == 200) {
            var len = that.tableData.length;
            for (var i = 0; i < len; i++) {
              if (that.tableData[i] === row) {
                that.tableData.splice(i, 1);
              }
            }
          }
          else
            that.$message({
              message: '删除',
              type: 'fail',
              duration: 1000
            });
        })
        .catch(function () {
        });
    },
    buy () {
      this.dialogVisible = true;
    },
    finish () {
      let that = this
      this.dialogVisible = false;
      this.$axios.post('http://127.0.0.1:8080/api/clear', {
        buyerId: sessionStorage.getItem("roomNum")
      })
        .then(function (response) {

          if (response.data.code == 200) {
            that.$message({
              message: '结算成功',
              type: 'success',
              duration: 1000
            });
            that.tableData = null
          }

          else
            that.$message({
              message: '结算失败',
              type: 'fail',
              duration: 1000
            });
        })
        .catch(function () {
        });
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
  float: right;
}
</style>
