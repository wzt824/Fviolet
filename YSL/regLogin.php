<?php
	header("Content-type:text/html;charset=utf-8");
	//1.接收数据
	$username = $_POST["username"];
	$userpass = $_POST["userpass"];

	//2.处理（连接数据库）
	//1）、建立连接
	$con = mysql_connect("localhost","root","root");
	if(!$con){
		echo "连接数据库失败";
	}else{
		//2)、选择数据库
		mysql_select_db("ysl",$con);
		//3)、执行SQL
		$sqlstr = "select * from informs where username = '$username' and userpass = '$userpass'";
		$result = mysql_query($sqlstr,$con);
		mysql_close($con);
		$rows = mysql_num_rows($result);
		if($rows==0){
			echo "0";//登录失败用户名不存在
		}else{
			echo "1";//登录成功
		}
	}
?>