<template>
    <div class="count_box">
  <div class="top_box">
    <div class="top_content">
      <div class="content_box">
        <div class="content">
          <div class="top">
            <div class="chart1_box">
              <div id="myChart1" :style="{height: '100%'}"></div>
            </div>
            <div class="right">
              <h3>新增用户数</h3>
              <p class="finish one">完成:610人</p>
              <p>剩余:390人</p>
            </div>
          </div>
          <div class="bottom">
            <p>
              <span></span>目标:1000人
            </p>
            <p>
              <span class="one"></span>完成:610人
            </p>
          </div>
        </div>
      </div>
      <div class="content_box">
        <div class="content">
          <div class="top">
            <div class="chart1_box">
              <div id="myChart2" :style="{height: '100%'}"></div>
            </div>
            <div class="right">
              <h3>用户使用率</h3>
              <p class="finish two">完成:780人</p>
              <p>剩余:220人</p>
            </div>
          </div>
          <div class="bottom">
            <p>
              <span></span>目标:1000人
            </p>
            <p>
              <span class="two"></span>完成:780人
            </p>
          </div>
        </div>
      </div>
      <div class="content_box">
        <div class="content">
          <div class="top">
            <div class="chart1_box">
              <div id="myChart3" :style="{height: '100%'}"></div>
            </div>
            <div class="right">
              <h3>今日成交量</h3>
              <p class="finish three">完成:560人</p>
              <p>剩余:440人</p>
            </div>
          </div>
          <div class="bottom">
            <p>
              <span></span>目标:1000人
            </p>
            <p>
              <span class="three"></span>完成:560人
            </p>
          </div>
        </div>
      </div>
      <div class="content_box">
        <div class="content">
          <div class="top">
            <div class="chart1_box">
              <div id="myChart4" :style="{height: '100%'}"></div>
            </div>
            <div class="right">
              <h3>今日成交金额</h3>
              <p class="finish four">完成:750人</p>
              <p>剩余:250人</p>
            </div>
          </div>
          <div class="bottom">
            <p>
              <span></span>目标:1000人
            </p>
            <p>
              <span class="four"></span>完成:750人
            </p>
          </div>
        </div>
      </div>
      <div class="content_box">
        <div class="content">
          <div class="top">
            <div class="chart1_box">
              <div id="myChart5" :style="{height: '100%'}"></div>
            </div>
            <div class="right">
              <h3>今日退货量</h3>
              <p class="finish five">完成:340人</p>
              <p>剩余:660人</p>
            </div>
          </div>
          <div class="bottom">
            <p>
              <span></span>目标:1000人
            </p>
            <p>
              <span class="five"></span>完成:340人
            </p>
          </div>
        </div>
      </div>
      <div class="content_box">
        <div class="content">
          <div class="top">
            <div class="chart1_box">
              <div id="myChart6" :style="{height: '100%'}"></div>
            </div>
            <div class="right">
              <h3>今日在售商品量</h3>
              <p class="finish six">完成:850人</p>
              <p>剩余:150人</p>
            </div>
          </div>
          <div class="bottom">
            <p>
              <span></span>目标:1000人
            </p>
            <p>
              <span class="six"></span>完成:850人
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="bottom_box">
    <div class="bottom_content">
      <div class="content_top">
        <p>销售排行榜</p>
      </div>
      <div class="content_bottom">
        <div class="bottom_left">
          <div id="myChart7" :style="{height: '100%'}"></div>
        </div>
        <div class="bottom_left">
          <div id="myChart8" :style="{height: '100%'}"></div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
    export default {
        name: "VanclIndexCount",
      mounted(){
        this._initData();
        // this.drawLine();
      },
      methods: {
        drawLine1(data){
          // 基于准备好的dom，初始化echarts实例
          let myChart1 = this.$echarts.init(document.getElementById('myChart1'))
          var dataStyle = {
            normal: {
              label: {
                show: false
              },
              labelLine: {
                show: false
              }
            }
          };
          var placeHolderStyle = {
            normal: {
              color: '#ddd',//未完成的圆环的颜色
              label: {
                show: false
              },
              labelLine: {
                show: false
              }
            }
          };
          // 绘制图表
          myChart1.setOption({
            title: {
              text: parseInt(data.finish/1000*100) + "%",
              x: 'center',
              y: 'center',
              textStyle: {
                fontWeight: 'normal',
                color: "#ff695e",
                fontSize: 12
              }
            },
            backgroundColor: '#fff',
            color: ['#ff695e'],
            tooltip: {
              show: false,
              formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            legend: {
              show: false,
              itemGap: 12,
              data: ['01', '02']
            },
            toolbox: {
              show: false,
              feature: {
                mark: {
                  show: true
                },
                dataView: {
                  show: true,
                  readOnly: false
                },
                restore: {
                  show: true
                },
                saveAsImage: {
                  show: true
                }
              }
            },
            series: [{
              name: 'Line 1',
              type: 'pie',
              clockWise: false,
              radius: [26, 30],
              itemStyle: dataStyle,
              hoverAnimation: false,
              data: [{
                value: data.finish,
                name: '01'
              }, {
                value: data.other,
                name: 'invisible',
                itemStyle: placeHolderStyle
              }
              ]
            }
            ]
          });
          window.addEventListener("resize", function () {
            myChart1.resize();
          })
        },
        drawLine2(data){
          // 基于准备好的dom，初始化echarts实例
          let myChart2 = this.$echarts.init(document.getElementById('myChart2'))
          var dataStyle = {
            normal: {
              label: {
                show: false
              },
              labelLine: {
                show: false
              }
            }
          };
          var placeHolderStyle = {
            normal: {
              color: '#ddd',//未完成的圆环的颜色
              label: {
                show: false
              },
              labelLine: {
                show: false
              }
            }
          };
          // 绘制图表
          myChart2.setOption({
            title: {
              text: parseInt(data.finish/1000*100) + "%",
              x: 'center',
              y: 'center',
              textStyle: {
                fontWeight: 'normal',
                color: "#4ac4f1",
                fontSize: 12
              }
            },
            backgroundColor: '#fff',
            color: ['#4ac4f1'],
            tooltip: {
              show: false,
              formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            legend: {
              show: false,
              itemGap: 12,
              data: ['01', '02']
            },
            toolbox: {
              show: false,
              feature: {
                mark: {
                  show: true
                },
                dataView: {
                  show: true,
                  readOnly: false
                },
                restore: {
                  show: true
                },
                saveAsImage: {
                  show: true
                }
              }
            },
            series: [{
              name: 'Line 1',
              type: 'pie',
              clockWise: false,
              radius: [26, 30],
              itemStyle: dataStyle,
              hoverAnimation: false,
              data: [{
                value: data.finish,
                name: '01'
              }, {
                value: data.other,
                name: 'invisible',
                itemStyle: placeHolderStyle
              }
              ]
            }
            ]
          });
          window.addEventListener("resize", function () {
            myChart2.resize();
          })
        },
        drawLine3(data){
          // 基于准备好的dom，初始化echarts实例
          let myChart3 = this.$echarts.init(document.getElementById('myChart3'))
          var dataStyle = {
            normal: {
              label: {
                show: false
              },
              labelLine: {
                show: false
              }
            }
          };
          var placeHolderStyle = {
            normal: {
              color: '#ddd',//未完成的圆环的颜色
              label: {
                show: false
              },
              labelLine: {
                show: false
              }
            }
          };
          // 绘制图表
          myChart3.setOption({
            title: {
              text: parseInt(data.finish/1000*100) + "%",
              x: 'center',
              y: 'center',
              textStyle: {
                fontWeight: 'normal',
                color: "#fe1730",
                fontSize: 12
              }
            },
            backgroundColor: '#fff',
            color: ['#fe1730'],
            tooltip: {
              show: false,
              formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            legend: {
              show: false,
              itemGap: 12,
              data: ['01', '02']
            },
            toolbox: {
              show: false,
              feature: {
                mark: {
                  show: true
                },
                dataView: {
                  show: true,
                  readOnly: false
                },
                restore: {
                  show: true
                },
                saveAsImage: {
                  show: true
                }
              }
            },
            series: [{
              name: 'Line 1',
              type: 'pie',
              clockWise: false,
              radius: [26, 30],
              itemStyle: dataStyle,
              hoverAnimation: false,
              data: [{
                value: data.finish,
                name: '01'
              }, {
                value: data.other,
                name: 'invisible',
                itemStyle: placeHolderStyle
              }
              ]
            }
            ]
          });
          window.addEventListener("resize", function () {
            myChart3.resize();
          })
        },
        drawLine4(data){
          // 基于准备好的dom，初始化echarts实例
          let myChart4 = this.$echarts.init(document.getElementById('myChart4'))
          var dataStyle = {
            normal: {
              label: {
                show: false
              },
              labelLine: {
                show: false
              }
            }
          };
          var placeHolderStyle = {
            normal: {
              color: '#ddd',//未完成的圆环的颜色
              label: {
                show: false
              },
              labelLine: {
                show: false
              }
            }
          };
          // 绘制图表
          myChart4.setOption({
            title: {
              text:parseInt(data.finish/1000*100) + "%",
              x: 'center',
              y: 'center',
              textStyle: {
                fontWeight: 'normal',
                color: "#ffe45f",
                fontSize: 12
              }
            },
            backgroundColor: '#fff',
            color: ['#ffe45f'],
            tooltip: {
              show: false,
              formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            legend: {
              show: false,
              itemGap: 12,
              data: ['01', '02']
            },
            toolbox: {
              show: false,
              feature: {
                mark: {
                  show: true
                },
                dataView: {
                  show: true,
                  readOnly: false
                },
                restore: {
                  show: true
                },
                saveAsImage: {
                  show: true
                }
              }
            },
            series: [{
              name: 'Line 1',
              type: 'pie',
              clockWise: false,
              radius: [26, 30],
              itemStyle: dataStyle,
              hoverAnimation: false,
              data: [{
                value: data.finish,
                name: '01'
              }, {
                value: data.other,
                name: 'invisible',
                itemStyle: placeHolderStyle
              }
              ]
            }
            ]
          });
          window.addEventListener("resize", function () {
            myChart4.resize();
          })
        },
        drawLine5(data){
          // 基于准备好的dom，初始化echarts实例
          let myChart5 = this.$echarts.init(document.getElementById('myChart5'))
          var dataStyle = {
            normal: {
              label: {
                show: false
              },
              labelLine: {
                show: false
              }
            }
          };
          var placeHolderStyle = {
            normal: {
              color: '#ddd',//未完成的圆环的颜色
              label: {
                show: false
              },
              labelLine: {
                show: false
              }
            }
          };
          // 绘制图表
          myChart5.setOption({
            title: {
              text: parseInt(data.finish/1000*100) + "%",
              x: 'center',
              y: 'center',
              textStyle: {
                fontWeight: 'normal',
                color: "#5ce18c",
                fontSize: 12
              }
            },
            backgroundColor: '#fff',
            color: ['#5ce18c'],
            tooltip: {
              show: false,
              formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            legend: {
              show: false,
              itemGap: 12,
              data: ['01', '02']
            },
            toolbox: {
              show: false,
              feature: {
                mark: {
                  show: true
                },
                dataView: {
                  show: true,
                  readOnly: false
                },
                restore: {
                  show: true
                },
                saveAsImage: {
                  show: true
                }
              }
            },
            series: [{
              name: 'Line 1',
              type: 'pie',
              clockWise: false,
              radius: [26, 30],
              itemStyle: dataStyle,
              hoverAnimation: false,
              data: [{
                value: data.finish,
                name: '01'
              }, {
                value: data.other,
                name: 'invisible',
                itemStyle: placeHolderStyle
              }
              ]
            }
            ]
          });
          window.addEventListener("resize", function () {
            myChart5.resize();
          })
        },
        drawLine6(data){
          // 基于准备好的dom，初始化echarts实例
          let myChart6 = this.$echarts.init(document.getElementById('myChart6'))
          var dataStyle = {
            normal: {
              label: {
                show: false
              },
              labelLine: {
                show: false
              }
            }
          };
          var placeHolderStyle = {
            normal: {
              color: '#ddd',//未完成的圆环的颜色
              label: {
                show: false
              },
              labelLine: {
                show: false
              }
            }
          };
          // 绘制图表
          myChart6.setOption({
            title: {
              text: parseInt(data.finish/1000*100) + "%",
              x: 'center',
              y: 'center',
              textStyle: {
                fontWeight: 'normal',
                color: "#03cdcb",
                fontSize: 12
              }
            },
            backgroundColor: '#fff',
            color: ['#03cdcb'],
            tooltip: {
              show: false,
              formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            legend: {
              show: false,
              itemGap: 12,
              data: ['01', '02']
            },
            toolbox: {
              show: false,
              feature: {
                mark: {
                  show: true
                },
                dataView: {
                  show: true,
                  readOnly: false
                },
                restore: {
                  show: true
                },
                saveAsImage: {
                  show: true
                }
              }
            },
            series: [{
              name: 'Line 1',
              type: 'pie',
              clockWise: false,
              radius: [26, 30],
              itemStyle: dataStyle,
              hoverAnimation: false,
              data: [{
                value: data.finish,
                name: '01'
              }, {
                value: data.other,
                name: 'invisible',
                itemStyle: placeHolderStyle
              }

              ]
            }
            ]
          });
          window.addEventListener("resize", function () {
            myChart6.resize();
          })
        },
        drawLine7(shuju){
          // 基于准备好的dom，初始化echarts实例
          let myChart7 = this.$echarts.init(document.getElementById('myChart7'))
          /**
           * 图标所需数据
           */
          var data = {
            id: 'echartPie',
            value: shuju.value,
            legend: shuju.legend,
            color: shuju.color,
            // tooltipShow:false,    //设置悬浮提示显示              --默认显示true
            // hoverAnimation:false, //设置鼠标悬浮点击饼图动画效果  --默认开启动画true
            // title: '饼图',
          }
          /**
           * 数据处理
           */
          var seriesData = []
          data.value.forEach(function(item, index) {
            seriesData.push({
              value: item,
              name: data.legend[index]
            })
          })
          myChart7.setOption ({
            backgroundColor: '#fff',
            title: {
              x: '2%',
              y: '2%',
              textStyle: {
                fontWeight: 400,
                fontSize: 16,
                color: '#687284'
              },
              text: data.title || ''
            },
            tooltip: {
              trigger: 'item',
              show: data.tooltipShow === false ? false : true
              //   formatter: "{b}: {c} ({d}%)"
            },
            legend: {
              orient: 'vertical',
              top: 100,
              left:"65%",
              icon: 'square',
              selectedMode: false,
              itemWidth: 10,
              itemHeight:10,
              itemGap: 6,
              data: data.legend
            },
            series: [{
              type: 'pie',
              // clickable:false,
              // selectedMode: 'single',//单点击设置
              hoverAnimation: data.hoverAnimation === false ? false : true,
              radius: ['30%', '80%'],
              color: data.color,
              label: {
                normal: {
                  position: 'inner',
                  // formatter: '{d}%',
                  formatter: function(param) {
                    if (!param.percent) return ''
                    var f = Math.round(param.percent * 10) / 10;
                    var s = f.toString();
                    var rs = s.indexOf('.');
                    if (rs < 0) {
                      rs = s.length;
                      s += '.';
                    }
                    while (s.length <= rs + 1) {
                      s += '0';
                    }
                    return s + '%';
                  },
                  textStyle: {
                    color: '#fff',
                    fontSize: 12
                  }
                }
              },
              labelLine: {
                normal: {
                  show: false
                }
              },
              data: seriesData
            }]
          });
          window.addEventListener("resize", function () {
            myChart7.resize();
          })
        },
        drawLine8(shuju){
          // 基于准备好的dom，初始化echarts实例
          let myChart8= this.$echarts.init(document.getElementById('myChart8'))
          /**
           * 图标所需数据
           */
          var data = {
            id: 'echartPie',
            value: shuju.value,
            legend: shuju.legend,
            color: shuju.color,
            // tooltipShow:false,    //设置悬浮提示显示              --默认显示true
            // hoverAnimation:false, //设置鼠标悬浮点击饼图动画效果  --默认开启动画true
            // title: '饼图',
          }
          /**
           * 数据处理
           */
          var seriesData = []
          data.value.forEach(function(item, index) {
            seriesData.push({
              value: item,
              name: data.legend[index]
            })
          })
          myChart8.setOption ({
            backgroundColor: '#fff',
            title: {
              x: '2%',
              y: '2%',
              textStyle: {
                fontWeight: 400,
                fontSize: 16,
                color: '#687284'
              },
              text: data.title || ''
            },
            tooltip: {
              trigger: 'item',
              show: data.tooltipShow === false ? false : true
              //   formatter: "{b}: {c} ({d}%)"
            },
            legend: {
              orient: 'vertical',
              top: 100,
              left:"65%",
              icon: 'square',
              selectedMode: false,
              itemWidth: 10,
              itemHeight:10,
              itemGap: 6,
              data: data.legend
            },
            series: [{
              type: 'pie',
              // clickable:false,
              // selectedMode: 'single',//单点击设置
              hoverAnimation: data.hoverAnimation === false ? false : true,
              radius: ['30%', '80%'],
              color: data.color,
              label: {
                normal: {
                  position: 'inner',
                  // formatter: '{d}%',
                  formatter: function(param) {
                    if (!param.percent) return ''
                    var f = Math.round(param.percent * 10) / 10;
                    var s = f.toString();
                    var rs = s.indexOf('.');
                    if (rs < 0) {
                      rs = s.length;
                      s += '.';
                    }
                    while (s.length <= rs + 1) {
                      s += '0';
                    }
                    return s + '%';
                  },
                  textStyle: {
                    color: '#fff',
                    fontSize: 12
                  }
                }
              },
              labelLine: {
                normal: {
                  show: false
                }
              },
              data: seriesData
            }]
          });
          window.addEventListener("resize", function () {
            myChart8.resize();
          })
        },
        /**
         * 初始化页面
         * @private
         */
        _initData(){
          this.$axios.get('/api/count')
            .then((res)=>{
              console.log(res.data);
              this.drawLine1(res.data.topdata[0]);
              this.drawLine2(res.data.topdata[1]);
              this.drawLine3(res.data.topdata[2]);
              this.drawLine4(res.data.topdata[3]);
              this.drawLine5(res.data.topdata[4]);
              this.drawLine6(res.data.topdata[5]);
              this.drawLine7(res.data.bottomdata[0]);
              this.drawLine8(res.data.bottomdata[1]);
            })
            .catch((err)=>{
              console.log(err);
            });
        }
      }
    }
</script>

<style scoped>
  .count_box{
    /*height:100%;*/
    padding-left: 16px;
    padding-right: 16px;
    background:#f0f0f8 ;
    padding-bottom: 20px;
      width: 85%;
      margin-left: 15%;
      margin-top: 54px;
  }
  .top_content{
    overflow: hidden;
    padding-top: 15px;
  }
  .content_box{
    float: left;
    width:33.333%;
    box-sizing: border-box;
    padding: 0 20px;
    margin-bottom: 15px;
  }
  .content{
    background: #fff;
    padding-left: 33px;
    padding-right: 33px;
    padding-top: 23px;
    padding-bottom: 9px;
    border-radius: 7px;
  }
  .top{
    display: flex;
    justify-content: space-between;
    margin-bottom: 34px;
  }
  .chart1_box{
    width:34%;
    height:86px;
  }
  .right h3{
    font-size: 14px;
    color:#2b2b2b;
    line-height: 14px;
    text-align: center;
  }
  .right .finish{
    font-size: 16px;
    line-height:16px;
    font-weight: 600;
    text-align: center;
    padding:17px 0 ;
  }
  .right .one{
    color:#ff5e51;
  }
  .right .two{
    color:#2ab8ee;
  }
  .right .three{
    color:#fe1730;
  }
  .right .four{
    color:#ffe45f;
  }
  .right .five{
    color:#5ce18c;
  }
  .right .six{
    color:#03cdcb;
  }
  .right p:nth-child(3){
    font-size: 12px;
    color:#999999;
    line-height:12px;
    text-align: center;
  }
  .bottom{
    display: flex;
    justify-content: space-between;
    padding-left: 10px;
    padding-right: 10px;
  }
  .bottom p{
    font-size: 12px;
    color:#313131;
    line-height: 12px;
  }
  .bottom p:nth-child(1) span{
    background: #d5d5d5;
  }
  .bottom p span{
    display: inline-block;
    width:11px;
    height:11px;
    margin-right: 7px;
  }
  .bottom p .one{
    background: #ff5e51;
  }
  .bottom p .two{
    background: #4ac4f1;
  }
  .bottom p .three{
    background: #fe233d;
  }
  .bottom p .four{
    background: #ffe048;
  }
  .bottom p .five{
    background: #48df81;
  }
  .bottom p .six{
    background: #02d2d0;
  }
  .bottom_content{
    margin-left: 20px;
    margin-right: 20px;
    background: #fff;
    border-radius: 7px;
  }
  .content_top{
    overflow: hidden;
    border-bottom: 1px solid #d7d7d7;
  }
  .content_top p{
    float: left;
    padding-right: 18px;
    font-size: 16px;
    color:#07d1cf;
    line-height: 30px;
    padding-left: 18px;
    border-bottom: 1px solid #07d1cf;
  }
  .content_bottom{
    width:100%;
   overflow: hidden;
  }
  .bottom_left{
    width:50%;
    height:200px;
    float: left;
  }
</style>
