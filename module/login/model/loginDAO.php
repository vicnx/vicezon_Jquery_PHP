<?php
    $path = $_SERVER['DOCUMENT_ROOT'] . '/vicezon/';
    include_once($path . "model/ConnectionBD.php");

    function findUsername($username){
        // $conn = new connection();        
        // $sql="SELECT nombre FROM Tablets WHERE nombre= :nombre";
        // $result=$conn->prepare($sql);//prepara la query con la connexion
        // //echo $sql;
        // $result->bindParam(':nombre', $nombre);//cambia el parametro por la variable
        // $result->execute();//ejecuta la query
        // //var_dump($result);
        // $rows=$result->rowCount(); //cuenta las filas que ha sacado
        // $conn=null;
        // //echo $rows;
        // if ($rows>0){
            // return true;
        // }else{
            return false;
        // }
    }
?>