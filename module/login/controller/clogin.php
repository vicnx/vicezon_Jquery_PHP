<?php
$path = $_SERVER['DOCUMENT_ROOT'] . '/vicezon/';
include($path . "module/login/model/loginDAO.php");
include($path . "module/login/model/loginVALIDATE.php");

switch($_GET['op']){
    case 'register':
        $validar_php = validate_username_registered();
        if($validar_php['exist']==false){
            $loginDAO = new loginDAO();
            $res = $loginDAO -> create_user($_POST['username_register'],$_POST['first_name_register'],$_POST['last_name_register'],$_POST['email_register'],$_POST['password_register']);
            if(!$res){
                echo "error al registrarse";
                exit;
            }else{
                echo "Registrado correctamente";
                exit;
            }
        }else{
            echo $validar_php['error'];
            exit;
        }
        break;
}
?>