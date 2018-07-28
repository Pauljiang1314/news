//专门实现用户相关功能的控制器,不同功能对应的控制器。

//导入m_user.js模型
const M_user = require('../models/m_user');

//渲染用户登陆页的方法
exports.showDignin = (req, res) => {
    res.render('signin.html');
};
//处理登陆的表单请求
exports.handleSignin = (req, res) => {
    //1.获取表单数据
    const body = req.body;
    //2.校验表单数据（去数据库中校验）

        //让模型去检查邮箱，并且把数据库操作的结果返回
        M_user.checkEmail(body.email, (err, result) => {
            //验证邮箱
                //返回错误的结果
                if (err) {
                    return res.send({
                        code: 500,
                        message: err.message
                    });
                }

                //如果result为[]，证明邮箱不存在，查询没结果
                if(!result[0]) {
                    return res.send({
                        code: 1,
                        message: '邮箱不存在'
                    });
                }

            //如果邮箱验证通过，再校验密码，
                //密码不正确
                if(results[0].password !== body.password) {
                    return res.send({
                        code: 2,
                        message: '密码不正确'
                    });
                }

                //密码正确，将正确的邮箱和昵称保存到session中
                req.session.user = results[0];
    //3.发送响应到客户端
            res.send({
                code: 200,
                message: '可以登陆了，请跳转到话题列表'
            });

        });

};