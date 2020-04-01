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
?>