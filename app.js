//
const express = require('express');
const router = require('./router');

const app = express();
//配置包
app.engine('html', require('express-art-template'));
app.use('/public')
app.use('/node_moudle')

//挂载路由
app.use(router);

app.listen(12345, () =>{
    console.log(123);
    
});