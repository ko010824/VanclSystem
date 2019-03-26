<template>
    <div class="box">
      <div class="one">
        <h3>新增数据统计</h3>
        <div class="one_content">
          <div class="one_son_box">
            <div class="one_son first">
              <img src="../assets/img/img1.png" alt="">
              <span>265</span>
              <p>新增用户数</p>
            </div>
          </div>
          <div class="one_son_box">
            <div class="one_son second">
              <img src="../assets/img/img2.png" alt="">
              <span>1367</span>
              <p>新增订单数</p>
            </div>
          </div>
          <div class="one_son_box">
            <div class="one_son third">
              <img src="../assets/img/img3.png" alt="">
              <span>18</span>
              <p>新增商品数</p>
            </div>
          </div>
        </div>
      </div>
      <div class="two">
        <div class="two_left_box">
          <div class="two_left">
            <h3>用户统计</h3>
            <div class="left_content">
              <div class="cont_l">
                <p>用户总数</p>
                <p>10269</p>
              </div>
              <div class="cont_r">
                <div class="cont_r_top">
                  <p>6428</p>
                  <p>已实名认证用户数</p>
                </div>
                <div class="cont_r_bot">
                  <p>3841</p>
                  <p>未实名认证用户数</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="two_right_box">
          <div class="two_right">
            <h3>商品统计</h3>
            <div class="right_content">
              <!--echar-->
              <div id="myChart" :style="{height: '100%'}"></div><!--height:100%需要改动-->
            </div>
          </div>
        </div>
      </div>
      <div class="three">
        <h3>订单统计</h3>
        <div class="table_box">
            <el-table
                    ref="multipleTable"
                    :data="tableData3"
                    tooltip-effect="dark"
                    style="width: 100%"
                    @selection-change="handleSelectionChange">
                <el-table-column
                        type="selection"
                        width="55">
                </el-table-column>
                <el-table-column
                        label="日期"
                        width="120">
                    <template slot-scope="scope">{{ scope.row.date }}</template>
                </el-table-column>
                <el-table-column
                        prop="name"
                        label="姓名"
                        width="120">
                </el-table-column>
                <el-table-column
                        prop="sex"
                        label="性别"
                        width="120">
                </el-table-column>
                <el-table-column
                        prop="kind"
                        label="职业"
                        width="120">
                </el-table-column>
                <el-table-column
                        prop="address"
                        label="地址"
                        show-overflow-tooltip>
                </el-table-column>
            </el-table>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
      name: "VanclIndexBodyContainerShouye",
      mounted(){
        this._initData();
      },
        data() {
            return {
                tableData3: [{
                    date: '2016-05-03',
                    name: '王小虎',
                    sex:'男',
                    kind:'程序员',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-02',
                    name: '王小虎',
                    sex:'男',
                    kind:'程序员',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-04',
                    name: '王小虎',
                    sex:'男',
                    kind:'程序员',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-01',
                    name: '王小虎',
                    sex:'男',
                    kind:'程序员',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-08',
                    name: '王小虎',
                    sex:'男',
                    kind:'程序员',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-06',
                    name: '王小虎',
                    sex:'男',
                    kind:'程序员',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-07',
                    name: '王小虎',
                    sex:'男',
                    kind:'程序员',
                    address: '上海市普陀区金沙江路 1518 弄'
                }],
                multipleSelection: []
            }
        },
      methods: {
        handleSelectionChange(val) {
          this.multipleSelection = val;
        },

        drawLine(data){
          // 基于准备好的dom，初始化echarts实例
          let myChart = this.$echarts.init(document.getElementById('myChart'))
          // 绘制图表
          myChart.setOption({
            tooltip: {},
            grid: {
              left: '3%',
              right: '3%',
              bottom: '15%',
              top:"15%",
              containLabel: true
            },
            xAxis: {
              axisLabel: {
                textStyle:{
                  color:"#252525"
                }
              },
              axisLine: {
                lineStyle:{
                  color:"#dadbdd"
                }
              },
              axisTick: {
                show: false
              },
              data: data.department
            },
            yAxis: {
              axisLabel: {
                show: true
              },
              axisLine: {
                show: false
              },
              axisTick: {
                show: false
              },
              splitLine: {
                show: true,
                lineStyle:{
                  type:'dotted',
                  color:'#d6d7d8'
                }  //lineStyle需要加
              }
            },
            series: [{
              // name: '销量',
              type: 'bar',
              data: data.num,
              barWidth: 36,
              itemStyle:{
                normal:{
                  color:'#38a0ff'
                }
              }
            }]
          });
          window.addEventListener("resize", function () {
            myChart.resize();
          })
        },
        /**
         * 初始化页面
         * @private
         */
        _initData(){
          this.$axios.get('/api/shouye')
            .then((res)=>{
              // console.log(res.data);
              this.drawLine(res.data);
            })
            .catch((err)=>{
              console.log(err);
            });
        }
      }
    }
