<template>
  <div class="hui-box">
    <h1>会员注册统计</h1>
    <div class="char_box">
      <div id="myChart" :style="{width:'100%',height: '100%'}"></div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "VanclIndexBodyContainerHui",
      mounted(){
       this._initData();
      },
      methods: {
        drawLine(data){
          // 基于准备好的dom，初始化echarts实例
          let myChart = this.$echarts.init(document.getElementById('myChart'))
          // 绘制图表
          var xData = function() {
            var data = [];
            for (var i = 1; i < 13; i++) {
              data.push(i + "月份");
            }
            return data;
          }();
          myChart.setOption({
              backgroundColor: "#24365e",
              "title": {
                x: "4%",
                textStyle: {
                  color: '#fff',
                  fontSize: '22'
                },
                subtextStyle: {
                  color: '#90979c',
                  fontSize: '16',
                },
              },
              "tooltip": {
                "trigger": "axis",
                "axisPointer": {
                  "type": "shadow",
                  textStyle: {
                    color: "#fff"
                  }
                },
              },
              "grid": {
                "borderWidth": 0,
                "top": 50,
                "bottom": 95,
                textStyle: {
                  color: "#fff"
                }
              },
              "calculable": true,
              "xAxis": [{
                "type": "category",
                "axisLine": {
                  lineStyle: {
                    color: '#90979c'
                  }
                },
                "splitLine": {
                  "show": false
                },
                "axisTick": {
                  "show": false
                },
                "splitArea": {
                  "show": false
                },
                "axisLabel": {
                  "interval": 0,
                },
                "data": xData,
              }],
              "yAxis": [{
                "type": "value",
                "splitLine": {
                  "show": false
                },
                "axisLine": {
                  lineStyle: {
                    color: '#90979c'
                  }
                },
                "axisTick": {
                  "show": false
                },
                "axisLabel": {
                  "interval": 0,
                },
                "splitArea": {
                  "show": false
                }
              }],
              "dataZoom": [{
                "show": true,
                "height": 30,
                "xAxisIndex": [
                  0
                ],
                bottom: 30,
                "start": 10,
                "end": 80,
                handleIcon: 'path://M306.1,413c0,2.2-1.8,4-4,4h-59.8c-2.2,0-4-1.8-4-4V200.8c0-2.2,1.8-4,4-4h59.8c2.2,0,4,1.8,4,4V413z',
                handleSize: '110%',
                handleStyle:{
                  color:"#d3dee5",
                },
                textStyle:{
                  color:"#fff"
                },
                borderColor:"#90979c"
              },
                {
                  "type": "inside",
                  "show": true,
                  "height": 15,
                  "start": 1,
                  "end": 35
                }],
              "series": [{
                "type": "bar",
                "stack": "总量",
                "barMaxWidth": 35,
                "barGap": "10%",
                "itemStyle": {
                  "normal": {
                    "color": "#ffa8a1",
                    "label": {
                      "show": true,
                      "textStyle": {
                        "color": "#fff"
                      },
                      "position": "top",
                      formatter: function(p) {
                        return p.value > 0 ? (p.value) : '';
                      }
                    }
                  }
                },
                "data": data.bardata
              }, {
                "type": "line",
                "stack": "总量",
                symbolSize:10,
                symbol:'circle',
                "itemStyle": {
                  "normal": {
                    "color": "rgba(252,230,48,1)",
                    "barBorderRadius": 0,
                    "label": {
                      "show": true,
                      "position": "top",
                      formatter: function(p) {
                        return p.value > 0 ? (p.value) : '';
                      }
                    }
                  }
                },
                "data": data.lindata
              },
              ]
            }
          );
          window.addEventListener("resize", function () {
            myChart.resize();
          })
        },
        /**
         * 初始化页面
         * @private
         */
        _initData(){
          this.$axios.get('/api/vip')
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
  .hui-box{
    height:100%;
    /*box-sizing: border-box;*/
    padding-left: 16px;
    padding-right: 16px;
    background:#f0f0f8 ;
      width: 85%;
      margin-left: 15%;
      margin-top: 54px;
  }
  .hui-box h1{
    font-size: 36px;
    color:#363636;
    line-height: 36px;
    padding-top: 27px;
    padding-bottom: 18px;
    padding-left: 20px;
  }
  .char_box{
    /*width:100%;*/
    height:100%;
    padding-left: 20px;
    padding-right: 20px;
  }
</style>
