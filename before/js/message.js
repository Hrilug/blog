function send(){
	const mysql = require('mysql');
	// 2 创建链接配置
	const conn = mysql.createConnection({
		host: 'localhost',   // 主机名 （服务器地址）
		user: 'root',    //用户名
		password: 'hrilug',    // 密码
		database: 'blog',  // 写上自己要连接的数据库名字
	})
	// 3 建立链接
	conn.connection()
	// 4 生成sql语句 增删改查操作

	var nickname = document.getElementsByName("nickname");
	var connect = document.getElementsByName("connect");
	var message = document.getElementsByName("message");
	console.log(nickname,connect,message);
	let sql = 'insert into message(nickname,connect,message) values ($(' + nickname + '),$(' + connect + '), $(' + message + '))';
	//5  执行sql语句
	conn.query(sql, (err, result) => {
		if (err) {
			console.log(err);
			return
		}
		// 6 处理结果
		console.log(result)
	});
};
