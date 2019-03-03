<template>
  <div class="food-container">
    <div class="img-container">
      <img class="main-food" src="./kaoyu.png" width="50%" height="100%">
      <div class="fish-name">
        <input type="button" @click="food('鲶鱼',48)" value="鲶鱼">
        <input type="button" @click="food('鲤鱼',58)" value="鲤鱼">
        <input type="button" @click="food('草鱼',68)" value="草鱼">
        <input type="button" @click="food('鲈鱼',88)" value="鲈鱼">
        <input type="button" @click="food('鲟鱼',88)" value="鲟鱼">
      </div>
      <img src="./jianghucai.png" width="50%" height="100%">
      <button class="jianghucai" @click="food('黑椒牛肉粒',38)">黑
        <br>椒
        <br>牛
        <br>肉
        <br>粒
        <br>
      </button>
    </div>

    <div class="easy-foods">
      <img class="bg-img" src="./bg.png" width="100%">
      <img
        class="paiguji"
        src="./paiguji.png"
        width="600px"
        height="400px"
        @click="food('排骨闷鸡卷子',48)"
      >
      <img
        class="suwanzi"
        src="./suwanzi.png"
        width="311px"
        height="413.25px"
        @click="food('养生素丸子',20)"
      >
      <img class="ouding" src="./ouding.png" width="310px" height="365px" @click="food('醋溜藕丁',20)">
      <img
        class="xiaochaohuang"
        src="./xiaochaohuang.png"
        width="300px"
        height="365px"
        @click="food('田园小炒皇',18)"
      >
      <img
        class="haidaisi"
        src="./haidaisi.png"
        width="275px"
        height="500px"
        @click="food('巧拌海带丝',8)"
      >
      <img
        class="dahuangyu"
        src="./dahuangyu.png"
        width="650px"
        height="450px"
        @click="food('油焖大黄鱼',46)"
      >
      <img class="bg-img2" src="./bg.png" width="100%">
      <img
        class="chaxiangxia"
        src="./chaxiangxia.png"
        width="649.75px"
        height="433px"
        @click="food('一品茶香虾',46)"
      >
      <img
        class="jielan"
        src="./jielan.png"
        width="275.5px"
        height="339px"
        @click="food('白灼芥兰',20)"
      >
      <img
        class="chunsun"
        src="./chunsun.png"
        width="317px"
        height="362.5px"
        @click="food('鲍汁春笋',25)"
      >
      <img
        class="paobing"
        src="./paobing.png"
        width="618px"
        height="435px"
        @click="food('鱼头泡饼',46)"
      >
      <img
        class="sunjian"
        src="./sunjian.png"
        width="280px"
        height="384px"
        @click="food('干锅笋尖',25)"
      >
      <img
        class="xungan"
        src="./xungan.png"
        width="285px"
        height="395px"
        @click="food('金丝芹炒熏干',25)"
      >
      
      <img class="bg-img3" src="./bg.png" width="100%">
      <img class="lvrou" src="./lvrou.png" width="330px" height="380px" @click="food('驴肉拼盘',50)">
      <img
        class="huanggua"
        src="./huanggua.png"
        width="225px"
        height="189px"
        @click="food('黄瓜蘸酱',10)"
      >
      <img
        class="shanyao"
        src="./shanyao.png"
        width="234px"
        height="191px"
        @click="food('蓝莓山药',15)"
      >
      <img
        class="doufusi"
        src="./doufusi.png"
        width="378px"
        height="273px"
        @click="food('高碑店豆腐丝 ',15)"
      >
      <img class="shan" src="./shan.png" width="253px" height="315px">
      <img class="zhetou" src="./zhetou.png" width="282px" height="275px" @click="food('老醋蛰头',32)">
      <img
        class="laotanchunsun"
        src="./laotanchunsun.png"
        width="275px"
        height="260px"
        @click="food('老坛春笋',15)"
      >
      <img
        class="niutijin"
        src="./niutijin.png"
        width="549px"
        height="320px"
        @click="food('凉拌牛蹄筋',30)"
      >
      <img class="yecai" src="./yecai.png" width="264px" height="253px" @click="food('凉拌山野菜',12)">
      <img class="yazhen" src="./yazhen.png" width="274px" height="261px" @click="food('麻辣鸡胗',22)">
      <img class="egan" src="./egan.png" width="267px" height="352px" @click="food('一品鹅肝',22)">
      <img class="chahushi" src="./chahushi.png" width="318px" height="351px">
      
      <img class="bg-img4" src="./bg.png" width="100%">
      <img
        class="zhengdan"
        src="./zhengdan.png"
        width="280px"
        height="586.5px"
        @click="food('鲜虾干贝蒸蛋',25)"
      >
      <img
        class="yangrou"
        src="./yangrou.png"
        width="271px"
        height="258px"
        @click="food('葱爆羊肉',32)"
      >
      <img class="zhuti" src="./zhuti.png" width="279px" height="260px" @click="food('葱烧猪蹄',28)">
      <img
        class="feichang"
        src="./feichang.png"
        width="276px"
        height="321px"
        @click="food('干锅肥肠',32)"
      >
      <img class="liahu" src="./liahu.png" width="276px" height="418px">
      <img class="doufu" src="./doufu.png" width="259px" height="235px" @click="food('干锅千页豆腐',22)">
      <img
        class="huanghuayu"
        src="./huanghuayu.png"
        width="259px"
        height="235px"
        @click="food('干炸黄花鱼',30)"
      >
      <img
        class="xiangchi"
        src="./xiangchi.png"
        width="259px"
        height="235px"
        @click="food('锅巴蒜香翅',38)"
      >
      <img class="yangza" src="./yangza.png" width="263px" height="235px" @click="food('锅仔羊杂',28)">
      <img class="niuliu" src="./niuliu.png" width="259px" height="235px" @click="food('杭椒牛柳',35)">
      <img class="huaha" src="./huaha.png" width="260px" height="235px" @click="food('辣炒花蛤',25)">
      <img class="dupian" src="./dupian.png" width="260px" height="235px" @click="food('溜肚片',32)">
      <img
        class="liufeichang"
        src="./liufeichang.png"
        width="260px"
        height="235px"
        @click="food('溜肥肠',30)"
      >
    </div>
    <el-dialog title="提示" :visible.sync="dialogVisible" width="30%">
      <span slot="title" class="dialog-footer">{{foodname}}</span>
      
      <span>价格：{{foodprice}}元/例</span>
      <td class="line"></td>
      <span>介绍：{{foodmsg}}</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="buy">购买</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data () {
    return {
      dialogVisible: false,
      foodname: "溜肚片",
      foodmsg: "这个不好吃这个不好吃这个不好吃",
      foodprice: 0
    }
  },
  components: {

  },
  methods: {
    food (val, price) {
      this.dialogVisible = true;
      this.foodname = val;
      this.foodprice = price;
    },
    buy () {
      let that = this
      this.dialogVisible = false;
      var timestamp = parseInt(new Date().getTime() / 1000);
      this.$axios.post('http://127.0.0.1:8080/api/create', {
        id: timestamp,
        name: this.foodname,
        price: this.foodprice,
        buyerId: sessionStorage.getItem("roomNum")
      })
        .then(function (response) {
          if (response.data.code == 200)
            that.$message({
              message: '点单成功',
              type: 'success',
              duration: 1000
            });
          else
            that.$message({
              message: '点单失败',
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
.food-container {
  text-align: left;
}

.img-container {
  margin-top: 60px;
  height: 1300px;
  style: inline-block;
  text-align: left;
}

.main-food {
  float: left;
  z-index: 1;
}

.fish-name {
  position: absolute;
  left: 84px;
  top: 655px;
  z-index: 2;

  input {
    margin-bottom: 2px;
    display: block;
    margin-top: 2px;
    border: 0px;
    color: #ffffff;
    font-size: 30px;
    background-color: #000;
    font-family: '华文行楷';
    cursor: pointer;
  }
}

.jianghucai {
  position: absolute;
  left: 937px;
  top: 490px;
  z-index: 2;
  margin-bottom: px;
  display: block;
  margin-top: px;
  border: 0px;
  color: #ffffff;
  font-size: 30px;
  background-color: #000;
  font-family: '华文行楷';
  cursor: pointer;
}

.easy-foods {
  position: relative;

  .bg-img {
    position: absolute;
    z-index: 2;
  }

  .bg-img2 {
    position: absolute;
    z-index: 2;
    top: 1150px;
  }

  .bg-img3 {
    position: absolute;
    z-index: 2;
    top: 2300px;
  }

  .bg-img4 {
    position: absolute;
    z-index: 2;
    top: 3450px;
  }

  .paiguji {
    position: absolute;
    z-index: 5;
    top: 150px;
    left: 37.5px;
    cursor: pointer;
  }

  .suwanzi {
    position: absolute;
    z-index: 5;
    top: 605px;
    left: 30px;
    cursor: pointer;
  }

  .ouding {
    position: absolute;
    z-index: 5;
    top: 699.5px;
    left: 356px;
    cursor: pointer;
  }

  .xiaochaohuang {
    position: absolute;
    z-index: 5;
    top: 154px;
    left: 860px;
    cursor: pointer;
  }

  .haidaisi {
    position: absolute;
    z-index: 5;
    top: 158.25px;
    left: 1210.5px;
    cursor: pointer;
  }

  .dahuangyu {
    position: absolute;
    z-index: 5;
    top: 700px;
    left: 869px;
    cursor: pointer;
  }

  .chaxiangxia {
    position: absolute;
    z-index: 5;
    top: 1237.5px;
    left: 29.75px;
    cursor: pointer;
  }

  .jielan {
    position: absolute;
    z-index: 5;
    top: 1832px;
    left: 54px;
    cursor: pointer;
  }

  .chunsun {
    position: absolute;
    z-index: 5;
    top: 1725px;
    left: 334.5px;
    cursor: pointer;
  }

  .paobing {
    position: absolute;
    z-index: 5;
    top: 1262px;
    left: 896px;
    cursor: pointer;
  }

  .sunjian {
    position: absolute;
    z-index: 5;
    top: 1750px;
    left: 892px;
    cursor: pointer;
  }

  .xungan {
    position: absolute;
    z-index: 5;
    top: 1750px;
    left: 1225px;
    cursor: pointer;
  }

  .lvrou {
    position: absolute;
    z-index: 5;
    top: 2409px;
    left: 52.5px;
    cursor: pointer;
  }

  .huanggua {
    position: absolute;
    z-index: 5;
    top: 2409px;
    left: 420px;
    cursor: pointer;
  }

  .shanyao {
    position: absolute;
    z-index: 5;
    top: 2601.5px;
    left: 420px;
    cursor: pointer;
  }

  .doufusi {
    position: absolute;
    z-index: 5;
    top: 2823.5px;
    left: 49.5px;
    cursor: pointer;
  }

  .shan {
    position: absolute;
    z-index: 5;
    top: 2822px;
    left: 463.5px;
  }

  .zhetou {
    position: absolute;
    z-index: 5;
    top: 3115px;
    left: 49.5px;
    cursor: pointer;
  }

  .laotanchunsun {
    position: absolute;
    z-index: 5;
    top: 3117px;
    left: 367.5px;
    cursor: pointer;
  }

  .niutijin {
    position: absolute;
    z-index: 5;
    top: 2409.5px;
    left: 906px;
    cursor: pointer;
  }

  .yecai {
    position: absolute;
    z-index: 5;
    top: 2744px;
    left: 906px;
    cursor: pointer;
  }

  .yazhen {
    position: absolute;
    z-index: 5;
    top: 2739.5px;
    left: 1195.25px;
    cursor: pointer;
  }

  .egan {
    position: absolute;
    z-index: 5;
    top: 3022px;
    left: 906px;
    cursor: pointer;
  }

  .chahushi {
    position: absolute;
    z-index: 5;
    top: 3024px;
    left: 1190.25px;
  }

  .zhengdan {
    position: absolute;
    z-index: 5;
    top: 3559px;
    left: 49.75px;
    cursor: pointer;
  }

  .yangrou {
    position: absolute;
    z-index: 5;
    top: 3559px;
    left: 355.5px;
    cursor: pointer;
  }

  .zhuti {
    position: absolute;
    z-index: 5;
    top: 3843px;
    left: 357px;
    cursor: pointer;
  }

  .feichang {
    position: absolute;
    z-index: 5;
    top: 4217px;
    left: 49.75px;
    cursor: pointer;
  }

  .liahu {
    position: absolute;
    z-index: 5;
    top: 4098px;
    left: 355.5px;
  }

  .doufu {
    position: absolute;
    z-index: 5;
    top: 3559px;
    left: 906px;
    cursor: pointer;
  }

  .huanghuayu {
    position: absolute;
    z-index: 5;
    top: 3559px;
    left: 1208px;
    cursor: pointer;
  }

  .xiangchi {
    position: absolute;
    z-index: 5;
    top: 3802px;
    left: 906px;
    cursor: pointer;
  }

  .yangza {
    position: absolute;
    z-index: 5;
    top: 3804px;
    left: 1217px;
    cursor: pointer;
  }

  .niuliu {
    position: absolute;
    z-index: 5;
    top: 4043px;
    left: 906px;
    cursor: pointer;
  }

  .huaha {
    position: absolute;
    z-index: 5;
    top: 4049px;
    left: 1220px;
    cursor: pointer;
  }

  .dupian {
    position: absolute;
    z-index: 5;
    top: 4292px;
    left: 906px;
    cursor: pointer;
  }

  .liufeichang {
    position: absolute;
    z-index: 5;
    top: 4289px;
    left: 1220px;
    cursor: pointer;
  }
}
</style>
