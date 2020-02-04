<?php
$path = $_SERVER['DOCUMENT_ROOT'] . '/vicezon/';
include($path . "model/ConnectionBD.php");

function toptablets(){
    $conn = new connection();
    $sql="SELECT * FROM Tablets ORDER BY rating DESC LIMIT 10";
    $query = $conn->query($sql);
    $conn = null;
    return $query->fetchAll(PDO::FETCH_OBJ);
}
function selectbrands_card(){
    $conn = new connection();
    $sql = "SELECT * FROM brands limit 6";
    $query = $conn->query($sql)->fetchAll();
    $conn =null;
    return $query;
}

function changerank(){
    $conn = new connection();
    $sql="UPDATE loginusers SET rankuser='admin' WHERE iduser=1";
    $query = $conn->query($sql);
    $conn = null;
    return $query;
}
?>