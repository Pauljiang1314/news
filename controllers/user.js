//渲染用户登陆页的方法
exports.showDignin = (reg, res) => {
    res.render('signin.html');

};
//
exports.handleSignin = (req, res) => {
    const body = req.body;

    const sql = 'SELECT * FROM `users` WHERE `email` = ?'

    if(err) {
        return res.send({})
    };











    //邮箱正确，验证密码

    const sql = 'SELECT * FROM'

};