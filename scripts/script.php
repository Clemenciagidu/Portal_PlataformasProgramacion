<?php
	//var_dump($_POST);
	$salt = "MATRIX";
	$usuario = array();
	
		$usuario["nombre"]  =   $_POST["nombre"];
		$usuario["email"]=   $_POST["email"];
		$usuario["telefono"] =   $_POST["telefono"];
		
		
	
	$usuario["clave"] =   md5($salt.$_POST["clave1"]);

	echo json_encode($usuario);
?>

