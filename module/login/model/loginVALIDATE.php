<?php
$path = $_SERVER['DOCUMENT_ROOT'] . '/vicezon/';
include_once($path . "module/login/model/loginDAO.php");

function validate_username_registered(){
    $username= $_POST['username_register'];
    $first_name= $_POST['first_name_register'];
    $last_name= $_POST['last_name_register'];
    $email= $_POST['email_register'];
    $password= $_POST['password_register'];

    if(findUsername($username)==false){
        $datos = array('username'=>$username,'first_name'=>$first_name,'last_name'=>$last_name,'email'=>$email,'password'=>$password);
        return $return=array('exist'=>false,'datos'=>$datos);
    }
}

?>