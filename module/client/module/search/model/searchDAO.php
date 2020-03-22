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
    function automplete($brand,$valor){
        if($brand == null){
            $sql = "SELECT * FROM Tablets where nombre LIKE '%$valor%' LIMIT 5";
        }else{
            $sql = "SELECT * FROM Tablets where nombre LIKE '%$valor%' AND marca=$brand LIMIT 5";
        }
        $conn = new connection();
        $query = $conn->query($sql)->fetchAll();
        $conn =null;
        return $query;
    }
}

?>