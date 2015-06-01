<?php
	header('Access-Control-Allow-Origin: *'); 
	$servername = "localhost";
	$password = "root";
	$conn = mysql_connect($servername,$password);
	mysql_select_db('listas');
	$postdata = file_get_contents("php://input");
    $request = json_decode($postdata);
	var_dump($request);
	$sql = "INSERT INTO `list`(`list_desc`, `list_num`) VALUES ('" . $request->listDesc . "'," . $request->numList . ")";
	//$sql = "INSERT INTO `list`(`list_desc`, `list_num`) VALUES ('kkkkkkkkkkkkkkkkkkkkk" . "'," . "1" . ")";
	echo $sql;
	//$conn->query($sql);
	mysql_query( $sql, $conn)
?>