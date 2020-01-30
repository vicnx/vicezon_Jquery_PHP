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

function changerank(){
    $conn = new connection();
    $sql="UPDATE loginusers SET rankuser='admin' WHERE iduser=1";
    $query = $conn->query($sql);
    $conn = null;
    return $query;
}
?>