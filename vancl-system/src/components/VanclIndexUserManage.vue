<template>
    <el-table
                :data="tableData"
                border
                style="width: 100%">
            <el-table-column
                    fixed
                    prop="date"
                    label="日期"
                    width="100">
            </el-table-column>
            <el-table-column
                    prop="username"
                    label="昵称"
                    width="120">
            </el-table-column>
            <el-table-column
                    prop="name"
                    label="姓名"
                    width="120">
            </el-table-column>
            <el-table-column
                    prop="province"
                    label="省份"
                    width="120">
            </el-table-column>
            <el-table-column
                    prop="city"
                    label="市区"
                    width="120">
            </el-table-column>
            <el-table-column
                    prop="career"
                    label="职业"
                    width="120">
            </el-table-column>
            <el-table-column
                    prop="number"
                    label="手机号码"
                    width="200">
            </el-table-column>
            <el-table-column
                    prop="zip"
                    label="邮编"
                    width="120">
            </el-table-column>
        <el-table-column
                fixed="right"
                label="操作"
                width="160">
            <template slot-scope="scope">
                <el-button @click="get_table_data(scope.row)" type="text" size="small">详情</el-button>
                <!--<el-button @click.native.prevent="deleteRow(scope.$index, tableData)" type="text" size="small">删除</el-button>-->
            </template>
        </el-table-column>
        </el-table>
</template>

