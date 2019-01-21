<?php
	header("Content-type:text/html;charset=utf-8");
	//1.接收数据
	$username=$_POST["username"];
	$userpass=$_POST["userpass"];
	//2.搭桥（连接数据库）
	//1）建立连接
	$con = mysql_connect("localhost","root","root");
	if(!$con){
		echo "链接失败";
	}else{
		//2)选择数据库
		mysql_select_db("ysl",$con);
		//3.执行SQL语句l
		$sqlstr = "select * from informs where username='$username'";
		$result = mysql_query($sqlstr,$con);
		$rows = mysql_num_rows($result);
		if($rows<=0){
			$sqlstr = "insert into informs(username,userpass) values('$username','$userpass')";
			$result = mysql_query($sqlstr,$con);
			//echo $sqlstr."<br/>";
			if($result==1){
				echo "1";  //成功
			}else{
				echo "0";  //失败
			}
		}else{
			echo "-1";//用户名存在，失败
		}
	}
?>