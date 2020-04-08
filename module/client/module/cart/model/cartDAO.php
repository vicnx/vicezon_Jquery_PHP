<?php
$path = $_SERVER['DOCUMENT_ROOT'] . '/vicezon/';
include($path . "model/ConnectionBD.php");
function select_one_product($id){
    $conn = new connection();
    $sql = "SELECT * FROM Tablets Where idproduct in ($id)";
    $query = $conn->query($sql)->fetchAll();
    $conn =null;
    return $query;
}
function insert_cart($idproduct,$qty,$username){
    $conn= new connection();
    // $sql_check="SELECT * FROM cart WHERE username='$username' and idproduct ='$idproduct'";
    // $result_check=$conn->prepare($sql_check);//prepara la query con la connexion
    // $result_check->execute();//ejecuta la query
    // $rows=$result_check->rowCount(); //cuenta las filas que ha sacado
    // if ($rows>0){
    // $sql_delete="DELETE FROM cart where username='$username'";
    // $conn = new connection;
    // $query = $conn->query($sql_delete)->fetchObject();
    // }
    $sql_insert="INSERT INTO cart (username, idproduct, qty)
    VALUES ('$username','$idproduct','$qty')";
    $res=$conn->exec($sql_insert);
    $conn = null;
    return $res;
}
function only_delete_cart($username){
    $conn= new connection();
    $sql_delete="DELETE FROM cart where username='$username'";
    $conn = new connection;
    $query = $conn->query($sql_delete)->fetchObject();
    $conn = null;
    return $query;
}

function select_cart($username){
    $conn = new connection();
    $sql = "SELECT * FROM cart Where username='$username'";
    $query = $conn->query($sql)->fetchAll();
    $conn =null;
    return $query;
}
?>