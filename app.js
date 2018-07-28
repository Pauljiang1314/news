//1.导包express
const express = require('express');
const router = require('./router');
const session = require('express-session');

const app = express();

//配置包
app.engine('html', require('express-art-template'));
app.use('/public')
app.use('/node_moudle')
    //配置express-session包
    app.use(session({
        secret: 'keyboard cat',
        resave: false,
        saveUninitialized: true
      }));

//挂载路由
app.use(router);

app.listen(12345, () =>{
    console.log(123);
    
});