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

?>