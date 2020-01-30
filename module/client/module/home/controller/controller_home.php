<?php
$path = $_SERVER['DOCUMENT_ROOT'] . '/vicezon/';
include($path . "module/client/module/home/model/homeDAO.php");
switch($_GET['op']){
    case 'toptablets':
        $query=toptablets();
        echo json_encode($query);
        exit;
        break;
    case 'changerank':
        $rank=changerank();
        echo json_encode("success");
        break;
}
?>