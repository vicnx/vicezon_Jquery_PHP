<?php
$path = $_SERVER['DOCUMENT_ROOT'] . '/vicezon/';
include($path . "model/ConnectionBD.php");

function select_user_data($username){
    $conn = new connection();
    $sql = "SELECT * FROM users Where username='$username'";
    $query = $conn->query($sql)->fetchObject();
    $conn =null;
    return $query;
}

function select_factura($username){
    $conn = new connection();
    $sql = "SELECT * FROM facturas Where username='$username'";
    $query = $conn->query($sql)->fetchAll();
    $conn =null;
    return $query;
}
function select_fact_lines($idfac){
    $conn = new connection();
    $sql = "SELECT * FROM factura_linea Where idfactura='$idfac'";
    $query = $conn->query($sql)->fetchAll();
    $conn =null;
    return $query;
}
function get_product($id){
    $conn = new connection();
    $sql = "SELECT * FROM Tablets Where idproduct in ($id) ORDER BY idproduct ASC";
    $query = $conn->query($sql)->fetchAll();
    $conn =null;
    return $query;
}

?>