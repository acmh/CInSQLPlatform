<?php
	header('Access-Control-Allow-Origin: *'); 
	$servername = "localhost";
	$password = "root";
	$conn = mysql_connect($servername,$password);
	mysql_select_db('listas');
	$postdata = file_get_contents("php://input");
    $request = json_decode($postdata);
	//var_dump($request);
	$sql = "INSERT INTO `questions_list`(`question_title`, `question_statement`, `question_code`, `question_listid`) VALUES ('" . $request->title . "','" . $request->statement . "','" . $request->code . "',1" . ")";
	//$sql = "INSERT INTO `lista1`(`question_title`, `question_statement`, `question_code`, `question_listid`) VALUES ('saudihasduish','asduiasdhasuid', 'suidhasduih',1)";
	echo $sql;
	//$conn->query($sql);
	mysql_query( $sql, $conn)
?>