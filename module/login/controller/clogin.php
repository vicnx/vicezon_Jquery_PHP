<?php
$path = $_SERVER['DOCUMENT_ROOT'] . '/vicezon/';
include($path . "module/login/model/loginDAO.php");
include($path . "module/login/model/loginVALIDATE.php");

switch($_GET['op']){
    case 'register':
        $validar_php = validate_username_registered();
        if($validar_php['exist']==false){
            echo $_POST['username_register'];
        }
        break;
}
?>