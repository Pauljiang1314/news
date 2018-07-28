// 路由模块，处理路由分发，找到对应的处理函数
const express = require('express');
const user = require('./controllers/c_user');

//使用express.Router()返回的路由对象router
const router = express.Router();

//配置路由。
router.get('/signin', user.showSignin)
        .post()
;

//导出路由模块
module.exports = router;