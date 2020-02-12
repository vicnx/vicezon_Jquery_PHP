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
function select_by_brand($id){
    $conn = new connection();
    $sql = "SELECT * FROM Tablets Where marca=$id";
    $query = $conn->query($sql)->fetchAll();
    $conn =null;
    return $query;
}
?>