<script>
    export default {
        name: "VanclIndexProductUser",
        methods: {
            //删除数据
            /*deleteRow(index, rows) {
                rows.splice(index, 1);
            },*/
            //获取数据详情
            get_table_data(row) {
                console.log(row);
            }
        },
        data() {
            return {
                tableData: [{
                        "date": "2019-02-14",
                        "username":"神话",
                        "name": "沈腾",
                        "province": "上海",
                        "city": "普陀区",
                        "career": "程序员",
                        "number": 13678964460,
                        "zip": 200333
                    }, {
                        "date": "2019-02-14",
                        "username":"天使与魔鬼",
                        "name": "许嵩",
                        "province": "北京",
                        "city": "海淀区",
                        "career": "歌手",
                        "number": 13526735625,
                        "zip": 222333
                    }, {
                        "date": "2019-02-13",
                        "username":"柠檬",
                        "name": "欧阳娜娜",
                        "province": "上海",
                        "city": "黄浦区",
                        "career": "厨师",
                        "number": 15877862566,
                        "zip": 111222
                    }, {
                        "date": "2019-02-13",
                        "username":"小苹果",
                        "name": "肖央",
                        "province": "上海",
                        "city": "徐汇区",
                        "career": "演员",
                        "number": 17712342341,
                        "zip": 888677
                    }, {
                        "date": "2019-02-12",
                        "username":"太阳女神",
                        "name": "谢娜",
                        "province": "北京",
                        "city": "朝阳区",
                        "career": "话剧演员",
                        "number": 17512348670,
                        "zip": 113423
                    }, {
                        "date": "2019-02-12",
                        "username":"一醉千年",
                        "name": "何炅",
                        "province": "北京",
                        "city": "顺义区",
                        "career": "主持人",
                        "number": 13634297865,
                        "zip": 287345
                    }, {
                        "date": "2019-02-11",
                        "username":"一股巫山",
                        "name": "张大大",
                        "province": "上海",
                        "city": "长宁区",
                        "career": "售票员",
                        "number": 18729176255,
                        "zip": 192022
                    }, {
                        "date": "2019-02-11",
                        "username":"多来A梦",
                        "name": "李维嘉",
                        "province": "上海",
                        "city": "虹口区",
                        "career": "酒店经理",
                        "number": 13542132398,
                        "zip": 988812
                    }, {
                        "date": "2019-02-10",
                        "username":"木子口木",
                        "name": "吴昕",
                        "province": "上海",
                        "city": "浦东新区",
                        "career": "教师",
                        "number": 15829100299,
                        "zip": 500444
                    }, {
                        "date": "2019-02-10",
                        "username":"沉默是金",
                        "name": "杜海涛",
                        "province": "北京",
                        "city": "东城区",
                        "career": "医生",
                        "number": 13465789098,
                        "zip": 899001
                    }, {
                        "date": "2019-02-09",
                        "username":"太阳女神",
                        "name": "谢娜",
                        "province": "北京",
                        "city": "朝阳区",
                        "career": "话剧演员",
                        "number": 17512348670,
                        "zip": 113423
                    }, {
                        "date": "2019-02-09",
                        "username":"一醉千年",
                        "name": "何炅",
                        "province": "北京",
                        "city": "顺义区",
                        "career": "主持人",
                        "number": 13634297865,
                        "zip": 287345
                    }, {
                        "date": "2019-02-08",
                        "username":"一股巫山",
                        "name": "张大大",
                        "province": "上海",
                        "city": "长宁区",
                        "career": "售票员",
                        "number": 18729176255,
                        "zip": 192022
                    },
                    {
                        "date": "2019-02-08",
                        "username":"神话",
                        "name": "沈腾",
                        "province": "上海",
                        "city": "普陀区",
                        "career": "程序员",
                        "number": 13678964460,
                        "zip": 200333
                    }, {
                        "date": "2019-02-07",
                        "username":"天使与魔鬼",
                        "name": "许嵩",
                        "province": "北京",
                        "city": "海淀区",
                        "career": "歌手",
                        "number": 13526735625,
                        "zip": 222333
                    }, {
                        "date": "2019-02-07",
                        "username":"柠檬",
                        "name": "欧阳娜娜",
                        "province": "上海",
                        "city": "黄浦区",
                        "career": "厨师",
                        "number": 15877862566,
                        "zip": 111222
                    }, {
                        "date": "2019-02-06",
                        "username":"小苹果",
                        "name": "肖央",
                        "province": "上海",
                        "city": "徐汇区",
                        "career": "演员",
                        "number": 17712342341,
                        "zip": 888677
                    }, {
                        "date": "2019-02-06",
                        "username":"多来A梦",
                        "name": "李维嘉",
                        "province": "上海",
                        "city": "虹口区",
                        "career": "酒店经理",
                        "number": 13542132398,
                        "zip": 988812
                    }, {
                        "date": "2019-02-05",
                        "username":"木子口木",
                        "name": "吴昕",
                        "province": "上海",
                        "city": "浦东新区",
                        "career": "教师",
                        "number": 15829100299,
                        "zip": 500444
                    }, {
                        "date": "2019-02-05",
                        "username":"沉默是金",
                        "name": "杜海涛",
                        "province": "北京",
                        "city": "东城区",
                        "career": "医生",
                        "number": 13465789098,
                        "zip": 899001
                    }, {
                        "date": "2019-02-04",
                        "username":"太阳女神",
                        "name": "谢娜",
                        "province": "北京",
                        "city": "朝阳区",
                        "career": "话剧演员",
                        "number": 17512348670,
                        "zip": 113423
                    }, {
                        "date": "2019-02-04",
                        "username":"一醉千年",
                        "name": "何炅",
                        "province": "北京",
                        "city": "顺义区",
                        "career": "主持人",
                        "number": 13634297865,
                        "zip": 287345
                    }, {
                        "date": "2019-02-03",
                        "username":"一股巫山",
                        "name": "张大大",
                        "province": "上海",
                        "city": "长宁区",
                        "career": "售票员",
                        "number": 18729176255,
                        "zip": 192022
                    }, {
                        "date": "2019-02-03",
                        "username":"神话",
                        "name": "沈腾",
                        "province": "上海",
                        "city": "普陀区",
                        "career": "程序员",
                        "number": 13678964460,
                        "zip": 200333
                    }, {
                        "date": "2019-02-02",
                        "username":"天使与魔鬼",
                        "name": "许嵩",
                        "province": "北京",
                        "city": "海淀区",
                        "career": "歌手",
                        "number": 13526735625,
                        "zip": 222333
                    }, {
                        "date": "2019-02-02",
                        "username":"小苹果",
                        "name": "肖央",
                        "province": "上海",
                        "city": "徐汇区",
                        "career": "演员",
                        "number": 17712342341,
                        "zip": 888677
                    }, {
                        "date": "2019-02-01",
                        "username":"多来A梦",
                        "name": "李维嘉",
                        "province": "上海",
                        "city": "虹口区",
                        "career": "酒店经理",
                        "number": 13542132398,
                        "zip": 988812
                    }, {
                        "date": "2019-02-01",
                        "username":"木子口木",
                        "name": "吴昕",
                        "province": "上海",
                        "city": "浦东新区",
                        "career": "教师",
                        "number": 15829100299,
                        "zip": 500444
                    }, {
                        "date": "2019-01-31",
                        "username":"沉默是金",
                        "name": "杜海涛",
                        "province": "北京",
                        "city": "东城区",
                        "career": "医生",
                        "number": 13465789098,
                        "zip": 899001
                    }, {
                        "date": "2019-01-31",
                        "username":"柠檬",
                        "name": "欧阳娜娜",
                        "province": "上海",
                        "city": "黄浦区",
                        "career": "厨师",
                        "number": 15877862566,
                        "zip": 111222
                    }
                ]
            }
        }
    }


</script>

<style scoped>

</style>