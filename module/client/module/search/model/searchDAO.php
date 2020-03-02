<?php
$path = $_SERVER['DOCUMENT_ROOT'] . '/vicezon/';
include($path . "model/ConnectionBD.php");

class searchDAO{
    function readbrands(){
        $conn = new connection();
        $sql = "Select * from brands order by namebrand ASC";
        $query = $conn->query($sql)->fetchAll();
        $conn =null;
        return $query;
    }
}

?>