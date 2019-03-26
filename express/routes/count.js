var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    let data = require("../data/count");
    // res.header('Access-Control-Allow-Origin:*');  //支持全域名访问，不安全，部署后需要固定限制为客户端网址
    // res.header('Access-Control-Allow-Methods:POST,GET,OPTIONS,DELETE'); //支持的http 动作
    // res.header('Access-Control-Allow-Headers:x-requested-with,content-type');  //响应头 请按照自己需求添加。
    res.json(data);
});

module.exports = router;
