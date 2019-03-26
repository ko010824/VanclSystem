<template>
  <div class="xiao-box">
    <h1>销量统计</h1>
    <div class="char_box">
      <div id="myChart" :style="{width:'100%',height: '100%'}"></div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "VanclIndexBodyContainerXiao",
      mounted(){
        this.drawLine();
      },
      methods:{
        drawLine(){
          var dom = document.getElementById("myChart");
          var myChart = this.$echarts.init(dom);
          var xAxisBarChart = [];
//条形图数据
          var dataBarChart = [];
//T恤一周销量（7个数）
          var dataBrownies = [];
//凡客衬衫一周销量（7个数）
          var dataMacarons = [];
//羽绒服一周销量（7个数）
          var dataTiramisu = [];
//时间轴数据
          var timelineData = [];
//数据插入图表
          var optionsData = [];

          var weekDay = 0;
//全数据数组
          var sourceArray = [];
//判断是否排序
          var SortOrNot = false;
//反序排序：从大到小
          var compare = function(x, y) {
            if (x.value < y.value) {
              return 1;
            } else if (x.value > y.value) {
              return -1;
            } else {
              return 0;
            }
          }
          //柱状图数据的映射集合，实现排序的转换
          var dataBarChartMap = new Map();
//柱状图数据的寄存器，最后一步再导入到dataBarChart中
          var dataBarChartTemp = [];
//图表加载
          let option = {
            baseOption: {
              backgroundColor:"#fff",
              timeline: {
                x: 0,
                axisType: 'category',
                orient: 'vertical',
                autoPlay: true,
                playInterval: 1000,
                data: timelineData,
                left: 10,
                right: null,
                top: 50,
                bottom: 0,
                width: 70,
                height: null,
                inverse: true,
                symbol: 'none',
                lineStyle: {
                  color: '#555'
                },
                checkpointStyle: {
                  color: '#bbb',
                  borderColor: '#777',
                  borderWidth: 2
                },
                label: {
                  normal: {
                    textStyle: {
                      color: '#999',
                      fontSize: 15
                    }
                  },
                  emphasis: {
                    textStyle: {
                      color: '#999',
                      fontSize: 20
                    }
                  }
                },
              },
              title: {
                text: 'Vancl——部分商品销量',
                textStyle:{
                  "fontSize": 25,
                  "fontWeight": "bolder",
                  "color": "#000"
                },
                textAlign: 'left',
                x:"15%",
                y: 15,
              },
              tooltip: {
                trigger: 'item',
                padding: 10,
                backgroundColor: '#222',
                borderColor: '#777',
                borderWidth: 1,
                formatter: tooltipFormatter,

              },
              angleAxis: {
                type: 'category',
                data: ['星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期日'],
                z: 10
              },
              grid: {
                left: '6%',
                right: '5%',
                top: '16%',
                bottom: '3%',
                containLabel: true
              },
              polar: {
                center: ['80%', '30%'],
                radius: 100,
              },
              xAxis: [{
                type: 'category',
                data: xAxisBarChart,
                axisLabel: {
                  'interval': 0,
                  textStyle: {
                    color: '#000'
                  }
                },
              }],
              yAxis: [{
                type: 'value',
                max: 600,
                show: false
              }],
              radiusAxis: {},
              series: [{
                type: 'bar',
                data: dataBrownies,
                coordinateSystem: 'polar',
                name: 'T恤',
                center: ['80%', '30%'],
                stack: 'a',
                itemStyle: {
                  normal: {
                    borderWidth: 4,
                    borderColor: '#ffffff',
                  },
                  emphasis: {
                    borderWidth: 0,
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                  }
                }
              }, {
                type: 'bar',
                data: dataMacarons,
                coordinateSystem: 'polar',
                name: '凡客衬衫',
                center: ['80%', '30%'],
                stack: 'a',
                itemStyle: {
                  normal: {
                    borderWidth: 4,
                    borderColor: '#ffffff',
                  },
                  emphasis: {
                    borderWidth: 0,
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                  }
                }
              }, {
                type: 'bar',
                data: dataTiramisu,
                coordinateSystem: 'polar',
                name: '羽绒服',
                center: ['80%', '30%'],
                stack: 'a',
                itemStyle: {
                  normal: {
                    borderWidth: 3,
                    borderColor: '#ffffff',
                  },
                  emphasis: {
                    borderWidth: 3,
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                  }
                }
              }, {
                name: '每天销量',
                type: 'pie',
                center: ['80%', '30%'],
                radius: ['45%', '50%'],
                avoidLabelOverlap: false,
                label: {
                  normal: {
                    show: true,
                    position: 'outside',
                    formatter: '{b} : {c} ({d}%)'

                  },
                  emphasis: {
                    show: true,
                    textStyle: {
                      fontSize: '15',
                      fontWeight: 'normal'
                    }
                  },
                  tooltip: {
                    trigger: 'item',
                    padding: 10,
                    backgroundColor: '#222',
                    borderColor: '#777',
                    borderWidth: 1,
                    formatter: tooltipFormatter,
                  },
                },
                labelLine: {
                  normal: {
                    show: false
                  }
                },
                legend: {
                  show: true,
                  orient: 'vertical',
                  x: 'left',
                  y: 'bottom',
                  data: ['T恤', '凡客衬衫', '羽绒服']
                },
                itemStyle: {
                  normal: {
                    borderWidth: 3,
                    borderColor: '#ffffff',
                  },
                  emphasis: {
                    show: true,
                    textStyle: {
                      fontSize: '15',
                      fontWeight: 'normal'
                    }
                  }
                }
              }, {
                name: '半年销量',
                type: 'bar',
                avoidLabelOverlap: false,
                label: {
                  normal: {
                    show: true,
                    position: 'outside',
                    formatter: '{c}'
                  },
                  emphasis: {
                    show: true,
                    textStyle: {
                      fontSize: '20',
                      fontWeight: 'normal'
                    }
                  }
                },
                labelLine: {
                  normal: {
                    show: false
                  }
                },
                itemStyle: {
                  normal: {
                    borderWidth: 3,
                    borderColor: '#ffffff',
                  },
                  emphasis: {
                    borderWidth: 3,
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                  }
                }
              }]
            },
            options: optionsData,
          }
//全数据计算
          for (var week = 0; week < 26; week++) {
            var weekDataArray = [];
            for (var day = 0; day < 7; day++) {
              var productSales = [{
                'Brownies': parseInt(20 * Math.random()),
                'Macarons': parseInt(20 * Math.random()),
                'Tiramisu': parseInt(20 * Math.random())
              }];
              weekDataArray.push(productSales);
            }
            //一天的数据由3种蛋糕组成，一周由7天组成，半年由26周组成，所以写三个循环
            sourceArray.push(weekDataArray);
            timelineData.push('第' + (week + 1) + '周');
          }
          everyProductCalculate();
//现实情况下大多数都是根据数据源对数据进行切割和合并
          function everyProductCalculate() {
            //数组容器重置
            dataBarChartMap = new Map();
            dataBarChartTemp = [];
            xAxisBarChart = [];
            dataBrownies = [];
            dataMacarons = [];
            dataTiramisu = [];
            optionsData = [];

            //柱状图数据计算，就是一周合计的计算
            for (var i = 0; i < sourceArray.length; i++) {
              var weekSum = 0;
              for (var j = 0; j < sourceArray[i].length; j++) {
                var daySum = 0;
                daySum = sourceArray[i][j][0].Brownies +
                  sourceArray[i][j][0].Macarons +
                  sourceArray[i][j][0].Tiramisu;
                weekSum = weekSum + daySum;
              }
              dataBarChartTemp.push(weekSum);
            }
            //数据插入到map集合中，由星期和每周销量相互对应
            for (var i = 1; i < sourceArray.length + 1; i++) {
              dataBarChartMap.put(i, dataBarChartTemp[i - 1]);

            }
            //是否排序
            if (SortOrNot) {
              dataBarChartMap.elements.sort(compare);
              dataBarChartTemp = dataBarChartMap.elements;
            }
            //得到dataBarChart，柱状图数据
            dataBarChart = dataBarChartTemp;
            for (var i = 0; i < sourceArray.length; i++) {
              var xAxisBarChartTemp = [];
              for (var j = 0; j < sourceArray.length; j++) {
                if (i == dataBarChartMap.elements[j].key - 1) {
                  xAxisBarChartTemp.push('\n>第' + dataBarChartMap.elements[j].key + '周<');
                } else {
                  xAxisBarChartTemp.push(dataBarChartMap.elements[j].key + '周');
                }
              }
              //得到xAxisBarChart，柱状图x轴数据
              xAxisBarChart.push(xAxisBarChartTemp);
            }
            //
            //每个产品全部销量计算（一个产品包含7个值）
            for (var i = 0; i < sourceArray.length; i++) {
              let dataBrowniesTemp = [];
              let dataMacaronsTemp = [];
              let dataTiramisuTemp = [];
              for (var j = 0; j < sourceArray[i].length; j++) {
                dataBrowniesTemp.push(sourceArray[i][j][0].Brownies);
                dataMacaronsTemp.push(sourceArray[i][j][0].Macarons);
                dataTiramisuTemp.push(sourceArray[i][j][0].Tiramisu);
              }
              //得到蛋糕各自的数据
              dataBrownies.push(dataBrowniesTemp);
              dataMacarons.push(dataMacaronsTemp);
              dataTiramisu.push(dataTiramisuTemp);
            }
            for (var i = 0; i < sourceArray.length; i++) {
              optionsData.push({
                'series': [{
                  'data': dataBrownies[i]
                }, {
                  'data': dataMacarons[i]
                }, {
                  'data': dataTiramisu[i]
                }, {
                  'data': [{
                    value: dataBrownies[i][weekDay],
                    name: 'T恤'
                  }, {
                    value: dataMacarons[i][weekDay],
                    name: '凡客衬衫'
                  }, {
                    value: dataTiramisu[i][weekDay],
                    name: '羽绒服'
                  }]
                }, {
                  'data': dataBarChart
                },

                ],
                'xAxis': [{
                  'data': xAxisBarChart[i],
                }]
              });
            }
            option.options = optionsData;

            myChart.setOption(option);
          }
          myChart.on('click', function(params) {
            //直接改变数据的内容
            if (params.componentSubType != 'pie' &&
              params.seriesName != '半年销量') {
              weekDay = params.dataIndex;
              for (var i = 0; i < option.baseOption.timeline.data.length; i++) {
                option.options[i].series[3].data[0].value = dataBrownies[i][weekDay];
                option.options[i].series[3].data[1].value = dataMacarons[i][weekDay];
                option.options[i].series[3].data[2].value = dataTiramisu[i][weekDay];
              }
              var weekDayData = ['星期一', '星期二', '星期三', '星期四', '星期五',
                '星期六', '星期日'
              ];
              weekDayData[weekDay] = {
                value: weekDayData[weekDay],
                textStyle: {
                  fontSize: 25,
                }
              };
              option.baseOption.timeline.autoPlay = false;
              option.baseOption.angleAxis.data = weekDayData;
              myChart.setOption(option);
            }
            //重新执行数据转换过程
            else if (params.componentSubType == 'bar' &&
              params.seriesName == '半年销量') {
              if (SortOrNot == false) {
                SortOrNot = true;
              } else {
                SortOrNot = false;
              }
              everyProductCalculate();
              option.options = optionsData;
              myChart.setOption(option);
            }
          });
//提示框体
          function tooltipFormatter(params) {
            var valuesFormatter = [];
            if (params.componentSubType == 'pie') {
              valuesFormatter
                .push('<div style="border-bottom: 1px solid rgba(255,255,255,.3); font-size: 18px;padding-bottom: 7px;margin-bottom: 7px">' +
                  '本日销量' +
                  '<br>' +
                  '</div>' +
                  '<span style="color:' +
                  params.color +
                  '">' + params.name + '</span>: ' + params.value);
            } else {
              valuesFormatter
                .push('<div style="border-bottom: 1px solid rgba(255,255,255,.3); font-size: 18px;padding-bottom: 7px;margin-bottom: 7px">' +
                  params.seriesName +
                  '</div>' +
                  '<span style="color:' +
                  params.color +
                  '">' +
                  params.name +
                  '</span>: ' +
                  params.value + '<br>');
            }

            return valuesFormatter;
          }
//map集合,这里应该写在工具脚本中
          function Map() {
            this.elements = new Array();

            // 获取Map元素个数
            this.size = function() {
              return this.elements.length;
            },

              // 判断Map是否为空
              this.isEmpty = function() {
                return (this.elements.length < 1);
              },

              // 删除Map所有元素
              this.clear = function() {
                this.elements = new Array();
              },

              // 向Map中增加元素（key, value)
              this.put = function(_key, _value) {
                if (this.containsKey(_key) == true) {
                  if (this.containsValue(_value)) {
                    if (this.remove(_key) == true) {
                      this.elements.push({
                        key: _key,
                        value: _value
                      });
                    }
                  } else {
                    this.elements.push({
                      key: _key,
                      value: _value
                    });
                  }
                } else {
                  this.elements.push({
                    key: _key,
                    value: _value
                  });
                }
              },

              // 删除指定key的元素，成功返回true，失败返回false
              this.remove = function(_key) {
                var bln = false;
                try {
                  for (i = 0; i < this.elements.length; i++) {
                    if (this.elements[i].key == _key) {
                      this.elements.splice(i, 1);
                      return true;
                    }
                  }
                } catch (e) {
                  bln = false;
                }
                return bln;
              },

              // 获取指定key的元素值value，失败返回null
              this.get = function(_key) {
                try {
                  for (i = 0; i < this.elements.length; i++) {
                    if (this.elements[i].key == _key) {
                      return this.elements[i].value;
                    }
                  }
                } catch (e) {
                  return null;
                }
              },

              // 获取指定索引的元素（使用element.key，element.value获取key和value），失败返回null
              this.element = function(_index) {
                if (_index < 0 || _index >= this.elements.length) {
                  return null;
                }
                return this.elements[_index];
              },

              // 判断Map中是否含有指定key的元素
              this.containsKey = function(_key) {
                var bln = false;
                try {
                  for (i = 0; i < this.elements.length; i++) {
                    if (this.elements[i].key == _key) {
                      bln = true;
                    }
                  }
                } catch (e) {
                  bln = false;
                }
                return bln;
              },

              // 判断Map中是否含有指定value的元素
              this.containsValue = function(_value) {
                var bln = false;
                try {
                  for (i = 0; i < this.elements.length; i++) {
                    if (this.elements[i].value == _value) {
                      bln = true;
                    }
                  }
                } catch (e) {
                  bln = false;
                }
                return bln;
              },

              // 获取Map中所有key的数组（array）
              this.keys = function() {
                var arr = new Array();
                for (i = 0; i < this.elements.length; i++) {
                  arr.push(this.elements[i].key);
                }
                return arr;
              },

              // 获取Map中所有value的数组（array）
              this.values = function() {
                var arr = new Array();
                for (i = 0; i < this.elements.length; i++) {
                  arr.push(this.elements[i].value);
                }
                return arr;
              };
          }
          window.addEventListener("resize", function () {
            myChart.resize();
          })
        }
      }
    }
</script>

<style scoped>
  .xiao-box{
    width: 85%;
    margin-left: 15%;
    margin-top: 54px;
    height:100%;
    padding-left: 16px;
    padding-right: 16px;
    background:#f0f0f8 ;
  }
  .xiao-box h1{
    font-size: 36px;
    color:#363636;
    line-height: 36px;
    padding-top: 27px;
    padding-bottom: 18px;
    padding-left: 20px;
  }
  .char_box{
    height:100%;
    padding-left: 20px;
    padding-right: 20px;
  }
</style>
