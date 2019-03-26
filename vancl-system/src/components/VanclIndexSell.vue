<template>
    <div class="w-Campaign-content">
        <div class="box">
            <div class="w-activity-time" v-if="CampaignData.activity">
                <h1>{{CampaignData.activity.title}}</h1>
                <h1>
                    {{CampaignData.activity.time}}
                  <span class="sj">{{shi}}小时</span>&nbsp;:&nbsp;
                  <span class="sj">{{fen}}分钟</span>&nbsp;:&nbsp;
                  <span class="sj">{{miao}}秒</span>
                </h1>
            </div>
            <div class="w-activity-type" :key="index"  v-if="CampaignData.activityType" v-for="(a,index) in CampaignData.activityType">
                <h6>{{a.title}}</h6>
                <div class="w-activity-content">
                    <img :src="a.pic" alt="" width="100%">
                    <div class="w-activity-introduce">
                        <h5>{{a.activityIntroduce.title}}</h5>
                        <p :key="index" v-for="(b,index) in a.activityIntroduce.content">{{b}}</p>
                        <h5>{{a.activityIntroduce.activitytTime.title}}</h5>
                        <p>{{a.activityIntroduce.activitytTime.times}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "VanclIndexSell",
        data(){
            return {
              CampaignData:{},
              shi:0,
              fen:0,
              miao:0
            }
        },
        methods:{
          /**
           * 初始化页面
           * @private
           */
          _initData(){
            this.$axios.get('/api/sell')
              .then((res)=>{
                console.log(res.data);
                this.CampaignData = res.data;
              })
              .catch((err)=>{
                console.log(err);
              });
          },
          _daoJiShi(){
            var nowDate = new Date();
            var endDate = new Date(new Date().toLocaleDateString()+" 23:00:00");
            var cha = endDate - nowDate;
            //转化为天，时，分，秒
            var totalSec = parseInt(cha / 1000);
            //60*60*24
            var sec = parseInt(totalSec % 60);
            var min = parseInt(totalSec / 60 % 60);
            var hour = parseInt(totalSec / 3600 % 24);

            this.shi = this._jialing(hour);
            this.fen = this._jialing(min);
            this.miao = this._jialing(sec);
          },
          _jialing(num){
            if(num < 10){
              num = "0" + num;
            }
            return num;
          }
        },
        created(){
          this._initData()
        },
        mounted(){
          this._daoJiShi();
          setInterval(this._daoJiShi,1000);
        }
    }
</script>

<style scoped>
    .w-Campaign-content{
        width: 85%;
        margin-left: 15%;
        margin-top: 54px;
      background:#ebebf3;
        box-sizing: border-box;
        padding: 30px;
    }
    .w-activity-time h1{
        margin-right: 100px;
        margin-bottom: 50px;
        font-size: 30px;
    }
    .w-activity-type{
        clear: both;
        width: 100%;
        overflow: hidden;
        box-sizing: border-box;
        padding-bottom: 50px;
    }
    .w-activity-type h6{
        font-size: 20px;
        margin-bottom: 10px;
        margin-left: 10px;
    }
    .w-activity-content{
        width: 100%;
        height: 300px;
    }
    .w-activity-content img{
        float: left;
        height: 300px;
        width: 30%;
    }
    .w-activity-content .w-activity-introduce{
        float: left;
        width: 70%;
        height: 300px;
        background: #f5dbdb;
        box-sizing: border-box;
        padding: 20px;
    }
    .w-activity-introduce h5{
        font-size: 22px;
        margin-bottom: 10px;
    }
    .w-activity-introduce h5:nth-of-type(2){
        margin-top: 30px;
    }
    .w-activity-introduce p{
        margin-left: 40px;
        font-size: 18px;
        line-height: 30px;
    }
</style>
