
    <?php 
    include_once('model/ConnectionBD.php');
    function readrank(){
        $conn= new connection;
        $sql="SELECT rankuser FROM loginusers WHERE iduser=1";
        $query = $conn->query($sql);
        $conn = null;
        return $query->fetchAll(PDO::FETCH_OBJ);
    }
    $user = readrank();
    $userrank=$user[0]->{'rankuser'};
    if($userrank=='admin'){
        include("module/admin/indexadmin.php");
    }else if($userrank=='client'){
        include("module/client/indexclient.php");

    }
    //pililes
    ?>
    

