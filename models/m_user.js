//模型：专门处理c_user.js中的数据模型,操作数据库，并返回操作结果

//导入数据库配置的模块
const connection = require('../tools/db_config');
//检查邮箱是否存在。
function checkEmail(email, callback) {
    const sql = 'SELECT * FROM users WHERE email = ?';
    //数据库异步操作，获取的结果要在外部其他地方使用
    connection.query(sql, email, (err, results) => {
        if (err) {
            return callback(err);
        }
        //为了回调函数对应上，需要传null。
        callback(null, result);
    });
}
//导出包
exports.checkEmail= checkEmail;