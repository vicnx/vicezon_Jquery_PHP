<?php
$path = $_SERVER['DOCUMENT_ROOT'] . '/vicezon/';
include($path . "model/ConnectionBD.php");

function select_all_tablets_shop(){ //USE IN LIST DATATABLES FULL
    $conn = new connection();
    $sql = "SELECT * FROM Tablets ORDER BY idproduct ASC";
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
?>