</script>

<style scoped>
  .box{
    padding-left: 16px;
    padding-right: 16px;
    background:#f0f0f8 ;
    width: 85%;
    margin-left: 15%;
    margin-top: 54px;
  }
  .one{
    width:100%;
  }
  .one h3{
    padding-top: 27px;
    padding-bottom: 18px;
    padding-left: 20px;
    font-size: 20px;
    color:#323232;
    line-height: 20px;
  }
  .one_content{
    width:100%;
    overflow: hidden;
  }
  .one_son_box{
    float: left;
    width:33.333%;
    box-sizing: border-box;
    padding: 0 20px;
  }
  .one_son{
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #fff;
      padding: 15px 28px 15px 36px;
    border-radius: 4px;
  }
  .one_son span{
    font-size: 34px;
  }
  .one_son p{
    font-size:18px;
    color:#5b5b5b
  }
  .first span{
    color:#feb101;
  }
  .second span{
    color:#ff414b;
  }
  .third span{
    color:#3579fe;
  }
  .two{
    width:100%;
    overflow: hidden;
  }
  .two_left_box{
    float: left;
    width:33.3333%;
    padding: 0 20px;
    box-sizing: border-box;
  }
  .two_left{

  }
  .two_left h3,.two_right h3{
    font-size: 20px;
    color:#323232;
    line-height: 20px;
    padding-top: 27px;
    padding-bottom: 17px;
  }
  .left_content{
    background: #fff;
    border-radius: 4px;
    display: flex;
    justify-content: space-between;
    align-items: center;
      padding: 37px 40px;
  }
  .cont_l p{
    font-size: 18px;
    color:#3a3a3a;
    line-height: 18px;
  }
  .cont_l p:first-child{
    padding-bottom: 36px;
  }
  .cont_l p:last-child{
    text-align: center;
  }
  .cont_r_top,.cont_r_bot{
    padding-right: 24px;
    padding-left: 24px;
    border-radius: 6px;
  }
  .cont_r_top p:first-child,.cont_r_bot p:first-child{
    text-align: center;
    font-size:16px;
    color:#fff;
    line-height: 16px;
    padding-top: 18px;
    padding-bottom: 15px;
  }
  .cont_r_top p:last-child,.cont_r_bot p:last-child{
    font-size:14px ;
    color:#fff;
    line-height: 14px;
    padding-bottom: 18px;
  }
  .cont_r_top{
    background: #3c94fe;
    margin-bottom: 37px;
  }
  .cont_r_bot{
    background: #4fcbcd;
  }
  .two_right_box{
    float: left;
    width:66.6667%;
    padding: 0 20px;
    box-sizing: border-box;
  }
  .right_content{
    background: #fff;
    height:273px;
    border-radius: 4px;
  }
  .three{
    width:100%;
  }
  .three h3{
    padding-top: 27px;
    padding-bottom: 18px;
    padding-left: 20px;
    font-size: 20px;
    color:#323232;
    line-height: 20px;
  }
  .table_box{
    padding-left:20px;
    padding-right:20px;
      margin-bottom: 30px;
  }
  /*.table_box table{
    width:100%;
    background: #fff;
    padding-left:36px;
    padding-right:36px;
  }
  .table_box table td{
    border-bottom:2px solid #eeeff4;
  }*/
</style>
