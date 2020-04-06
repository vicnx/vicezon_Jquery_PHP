<?php
$path = $_SERVER['DOCUMENT_ROOT'] . '/vicezon/';
include($path . "module/login/model/loginDAO.php");
include($path . "module/login/model/loginVALIDATE.php");
session_start();
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
    case 'login':
        try{
            $username = $_POST['login_username'];
            $password = $_POST['login_password'];
            $loginDAO = new loginDAO();
            $res = $loginDAO -> login_select_password($username);
        } catch (Exception $e){
            echo "error al obtener";
        }
        if(!$res){
            echo 'user no existe';
        }else{
            if(password_verify($password,$res->password)){
                if(isset($_SESSION['carrito'])&& $_SESSION['carrito'] === 'on'){
                    echo "carrito";
                }else{
                    echo "vale";
                }
                //session_start();
                $_SESSION['username'] = $res->username;
                $_SESSION['type'] = $res->type;
                $_SESSION['avatar'] = $res->avatar;
                $_SESSION['email'] = $res->email;
                $_SESSION['first_name'] = $res->first_name;
                $_SESSION['last_name'] = $res->email;
                $_SESSION['time'] = time();
                // if(isset($_SESSION['carrito']){
                //     echo "carrito";
                // })
            }else{
                echo "contrasena incorrecta";
            }
        }
        break;
    case 'check_login':
        //session_start();
        $username=$_SESSION['username'];
        echo $username;
        break;
    case 'logout':
        //session_start();
        session_destroy();
        session_unset();
        echo "destroy";
        break;
    case 'actividad':
        if(!isset($_SESSION['time'])){
            echo 'on';
        }else{
            $actividad_login=$_SESSION['time'];
            if((time()-$actividad_login) >900){ //15 minutes
                echo 'off';
            }else{
                echo 'on';
                echo time()-$actividad_login;
                $_SESSION['time'] = time();
            }
        }
        break;
    case 'check_bd_type':
        //session_start();
        if(!isset($_SESSION['username'])){
            echo 'nada';
        }else{
            $username=$_SESSION['username'];
            $type=$_SESSION['type'];
            check_bd_type($username,$type);
            if(check_bd_type($username,$type)){
                echo 'typeok';
            }else{
                echo 'typeno';
            }
        }
        break;
    case 'regenerar_id':
    	$old_id = session_id();
        session_regenerate_id(false);
        
        $new_session = session_id();
        session_write_close();
        
        session_id($new_session);
        
		session_start();
		$new_id = session_id();
    	echo "old session: $old_id<br />";
    	echo "new session: $new_id<br />";
        break;
}
?>