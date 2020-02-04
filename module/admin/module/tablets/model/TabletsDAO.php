<?php
    $path = $_SERVER['DOCUMENT_ROOT'] . '/vicezon/';
    include_once($path . "model/ConnectionBD.php");
class TabletsDAO{
    function save($data){
        $conn= new connection();
        //echo "dentro funcion save";
        $colores="";
        $nombre=$data['nombre'];
        $price=$data['price'];
        $marca=$data['marca'];
        $fpublic=$data['fpublic'];
        foreach ($data["colores"] as $color){
            $colores=$colores."$color:";

        }
        $sim=$data['sim'];
        $rating=$data['rating'];
        $sql="INSERT INTO Tablets (nombre, price, marca, fpublic, colores, sim, rating)
        VALUES ('$nombre','$price','$marca','$fpublic','$colores' ,'$sim','0')";
        $res=$conn->exec($sql);
        $conn = null;
        return $res;
    }
    function select_all_tablets2(){ //PARA EL LIST MANUAL
        global $total_pages;
        global $total_rows;
        global $adjacents;
        global $pages;
        global $limit;
        global $offset;
        $conn = new connection();
        $limit =5;
        $adjacents =2;
        $sql1 = "SELECT * FROM Tablets ORDER BY idproduct ASC";
        $query1 = $conn->query($sql1);
        $total_rows= $query1->rowCount();
        $total_pages=ceil($total_rows/$limit);

        if(isset($_GET['pages']) && $_GET['pages'] !=""){
            $pages = $_GET['pages'];
            $offset = $limit * ($pages-1);
        }else{
            $pages =1;
            $offset =0;
        }
        $sql2 = "SELECT * FROM Tablets LIMIT $offset,$limit";
        $query2 = $conn->query($sql2);
        $conn =null;
        // $result=$query->fetchAll(PDO::FETCH_OBJ);
        // foreach ($conn->query($sql) as $row){
        //     print $row['idproduct']."\t";
        //     print $row['nombre']."\t";
        // }
        return $query2;
    }
    function select_all_tablets(){ //USE IN LIST DATATABLES FULL
        $conn = new connection();
        $sql = "SELECT * FROM Tablets ORDER BY idproduct ASC";
        $query = $conn->query($sql);
        $conn =null;
        // $result=$query->fetchAll(PDO::FETCH_OBJ);
        // foreach ($conn->query($sql) as $row){
        //     print $row['idproduct']."\t";
        //     print $row['nombre']."\t";
        // }
        return $query;
    }

    function select_one_tablet($idproduct){
        $sql = "SELECT * FROM Tablets WHERE idproduct='$idproduct'";
        $conn = new connection;
        //Para recojer los datos de ese objeto
        $query = $conn->query($sql)->fetchObject();
        $conn=null;
        return $query;
    }

    function delete_tablet($idproduct){
        $sql="DELETE FROM Tablets WHERE idproduct='$idproduct'";
        $conn = new connection;
        $query = $conn->query($sql)->fetchObject();
        $conn=null;
        return $query;
    }
    function deleteall(){
        $sql="Truncate Tablets";
        $conn = new connection;
        $query = $conn->query($sql)->fetchObject();
        $conn=null;
        return $query;
    }
    function select_id_tablet_by_nombre($nombre){
        $conn = new connection();
        $sql = "SELECT idproduct FROM Tablets where nombre='$nombre'";
        $query = $conn->query($sql);
        $conn =null;
        foreach($query as $row){//realizamos un foreach para guardar la columna idproduct y hacer el return
            $idtablet = $row['idproduct'];
        }
        return $idtablet;
    }
    function update_tablet($data){
        $conn= new connection();
        $idproduct=$_GET['id'];
        $nombre=$data['nombre'];
        $price=$data['price'];
        $marca=$data['marca'];
        $fpublic=$data['fpublic'];
        $colores="";
        foreach ($data["colores"] as $color){
            $colores=$colores."$color:";

        }
        $sim=$data['sim'];
        $sql = "UPDATE Tablets SET nombre='$nombre', price='$price', marca='$marca',fpublic='$fpublic',colores='$colores',sim='$sim' WHERE idproduct='$idproduct'";
        $query=$conn->prepare($sql);
        $query->execute();
        $conn = null;
        return $query;
    }
}
    function FindNameTablet($nombre){
        $conn = new connection();        
        $sql="SELECT nombre FROM Tablets WHERE nombre= :nombre";
        $result=$conn->prepare($sql);//prepara la query con la connexion
        //echo $sql;
        $result->bindParam(':nombre', $nombre);//cambia el parametro por la variable
        $result->execute();//ejecuta la query
        //var_dump($result);
        $rows=$result->rowCount(); //cuenta las filas que ha sacado
        $conn=null;
        //echo $rows;
        if ($rows>0){
            return true;
        }else{
            return false;
        }
    }
    function selectbrandbyid($idbrand){
        $conn = new connection();
        $sql = "SELECT namebrand FROM brands where idbrand='$idbrand'";
        $query = $conn->query($sql);
        $conn =null;
        foreach($query as $row){
            $brand = $row["namebrand"];
        }
        return $brand;
    }
    function selectbrands(){
        $conn = new connection();
        $sql = "SELECT * FROM brands";
        $query = $conn->query($sql)->fetchAll();
        $conn =null;
        return $query;
    }
    function savebrand($namebrand){
        $conn= new connection();
        $sql="INSERT INTO brands (namebrand) VALUES ('$namebrand')";
        $res=$conn->exec($sql);
        $conn = null;
        return $res;
    }

?>