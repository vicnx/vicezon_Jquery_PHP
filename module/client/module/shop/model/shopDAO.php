<?php
$path = $_SERVER['DOCUMENT_ROOT'] . '/vicezon/';
include($path . "model/ConnectionBD.php");

function select_all_tablets_shop(){ //USE IN LIST DATATABLES FULL
    $conn = new connection();
    $sql = "SELECT * FROM Tablets ORDER BY nombre ASC";
    $query = $conn->query($sql)->fetchAll();
    $conn =null;
    return $query;
}
function select_by_brand($checks){
    $conn = new connection();
    $sql = "SELECT * FROM Tablets $checks";
    $query = $conn->query($sql)->fetchAll();
    $conn =null;
    return $query;
}
function select_one_product($id){
    $conn = new connection();
    $sql = "SELECT * FROM Tablets Where idproduct=$id";
    $query = $conn->query($sql)->fetchAll();
    $conn =null;
    return $query;
}
function selectbrands(){
    $conn = new connection();
    $sql = "SELECT * FROM brands limit 6";
    $query = $conn->query($sql)->fetchAll();
    $conn =null;
    return $query;
}
function select_all_brands(){
    $conn = new connection();
    $sql = "SELECT * FROM brands";
    $query = $conn->query($sql)->fetchAll();
    $conn =null;
    return $query;
}
function select_products_order($sentencia,$page){
    if($page == "null"){
        $sql = "SELECT * FROM Tablets $sentencia";
    }else{
        $sql = "SELECT * FROM Tablets $sentencia LIMIT 5 OFFSET $page";
    }
    $conn = new connection();
    $query = $conn->query($sql)->fetchAll();
    $conn =null;
    return $query;
}

function busqueda_nada_null($sentencia){
    $conn = new connection();
    $sql = "SELECT * FROM Tablets $sentencia";
    $query = $conn->query($sql)->fetchAll();
    $conn =null;
    return $query;
}
function addview_product($idproduct){
    $conn = new connection();
    $sql="UPDATE Tablets SET views=views+1 WHERE idproduct=$idproduct";
    $query = $conn->query($sql);
    $conn = null;
    return $query;
}
function addview_brand($idproduct){
    $conn = new connection();
    $sql="Update brands b
    inner join Tablets t
    on marca=idbrand
    Set b.views=b.views+1
    where idproduct = $idproduct";
    $query = $conn->query($sql);
    $conn = null;
    return $query;
}

function pagination($page){
    $conn = new connection();
    $sql = "SELECT * FROM Tablets ORDER BY nombre ASC LIMIT $page,5";
    $query = $conn->query($sql)->fetchAll();
    $conn =null;
    return $query;
}

function do_like($idproduct,$username){
    $sql = "INSERT INTO likes (username,idproduct) values ('$username','$idproduct')";
    $conn = new connection();
    $query = $conn->query($sql);
    $conn = null;
    return $query;
}

function check_likes($username){
    $conn = new connection();
    $sql = "SELECT * FROM likes where username='$username'";
    $query = $conn->query($sql)->fetchAll();
    $conn =null;
    return $query;
}
function check_like_click($username,$idproduct){
    $conn = new connection();        
    $sql="SELECT * FROM likes WHERE username='$username' and idproduct='$idproduct'";
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
function delete_like($username,$idproduct){
    $sql = "DELETE FROM likes where username='$username' and idproduct='$idproduct'";
    $conn = new connection();
    $query = $conn->query($sql);
    $conn = null;
    return $query;
}
?>