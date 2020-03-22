<?php
    $path = $_SERVER['DOCUMENT_ROOT'] . '/vicezon/';
    include_once($path . "model/ConnectionBD.php");
class loginDAO{
    function create_user(){
        $username= $_POST['username_register'];
        $first_name= $_POST['first_name_register'];
        $last_name= $_POST['last_name_register'];
        $email= $_POST['email_register'];
        $passwordd= $_POST['password_register'];
        $password_encrypt= password_hash($passwordd, PASSWORD_DEFAULT);
        $typee="client";
        $hashavatar = md5 (strtolower(trim($email)));
        $avatar="https://www.gravatar.com/avatar/$hashavatar?s=40&d=identicon";
        $conn= new connection();
        $sql="INSERT INTO users (username, first_name, last_name, email,password,type, avatar)
        VALUES ('$username','$first_name','$last_name','$email','$password_encrypt' ,'$typee','$avatar')";
        $res=$conn->exec($sql);
        $conn = null;
        return $res;
    }

    function login_select_password(){
        $username= $_POST['login_username'];
        $conn= new connection();
        $sql="SELECT * FROM users where username='$username'";
        $query = $conn->query($sql)->fetchObject();
        $conn=null;
        return $query;
    }
}
function findEmail($email){
    $conn = new connection();        
    $sql="SELECT email FROM users WHERE email='$email'";
    $result=$conn->prepare($sql);//prepara la query con la connexion
    // echo $sql;
    $result->execute();//ejecuta la query
    //var_dump($result);
    $rows=$result->rowCount(); //cuenta las filas que ha sacado
    $conn=null;
    //echo $rows;
    if ($rows>0){
        return true;
    }else{
        return false;
    }
}
function findUsername($username){
    $conn = new connection();        
    $sql="SELECT username FROM users WHERE username='$username'";
    $result=$conn->prepare($sql);//prepara la query con la connexion
    // echo $sql;
    $result->execute();//ejecuta la query
    //var_dump($result);
    $rows=$result->rowCount(); //cuenta las filas que ha sacado
    $conn=null;
    //echo $rows;
    if ($rows>0){
        return true;
    }else{
        return false;
    }
}

function check_bd_type($username,$type){
    $conn = new connection();        
    $sql="SELECT username FROM users WHERE username='$username' and type='$type'";
    $result=$conn->prepare($sql);//prepara la query con la connexion
    // echo $sql;
    $result->execute();//ejecuta la query
    //var_dump($result);
    $rows=$result->rowCount(); //cuenta las filas que ha sacado
    $conn=null;
    //echo $rows;
    if ($rows>0){
        return true;
    }else{
        return false;
    }
}
?>