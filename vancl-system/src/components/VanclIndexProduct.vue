<template>
    <div class="bgBox">
        <el-table
                :data="tableData4"
                style="width: 100%"
                center="true"
                max-height="600">
            <el-table-column
                    fixed
                    center="true"
                    prop="num"
                    label="编号"
                    width="80">
            </el-table-column>
            <el-table-column
                    prop="pic"
                    label="图片"
                    width="100">
                <template   slot-scope="scope">
                    <img :src="scope.row.pic"  min-width="50" height="50" alt=""/>
                </template>
            </el-table-column>
            <el-table-column
                    prop="name"
                    label="名称"
                    width="150">
            </el-table-column>
            <el-table-column
                    prop="price"
                    label="价格"
                    width="100">
            </el-table-column>
            <el-table-column
                    prop="kind"
                    label="商品类型"
                    width="150">
            </el-table-column>
            <el-table-column
                    prop="sort"
                    label="商品类别"
                    width="150">
            </el-table-column>
            <el-table-column
                    prop="storeNum"
                    label="库存"
                    width="80">
            </el-table-column>
            <el-table-column
                    prop="sellNum"
                    label="销量"
                    width="80">
            </el-table-column>
            <el-table-column
                    prop="company"
                    label="发货公司"
                    width="200">
            </el-table-column>
            <el-table-column
                    fixed="right"
                    label="操作"
                    width="120">
                <template slot-scope="scope">
                    <el-button
                            @click.native.prevent="deleteRow(scope.$index, tableData4)"
                            type="text"
                            size="small">
                        下架
                    </el-button>
                </template>
            </el-table-column>
        </el-table>
        <div class="block">
            <el-pagination
                    layout="prev, pager, next"
                    :total="50"
                    style="display: flex;justify-content: center;">
            </el-pagination>
        </div>
    </div>
</template>

<script>
    export default {
        name: "VanclIndexProduct",
        methods: {
            deleteRow(index, rows) {
                rows.splice(index, 1);
            }
        },
        data() {
            return {
                tableData4: [
                    {
                        "num": "0001",
                        "pic": "../../static/img/product/1.jpg",
                        "name": "凡客帆布鞋",
                        "price": "69.90",
                        "kind": "普通商品",
                        "sort": "鞋品-帆布鞋",
                        "storeNum": "320",
                        "sellNum": "150",
                        "company": "凡客诚品电商平台"
                    },
                    {
                        "num": "0002",
                        "pic": "../../static/img/product/2.jpg",
                        "name": "凡客衬衫",
                        "price": "79.90",
                        "kind": "普通/帮Ta付商品",
                        "sort": "衣服-衬衫",
                        "storeNum": "200",
                        "sellNum": "500",
                        "company": "凡客诚品电商平台"
                    },
                    {
                        "num": "0003",
                        "pic": "../../static/img/product/3.jpg",
                        "name": "凡客睡衣",
                        "price": "49.90",
                        "kind": "帮Ta付商品",
                        "sort": "家居-衣服-睡衣",
                        "storeNum": "400",
                        "sellNum": "350",
                        "company": "凡客诚品电商平台"
                    },
                    {
                        "num": "0004",
                        "pic": "../../static/img/product/4.jpg",
                        "name": "凡客T恤",
                        "price": "39.90",
                        "kind": "普通商品",
                        "sort": "衣服-T恤",
                        "storeNum": "534",
                        "sellNum": "200",
                        "company": "凡客诚品电商平台"
                    },
                    {
                        "num": "0005",
                        "pic": "../../static/img/product/5.jpg",
                        "name": "凡客外套",
                        "price": "79.90",
                        "kind": "帮Ta付商品",
                        "sort": "衣服-外套",
                        "storeNum": "320",
                        "sellNum": "150",
                        "company": "凡客诚品电商平台"
                    },
                    {
                        "num": "0006",
                        "pic": "../../static/img/product/6.jpg",
                        "name": "凡客围巾",
                        "price": "49.90",
                        "kind": "普通/帮Ta付商品",
                        "sort": "饰品-围巾",
                        "storeNum": "667",
                        "sellNum": "90",
                        "company": "凡客诚品电商平台"
                    },
                    {
                        "num": "0007",
                        "pic": "../../static/img/product/7.jpg",
                        "name": "凡客围巾",
                        "price": "39.90",
                        "kind": "普通商品",
                        "sort": "饰品-围巾",
                        "storeNum": "632",
                        "sellNum": "187",
                        "company": "凡客诚品电商平台"
                    },
                    {
                        "num": "0008",
                        "pic": "../../static/img/product/8.jpg",
                        "name": "凡客袜子",
                        "price": "19.90",
                        "kind": "普通/帮Ta付商品",
                        "sort": "袜品-短袜",
                        "storeNum": "150",
                        "sellNum": "340",
                        "company": "凡客诚品电商平台"
                    },
                    {
                        "num": "0009",
                        "pic": "../../static/img/product/9.jpg",
                        "name": "凡客运动鞋",
                        "price": "79.90",
                        "kind": "普通商品",
                        "sort": "鞋品-运动鞋",
                        "storeNum": "810",
                        "sellNum": "450",
                        "company": "凡客诚品电商平台"
                    },
                    {
                        "num": "0010",
                        "pic": "../../static/img/product/10.jpg",
                        "name": "凡客笨笨熊T恤",
                        "price": "59.90",
                        "kind": "帮Ta付商品",
                        "sort": "衣服-T恤",
                        "storeNum": "350",
                        "sellNum": "350",
                        "company": "凡客诚品电商平台"
                    },
                    {
                        "num": "0011",
                        "pic": "../../static/img/product/2.jpg",
                        "name": "凡客衬衫",
                        "price": "79.90",
                        "kind": "普通/帮Ta付商品",
                        "sort": "衣服-衬衫",
                        "storeNum": "200",
                        "sellNum": "500",
                        "company": "凡客诚品电商平台"
                    },
                    {
                        "num": "0012",
                        "pic": "../../static/img/product/1.jpg",
                        "name": "凡客帆布鞋",
                        "price": "69.90",
                        "kind": "普通商品",
                        "sort": "鞋品-帆布鞋",
                        "storeNum": "320",
                        "sellNum": "150",
                        "company": "凡客诚品电商平台"
                    },
                    {
                        "num": "0013",
                        "pic": "../../static/img/product/3.jpg",
                        "name": "凡客睡衣",
                        "price": "49.90",
                        "kind": "帮Ta付商品",
                        "sort": "家居-衣服-睡衣",
                        "storeNum": "400",
                        "sellNum": "350",
                        "company": "凡客诚品电商平台"
                    },
                    {
                        "num": "0014",
                        "pic": "../../static/img/product/6.jpg",
                        "name": "凡客围巾",
                        "price": "49.90",
                        "kind": "普通/帮Ta付商品",
                        "sort": "饰品-围巾",
                        "storeNum": "667",
                        "sellNum": "90",
                        "company": "凡客诚品电商平台"
                    },
                    {
                        "num": "0015",
                        "pic": "../../static/img/product/5.jpg",
                        "name": "凡客外套",
                        "price": "79.90",
                        "kind": "帮Ta付商品",
                        "sort": "衣服-外套",
                        "storeNum": "320",
                        "sellNum": "150",
                        "company": "凡客诚品电商平台"
                    },
                    {
                        "num": "0016",
                        "pic": "../../static/img/product/10.jpg",
                        "name": "凡客笨笨熊T恤",
                        "price": "59.90",
                        "kind": "帮Ta付商品",
                        "sort": "衣服-T恤",
                        "storeNum": "350",
                        "sellNum": "350",
                        "company": "凡客诚品电商平台"
                    },
                    {
                        "num": "0017",
                        "pic": "../../static/img/product/7.jpg",
                        "name": "凡客围巾",
                        "price": "39.90",
                        "kind": "普通商品",
                        "sort": "饰品-围巾",
                        "storeNum": "632",
                        "sellNum": "187",
                        "company": "凡客诚品电商平台"
                    },
                    {
                        "num": "0018",
                        "pic": "../../static/img/product/8.jpg",
                        "name": "凡客袜子",
                        "price": "19.90",
                        "kind": "普通/帮Ta付商品",
                        "sort": "袜品-短袜",
                        "storeNum": "150",
                        "sellNum": "340",
                        "company": "凡客诚品电商平台"
                    },
                    {
                        "num": "0019",
                        "pic": "../../static/img/product/9.jpg",
                        "name": "凡客运动鞋",
                        "price": "79.90",
                        "kind": "普通商品",
                        "sort": "鞋品-运动鞋",
                        "storeNum": "810",
                        "sellNum": "450",
                        "company": "凡客诚品电商平台"
                    },
                    {
                        "num": "0020",
                        "pic": "../../static/img/product/4.jpg",
                        "name": "凡客T恤",
                        "price": "39.90",
                        "kind": "普通商品",
                        "sort": "衣服-T恤",
                        "storeNum": "534",
                        "sellNum": "200",
                        "company": "凡客诚品电商平台"
                    },
                    {
                        "num": "0021",
                        "pic": "../../static/img/product/10.jpg",
                        "name": "凡客笨笨熊T恤",
                        "price": "59.90",
                        "kind": "帮Ta付商品",
                        "sort": "衣服-T恤",
                        "storeNum": "350",
                        "sellNum": "350",
                        "company": "凡客诚品电商平台"
                    },
                    {
                        "num": "0022",
                        "pic": "../../static/img/product/2.jpg",
                        "name": "凡客衬衫",
                        "price": "79.90",
                        "kind": "普通/帮Ta付商品",
                        "sort": "衣服-衬衫",
                        "storeNum": "200",
                        "sellNum": "500",
                        "company": "凡客诚品电商平台"
                    },
                    {
                        "num": "0023",
                        "pic": "../../static/img/product/7.jpg",
                        "name": "凡客围巾",
                        "price": "39.90",
                        "kind": "普通商品",
                        "sort": "饰品-围巾",
                        "storeNum": "632",
                        "sellNum": "187",
                        "company": "凡客诚品电商平台"
                    },
                    {
                        "num": "0024",
                        "pic": "../../static/img/product/4.jpg",
                        "name": "凡客T恤",
                        "price": "39.90",
                        "kind": "普通商品",
                        "sort": "衣服-T恤",
                        "storeNum": "534",
                        "sellNum": "200",
                        "company": "凡客诚品电商平台"
                    },
                    {
                        "num": "0025",
                        "pic": "../../static/img/product/5.jpg",
                        "name": "凡客外套",
                        "price": "79.90",
                        "kind": "帮Ta付商品",
                        "sort": "衣服-外套",
                        "storeNum": "320",
                        "sellNum": "150",
                        "company": "凡客诚品电商平台"
                    },
                    {
                        "num": "0026",
                        "pic": "../../static/img/product/6.jpg",
                        "name": "凡客围巾",
                        "price": "49.90",
                        "kind": "普通/帮Ta付商品",
                        "sort": "饰品-围巾",
                        "storeNum": "667",
                        "sellNum": "90",
                        "company": "凡客诚品电商平台"
                    },
                    {
                        "num": "0027",
                        "pic": "../../static/img/product/9.jpg",
                        "name": "凡客运动鞋",
                        "price": "79.90",
                        "kind": "普通商品",
                        "sort": "鞋品-运动鞋",
                        "storeNum": "810",
                        "sellNum": "450",
                        "company": "凡客诚品电商平台"
                    },
                    {
                        "num": "0028",
                        "pic": "../../static/img/product/8.jpg",
                        "name": "凡客袜子",
                        "price": "19.90",
                        "kind": "普通/帮Ta付商品",
                        "sort": "袜品-短袜",
                        "storeNum": "150",
                        "sellNum": "340",
                        "company": "凡客诚品电商平台"
                    },
                    {
                        "num": "0029",
                        "pic": "../../static/img/product/3.jpg",
                        "name": "凡客睡衣",
                        "price": "49.90",
                        "kind": "帮Ta付商品",
                        "sort": "家居-衣服-睡衣",
                        "storeNum": "400",
                        "sellNum": "350",
                        "company": "凡客诚品电商平台"
                    },
                    {
                        "num": "0030",
                        "pic": "../../static/img/product/1.jpg",
                        "name": "凡客帆布鞋",
                        "price": "69.90",
                        "kind": "普通商品",
                        "sort": "鞋品-帆布鞋",
                        "storeNum": "320",
                        "sellNum": "150",
                        "company": "凡客诚品电商平台"
                    }
                ]
            }
        }
    }
</script>

<style scoped>
    .bgBox{
        width: 85%;
        margin-left: 15%;
        margin-top: 54px;
        padding: 15px;
    }
    .block{
        background: #fff;
    }
</style>